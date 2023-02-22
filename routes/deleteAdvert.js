var express = require('express');
var router = express.Router();

router.delete('/', function(req, res, next) {
    console.log('888advert')
});

module.exports = router;
