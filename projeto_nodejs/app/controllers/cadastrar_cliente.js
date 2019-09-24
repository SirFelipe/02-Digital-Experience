module.exports.formulario_cliente = function(app, req, res){
    res.render('admin/form_add_cliente', {validacao: {}, cliente: {}});
}

module.exports.add_cliente = function(app, req, res){
    var cliente = req.body;
    //res.send(cliente);
    //console.log(cliente) //DEBUG
  
    //Validação
    req.assert('nome', 'O campo nome é obrigatório').notEmpty();
    req.assert('sobrenome', 'O campo sobrenome é obrigatório.').notEmpty();
    req.assert('cep', 'O campo CEP é obrigatório.').notEmpty();
    req.assert('endereco', 'O campo endereço precisa ter entre 10 e 200 caracteres.').len(10,200)
    req.assert('cpf', 'O campo CPF precisa conter no mínimo 11 caracteres.').len(11)
    req.assert('rg', 'O campo RG precisa conter no mínimo 9 caracteres.').len(9)
  
    var erros = req.validationErrors();
    console.log(erros);
    if(erros){
      //console.log('caiu no if');
      res.render('admin/form_add_cliente', {validacao : erros, cliente: cliente} );
      return;
    }
    //CONEXAO
    //MODEL (DAO)
    //FUNCAO
    var connection = app.config.dbConnection();
    var ClientesDAO = new app.app.models.ClientesDAO(connection);
  
      ClientesDAO.salvarCliente(cliente, function(error, result){
            //res.render('produtos/produtos', {produtos: result });
            res.redirect('/clientes');
      });
  
  
}