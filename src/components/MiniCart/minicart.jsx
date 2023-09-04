/* eslint-disable react/prop-types */
import item1 from '../../assets/armchair-3-min.jpeg';
import item2 from '../../assets/armchair-4-min.jpeg';
import item3 from '../../assets/armchair-2-min.jpg';
import './minicart.css';

export default function MiniCart({ cartShow }) {
	return (
		<div
			id="component_minicart"
			className={`minicart-${cartShow ? 'appear' : ''}`}
		>
			<div className="minicart-content">
				<h2>Cart</h2>
				<div className="minicart_items">
					<div className="minicart_item-preview">
						<img src={item1} width={160} alt="armchair gray" />
						<div className="minicart_item-information">
							<span className="minicart_item-name">Blue Canvas</span>
							<span className="minicart_item-price">$124.99</span>
						</div>
					</div>
					<div className="minicart_item-preview">
						<img src={item2} width={160} alt="armchair gray" />
						<div className="minicart_item-information">
							<span className="minicart_item-name">White Fabric</span>
							<span className="minicart_item-price">$124.99</span>
						</div>
					</div>
					<div className="minicart_item-preview">
						<img src={item3} width={160} alt="armchair gray" />
						<div className="minicart_item-information">
							<span className="minicart_item-name">Salmon Mesh</span>
							<span className="minicart_item-price">$124.99</span>
						</div>
					</div>
				</div>
				<div className="minicart_checkout">
					<div className="minicart_total">
						<h3 className="minicart_total-label">Total:</h3>
						<span className="minicart_total-price">$748.99</span>
					</div>
					<button className="minicart_checkout-button animating-button">
						Checkout
					</button>
				</div>
			</div>
		</div>
	);
}
