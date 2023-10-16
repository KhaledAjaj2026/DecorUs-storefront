/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './productitem.css';

export default function ProductItem({ name, location, description, price }) {
	const info = {
		name: name,
		location: location,
		description: description,
		price: price,
	};

	return (
		<Link to="/product-details" state={{ data: info }}>
			<div id="component_item">
				<img src={location} className="item-img" alt="" />
				<p className="item-name">{name}</p>
				<p className="item-price">{price}</p>
			</div>
		</Link>
	);
}
