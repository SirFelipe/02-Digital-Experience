module.exports = function(){
    this.getProdutos = function(connection, callback){
        connection.query('SELECT * FROM tb_produto', callback);
    };
    this.getNmProduto = function(connection , callback){
        connection.query('SELECT nm_produto, ds_produto FROM tb_produto', callback);
    };

    this.salvarProduto = function(produto, connection, callback){
        connection.query("INSERT INTO TB_PRODUTO SET ?", produto, callback);
    }
    return this;
}