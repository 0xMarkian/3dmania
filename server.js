var express = require('express')
var fs = require('fs')
var https = require('https')

var app = express()

app.use(express.static('build'))

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen(80, function() {console.log('Listening on port 80...')})
