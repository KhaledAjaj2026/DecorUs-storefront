import { Link } from 'react-router-dom';
// import itemImage from '/furniture/armchair-1-min.jpeg';
import furnitureData from '/src/productsforsale.json';
import './productitem.css';

export default function Item() {
	return (
		<Link to="/product-details">
			<div id="component_item">
				<img src={furnitureData[0].location} className="item-img" alt="" />
				<p className="item-name">{furnitureData[0].name}</p>
				<p className="item-price">{furnitureData[0].price}</p>
			</div>
		</Link>
	);
}
