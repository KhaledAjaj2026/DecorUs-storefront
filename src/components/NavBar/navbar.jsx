import { Link } from 'react-router-dom';
import logo from '../../assets/logo-no-background.svg';
import './navbar.css';

export default function NavBar() {
	// Necessary for stlying ReactRouter Link components, cannot use conventional CSS methods.
	const linkStyle = {
		textDecoration: 'none',
		color: 'black',
		margin: 5,
		fontSize: '1.5rem',
		fontFamily: 'Libre Franklin',
	};

	return (
		<nav id="component_navbar">
			<div className="navbar_links">
				<Link to="/" style={linkStyle}>
					Home
				</Link>
				<Link to="/shop" style={linkStyle}>
					Shop
				</Link>
				<Link to="/about" style={linkStyle}>
					About
				</Link>
				<Link to="/contact" style={linkStyle}>
					Contact
				</Link>
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
