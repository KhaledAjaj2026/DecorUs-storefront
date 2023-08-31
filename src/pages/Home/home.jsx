import { Link } from 'react-router-dom';
import Item from '../../components/Item/item';
import NavBar from '../../components/NavBar/navbar';
import item1 from '../../assets/armchair-2-min.jpg';
import item2 from '../../assets/armchair-3-min.jpeg';
import item3 from '../../assets/armchair-4-min.jpeg';
import './home.css';

export default function Root() {
	return (
		<>
			<NavBar />
			<div id="page_home">
				<header className="home-header">
					<h1>Furniture for Any Design</h1>
					<p>Shop from only the best selection of handcrafted masterpieces</p>
					<Link to="/shop">Shop Now</Link>
				</header>
				<section className="home_featured">
					<h2>Featured Furniture</h2>
					<div>
						<Item />
						<Item />
						<Item />
					</div>
				</section>
				<section className="home_discover">
					<h2>Discover Yourself</h2>
					<p>Explore the best pieces that speak to you, and only you</p>
					<div>
						<img
							src={item1}
							width={400}
							className="home_discover_image-left"
							alt=""
						/>
						<img
							src={item2}
							width={350}
							className="home_discover_image-right"
							alt=""
						/>
					</div>
				</section>
				<section className="home_handcrafted">
					<div>
						<h2>Carefully Handcrafted Masterpieces</h2>
						<p>Our stock is entirely unique, made by our in-house masters</p>
					</div>
					<img src={item3} width={600} alt="" />
				</section>
				<section className="home_reviews">
					<h2>{'"Best in the Industry, Hands Down"'}</h2>
					<h3>★★★★★</h3>
					<p>Ask our worldwide customers about our dedication to perfection</p>
					<i>Amazing!</i>
					<i>Comfortable and Stylish</i>
					<i>Nothing like it!</i>
					<i>Outstanding Quality</i>
				</section>
				<section className="home_shop-now">
					<h2>Take the Next Step</h2>
					<Link to="/shop">Shop Now</Link>
				</section>
				<footer></footer>
			</div>
		</>
	);
}
