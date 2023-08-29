import Item from '../../components/Item/item';
import NavBar from '../../components/NavBar/navbar';
import './home.css';

export default function Root() {
	return (
		<>
			<NavBar />
			<div id="route_home">
				<header className="route_home-header">
					<h1>Furniture for Any Design</h1>
					<p>Shop from only the best selection of handcrafted masterpieces</p>
					<button>Shop Now</button>
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
				</section>
			</div>
		</>
	);
}
