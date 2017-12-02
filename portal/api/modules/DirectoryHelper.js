'use strict';

var fs = require('fs');
var path = require('path');

exports.makeDir = function(uploadDir) {
    var newDir = path.join(uploadDir, newFolder());
    if (!fs.existsSync(newDir)) {
        fs.mkdirSync(newDir);
    }
    return newDir;
};

var newFolder = function() {
    var date = new Date();
    return date.getTime() + '_' + randomString();
};

var randomString = function(length) {
    if (Number.isInteger(length) && length > 0) {
        return Math.random().toString(36).substring(length);
    }
    return Math.random().toString(36).substring(5);
};