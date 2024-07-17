import logo from "../../assets/logo.png";
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className={styles.logoClass}>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;


