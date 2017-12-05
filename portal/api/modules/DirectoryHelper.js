'use strict';

var fs = require('fs');
var path = require('path');
var crypto = require('crypto');

exports.makeDir = function(uploadDir) {
    var newDir = path.join(uploadDir, getContainerFolder());
    makeDirIfNotExist(uploadDir);
    makeDirIfNotExist(newDir);
    return newDir;
};

var makeDirIfNotExist = function(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
};

var getContainerFolder = function() {
    return createHash();
};

var createHash = function() {
    var currentDate = (new Date()).valueOf().toString();
    var random = Math.random().toString();
    return crypto.createHash('sha1').update(currentDate + random).digest('hex');
};