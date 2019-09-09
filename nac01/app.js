var application = require('./app/config/server')

application.get('/', function(req, res){
    res.send('Bem vindo ao novo sistema do Detran');
})

application.listen(1000, function(){
    console.log("Servidor rodando com express!");
})