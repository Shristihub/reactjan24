import logo from '../assets/yoga-logo.jpg'
const Nav = ()=>{
    return(
        <nav className='container'>
				<div className="logo">
					<img src={logo} alt="mylogo" height="50px" width="50px" />
				</div>
				<ul>
					<li href="#">Menu</li>
					<li href="#">Location</li>
					<li href="#">About Us</li>
					<li href="#">Contact Us</li>
				</ul>
			<button>Login</button>
			</nav>
    );
}
export default Nav;