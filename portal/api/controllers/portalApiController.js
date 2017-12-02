'use strict';

var formidable = require('formidable');
var fs = require('fs');
var path = require('path');

var baseDir = require('../../app').basePath;
var dirHelper = require('../modules/DirectoryHelper');

exports.home = function(req, res) {
    res.sendFile(path.join(baseDir, 'views/index.html'));
}

exports.upload = function(req, res) {

    var form = new formidable.IncomingForm();
    form.multiples = false;
    form.uploadDir = dirHelper.makeDir(path.join(baseDir, '/uploads'));

    form.on('file', function(field, file) {
        fs.rename(file.path, path.join(form.uploadDir, file.name));
    });

    form.on('error', function(err) {
        console.log('An error has occured: \n' + err);
    });

    form.on('end', function() {
        res.end('success');
    });

    form.parse(req);
};