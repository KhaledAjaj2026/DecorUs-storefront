import { Link } from 'react-router-dom';
import itemImage from '../../assets/armchair-1-min.jpeg';
import './item.css';

export default function Item() {
	return (
		<Link to="/product-details">
			<div id="component_item">
				<img src={itemImage} className="item-img" alt="" />
				<p className="item-name">Brown Leather</p>
				<p className="item-price">$259.99</p>
			</div>
		</Link>
	);
}
