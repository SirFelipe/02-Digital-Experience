module.exports = function(){
    this.getProdutos = function(connection, callback){
        connection.query('SELECT * FROM tb_produto', callback);
    };
    this.getNmProduto = function(connection , callback){
        connection.query('SELECT nm_produto, ds_produto FROM tb_produto', callback);
    };
    return this;
}