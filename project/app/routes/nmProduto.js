module.exports = function(app){
    app.get('/nm_produto', function(req, resp){
        var connection = app.config.dbConnection();
        var nmProdutosModel = app.app.models.produtosModel;

        nmProdutosModel.getNmProduto(connection, function(error, result){
            resp.render('produtos/nm_produto', {produto : result});
        });

    });
}