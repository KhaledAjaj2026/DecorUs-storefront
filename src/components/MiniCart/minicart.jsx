/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import furnitureData from '/src/productsforsale.json';
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
						<img src={furnitureData[13].location} alt="armchair gray" />
						<div className="minicart_item-information">
							<span className="minicart_item-name">
								{furnitureData[13].name}
							</span>
							<span className="minicart_item-price">
								{furnitureData[13].price}
							</span>
						</div>
					</div>
					<div className="minicart_item-preview">
						<img src={furnitureData[7].location} alt="armchair gray" />
						<div className="minicart_item-information">
							<span className="minicart_item-name">
								{furnitureData[7].name}
							</span>
							<span className="minicart_item-price">
								{furnitureData[7].price}
							</span>
						</div>
					</div>
					<div className="minicart_item-preview">
						<img src={furnitureData[10].location} alt="armchair gray" />
						<div className="minicart_item-information">
							<span className="minicart_item-name">
								{furnitureData[10].name}
							</span>
							<span className="minicart_item-price">
								{furnitureData[10].price}
							</span>
						</div>
					</div>
				</div>
				<div className="minicart_checkout">
					<div className="minicart_total">
						<h3 className="minicart_total-label">
							Total:{' '}
							<span className="minicart_total-price">
								{JSON.parse(furnitureData[13].price) +
									JSON.parse(furnitureData[7].price) +
									JSON.parse(furnitureData[10].price)}
							</span>
						</h3>
					</div>
					<Link to="/cart">
						<button className="minicart_checkout-button animating-button">
							Checkout
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
