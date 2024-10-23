// import { Link } from 'react-router-dom'
import styles from '../css/Footer.module.css'
import instagram from '../assets/images/instagram.svg'
import X from '../assets/images/xRedSocial.svg'
import facebook from '../assets/images/facebook.svg'
import tiktok from '../assets/images/tiktok.svg'

function Footer() {
  return (
    <>
      <footer className={styles.sectionFooter}>

        <a className={styles.redesSociales} href="https://www.instagram.com/megago.cl" target='_blank'>
          <img src={instagram} />
        </a>
        <a className={styles.redesSociales} href="https://x.com/mega" target='_blank'>
          <img src={X} />
        </a>
        <a className={styles.redesSociales} href="https://web.facebook.com/MEGACL" target='_blank'>
          <img src={facebook} />
        </a>
        <a className={styles.redesSociales} href="https://www.tiktok.com/@mega_tv" target='_blank'>
          <img src={tiktok} />
        </a>

      </footer>
    </>
  )
}

export default Footer