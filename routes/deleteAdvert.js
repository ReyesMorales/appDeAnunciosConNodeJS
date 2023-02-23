var express = require('express');
var router = express.Router();
var Anuncio = require('../models/Anuncio');

router.delete('/:id', async (req, res, next) => {
    try {
  
      const id = req.params.id;
  
      await Anuncio.deleteOne({ _id: id });
  
      res.json();
  
    } catch (error) {
      next(error);
    }
  });
  


module.exports = router;
