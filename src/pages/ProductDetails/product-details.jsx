/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom';
import NavBar from '/src/components/NavBar/navbar.jsx';
import Footer from '/src/components/Footer/footer.jsx';
import { ScrollRestoration } from 'react-router-dom';
import './product-details.css';

export default function ProductDetails() {
	const location = useLocation();
	const furniture = location.state.data;

	return (
		<>
			<NavBar />
			<div id="page_product-details">
				<Link to="/shop" className="back-to-shop">
					Back to Shop
				</Link>
				<div className="product-details_window">
					<img
						src={furniture.location}
						className="product_item-img"
						alt={furniture.name}
					/>
					<div className="product-details_information">
						<h3 className="product-details_name">{furniture.name}</h3>
						<p className="product-details_description">
							{furniture.description}
						</p>
						<p className="product_item-price">{furniture.price}</p>
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
