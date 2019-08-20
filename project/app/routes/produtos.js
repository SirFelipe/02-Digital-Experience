var dbConnection = require('../../config/dbConnection')
module.exports = function(app){
    var connection = dbConnection();
    app.get('/produtos', function(req, resp){
        connection.query('SELECT * FROM tb_produto', function(error, result){
            //console.log(result);
            //console.log(error);
            //resp.send(result);
            resp.render('produtos/produtos', {produto : result});
        });

    });
}
