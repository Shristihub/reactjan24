import logo from '../../assets/logo.png'
import styles from '../Navbar/Navbar.module.css'
const Navbar = () => {
  return (
    <nav className={`${styles.nav_container} container`}>
       <div className={styles.logo}>
         <img src={logo} alt="Shristi-logo" />
       </div>
       <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
       </ul>
    </nav>
  )
}

export default Navbar