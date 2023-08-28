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
				</header>
			</div>
		</>
	);
}
