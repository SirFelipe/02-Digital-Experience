// MODULO CONTÉNDO TODAS AS CONFIGURAÇÕES DO SERVIDOR
// IMPORTANDO O EXPRESS
var express = require('express');
//IMPORTANDO O CONSIGN
var consign = require('consign');
//IMPORTANDO O BODY-PARSER
var bodyParser = require('body-parser');


// INICIALIZANDO O EXPRESS
var app = express();
// ENGINE EJS
app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(bodyParser.json());
// Incluindo todas as rotas automaticamente com o consign
consign().include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.into(app)
module.exports = app;