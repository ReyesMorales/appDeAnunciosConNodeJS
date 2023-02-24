const mongoose = require('mongoose');
const Anuncio = require('./models/Anuncio');
const Tag = require('./models/Tag');
const anunciosJson = require('./anuncios.json');
const dbUrl = 'mongodb://localhost:27017/nodepop';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
.then(async () => {
  console.log('Conexión a la base de datos establecida');

  // Borramos los documentos existentes en la colección de anuncios
  await Anuncio.deleteMany({});

  console.log('Documentos eliminnuncioos con éxito');

  // Asignamos los tags existentes a los anuncios y los insertamos en la base de datos
  const anunciosConTags = anunciosJson.map(async anuncio => {
    const tagIds = await Tag.find({ nombre: { $in: anuncio.tags } }).distinct('_id');
    return { ...anuncio, tags: tagIds };
  });

  await Promise.all(anunciosConTags).then(async results => {
    await Anuncio.insertMany(results);
    console.log('Anuncios creados con éxito');
  });

  // Cerramos la conexión a la base de datos
  mongoose.connection.close();
})
.catch(error => console.log(`Error al conectar con la base de datos: ${error}`));
