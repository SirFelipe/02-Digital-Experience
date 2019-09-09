var dbConnection = require('../config/dbConnection');

module.exports = function(application){
    var connection = dbConnection();
    application.get('/motos', function(req, resp){
        connection.query("SELECT * FROM TB_MOTO", function(error, result){
            resp.render('moto/motos', {motos : result});
        });
    });
};