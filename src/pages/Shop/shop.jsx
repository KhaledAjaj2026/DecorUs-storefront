import { ScrollRestoration } from 'react-router-dom';
import ProductItem from '../../components/ProductItem/productitem';
import furnitureData from '/src/productsforsale.json';
import NavBar from '/src/components/NavBar/navbar.jsx';
import Footer from '/src/components/Footer/footer';
import './shop.css';

export default function Shop() {
	const renderProducts = () => {
		const products = [];
		for (let i = 0; i < furnitureData.length; i++) {
			products.push(
				<ProductItem
					key={i}
					location={furnitureData[i].location}
					name={furnitureData[i].name}
					description={furnitureData[i].description}
					price={furnitureData[i].price}
				/>
			);
		}
		return products;
	};

	return (
		<>
			<NavBar />
			<div id="page_shop">
				<h1 className="shop-title" data-aos="zoom-out" data-aos-duration="1000">
					Only The Best
				</h1>
				<p>Shop our careful selection of perfection & mastery</p>
				<div className="shop_products-window">{renderProducts()}</div>
			</div>
			<Footer />
			<ScrollRestoration />
		</>
	);
}
