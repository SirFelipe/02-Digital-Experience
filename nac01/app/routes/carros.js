var dbConnection = require('../config/dbConnection');

module.exports = function(application){
    var connection = dbConnection();
    application.get('/carros', function(req, resp){
        connection.query("SELECT * FROM TB_CARRO", function(error, result){
            resp.render('carro/carros', {carros : result});
        });
    });
}