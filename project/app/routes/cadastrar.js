module.exports = function(app){
    // ADD PRODUTO
    app.get('/cadastrar_produto', function(req, resp){
        resp.render('admin/form_add_produto');
    });
};