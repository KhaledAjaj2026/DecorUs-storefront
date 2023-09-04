import { Link } from 'react-router-dom';
import itemImage from '/armchair-1-min.jpeg';
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
					<img src={itemImage} className="item-img" alt="" />
					<div>
						<h3 className="product-details_name">Brown Leather</h3>
						<p className="product-details_description">
							A chair that you can sit on. Dont believe me? Watch, Ill sit on it
							right now. See?
						</p>
						<p className="item-price">$259.99</p>
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
