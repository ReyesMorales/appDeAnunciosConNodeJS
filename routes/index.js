var express = require('express');
var router = express.Router();
const getAdvertsRouter = require('./getAdverts');
const createAdvertRouter = require('./createAdvert');
const getAdvertById = require('./getAdvertById');
const updateAdvert = require('./updateAdvert');
const deleteAdvert = require('./deleteAdvert');

const Anuncio = require('../models/Anuncio');

/* GET home page. */
router.use('/getadverts', getAdvertsRouter);
router.use('/createadvert', createAdvertRouter);
router.use('/getAdvertById', getAdvertById);
router.use('/updateAdvert', updateAdvert);
router.use('/deleteAdvert', deleteAdvert);


module.exports = router;