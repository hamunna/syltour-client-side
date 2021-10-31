import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Tour.css';

const Tour = ({ tour }) => {
	const { id, image, name, description, basicPrice, discountPrice, ratings, rated } = tour;
	return (
		<Col>
			<Card id="tour-card">
				<Card.Img variant="top" src={image} />

				<Card.Body className="tour-title">
					<Card.Title>{name}</Card.Title>
				</Card.Body>

				<Card.Body>
					<Card.Text>{description.slice(0, 80)}...</Card.Text>
					<span className="bg-warning px-3 py-1">{ratings}/5 &#9733;</span>
					<span className="mx-2">( {rated} )</span>
					<h5 className="my-3 fw-bold">Package: <span className="theme-primary-text fw-bolder">&#2547; {discountPrice}</span> <span className="text-secondary text-decoration-line-through">{basicPrice}</span></h5>
				</Card.Body>

				<button className="theme-primary-btn book-now">Book Now</button>
			</Card>
		</Col>
	);
};

export default Tour;