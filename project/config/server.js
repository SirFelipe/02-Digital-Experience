// MODULO CONTÉNDO TODAS AS CONFIGURAÇÕES DO SERVIDOR
// IMPORTANDO O EXPRESS
var express = require('express');
//IMPORTANDO O CONSIGN
var consign = require('consign');


// INICIALIZANDO O EXPRESS
var app = express();

// ENGINE EJS
app.set('view engine', 'ejs');
app.set('views', './app/views');
// Incluindo todas as rotas automaticamente com o consign
consign().include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.into(app)
module.exports = app;