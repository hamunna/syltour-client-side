import React from 'react';
import { Container } from 'react-bootstrap';

const HeroSection = () => {
	return (
		<div id="hero-section">
			<div className="hero-bg-overlay">
				<Container>
					<div className="hero-content text-uppercase text-white">
						<h1>Welcome!</h1>
						<span>to the land of <em>360</em> Awlia</span>

						<div id="hero-email-filed">
							<input type="email" name="get-offers" id="get-offers" placeholder="Your Email" />
							<button className="btn-pill">Get Travel Tips</button>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default HeroSection;