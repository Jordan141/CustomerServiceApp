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
        mongoDetails        = {"address": process.env.dbaddress, "user": process.env.dbuser, "password": process.env.dbpassword},
        seed                = require('./seed')
        
        
const   authRoutes = require('./routes/index'),
        supportRoutes = require('./routes/support')
        chatRoutes = require('./routes/chat')

mongoose.connect(mongoDetails.address.replace('<dbuser>', mongoDetails.user).replace('<dbpassword>', mongoDetails.password))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))
seed()

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
app.use('/support', supportRoutes)
app.use('/chat', chatRoutes)




const io = require('socket.io').listen(app.listen(port))



console.log('Listening on port: ' + port)