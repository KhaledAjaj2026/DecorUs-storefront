import { ScrollRestoration } from 'react-router-dom';
import Item from 'src/components/Item/item.jsx';
import NavBar from '/src/components/NavBar/navbar';
import Footer from '/src/components/Footer/footer';
import './shop.css';

export default function Shop() {
	return (
		<>
			<NavBar />
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
