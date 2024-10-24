const express = require('express')
const router = express.Router()
const NewJournalist = require('../models/journalist.model')

// MIDDLEWAREs
const getJournalist = async (req, res, next) => {
  let journalist
  const { id } = req.params

  // PARA VERIFICAR SI ES UN ID VALIDO (ID DE MONGO)
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(404).json({ message: 'iD no valido' })
  }

  try {
    journalist = await NewJournalist.findById(id)
    if (!id) {
      return res.status(404).json({ message: 'No se encontro la noticia' })
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

  res.journalist = journalist
  next()
}

// GET ALL NEWS
router.get('/', async (req, res) => {
  try {
    const journalist = await NewJournalist.find()
    if (journalist.length === 0) {
      return res.status(204).json({ message: 'No hay noticias' })
    }
    return res.json(journalist)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// GET ONE NEWS
router.get('/:id', getJournalist, async (req, res) => {
  return res.json(res.journalist)
})

// POST ONE NEW
router.post('/', async (req, res) => {
  // NO SE ENVIA EL dateCreated PORQUE ES AUTOMATICO
  const { name, email, rut } = req?.body
  if (!name || !email || !rut) {
    return res.status(400).json({ message: 'Ingrese todos los datos, (name, email, rut)' })
  }

  const newjournalistCreate = new NewJournalist({
    name,
    email,
    rut
  })

  try {
    const savedJournalist = await newjournalistCreate.save()
    return res.status(201).json(savedJournalist)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// PUT ALL
router.put('/:id', getJournalist, async (req, res) => {
  try {
    const journalist = res.journalist
    journalist.name = req.body.name || journalist.name
    journalist.email = req.body.email || journalist.email
    journalist.rut = req.body.rut || journalist.rut

    const updatedJournalist = await journalist.save()

    return res.json(updatedJournalist)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
})

// PATCH
router.patch('/:id', getJournalist, async (req, res) => {
  if (!req.body.name && !req.body.email && !req.body.rut) {
    return res.status(400).json({ message: 'Se debe enviar por lo menos un campo, (name, email, rut)' })
  }

  try {
    const journalist = res.journalist
    journalist.name = req.body.name || journalist.name
    journalist.email = req.body.email || journalist.email
    journalist.rut = req.body.rut || journalist.rut

    const updatedJournalist = await journalist.save()

    return res.json(updatedJournalist)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
})

// DELETE ONE
router.delete('/:id', getJournalist, async (req, res) => {
  try {
    const journalist = res.journalist
    await journalist.deleteOne({
      _id: journalist._id
    })

    return res.json({ message: 'Perisodista eliminado' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
