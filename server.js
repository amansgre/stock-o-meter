// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================

app.use(bodyParser.json());
app.use('/api/stocks',require('./controllers/api/Stocks'))
app.use(require('./controllers/static'))

app.listen(3000, function () {
  console.log('Server listening on', 3000)
})

exports = module.exports = app;
