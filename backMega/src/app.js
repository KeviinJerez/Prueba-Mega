const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const { config } = require('dotenv')
config()

const newsRoutes = require('./routes/news.routes')
const journalistRoutes = require('./routes/journalist.routes')
const insertMultipleData = require('./data/data.notices')
const insertJournalist = require('./data/data.journalist')

const app = express()

app.use(cors({
  origin: 'http://localhost:5173' // Permite solicitudes desde el frontend
}))

app.use(bodyParser.json()) // PARSEBODY JSON

mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME })
  .then(async () => {
    console.log('MongoDB connected')
    try {
      await insertJournalist() // INSERTA LOS PERIODISTAS
      await insertMultipleData() // INSERTA LAS NOTICIAS
      console.log('Data inserted')
    } catch (error) {
      console.error('Error inserting data:', error)
    }
  })
  .catch(error => {
    console.error('MongoDB connection error:', error)
  })

const db = mongoose.connection

app.use('/journalist', journalistRoutes) // BUSCA LA RUTA DE LOS PERIODISTAS
app.use('/news', newsRoutes) // BUSCA LA RUTA DE LAS NOTICIAS

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
