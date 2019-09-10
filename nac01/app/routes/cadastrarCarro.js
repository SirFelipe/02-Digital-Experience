module.exports = function(app){
    // ADD CARRO
    app.get('/cadastrar_carro', function(req, resp){
        resp.render('carro/add_carro');
    });

    app.post('/carros/salvar', function(req, resp){
        var carro = req.body;
        // Conexão
        var connection = app.config.dbConnection();
        // Model
        var carrosModel = app.app.models.carrosModel
        // Função salvarCarro
        carrosModel.salvarCarro(carro, connection, function(error, result){
            resp.redirect('/carros');
        });
    });
}