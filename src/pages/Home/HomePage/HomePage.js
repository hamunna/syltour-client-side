import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Gallery from '../Gallery/Gallery';
import GetTravelTips from '../GetTravelTips/GetTravelTips';
import HeroSection from '../HeroSection/HeroSection';
import Tours from '../Tours/Tours';

const HomePage = () => {
	return (
		<div>
			<HeroSection></HeroSection>

			<Tours></Tours>

			<About></About>

			<GetTravelTips></GetTravelTips>

			{/* <Blog></Blog> */}

			<Gallery></Gallery>
		</div>
	);
};

export default HomePage;