// CONFIG FILE
var app = require('./config/server.js');


// // Require da ROTA home
// var rotaHome = require('./app/routes/home.js');
// rotaHome(app);

// // Require da ROTA cadastro de produtos
// var rotaCadastrar = require('./app/routes/cadastrar.js');
// rotaCadastrar(app);

// // Require da ROTA de lista de produtos
// var rotaProdutos = require('./app/routes/produtos.js');
// rotaProdutos(app);

app.listen(3000, function(){
    console.log('Servidor express ativo.');
});