var mysql = require('mysql');
var connectionMySQL = function(){
    var connection = mysql.createConnection({
            port: '3306',
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'sistema_produto'
        }
    );
    console.log('Conexão estabelecida');

    return connection;
}
module.exports = function(){
    console.log('O autoload do Consign carregou apenas o módulo de conexão');
    return connectionMySQL;
}
