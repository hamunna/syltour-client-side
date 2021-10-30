import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../common/Header/Header';

const HeroSection = () => {
	return (
		<div id="hero-section">
			<div className="hero-bg-overlay">
				<Header></Header>

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