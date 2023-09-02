import { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/cart';
import logo from '/src/assets/logo-no-background.svg';
import cart from '/src/assets/bag-2.svg';
import account from '/src/assets/account-2.svg';
import './navbar.css';

export default function NavBar() {
	const [cartShow, setCartShow] = new useState(false);

	const handleCartShow = () => {
		if (cartShow === false) setCartShow(true);
		else setCartShow(false);
	};

	return (
		<>
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
					<button className="navbar_cart-button" onClick={handleCartShow}>
						<img src={cart} width={40} alt="" />
						<span className="cart-count">0</span>
					</button>
				</div>
			</nav>
			<Cart cartShow={cartShow} />
		</>
	);
}
