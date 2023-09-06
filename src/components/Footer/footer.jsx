import { Link } from 'react-router-dom';
import logo from '/logo-white.svg';
import './footer.css';

export default function Footer() {
	return (
		<div id="component_footer">
			<div className="footer_flex-items">
				<Link to="/">
					<img
						src={logo}
						id="footer-logo"
						alt="DecorUs logo in footer section"
					/>
				</Link>
				<div className="footer-links">
					<p>Privacy Policy</p>
					<p>Terms & Conditions</p>
					<p>Find a Store</p>
					<p>Community</p>
					<p>Careers</p>
					<p>Partners</p>
					<p>Contact</p>
				</div>
			</div>
			<p className="footer-disclaimer">
				DISCLAIMER: This store is a product of fiction built by Khaled Ajaj.
				Khaled Ajaj does not own any pictures and fonts found on this site; all
				rights are reserved by their respective owners. The products on this
				store are fictional and exist for the sole purpose of presenting ability
				in designing e-commerce storefronts.
			</p>
		</div>
	);
}
