const mongoose = require('mongoose')

// CREAR MODELO PARA LA BD
const newsSchema = new mongoose.Schema({
  // NO SE INGRESA UN  ID, DADO QUE MONGODB CREA UNO AUTOMATICAMENTE
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  journalistId: {
    type: mongoose.Schema.Types.ObjectId, // USA EL ID PARA HACER REFERENCIA AL PERIODISTA QUE ESCRIBIO LA NOTICIA
    ref: 'Journalist', // IDENTIFICADOR EN LA MODEL DE JORNALISTAS
    required: true
  }
})

module.exports = mongoose.model('News', newsSchema)
