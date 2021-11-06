import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { addToDb, getStoredCart } from '../../../utilities/fakedb';
import './PlaceOrder.css';

const PlaceOrder = () => {

	const { user } = useAuth();
	const [order, setOrder] = useState([]);
	const [singleTour, setSingleTour] = useState({});

	const { tourId } = useParams();

	const userNameRef = useRef();
	const userEmailRef = useRef();
	const address1Ref = useRef();
	const address2Ref = useRef();
	const cityRef = useRef();
	const districtRef = useRef();
	const zipRef = useRef();



	// const [products, setProducts] = useState([]);
	// const [cart, setCart] = useState([]);
	// const [displayProducts, setDisplayProducts] = useState([]);

	const handleAddService = e => {

		const serviceName = userNameRef.current.value;
		const serviceEmail = userEmailRef.current.value;
		const address1 = address1Ref.current.value;
		const address2 = address2Ref.current.value;
		const city = cityRef.current.value;
		const zip = zipRef.current.value;


		const newOrder = { serviceName, serviceEmail, address1, address2, city, zip, tourId }


		fetch('http://localhost:5000/myOrders', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(newOrder)
		})
			.then(res => res.json())
			.then(data => {
				if (data.insertedId) {
					alert('Order Placed Successfully!');

					e.target.reset();
				}
				const addedService = data;
				setSingleTour(addedService);
			})
		e.preventDefault();
	}

	useEffect(() => {
		const url = `http://localhost:5000/tours`;
		fetch(url)
			.then(res => res.json())
			.then(data => setOrder(data));
	}, []);

	useEffect(() => {
		const findTour = order.find(
			(tour) => tour._id === tourId
		);
		setSingleTour(findTour);
	}, [order]);

	return (
		<div style={{ margin: '100px auto' }}>
			<div className="container w-50">

				<h1 className="my-5 text-center fw-bold theme-secondary-text border-bottom pb-4">Place Order</h1>

				<form onSubmit={handleAddService}>
					<div className="mb-3">
						<input type="text" ref={userNameRef} className="form-control" defaultValue={user?.displayName} />
					</div>

					<div className="mb-3">
						<input type="text" ref={userEmailRef} className="form-control" defaultValue={user?.email} />
					</div>

					<div className="mb-3">
						<input type="text" ref={address1Ref} className="form-control" placeholder="Address Line: 1" />
					</div>

					<div className="mb-3">
						<input type="text" ref={address2Ref} className="form-control" placeholder="Address Line: 2" />
					</div>

					<div className="row g-3">
						<div className="col-sm-7">
							<input type="text" ref={cityRef} className="form-control" placeholder="City" aria-label="City" />
						</div>
						<div className="col-sm">
							<input type="text" ref={districtRef} className="form-control" placeholder="District" aria-label="State" />
						</div>
						<div className="col-sm">
							<input type="text" ref={zipRef} className="form-control" placeholder="Zip" aria-label="Zip" />
						</div>
					</div>

					<div className="my-3 w-75 mx-auto">
						<Card id="tour-card">
							<Card.Img style={{ height: '300px' }} variant="top" src={singleTour?.image} />

							<Card.Body className="tour-title text-center">
								<Card.Title>{singleTour?.name}

									<span className="text-white mx-5 fw-bolder">&#2547;{singleTour?.discountPrice}</span>
								</Card.Title>


							</Card.Body>
						</Card>
					</div>

					{/* <Link to="/myOrders"> */}
					<button
						type="submit" className="theme-primary-btn w-100 my-2 py-2">Place Order</button>
					{/* </Link> */}
				</form>

			</div>
		</div>
	);
};

export default PlaceOrder;