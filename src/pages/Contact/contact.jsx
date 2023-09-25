import { ScrollRestoration } from 'react-router-dom';
import NavBar from '/src/components/NavBar/navbar';
import Footer from '/src/components/Footer/footer';
import 'aos/dist/aos.css';
import './contact.css';

export default function Contact() {
	return (
		<>
			<NavBar />
			<div id="route_contact">
				<h1 data-aos="zoom-out" data-aos-duration="1000">
					Get In Touch
				</h1>
				<p>Let us know of anything you need, we are always happy to help.</p>
				<form>
					<label htmlFor="customer-name">Name: </label>
					<input
						type="text"
						name="customer-name"
						height={200}
						id="customer-name"
					/>
					<label htmlFor="customer-email">Email: </label>
					<input type="email" name="customer-email" id="customer-email" />
					<label htmlFor="customer-message">Message: </label>
					<textarea
						name="customer-message"
						id="customer-message"
						cols="30"
						rows="8"
					></textarea>
					<button type="submit" className="animating-button">
						Submit
					</button>
				</form>
			</div>
			<Footer />
			<ScrollRestoration />
		</>
	);
}
