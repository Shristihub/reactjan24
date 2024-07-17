import logo from '../assets/nike_logo.png'
const Navbar = () => {
  return (
    <nav className='container' >
        <div className='logo'>
            <img src={logo} alt="Nike Logo" />
        </div>
        <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
        <button>Login</button>
    </nav>
  )
}

export default Navbar