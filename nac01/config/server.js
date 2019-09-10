var express = require('express');
var application = express();
var consign = require('consign')
var bodyParser = require('body-parser')

application.set('view engine', 'ejs');
application.set('views', './app/views');
application.use(bodyParser.json());
consign().include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.into(application);

module.exports = application;