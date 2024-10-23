const mongoose = require('mongoose')

// CREAR MODELO PARA LA BD
const jornalistSchema = new mongoose.Schema({
  // NO SE INGRESA UN  ID, DADO QUE MONGODB CREA UNO AUTOMATICAMENTE
  name: {
    type: String,
    required: true
  },
  rut: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Jornalist', jornalistSchema)
