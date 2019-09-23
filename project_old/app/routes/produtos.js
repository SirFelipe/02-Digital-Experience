//var dbConnection = require('../../config/dbConnection');
module.exports = function(app){
    //var connection = dbConnection();
    app.get('/produtos', function(req, resp){
        var connection = app.config.dbConnection();
        var produtosModel = app.app.models.produtosModel;
        
        produtosModel.getProdutos(connection, function(error, result){
            //console.log(result);
            //console.log(error);
            //resp.send(result);
            resp.render('produtos/produtos', {produto : result});
        });

    });
}
