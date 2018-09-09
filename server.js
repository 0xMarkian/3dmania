var express = require('express')
var app = express()

app.use(express.static('build'))

app.listen(80, function() {console.log('Listening on port 80...')})
