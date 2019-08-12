
// IMPORTANDO O EXPRESS
var express = require('express');
// npm install express

// INICIALIZANDO O EXPRESS
var app = express();

// A Engine de View mudou, agora utilizaremos o EJS
// Para setar a configuração do NodeJS
// Utilizaremos:
app.set('view engine', 'ejs');

app.get('/media', function(req,resp){
    var mensagem = '<center><h2>Desafio Média</h2>';
    //MÉDIA (NAC, AM, PS)
    var percNac = 0.2;
    var percAm = 0.3;
    var percPs = 0.5;
    var nac = req.query.nac;
    var am = req.query.am;
    var ps = req.query.ps;
    var media = (nac*percNac) + (am*percAm) + (ps*percPs);
    var arredonda = (Math.round(media*100)/100)
    mensagem += 'Sua média é: ' + media;
    mensagem += '</center>'
    resp.send(mensagem);
})

//Brincando de renderizar com EJS
app.get('/vingadores', function(req, resp){
    resp.render('sections/vingadores');
});

// PARAM: porta, função
app.listen(3000, function(){
    console.log('Servidor express ativo');
});