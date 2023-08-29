import { Link } from 'react-router-dom';
import './product-details.css';

export default function ProductDetails() {
	return (
		<div id="subroute_product-details">
			<Link to="/products">Back to Products</Link>
			<div id="product-details_window">
				<img src="src/assets/armchair-1-min.jpeg" className="item-img" alt="" />
				<p className="item-name">Brown Leather</p>
				<p className="item-price">$259.99</p>
			</div>
		</div>
	);
}
