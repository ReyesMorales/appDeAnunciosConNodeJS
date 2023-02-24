const mongoose = require('mongoose');

//definir esquema de anuncio
const anuncioSchema = mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    tipo: { type: String, required: true },
    precio: { type: Number, required: true },
    foto: { type: String, required: true },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }]
});

//crear modelo de anuncio
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

//exportar el modelo
module.exports = Anuncio;



