module.exports.index = function(app, req, res){
    var connection = app.config.dbConnection();
    var produtosModel = new app.app.models.ProdutosDAO(connection);

    produtosModel.getCincoProdutos(function(error, result){
        res.render('home/index', { produtos: result });
    });
}