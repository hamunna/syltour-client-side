import React from 'react';
import { Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHandPointRight } from '@fortawesome/free-solid-svg-icons';
const arrow = <FontAwesomeIcon icon={faArrowRight} />
const pointing = <FontAwesomeIcon icon={faHandPointRight} />

const About = () => {
	return (
		<div id="about" style={{ paddingTop: '50px', marginBottom: '20px' }}>
			<Container>
				<div className="d-md-flex d-md-column d-sm-flex flex-sm-row gap-4 my-5 py-5">

					{/* Left side of About */}
					<div className="w-100">
						<img src="https://theadventurerr.com/imgs/nice-696x518.jpg" alt="" className="img-fluid" />
					</div>

					{/* Right Side of About */}
					<div className="w-100">
						<h5 className="text-uppercase text-secondary fw-bolder">About us</h5>
						<h2 className="text-uppercase fw-bold theme-secondary-text border-bottom mb-3 pb-2">Our Motives</h2>

						<h4 className="theme-primary-text text-capitalize">travel motive has different factors and patterns</h4>

						<p className="text-secondary">It’s important to clarify the definition of travel motive, especially in relation to the purpose of the journey. Motive isn’t the same thing as purpose. Motives are the underlying psychological reasons why we travel.</p>

						<ul className="motives-list">
							<li>{pointing} Novelty seeking</li>
							<li>{pointing} Escape/relax</li>
							<li>{pointing} Relationship</li>
							<li>{pointing} Self-development</li>
						</ul>

						<button className="theme-secondary-btn color-white mb-5 px-4 py-2">Know more
							<span className="mx-2">{arrow}</span>
						</button>

					</div>


				</div>
			</Container>
		</div>
	);
};

export default About;