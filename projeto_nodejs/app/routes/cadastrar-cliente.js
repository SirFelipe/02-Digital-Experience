module.exports = function(app){

app.get('/cadastrar-cliente', function(req, res){
  res.render('admin/form_add_cliente', {validacao: {}, cliente: {}});
});

app.post('/clientes/salvar', function(req, res){
  var cliente = req.body;
  //res.send(cliente);

  //console.log(cliente) //DEBUG

  //Validação NotEmpty
  req.assert('nome', 'O campo nome é obrigatório').notEmpty();
  req.assert('sobrenome', 'O campo sobrenome é obrigatório').notEmpty();
  req.assert('cep', 'O campo CEP é obrigatório').notEmpty();
  //Validação 
  req.assert('endereco', 'O campo endereço é obrigatório').len(10,200)
  req.assert('cpf', 'O campo CPF é obrigatório').len(11)
  req.assert('rg', 'O campo RG é obrigatório').len(9)

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


});

}
