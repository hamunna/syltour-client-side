import React from 'react';
import { Container } from 'react-bootstrap';

const HeroSection = () => {
	return (
		<div id="hero-section">
			<div className="hero-bg-overlay">
				<Container>
					<div className="hero-content text-uppercase text-white">
						<h1>Welcome!</h1>
						<h3>to the land of</h3>
						<h1>360 Awlia</h1>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default HeroSection;