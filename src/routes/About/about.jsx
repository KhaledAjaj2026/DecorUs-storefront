import NavBar from '../../components/NavBar/navbar';
import './about.css';

export default function About() {
	return (
		<>
			<NavBar />
			<div id="route_about">
				<h1>Our Story</h1>
				<p>
					There was once a chair. I sat on said chair. Then someone wanted to
					sit on the same chair. I charged them 500 shillings for ownership of
					the chair. They accepted. That is how I made my first business.
				</p>
			</div>
		</>
	);
}
