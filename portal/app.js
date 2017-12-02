var express = require('express');
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

exports.basePath = __dirname;

var routes = require('./api/routes/portalApiRoutes');
routes(app);

var server = app.listen(3000, function() {
    console.log('Server listening on port 3000');
});