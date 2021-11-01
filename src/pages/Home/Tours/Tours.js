import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Tour from '../Tour/Tour';

const Tours = () => {
	const [tours, setTours] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/tours')
			.then(res => res.json())
			.then(data => setTours(data));
	}, []);


	return (
		<div style={{ paddingTop: '50px', marginBottom: '20px' }}>
			<Container>
				<h1 className="my-5 text-center fw-bold theme-secondary-text border-bottom pb-4">Popular Tourist Spots</h1>

				<Row xs={1} md={3} className="g-4">
					{
						tours.map(tour => <Tour
							key={tour._id}
							tour={tour}
						></Tour>)
					}
				</Row>
			</Container>
		</div>
	);
};

export default Tours;