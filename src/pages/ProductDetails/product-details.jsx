import { Link } from 'react-router-dom';
import itemImage from '../../assets/armchair-1-min.jpeg';
import './product-details.css';

export default function ProductDetails() {
	return (
		<div id="subroute_product-details">
			<Link to="/shop">Back to Shop</Link>
			<div id="product-details_window">
				<img src={itemImage} className="item-img" alt="" />
				<div>
					<p className="item-name">Brown Leather</p>
					<p className="item-price">$259.99</p>
					<button className="add-cart">Add to Cart</button>
				</div>
			</div>
		</div>
	);
}
