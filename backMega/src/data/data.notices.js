const News = require('../models/news.model')
const Journalist = require('../models/journalist.model')
// INSERCION DE DATOS DE NOTICIAS EN LA BD
const insertMultipleData = async () => {
  const newsArray = [
    {
      title: 'Apple lanza el nuevo iPhone 16 con cámaras mejoradas',
      description: 'La compañía presentó el iPhone 16, que incluye mejoras en la calidad de las cámaras, mayor duración de batería y un chip A19 más eficiente. La pantalla también ha sido optimizada para una experiencia de visualización más fluida.',
      imageUrl: 'https://media.gq.com.mx/photos/66df44567d3ceddfd877165b/16:9/w_2560%2Cc_limit/Apple_iPhone_16_gama_colores%2520(1).jpg',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      journalistRut: '20.669.110-7'
    },
    {
      title: 'Google anuncia actualización de su buscador con IA generativa',
      description: 'Google está integrando capacidades de inteligencia artificial generativa en su motor de búsqueda, lo que permitirá ofrecer respuestas más precisas y personalizadas para los usuarios. La actualización comenzará a implementarse a fines de año.',
      imageUrl: 'https://ai.google/static/images/share.png',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      journalistRut: '20.669.110-7'
    },
    {
      title: 'Elon Musk presenta nuevos avances de Neuralink para interfaces cerebro-computadora',
      description: 'Neuralink ha demostrado un prototipo mejorado de su dispositivo que permite a las personas controlar ordenadores con la mente. La empresa planea comenzar ensayos clínicos en humanos a principios de 2025.',
      imageUrl: 'https://cdn.punchng.com/wp-content/uploads/2023/05/26220648/Is-Elon-Musks-Neuralink.jpg',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      journalistRut: '20.669.110-7'
    },
    {
      title: 'Microsoft lanza una versión premium de Copilot para mejorar la productividad',
      description: 'La nueva versión de Copilot incluye características avanzadas de inteligencia artificial para la automatización de tareas y la integración profunda con la suite de Office, destinada a usuarios empresariales.',
      imageUrl: 'https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt2e6f06e5e5f9f1bd/65a6c8272bb7f9040a715a7d/News_Image_-_2024-01-16T121655.004.png?width=1280&auto=webp&quality=95&format=jpg&disable=upscale',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      journalistRut: '20.669.110-7'
    },
    {
      title: 'Meta introduce avatares hiperrealistas para el metaverso',
      description: 'La última actualización de Meta permite a los usuarios crear avatares más realistas y personalizados para su uso en entornos de realidad virtual, mejorando la inmersión en el metaverso.',
      imageUrl: 'https://about.fb.com/wp-content/uploads/2022/06/Avatars-Store_1920x1080.jpg?fit=1920%2C1080',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      journalistRut: '20.669.110-7'
    },
    {
      title: 'Samsung lanza el Galaxy Fold 6 con pantalla más duradera',
      description: 'El Galaxy Fold 6 ha llegado con mejoras en la durabilidad de la pantalla plegable, que promete ser un 20% más resistente a rayones y pliegues. Además, incluye una nueva cámara de 108 MP y soporte para carga ultrarrápida.',
      imageUrl: 'https://www.gsmpro.cl/cdn/shop/files/samsung-galaxy-z-fold-6.jpg?v=1725576023',
      videoUrl: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
      journalistRut: '20.669.110-7'
    },
    {
      title: 'Amazon abre su primera tienda sin cajeros en Sudamérica',
      description: 'La tienda, ubicada en São Paulo, Brasil, utiliza tecnología de visión por computadora y sensores para que los clientes puedan realizar compras sin pasar por cajas registradoras.',
      imageUrl: 'https://cdn-3.expansion.mx/dims4/default/80c7375/2147483647/strip/true/crop/954x501+0+0/resize/1200x630!/format/jpg/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F62%2Fe7%2F6c78c47e4fdd9e8fdf5424207e2b%2Famazongo.JPG',
      videoUrl: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
      journalistRut: '20.669.110-7'
    },
    {
      title: 'Tesla desarrolla su propia IA para vehículos autónomos',
      description: 'Tesla anunció avances en su sistema de conducción autónoma con un nuevo modelo de IA desarrollado internamente. La empresa afirma que este modelo reduce los errores en un 40% respecto a versiones anteriores.',
      imageUrl: 'https://i.ytimg.com/vi/5kXihw1FTUg/hqdefault.jpg',
      videoUrl: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
      journalistRut: '20.669.110-7'
    },
    {
      title: 'Zoom añade funciones de IA para resumir reuniones automáticamente',
      description: 'La popular plataforma de videollamadas ha lanzado una actualización que incluye la opción de generar resúmenes automáticos de reuniones, facilitando la revisión de temas importantes sin necesidad de ver la grabación completa.',
      imageUrl: 'https://i.blogs.es/48d7e7/zoom/500_333.webp',
      videoUrl: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
      journalistRut: '20.669.110-7'
    },
    {
      title: 'NVIDIA lanza nueva tarjeta gráfica RTX 5090 con rendimiento excepcional',
      description: 'La nueva GPU RTX 5090 ofrece un rendimiento un 30% superior a la generación anterior y está diseñada para soportar videojuegos en 8K, renderizado 3D avanzado y aplicaciones de IA con un nivel de detalle sin precedentes.',
      imageUrl: 'https://www.gsmpro.cl/cdn/shop/articles/Nvidia-GeForce-RTX-5090-rumores.jpg?v=1721061793',
      videoUrl: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
      journalistRut: '12.345.678-9'
    }
  ]

  try {
    // VERIFICA SI EXISTEN NOTICIAS DUPLICADAS
    const existingNews = await News.find({ title: { $in: newsArray.map(news => news.title) } })
    if (existingNews.length > 0) {
      console.log('Las noticias ya existen en la base de datos, no se realizará la insercción.')
      return
    }

    for (const newsItem of newsArray) {
      // ENCUENTRA AL PERIODISTA POR EL RUT
      const journalist = await Journalist.findOne({ rut: newsItem.journalistRut })

      if (!journalist) {
        console.log(`El periodista con RUT ${newsItem.journalistRut} no se encuentra en la base de datos.`)
        continue // PASA AL SIGUIENTE SI EL RUT NO SE ENCUENTRA EN LA BD
      }

      // ASIGAN EL ID DEL PERIODISTA AL CAMPO JOURNALIST DE LA NOTICIA
      newsItem.journalistId = journalist._id
      delete newsItem.journalistRut // ELIMINA LA PROPIEDAD JOURNALISTRUT DE LA NOTICIA

      // GUARDA LA NOTICIA EN LA BD
      const savedNews = await News.create(newsItem)
      console.log('Noticia guardada:', savedNews)
    }
  } catch (error) {
    console.error('Error al guardar las noticias:', error)
  }
}

module.exports = insertMultipleData
