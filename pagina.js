var http = require('http'); // incorporando a biblioteca/modulo do http

//Criar um servidor
var server = http.createServer(function(req, resp){
        resp.end("<html><body>Página de Teste</body></html>");

    });

// Server estára escutando a porta 3000
server.listen(3000);
