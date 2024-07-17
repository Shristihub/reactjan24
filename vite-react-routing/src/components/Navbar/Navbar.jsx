import {Outlet,Link} from 'react-router-dom'
import styles from '../Navbar/Navbar.module.css'
const Navbar = () => {
  return (
    <>
    <nav className={styles.container}>
        <ul className={styles.navbar}>
            <li><Link to="/" className={styles.link}>Home</Link></li>
            <li><Link to="/aboutus">AboutUs</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contactus">ContactUs</Link></li>
        </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar