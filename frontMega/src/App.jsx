import Nav from './components/nav'
import Home from './components/Home'
import Footer from './components/Footer'
import styles from './css/app.module.css'
function App() {
  return (
    <>
    <section className={styles.sectionNav}>
     <Nav/>
    </section>
    <section className={styles.sectionHome}>
      <h2>Noticias</h2>
      <div className={styles.containerHome}>
        <Home/>
      </div>
      
    </section>
    <section className={styles.sectionFooter}>
      <Footer/>
    </section>

    </> 
  )
}

export default App
