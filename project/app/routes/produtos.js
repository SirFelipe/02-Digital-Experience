module.exports = function(app){
    app.get('/produtos', function(req, resp){
        var mysql = require('mysql');
        
        var connection = mysql.createConnection({
                port: '3306',
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'sistema_produto'
            }
        );

        connection.query('SELECT * FROM tb_produto', function(error, result){
            console.log(result);
            console.log(error);
            resp.send(result);
        });


        //resp.render('produtos/lista');
    });
}
