var express = require('express');
var path = require('path');
app = express();
app.use(express.static(path.join(__dirname,'../public/')));

app.use('/bower_components',  express.static(__dirname + '../public/bower_components'));


app.get('*', function(req,res){
	res.sendFile(path.join(__dirname,'../public/index.html'));
})


var server = app.listen(process.env.PORT || 8084, function() {
	console.log(process.env.port,"PORTT");
    var port = server.address().port

    console.log("Herena app listening at port", port)

})