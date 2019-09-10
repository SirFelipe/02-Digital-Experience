var mysql = require('mysql');

var connectionMySQL = function(){
    var connection = mysql.createConnection({
            port: '3306',
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'dbnac'
    });
    console.log('Conexão com o banco de dados estabelecida.');
    return connection;
}

module.exports = function(){
    return connectionMySQL;
}