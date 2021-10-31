import React from 'react';
import { Container } from 'react-bootstrap';
import './GetTravelTips.css';

const GetTravelTips = () => {
	return (
		<div className="get-tips">
			<div className="get-tips-overlay py-5">
				<Container>
					<div className="text-center">
						<div className="mb-4 text-white">
							<h3 className="fs-3 fw-bold text-center">Get Travelling Tips</h3>
							<p>Travelling isn’t the same thing as auditing, reasons must be cleared.</p>
						</div>

						<div id="get-tips-filed">
							<input type="email" name="get-offers" id="get-offers" placeholder="Your Email" />
							<button className="btn-pill">Get Tips</button>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default GetTravelTips;