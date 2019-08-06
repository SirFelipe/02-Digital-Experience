
// IMPORTANDO O EXPRESS
var express = require('express');

// INICIALIZANDO O EXPRESS
var app = express();

app.get('/', function(req, resp){
    resp.send("<html><body>Oi Oi Gente</body></html>");
});

app.get('/frutas', function(req,resp){
    resp.send("<html><body>Seção de frutas</body></html>");
})

app.get('/abobora', function(req,resp){
    resp.send("<html><body>Seção de aboboras</body></html>");
})

app.get('/tabuada', function(req, resp){
var mensagem = '<center><h2>Tabuada</h2>';

    for(var n=1; n < 11; n++){
        //console.log("Taboada do " + n);
        mensagem += '<hr> Tabuada do ' + n + '<br>';
        for(var i=1; i < 11; i++){
            var saida = i + ' x ' + n + ' = ' + (i*n) + '<br>';
            // console.log(i +"x"+ n + "=" + resultado);
            mensagem += saida;
        }
    }
    mensagem += '</hr>';
    mensagem += '</center>';
    resp.send("<html><body>" + mensagem + "</body></html>")
     
})

// PARAM: porta, função
app.listen(3000, function(){
    console.log('Servidor express ativo');
});