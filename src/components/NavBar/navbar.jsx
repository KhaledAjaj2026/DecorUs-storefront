import { Link } from 'react-router-dom';
import './navbar.css';

export default function NavBar() {
	return (
		<nav id="component-navbar">
			<Link to="/">Home</Link>
			<Link to="/products">Products</Link>
			<Link to="/about">About</Link>
			<Link to="/contact">Contact</Link>
		</nav>
	);
}
