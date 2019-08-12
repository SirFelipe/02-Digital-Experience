var http = require('http'); // incorporando a biblioteca/modulo do http

//Criar um servidor
var server = http.createServer(function(req, resp){
        var categoria = req.url;

        if(categoria == "/cerveja"){
            resp.end("<html><body>Tudo sobre cervejas</body></html>");
        }else if(categoria == "/tecnologia"){
            resp.end("<html><body>Tudo sobre tecnologia</body></html>");
        }else{
            resp.end("<html><body>Outra página</body></html>");
        }
        
    });

// Server estára escutando a porta 3000
server.listen(3000);
