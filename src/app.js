const app = require('express')()
const port = process.env.PORT || 3000

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')
app.engine('pug', require('pug').__express)

app.get('/', function(req,res){
    res.render('temp')
})

const io = require('socket.io').listen(app.listen(port))

io.on('connection', function(socket){
    socket.emit('message', {message: 'Welcome to the chat!'})
    socket.on('send', function(data){
        io.sockets.emit('message', data)
    })
})


console.log('Listening on port: ' + port)