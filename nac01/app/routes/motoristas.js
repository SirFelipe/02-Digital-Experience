module.exports = function(application){
    application.get('/motoristas', function(req, resp){
        var connection = application.config.dbConnection();
        connection.query("SELECT * FROM tb_motorista", function(error, result){
            resp.render('motorista/motoristas', { motoristas : result });
        });
    });
};