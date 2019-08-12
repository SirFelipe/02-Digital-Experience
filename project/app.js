// IMPORTANDO O EXPRESS
var express = require('express');

// INICIALIZANDO O EXPRESS
var app = express();

// ENGINE EJS
app.set('view engine', 'ejs');

// HOME
app.get('/', function(req, resp){
    resp.render('home/home');
})

app.get('/produtos', function(req, resp){
    resp.render('produtos/lista');
})

// ADD PRODUTO
app.get('/adicionar_produto', function(req, resp){
    resp.render('admin/form_add_produto');
});

app.listen(3000, function(){
    console.log('Servidor express ativo.');
});