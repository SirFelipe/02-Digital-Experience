
// IMPORTANDO O EXPRESS
var express = require('express');
// npm install express

// INICIALIZANDO O EXPRESS
var app = express();

// A Engine de View mudou, agora utilizaremos o EJS
// Para setar a configuração do NodeJS
// Utilizaremos:
app.set('view engine', 'ejs');

app.get('/', function(req, resp){
    resp.send("<html><body>Oi Oi Gente</body></html>");
});

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


app.get('/cerveja', function(req, resp){
    resp.render('secao/cerveja');
})

// app.get('/tabuada', function(req, resp){
// var mensagem = '<center><h2>Tabuada</h2>';

//     for(var n=1; n < 11; n++){
//         //console.log("Taboada do " + n);
//         mensagem += '<hr> Tabuada do ' + n + '<br>';
//         for(var i=1; i < 11; i++){
//             var saida = i + ' x ' + n + ' = ' + (i*n) + '<br>';
//             // console.log(i +"x"+ n + "=" + resultado);
//             mensagem += saida;
//         }
//     }
//     mensagem += '</hr>';
//     mensagem += '</center>';
//     resp.send("<html><body>" + mensagem + "</body></html>")
     
// })

// PARAM: porta, função
app.listen(3000, function(){
    console.log('Servidor express ativo');
});