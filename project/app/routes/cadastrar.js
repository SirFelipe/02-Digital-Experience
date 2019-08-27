module.exports = function(app){
    // ADD PRODUTO
    app.get('/cadastrar_produto', function(req, resp){
        resp.render('admin/form_add_produto');
    });

    app.post('/produtos/salvar', function(req, resp){
        var produto = req.body;
        
        // Conexão
        var connection = app.config.dbConnection();
        // Model
        var produtosModel = app.app.models.produtosModel;
        // Função salvarProduto
        produtosModel.salvarProduto(produto, connection, function(error, result){
            // resp.render("produtos/produtos", {produto : result});
            resp.redirect('/produtos');
        });
    });

};