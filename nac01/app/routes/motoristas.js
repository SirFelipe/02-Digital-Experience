var dbConnection = require('../config/dbConnection');

module.exports = function(application){
    var connection = dbConnection();
    application.get('/motoristas', function(req, resp){
        connection.query("SELECT * FROM tb_motorista", function(error, result){
            resp.render('motorista/motoristas', {motoristas : result});
        });
    });
};