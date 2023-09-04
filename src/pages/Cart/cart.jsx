import NavBar from '/src/components/NavBar/navbar';
import Footer from '/src/components/Footer/footer';
import item1 from '/src/assets/armchair-3-min.jpeg';
import item2 from '/src/assets/armchair-4-min.jpeg';
import item3 from '/src/assets/armchair-2-min.jpg';
import { Link } from 'react-router-dom';
import './cart.css';

export default function Cart() {
	return (
		<>
			<NavBar />
			<div id="page_cart">
				<h1>Cart</h1>
				<div className="cart_items">
					<div className="cart_item-preview">
						<p className="cart_item-count">1.</p>
						<img src={item1} width={250} alt="armchair gray" />
						<div className="cart_item-information">
							<span className="cart_item-name">Blue Canvas</span>
							<span className="cart_item-price">$124.99</span>
						</div>
					</div>
					<div className="cart_item-preview">
						<p className="cart_item-count">2.</p>
						<img src={item2} width={250} alt="armchair gray" />
						<div className="cart_item-information">
							<span className="cart_item-name">White Fabric</span>
							<span className="cart_item-price">$234.99</span>
						</div>
					</div>
					<div className="cart_item-preview">
						<p className="cart_item-count">3.</p>
						<img src={item3} width={250} alt="armchair gray" />
						<div className="cart_item-information">
							<span className="cart_item-name">Salmon Mesh</span>
							<span className="cart_item-price">$549.99</span>
						</div>
					</div>
				</div>
				<div className="cart_checkout">
					<div className="cart_total">
						<h3 className="cart_total-label">Total:</h3>
						<span className="cart_total-price">$909.97</span>
					</div>
					<Link to="/">
						<button className="cart_checkout-button animating-button">
							Buy Now
						</button>
					</Link>
				</div>
			</div>
			<Footer />
		</>
	);
}
