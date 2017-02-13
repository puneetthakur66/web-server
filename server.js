var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('Private Route Hit');
		next();
	},
	logger: function (req, res, next) {
		var date = new Date().toString();
		console.log(req.method + " " + req.originalUrl + " on: " + date);
		next();
	}
};

app.use(middleware.logger);

app.get('/about', function (req, res) {
	res.send('This is about us PAGE !');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started on port' + PORT);
});

