import { Outlet } from 'react-router-dom';
import Item from '../../components/Item/item';
import NavBar from '../../components/NavBar/navbar';
import './products.css';

export default function Products() {
	return (
		<>
			<NavBar />
			<div id="route_products">
				<h1 className="font-label">Shop From Our Latest Imports:</h1>
				<div className="product-window">
					{/* TODO: implement dynamic loading of all products via loop. */}
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
			<div id="product-view">
				<Outlet />
			</div>
		</>
	);
}
