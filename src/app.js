const express = require('express'),
app = express(),
port = process.env.PORT || 3000


app.set('views', __dirname + '/views')
app.set('view engine', 'pug')
app.engine('pug', require('pug').__express)

app.get('/', function(req,res){
    res.render('temp')
})

app.listen(port)

console.log('Listening on port: ' + port)