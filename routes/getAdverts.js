var express = require('express');
var router = express.Router();
var Anuncio = require('../models/Anuncio');

router.get('/', async (req, res, next) => {
    try {
        const anuncios = await Anuncio.find();
        res.json(anuncios);
        console.log('funciona')
    } catch (error) {
        next(error)
    }
});

module.exports = router;

