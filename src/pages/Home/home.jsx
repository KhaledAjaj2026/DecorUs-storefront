import { Link, ScrollRestoration } from 'react-router-dom';
import { useEffect } from 'react';
import ProductItem from '/src/components/ProductItem/productitem.jsx';
import NavBar from '/src/components/NavBar/navbar';
import furnitureData from '/src/productsforsale.json';
import Footer from '/src/components/Footer/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css';

export default function Home() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<NavBar />
			<div id="page_home">
				<header
					className="home-header"
					data-aos="zoom-out"
					data-aos-duration="1000"
				>
					<div
						className="home-header_text"
						data-aos="zoom-out"
						data-aos-duration="1000"
						data-aos-delay="300"
					>
						<h1>Furniture for Any Design</h1>
						<p>Shop from only the best selection of handcrafted masterpieces</p>
						<Link to="/shop">
							<button className="animating-button">Shop Now</button>
						</Link>
					</div>
				</header>
				<section
					className="home_featured"
					data-aos="fade-down"
					data-aos-duration="1000"
				>
					<h2>Featured Furniture</h2>
					<div>
						<ProductItem
							name={furnitureData[17].name}
							location={furnitureData[17].location}
							description={furnitureData[17].description}
							price={furnitureData[17].price}
						/>
						<ProductItem
							name={furnitureData[8].name}
							location={furnitureData[8].location}
							description={furnitureData[8].description}
							price={furnitureData[8].price}
						/>
						<ProductItem
							name={furnitureData[2].name}
							location={furnitureData[2].location}
							description={furnitureData[2].description}
							price={furnitureData[2].price}
						/>
					</div>
				</section>
				<section
					className="home_discover"
					data-aos="fade-down"
					data-aos-duration="1000"
				>
					<h2>Discover Yourself</h2>
					<p>Explore the best pieces that speak to you, and only you</p>
					<div>
						<img
							src={furnitureData[1].location}
							id="discover_image-left"
							alt=""
							data-aos="fade-right"
							data-aos-duration="1000"
						/>
						<img
							src={furnitureData[11].location}
							id="discover_image-right"
							alt=""
							data-aos="fade-left"
							data-aos-duration="1000"
						/>
					</div>
				</section>
				<section
					className="home_handcrafted"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<div>
						<h2>Carefully Handcrafted Masterpieces</h2>
						<p>Our stock is entirely unique, made by our in-house masters</p>
					</div>
					<img src={furnitureData[15].location} id="handcrafted-image" alt="" />
				</section>
				<section
					className="home_reviews"
					data-aos="fade-down"
					data-aos-duration="1000"
				>
					<h2>{'"Best in the Industry, Hands Down"'}</h2>
					<h3>★★★★★</h3>
					<p>Ask our world-wide customers about our dedication to perfection</p>
					<i>Amazing!</i>
					<i>Comfortable and Stylish</i>
					<i>Nothing like it!</i>
					<i>Outstanding</i>
				</section>
				<section
					className="home_shop-now"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<h2>Take the Next Step</h2>
					<Link to="/shop">
						<button className="animating-button">Shop Now</button>
					</Link>
				</section>
				<footer></footer>
			</div>
			<Footer />
			<ScrollRestoration />
		</>
	);
}
