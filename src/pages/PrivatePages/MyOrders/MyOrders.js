import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const MyOrders = () => {

	// const [tours, setTours] = useState([]);
	// useEffect(() => {
	// 	fetch('http://localhost:5000/tours')
	// 		.then(res => res.json())
	// 		.then(data => setTours(data));
	// }, []);

	return (
		<div className="my-5 py-3">
			<Container>

			<h1 className="my-5 text-center fw-bold theme-secondary-text border-bottom pb-4">My Orders</h1>

				<div className="card mb-3" style={{ maxWidth: '540px' }}>
					< div className="row g-0" >
						<div className="col-md-4">
							<img src="..." className="img-fluid rounded-start" alt="..." />
						</div>

						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
								<button className="btn btn-danger">Remove</button>
							</div>
						</div>

					</div >
				</div >
			</Container>
		</div>
	);
};

export default MyOrders;