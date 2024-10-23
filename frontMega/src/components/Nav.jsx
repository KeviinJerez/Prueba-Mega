import megaGo from '../assets/images/megago.svg'
import styles from '../css/nav.module.css'
function Nav() {

  return (
    <>
      <nav className={styles.nav}>
        <img className={styles.logo} src={megaGo}/>
        <h2 className={styles.title} >Prueba Técnica Mega GO</h2>
        <h2 className={styles.name}>Kevin Jerez </h2>
      </nav>
    </>
  )
}

export default Nav
