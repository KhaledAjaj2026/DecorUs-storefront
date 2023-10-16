import { useState } from 'react';
import { Link } from 'react-router-dom';
import MiniCart from '../MiniCart/minicart';
import logo from '/logo-no-background.svg';
import menuIcon from '/mobile-menu.svg';
import cart from '/bag-2.svg';
import './navbar.css';

export default function NavBar() {
	const [cartShow, setCartShow] = new useState(false);
	const [menuShow, setMenuShow] = new useState(false);

	const handleCartShow = () => {
		if (cartShow === false) setCartShow(true);
		else setCartShow(false);
	};

	const handleMenuShow = () => {
		if (menuShow === false) setMenuShow(true);
		else setMenuShow(false);
	};

	return (
		<>
			<nav id="component_navbar">
				<div className="navbar_mobile-links">
					<button className="navbar_mobile-links_icon" onClick={handleMenuShow}>
						<img src={menuIcon} width={50} id="hamburger-icon" />
					</button>
				</div>
				<div className="navbar_links">
					<Link to="/">Home</Link>
					<Link to="/shop">Shop</Link>
					<Link to="/about">About</Link>
					<Link to="/contact">Contact</Link>
				</div>
				<Link to="/" className="navbar_logo">
					<img
						src={logo}
						id="navbar-logo_image"
						width={120}
						alt="DecorUs logo"
					/>
				</Link>
				<div className="navbar_cart">
					<button className="navbar_cart-button" onClick={handleCartShow}>
						<img src={cart} width={40} alt="" />
					</button>
				</div>
			</nav>
			<div
				className="navbar_mobile-links_links"
				style={menuShow ? { display: 'flex' } : { display: 'none' }}
			>
				<Link to="/">Home</Link>
				<Link to="/shop">Shop</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</div>
			<MiniCart cartShow={cartShow} />
		</>
	);
}
