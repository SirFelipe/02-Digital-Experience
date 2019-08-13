// MODULO CONTÉNDO TODAS AS CONFIGURAÇÕES DO SERVIDOR
// IMPORTANDO O EXPRESS
var express = require('express');
// INICIALIZANDO O EXPRESS
var app = express();
// ENGINE EJS
app.set('view engine', 'ejs');
app.set('views', './app/views');
module.exports = app;