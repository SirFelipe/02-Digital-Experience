//var dbConnection = require('../config/dbConnection');
module.exports = function(application){
    application.get('/carros', function(req, resp){
        var connection = application.config.dbConnection();
        var carrosModel = application.app.models.carrosModel;
        carrosModel.getCarros(connection, function(error, result){
            resp.render('carro/carros', {carros : result});
        });
    });
}