//var dbConnection = require('../config/dbConnection');
module.exports = function(application){
    application.get('/motos', function(req, resp){
        var connection = application.config.dbConnection();
        connection.query("SELECT * FROM TB_MOTO", function(error, result){
            resp.render('moto/motos', {motos : result});
        });
    });
};