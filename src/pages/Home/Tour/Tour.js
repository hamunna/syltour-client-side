import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Tour.css';

const Tour = ({ tour }) => {
	const { _id, image, name, description, basicPrice, discountPrice, ratings, rated } = tour;
	return (
		<Col>
			<Card id="tour-card">
				<Card.Img variant="top" src={image} />

				<Card.Body className="tour-title">
					<Card.Title>{name}</Card.Title>
				</Card.Body>

				<Card.Body>
					<Card.Text>{description.slice(0, 80)}...</Card.Text>
					<span className="bg-warning px-3 py-1">{ratings || 0}/5 &#9733;</span>
					<span className="mx-2">( {rated || 0} )</span>
					<h5 className="my-3 fw-bold">Package: <span className="theme-primary-text fw-bolder">&#2547; {discountPrice}</span> <span className="text-secondary text-decoration-line-through">{basicPrice}</span></h5>
				</Card.Body>

				<Link className="theme-primary-btn text-center" to={`/placeOrder/${_id}`}>
					<button className="btn text-white">Book Now</button>
				</Link>
			</Card>
		</Col>
	);
};

export default Tour;