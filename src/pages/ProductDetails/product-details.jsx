import { Link } from 'react-router-dom';
import furnitureData from '/src/productsforsale.json';
import NavBar from '/src/components/NavBar/navbar.jsx';
import Footer from '/src/components/Footer/footer.jsx';
import { ScrollRestoration } from 'react-router-dom';
import './product-details.css';

export default function ProductDetails() {
	return (
		<>
			<NavBar />
			<div id="page_product-details">
				<Link to="/shop" className="back-to-shop">
					Back to Shop
				</Link>
				<div className="product-details_window">
					<img src={furnitureData[0].location} className="item-img" alt="" />
					<div>
						<h3 className="product-details_name">{furnitureData[0].name}</h3>
						<p className="product-details_description">
							{furnitureData[0].description}
						</p>
						<p className="item-price">{furnitureData[0].price}</p>
						<Link to="/cart">
							<button className="animating-button">Add to Cart</button>
						</Link>
					</div>
				</div>
			</div>
			<Footer />
			<ScrollRestoration />
		</>
	);
}
