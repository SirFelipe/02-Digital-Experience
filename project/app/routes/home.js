
module.exports = function(app){
    // HOME
    app.get('/', function(req, resp){
        resp.render('home/home');
    }); 
};
