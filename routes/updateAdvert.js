var express = require('express');
var router = express.Router();
var Anuncio = require('../models/Anuncio');

router.put('/:id', async (req, res, next) => {
    try {

        const id = req.params.id;
        const data = req.body;

        const anuncioActualizado = await Anuncio.findByIdAndUpdate(id, data, {
            new: true // esto hace que nos devuelva el documento actualizado
        });

        res.json({ result: anuncioActualizado });

    } catch (error) {
        next(error);
    }
});



module.exports = router;