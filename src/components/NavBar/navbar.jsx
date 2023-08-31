import { Link } from 'react-router-dom';
import logo from '/src/assets/logo-no-background.svg';
import cart from '/src/assets/bag-1.svg';
import account from '/src/assets/account-2.svg';
import './navbar.css';

const alert = () => {
	console.log('slickdhjdksalhfjska');
};

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
			<div className="navbar_cart">
				<img src={account} width={40} alt="" />
				<button className="navbar_cart-button" onClick={alert}>
					<img src={cart} width={40} alt="" />
				</button>
			</div>
		</nav>
	);
}
