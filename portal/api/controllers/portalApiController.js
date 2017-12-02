'use strict';

var formidable = require('formidable');
var fs = require('fs');

exports.uploadFile = function (req, res) {

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldPath = files.filetoupload.path;
        var newPath = 'C:/test/' + files.filetoupload.name;

        fs.rename(oldPath, newPath, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
        });
    });
};