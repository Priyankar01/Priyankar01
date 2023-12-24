import './contact.css';
import React from 'react';

function Contact() {
	return (
		<>
			<section id="contact">
				<svg
					preserveAspectRatio="none"
					viewBox="0 0 100 102"
					height="75"
					width="100%"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					class="svgcolor-light">
					<path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
				</svg>
				<div className="contact-wrapper">
					<div className="contact-heading">
						<p>CONTACT</p>
					</div>
					<div className="contact-question">
						<p>Have a question or want to work together?</p>
					</div>
					<div className="contact-form">
						<input
							className="userName"
							id="userName"
							type="text"
							placeholder="Name"
							spellCheck="false"
						/>
						<input
							className="userEmai"
							id="userEmail"
							type="email"
							placeholder="Enter Email"
						/>
						<textarea
							id="userMessage"
							name="userMessage"
							placeholder="Your Message"></textarea>
						<p onClick="" id="contact-btn" className="contact-btn">
							Submit
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default Contact;
