const express = require('express')
const router = express.Router()
const News = require('../models/news.model')
const Journalist = require('../models/journalist.model')

// MIDDLEWARE
const getNews = async (req, res, next) => {
  let notice
  const { id } = req.params

  // PARA VERIFICAR SI ES UN ID VALIDO (ID DE MONGO)
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(404).json({ message: 'iD no valido' })
  }

  try {
    notice = await News.findById(id)
    if (!id) {
      return res.status(404).json({ message: 'No se encontro la noticia' })
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

  res.notice = notice
  next()
}

// GET ALL NEWS
router.get('/', async (req, res) => {
  try {
    const notices = await News.find()
    // console.log('GET ALL,', news)
    if (notices.length === 0) {
      return res.status(204).json({ message: 'No hay noticias' })
    }
    return res.json(notices)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// GET ONE NEWS
router.get('/:id', getNews, async (req, res) => {
  return res.json(res.notice)
})

// POST ONE NEW
router.post('/', async (req, res) => {
  const { title, description, imageUrl, videoUrl, journalistId } = req?.body
  if (!title || !description || !imageUrl || !videoUrl || !journalistId) {
    return res.status(400).json({ message: 'Ingrese todos los datos, (title, description, imageUrl, videoUrl, journalistId)' })
  }

  try {
    // BUSCA AL PERIODISTA POR EL ID
    const journalistFindId = await Journalist.findById(journalistId)
    if (!journalistFindId) {
      return res.status(404).json({ message: 'El periodista no existe' })
    }

    // CREA UNA VARIABLE DE LA NUEVA NOTICIA
    const newNotice = new News({
      title,
      description,
      imageUrl,
      videoUrl,
      journalistId // USA EL ID DEL PERIODISTA
    })

    const savedNotice = await newNotice.save()
    return res.status(201).json(savedNotice)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// PUT ALL
router.put('/:id', getNews, async (req, res) => {
  try {
    const notice = res.notice
    notice.title = req.body.title || notice.title
    notice.description = req.body.description || notice.description
    notice.imageUrl = req.body.imageUrl || notice.imageUrl
    notice.videoUrl = req.body.videoUrl || notice.videoUrl
    // notice.journalist = req.body.journalist || notice.journalist

    const updatedNotice = await notice.save()
    // console.log('PUT ALL,', savedNews)
    return res.json(updatedNotice)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
})

// PATCH
router.patch('/:id', getNews, async (req, res) => {
  if (!req.body.title && !req.body.description && !req.body.imageUrl && !req.body.videoUrl) {
    return res.status(400).json({ message: 'Se debe enviar por lo menos un campo, (title, description, imageUrl, videoUrl)' })
  }
  try {
    const notice = res.notice
    notice.title = req.body.title || notice.title
    notice.description = req.body.description || notice.description
    notice.imageUrl = req.body.imageUrl || notice.imageUrl
    notice.videoUrl = req.body.videoUrl || notice.videoUrl
    // notice.journalist = req.body.journalist || notice.journalist

    const updatedNotice = await notice.save()
    // console.log('PUT ALL,', savedNews)
    return res.json(updatedNotice)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
})

// DELETE ONE
router.delete('/:id', getNews, async (req, res) => {
  try {
    const notice = res.notice
    await notice.deleteOne({
      _id: notice._id
    })
    return res.json({ message: 'Noticia eliminada' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
