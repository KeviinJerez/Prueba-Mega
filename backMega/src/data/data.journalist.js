const Jornalista = require('../models/journalist.model')
// INSERCION DE DATOS DE NOTICIAS EN LA BD
const insertJournalist = async () => {
  const newsArray = [
    {
      name: 'Kevin Jerez',
      rut: '20.669.110-7',
      email: 'jerez.kevin@gmail.com',
      dateCreated: new Date()
    },
    {
      name: 'Juan Ramirez',
      rut: '12.345.678-9',
      email: 'ramirez.juan@gmail.com',
      dateCreated: new Date()
    }
  ]

  try {
    // VERIFICA SI EXISTEN NOTICIAS DUPLICADAS CON EL MISMO RUT
    const existingJournalist = await Jornalista.find({ rut: { $in: newsArray.map(news => news.rut) } })
    if (existingJournalist.length > 0) {
      console.log('Los datos de Periodistas ya existen en la base de datos, no se realizará la inserción.')
      return
    }
    const savedJournalist = await Jornalista.insertMany(newsArray)
    console.log('Periodistas guardados:', savedJournalist)
  } catch (error) {
    console.error('Error al guardar los periodistas:', error)
  }
}

module.exports = insertJournalist
