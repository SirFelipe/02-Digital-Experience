module.exports.cadastrar_produto = function(app, req, res){
    res.render('admin/form_add_produto', {validacao : {}, produto: {}});
}

module.exports.add_produto = function(app, req, res){
    var produto = req.body;
    //res.send(produto);
    //res.send('Chegou na Página!!!');
    console.log(produto['nome'])
    req.assert('nome', 'Nome é obrigatório').notEmpty();
    req.assert('descricao', 'Descrição é obrigatório').notEmpty();
  
    var erros = req.validationErrors();
  
    console.log(erros);
    if(erros){
      //console.log('caiu no if');
      res.render('admin/form_add_produto', {validacao : erros, produto: produto} );
      return;
    }
  
  
    //CONEXAO
    //MODEL
    //FUNCAO
    var connection = app.config.dbConnection();
    var produtosModel = new app.app.models.ProdutosDAO(connection);
  
      produtosModel.salvarProduto(produto, function(error, result){
            //res.render('produtos/produtos', {produtos: result });
            res.redirect('/produtos');
      });
}