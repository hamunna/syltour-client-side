import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

const Footer = () => {
	return (
		<footer>
			<Container>
				<div className="d-md-flex d-md-column d-sm-flex flex-sm-row justify-content-between py-4">


					{/* Services */}
					<div className="d-flex w-100 justify-content-around mt-5">
						<div>

							<h5 className="fw-bolder">Services</h5>
							<p><small><a href="#" className="text-decoration-none text-white">Travel Guide</a></small></p>
							<p><small><a href="#" className="text-decoration-none text-white">Hotel Service</a></small></p>
							<p><small><a href="#" className="text-decoration-none text-white">Adventure</a></small></p>
							<p><small><a href="#" className="text-decoration-none text-white">Holiday Package</a></small></p>
							<p><small><a href="#" className="text-decoration-none text-white">Jungle Camp</a></small></p>

						</div>

						{/* Useful Links */}
						<div>

							<h5 className="fw-bolder">Useful Links</h5>
							<p><small><a href="#" className="text-decoration-none text-white">About Us</a></small></p>
							<p><small><a href="#" className="text-decoration-none text-white">Our Services</a></small></p>
							<p><small><a href="#" className="text-decoration-none text-white">Terms &amp; Policy</a></small></p>
							<p><small><a href="#" className="text-decoration-none text-white">Contact Us</a></small></p>
							<p><small><a href="#" className="text-decoration-none text-white">Affiliation</a></small></p>

						</div>
					</div>

					{/* Address and Social Icons */}
					<div className="d-flex w-100 justify-content-around mt-5">

						{/* Health Support */}
						<div>

							<h5 className="fw-bolder">Support</h5>
							<p><small><a href="#" className="text-decoration-none text-white">Help</a></small></p>
							<p><small><a href="#" className="text-decoration-none text-white">Terms of Service</a></small></p>
							<p><small><a href="#" className="text-decoration-none text-white">Privacy Policy</a></small></p>
							<p><small><a href="#" className="text-decoration-none text-white">Our Pricing</a></small></p>
							<p><small><a href="#" className="text-decoration-none text-white">Testimonials</a></small></p>

						</div>

						<div>

							<Link to="/home" className="text-decoration-none">
								<span className="theme-secondary-text fs-3 fw-bold">Syl</span>
								<span className="fs-3 text-white fw-bold">Tour</span>
							</Link>
							<p><small><strong>Location: </strong>South Chowhatta, Sylhet</small></p>
							<p>
								<small><strong>Phone-1: </strong>+8801787654321</small>
								<br />
								<small><strong>Phone-2: </strong>+8801943218765</small>
							</p>
							
							<p><small><strong>Email: </strong>info@syltour.com</small></p>

							<div className="d-flex gap-4">
								<SocialIcon bgColor="white" url="https://www.facebook.com" style={{ height: 30, width: 30 }} />
								<SocialIcon bgColor="white" url="https://www.twitter.com" style={{ height: 30, width: 30 }} />
								<SocialIcon bgColor="white" url="https://www.linkedin.com" style={{ height: 30, width: 30 }} />
								<SocialIcon bgColor="white" url="https://www.pinterest.com" style={{ height: 30, width: 30 }} />
							</div>

						</div>
					</div>

				</div>

			</Container>

			<Container>
				<div className="py-3 border-top-1 text-center border-top border-secondary">
					<p>Copyright &copy; 2021 &bull; SylTour &bull; all rights reserved.</p>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;