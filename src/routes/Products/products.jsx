import './products.css';
import Item from '../../components/Item/item';

export default function Products() {
	return (
		<>
			<div id="component-products">
				<h1 className="font-label">Shop From Our Latest Imports:</h1>
				<div className="product-window">
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
				</div>
			</div>
		</>
	);
}
