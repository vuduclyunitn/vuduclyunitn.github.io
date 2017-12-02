'use strict';

module.exports = function(app) {
    var portalApis = require('../controllers/portalApiController');

    app.route('/')
        .get(portalApis.home);

    app.route('/upload')
        .post(portalApis.upload);
};