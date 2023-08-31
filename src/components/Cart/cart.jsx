import './cart.scss';

export default function Cart() {
	return (
		<div id="component_cart">
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
	);
}
