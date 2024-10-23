import { useEffect, useState } from 'react';
import styles from '../css/home.module.css';
import Slider from "react-slick";
import x from '../assets/images/x.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsCarousel = () => {
  const [news, setNews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // MANEJA LOS ESTADOS DE LA VENTANA MODAL
  const [selectedNews, setSelectedNews] = useState(null); // GUARDA LOS DATOS DE LA NOTICIA SELECCIONADA

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:5000/news'); // DIRECCION DE LA API
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // CANTIDAD DE NOTICIAS A MOSTRAR
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // PARA CUANDO LA PANTALLA ES DE 1024px O MENOS
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 650, // PARA CUANDO LA PANTALLA ES DE 650px O MENOS
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      }
    ],
  };

  const showModal = (newsItem) => {
    setSelectedNews(newsItem); // SELECCIONA LOS DATOS DE LA NOTICIA
    setIsModalOpen(true); // ABRE LA VENTANA
  };

  const closeModal = () => {
    setIsModalOpen(false); // CIERRA LA VENTANA1
    setSelectedNews(null); // LIMPIA EL CONTENIDO DE LA NOTICIA
  };

  return (
    <section className={styles.sectionHomeNotices}>
      {/* <h2>Noticias</h2> */}
      <div className={styles.sliderContainer}>
        <Slider className={styles.slickSlide} {...settings}>
          {news.map((item) => (
            <div className={styles.slider} key={item._id} >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className={styles.btnModal}>
                <button onClick={() => showModal(item)}>Ver Noticia</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={closeModal}><img src={x} /></button>
            {selectedNews && (
              <>
                <h1>{selectedNews.title}</h1>
                <h3>{selectedNews.description}</h3>
                <img src={selectedNews.imageUrl} alt={selectedNews.title} />
                <video controls width="100%">
                  <source src={selectedNews.videoUrl} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </>
            )}
          </div>
        </div>
      )}

    </section>
  );
};

export default NewsCarousel;