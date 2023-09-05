/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './productitem.css';

export default function ProductItem({ name, location, price }) {
	return (
		<Link to="/product-details">
			<div id="component_item">
				<img src={location} className="item-img" alt="" />
				<p className="item-name">{name}</p>
				<p className="item-price">{price}</p>
			</div>
		</Link>
	);
}
