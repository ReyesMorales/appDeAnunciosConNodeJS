var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    console.log(id);
});

module.exports = router;
