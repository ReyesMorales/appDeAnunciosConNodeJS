var express = require('express');
var router = express.Router();

router.put('/', function(req, res, next) {
    console.log('updateadvert')
});

module.exports = router;