import { Link } from 'react-router-dom';
import logo from '/public/logo-no-background.svg';
import './navbar.css';

export default function NavBar() {
	return (
		<nav id="component_navbar">
			<div className="navbar_links">
				<Link to="/">Home</Link>
				<Link to="/shop">Shop</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</div>
			<Link to="/" className="navbar_logo">
				<img src={logo} width={120} alt="DecorUs logo" />
			</Link>
			<Link className="navbar_cart">
				<img src={logo} width={40} alt="" />
				<img src={logo} width={40} alt="" />
			</Link>
		</nav>
	);
}
