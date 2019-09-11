module.exports = function(){
    this.getCarros = function(connection, callback){
        connection.query("SELECT * FROM TB_CARRO", callback);
    };

    this.salvarCarro = function(carro, connection, callback){
        connection.query("INSERT INTO tb_carro SET ? ", carro, callback);
    }

    return this;
}