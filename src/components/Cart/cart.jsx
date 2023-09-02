/* eslint-disable react/prop-types */
import './cart.scss';

export default function Cart({ cartShow }) {
	return (
		<div id="component_cart" className={`cart-${cartShow ? 'appear' : ''}`}>
			<div className="cart-content">
				<h2>Cart</h2>
				<div className="cart_items">
					<p>item</p>
					<p>item</p>
					<p>item</p>
				</div>
				<button className="cart_checkout-button animating-button">
					Checkout
				</button>
			</div>
		</div>
	);
}
