const   express             = require('express'),
        app                 = express(),
        port                = process.env.PORT || 3000,
        bodyParser          = require('body-parser'),
        ejs                 = require('ejs'),
        flash               = require('connect-flash'),
        passport            = require('passport'),
        LocalStrategy       = require('passport-local'),
        methodOverride      = require('method-override'),
        cookieParser        = require("cookie-parser"),
        mongoose            = require('mongoose'),
        User                = require('./models/user'),
        {test}              = require('../config')
        
        
const   authRoutes = require('./routes/index'),
        chatRoutes = require('./routes/chat')

mongoose.connect(test.dbaddress.replace('<dbuser>', test.dbuser).replace('<dbpassword>', test.dbpassword))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))


//PASSPORT CONFIGURATION
app.use(require('express-session')({
    //Change this key for your project
    secret:'fakekeyforgithubrepo',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))
app.use(cookieParser('secret'))
app.use(flash())

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use((req,res,next) => {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash('error')
    res.locals.success = req.flash('success')
    next()
    }
)

app.use('/', authRoutes)
app.use('/chat', chatRoutes)




const io = require('socket.io').listen(app.listen(port))

io.on('connection', function(socket){
    const fakeData = [
           { name: 'Jerry', message: 'Hello!'},
           { name: 'Brian', message: 'C++'},
           { name: 'Chris', message: 'Sasdasdas'},
           { name: 'Andy', message: '!!!!!!!!!!!!!!!!'}
    ]
    
    socket.emit('message', fakeData)
    
    socket.on('my other event', function(data){
        console.log(data);
    })
    socket.on('send', function(data){
        console.log(data)
        io.sockets.emit('message', data)
    })
})


console.log('Listening on port: ' + port)