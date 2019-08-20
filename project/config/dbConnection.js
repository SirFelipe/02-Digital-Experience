var mysql = require('mysql');
var connectionMySQL = function(){
    console.log('Conexão estabelecida');
        
    var connection = mysql.createConnection({
            port: '3306',
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'sistema_produto'
        }
    );

    return connection;
}
module.exports = function(){
    return connectionMySQL;
}
