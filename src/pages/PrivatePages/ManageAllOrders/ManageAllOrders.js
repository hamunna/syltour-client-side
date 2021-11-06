import React, { useEffect, useState } from 'react';
import { Alert, Container } from 'react-bootstrap';

const ManageAllOrders = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/myOrders')
			.then(res => res.json())
			.then(data => setOrders(data));
	}, []);

	// Deleting User
	const handleDeleteUser = id => {
		
		const proceed = window.confirm('Are you sure, You want to Delete?');

		if (proceed) {
			const url = `http://localhost:5000/myOrders/${id}`;
			fetch(url, {
				method: 'DELETE'
			})
				.then(res => res.json())
				.then(data => {
					if (data.deletedCount > 0) {
						alert('deleted successfully!');
						const remainingUsers = orders.filter(order => order._id !== id)
						setOrders(remainingUsers);
					}
				})
		}

	}

	return (
		<div className="my-5 py-3">
			<Container>

				<h1 className="my-5 text-center fw-bold theme-secondary-text border-bottom pb-4">Manage All Orders</h1>


				{ orders.length >= 1 ?
					orders?.map(order => <div className="card mb-3">
						< div className="row g-0" >

							<div className="col-md-4 my-3">
								<img src={order?.singleTour?.image} className="img-fluid rounded-start" alt="..." />
							</div>

							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">{order?.singleTour?.name} | <span className="text-warning">Pending...</span> <span className="text-success">Accepted!</span>
									</h5>

									<p className="card-text">{order?.singleTour?.description}</p>
									<button className="btn btn-danger"
									onClick={()=>handleDeleteUser(order._id)}
									>Remove</button>
									<button className="btn btn-warning mx-5">Update</button>
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