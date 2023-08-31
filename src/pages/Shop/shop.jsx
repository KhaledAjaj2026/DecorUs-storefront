import { ScrollRestoration } from 'react-router-dom';
import Item from '../../components/Item/item';
import NavBar from '../../components/NavBar/navbar';
import './shop.css';

export default function Shop() {
	return (
		<>
			<NavBar />
			<div id="route_shop">
				<h2 className="font-label">Shop From Our Latest Imports:</h2>
				<div className="products-window">
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
			<ScrollRestoration />
		</>
	);
}
