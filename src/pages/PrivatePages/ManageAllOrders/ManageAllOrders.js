import React, { useEffect, useState } from 'react';
import { Alert, Container } from 'react-bootstrap';

const ManageAllOrders = () => {
	const [orders, setOrders] = useState([]);

	const [order, setOrder] = useState([]);


	useEffect(() => {
		fetch('https://damp-retreat-63788.herokuapp.com/myOrders')
			.then(res => res.json())
			.then(data => setOrders(data));
	}, []);

	// Deleting Order
	const handleDeleteOrder = id => {

		const proceed = window.confirm('Are you sure, You want to Delete?');

		if (proceed) {
			const url = `https://damp-retreat-63788.herokuapp.com/myOrders/${id}`;
			fetch(url, {
				method: 'DELETE'
			})
				.then(res => res.json())
				.then(data => {
					if (data.deletedCount > 0) {
						alert('deleted successfully!');
						const remainingOrders = orders.filter(order => order._id !== id)
						setOrders(remainingOrders);
					}
				})
		}

	}


	//==========================================================================================

	// Phone Update
	const handlePendingChange = e => {
		const updatedPhone = e.target.value;
		const updatedUser = { phone: updatedPhone };

		setOrder(updatedUser);
	}

	const handleOrderStatus = id => {

		const url = `http://localhost:5000/myOrders/${id}`;
		fetch(url, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(order)
		})
			.then(res => res.json())
			.then(data => {
				if (data.modifiedCount > 0) {
					alert("Order Approved!");
					if (alert) {
						window?.location?.reload()
					}
				}
			});

	}

	//==========================================================================================

	return (
		<div className="my-5 py-3">
			<Container>

				<h1 className="my-5 text-center fw-bold theme-secondary-text border-bottom pb-4">Manage All Orders</h1>

				{orders.length >= 1 ?
					orders?.map(order => <div className="card mb-3" id="ordered-item">
						< div className="row g-0" >

							<div className="col-md-4 my-3">
								<img src={order?.singleTour?.image} className="img-fluid rounded-start" alt="..." />
							</div>

							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">{order?.singleTour?.name} | {order.status !== null ?
										<span className="text-warning fw-bold pending" value="Pending">Pending...</span>
										:
										<span className="text-success fw-bold accepted" value="Approved">Approved!</span>
									}
									</h5>

									<p className="card-text">{order?.singleTour?.description}</p>

									<h5 className="fs-4 fw-bolder mb-4"> ৳{order?.singleTour?.discountPrice}</h5>
									<button className="btn btn-danger mr-5"
										onClick={() => handleDeleteOrder(order._id)}
									>Remove</button>

									{order.status !== null &&
										<>
											<input className="d-none" type="text" onChange={handlePendingChange} value="Approved" />

											<button onClick={() => handleOrderStatus(order._id)} className="btn btn-warning mx-2">Approve Order</button>
										</>
									}
								</div>
							</div>
						</div>
					</div >) : <Alert variant="danger" className="text-center w-50 mx-auto">No Order to Show!</Alert>
				}

			</Container>
		</div>
	);
};

export default ManageAllOrders;