import { ScrollRestoration } from 'react-router-dom';
import ProductItem from '/src/components/ProductItem/productitem.jsx';
import NavBar from '/src/components/NavBar/navbar.jsx';
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
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
				</div>
			</div>
			<Footer />
			<ScrollRestoration />
		</>
	);
}
