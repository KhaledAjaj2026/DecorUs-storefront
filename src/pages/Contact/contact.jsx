import { useState } from 'react';
import { ScrollRestoration } from 'react-router-dom';
import NavBar from '/src/components/NavBar/navbar';
import Footer from '/src/components/Footer/footer';
import 'aos/dist/aos.css';
import './contact.css';

export default function Contact() {
	// Data retrieved from user input from contact form.
	const [contactData, setContactData] = useState({
		name: '',
		email: '',
		message: '',
	});
	// Handler for inputting data to state variable.
	const handleContactDataInput = (event) => {
		setContactData((prevContactData) => {
			return {
				...prevContactData,
				[event.target.name]: event.target.value,
			};
		});
		if (result.length > 0) setResult('');
	};
	// Result of message being sent or not.
	const [result, setResult] = useState('');
	// Status while message is being sent.
	const [status, setStatus] = useState('Submit');
	// Reset contact form to empty once input is sumbitted.
	const resetContactData = () => {
		setContactData({ name: '', email: '', message: '' });
	};
	// Handles user-input submit.
	const handleSubmit = async (e) => {
		setResult('');
		e.preventDefault();
		setStatus('Sending...');

		const { name, email, message } = e.target.elements;

		let details = {
			name: name.value,
			email: email.value,
			message: message.value,
		};

		try {
			let response = await fetch('http://localhost:4000/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
				body: JSON.stringify(details),
			});
			setStatus('Submit');
			let submitResult = await response.json();
			console.log(submitResult);

			if (submitResult.status === 'success') {
				setResult('Message Sent!');
				resetContactData();
			} else if (submitResult.status === 'fail') {
				alert('Message failed to send.');
			}
		} catch (error) {
			console.error(error);
			setStatus('Submit');
			setResult('Issues with submitting message.');
		}
	};
	return (
		<>
			<NavBar />
			<div id="route_contact">
				<h1 data-aos="zoom-out" data-aos-duration="1000">
					Get In Touch
				</h1>
				<p>Let us know of anything you need, we are always happy to help.</p>
				<form id="contact-form" method="POST" onSubmit={handleSubmit}>
					<label htmlFor="customer-name">Name: </label>
					<input
						type="text"
						autoComplete="name"
						name="name"
						height={200}
						required={true}
						id="customer-name"
						value={contactData.name}
						onChange={handleContactDataInput}
					/>
					<label htmlFor="customer-email">Email: </label>
					<input
						type="email"
						autoComplete="email"
						name="email"
						required={true}
						id="customer-email"
						value={contactData.email}
						onChange={handleContactDataInput}
					/>
					<label htmlFor="customer-message">Message: </label>
					<textarea
						name="message"
						id="customer-message"
						maxLength={350}
						placeholder="Maximum 350 characters."
						cols="30"
						rows="8"
						required={true}
						value={contactData.message}
						onChange={handleContactDataInput}
					></textarea>
					<button type="submit" className="animating-button">
						{status}
					</button>
				</form>
			</div>
			<Footer />
			<ScrollRestoration />
		</>
	);
}
