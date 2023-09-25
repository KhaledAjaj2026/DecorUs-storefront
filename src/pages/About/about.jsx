import { Link, ScrollRestoration } from 'react-router-dom';
import NavBar from '/src/components/NavBar/navbar';
import Footer from '/src/components/Footer/footer';
import picOfGramps from '/furniture-shop.jpeg';
import building from '/building.jpg';
import armchair from '/furniture/armchair-5-min.jpg';
import 'aos/dist/aos.css';
import './about.css';

export default function About() {
	return (
		<>
			<NavBar />
			<div id="page_about">
				<h1 data-aos="zoom-out" data-aos-duration="1000">
					Our Story
				</h1>
				<section className="about_beginnings">
					<div className="about_section-text">
						<h2>Beginnings</h2>
						<p>
							{
								'I remember seeing Gramps toiling away in his mini garage, creating chair after chair and building bed after bed. I asked him why he worked so hard on these projects, and to my surprise his humble answer was "because I like doing it, why else would I?" From that day forward I dedicated myself to bringing these amazing pieces to everyone\'s home, for everyone to enjoy.'
							}
						</p>
					</div>
					<img
						src={picOfGramps}
						id="gramps-image"
						alt="picture of our founder and dear grandfather"
					/>
				</section>
				<section className="about_building-our-brand">
					<div className="about_section-text">
						<h2>Building Our Brand</h2>
						<p>
							{
								"It was hard, I won't lie. There were times where it seemed like we were one bad day away from closing shop. With the most gracious luck, however, we pulled through and expanded. We trained our craftsmen personally to build like Gramps did. Only the best materials were used in our crafts, and only the best crafts were put up for sale. Our name grew faster than we could hire new recruits!"
							}
						</p>
					</div>
					<img
						src={building}
						id="building-image"
						alt="picture of our founder and dear grandfather"
					/>
				</section>
				<section className="about_today">
					<div className="about_section-text">
						<h2>Today</h2>
						<p>
							{
								"The day I started I promised myself that everyone would know Gramp's work. Now, there isn't a single neighborhood in the US that hasn't heard of 'DecorUs' furniture. I am proud of my Gramps for his dedication to his craft, for without his inspiration I would have never found the motivation to start this amazing journey."
							}
						</p>
					</div>
					<img
						src={armchair}
						id="chair-about-image"
						alt="picture of our founder and dear grandfather"
					/>
				</section>
				<section className="about_shop-now">
					<h2>Discover Our Latest</h2>
					<Link to="/shop">
						<button className="animating-button">Shop Now</button>
					</Link>
				</section>
			</div>
			<Footer />
			<ScrollRestoration />
		</>
	);
}
