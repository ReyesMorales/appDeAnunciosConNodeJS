const mongoose = require('mongoose');

//definir esquema de anuncio
const anuncioSchema =  mongoose.Schema({
    titulo: String,
    descripcion: String,
    tipo: String,
    precio: Number,
    foto: String,
    tags: [String]
});

//crear modelo de anuncio
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

//exportar el modelo
module.exports = Anuncio;

