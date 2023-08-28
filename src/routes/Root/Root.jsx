import { Link } from 'react-router-dom';
import './root.css';

export default function Root() {
	return (
		<div id="component_root">
			<nav id="component-navbar">
				<Link to="/">Home</Link>
				<Link to="/products">Products</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</nav>
		</div>
	);
}
