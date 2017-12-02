'use strict';

module.exports = function (app) {
    var portalApis = require('../controllers/portalApiController');

    app.route('/uploadFile')
        .post(portalApis.uploadFile);
};