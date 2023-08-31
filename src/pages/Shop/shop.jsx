import { ScrollRestoration } from 'react-router-dom';
import Item from '../../components/Item/item';
import NavBar from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';
import Cart from '../../components/Cart/cart';
import './shop.css';

export default function Shop() {
	return (
		<>
			<NavBar />
			<Cart />
			<div id="page_shop">
				<h1 className="shop-title">Only The Best</h1>
				<p>Shop our careful selection of perfection & mastery</p>
				<div className="shop_products-window">
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
			<Footer />
			<ScrollRestoration />
		</>
	);
}
