module.exports = function(application){
    application.post('/', function(req, res){
        res.render("chat");
    });
}

module.exports = function(application){
    application.get('/', function(req, res){
        res.render("chat");
    });
}