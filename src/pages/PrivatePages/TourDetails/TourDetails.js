import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const TourDetails = () => {

	const { tourId } = useParams();

	const [toursDetails, setToursDetails] = useState([]);

	const [singleTour, setSingleTour] = useState({});

	useEffect(() => {
		fetch("http://localhost:5000/tours")
			.then((res) => res.json())
			.then((data) => setToursDetails(data));
	}, []);

	useEffect(() => {
		const findTour = toursDetails.find(
			(tour) => tour._id === tourId
		);
		setSingleTour(findTour);
	}, [toursDetails]);

	return (
		<div style={{ marginTop: '200px' }}>

			<Container>

				<h2> This is Tour Details Page{tourId}</h2>

				<h1>{singleTour}</h1>
				
				{/* <Card className="w-50 my-5 mx-auto">
					<Card.Img className="img-fluid" variant="top" src={singleTour?.image} />
					<Card.Body>
						<Card.Title className="text-uppercase fw-bold theme-primary-text">{singleTour?.name}</Card.Title>
						<Card.Text>{singleTour?.description}</Card.Text>

						<div className="card-header">
							<h5 className="fw-bold text-center">Services Includes</h5>
						</div>
{/* 
						<ul className="list-group list-group-flush">

							{singleTour?.services?.map(tour => <li className="list-group-item">{tour}</li>)}

						</ul> */}

					{/* </Card.Body> */}
				{/* </Card> */}
			</Container>

		</div>
	);
};

export default TourDetails;