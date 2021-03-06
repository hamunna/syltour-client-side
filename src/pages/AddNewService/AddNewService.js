import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';

const AddNewService = () => {

	const [tours, setTours] = useState([]);

	const nameRef = useRef();
	const descriptionRef = useRef();
	const basicPriceRef = useRef();
	const discountPriceRef = useRef();
	const imageRef = useRef();

	const handleAddService = e => {

		const name = nameRef.current.value;
		const description = descriptionRef.current.value;
		const basicPrice = basicPriceRef.current.value;
		const discountPrice = discountPriceRef.current.value;
		const image = imageRef.current.value;

		const newService = { name, description, basicPrice, discountPrice, image };

		fetch('https://damp-retreat-63788.herokuapp.com/tours', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(newService)
		})
			.then(res => res.json())
			.then(data => {
				if (data.insertedId) {
					alert('Service Added Successfully!');

					e.target.reset();
				}
				const addedService = data;
				const newService = [...tours, addedService];

				setTours(newService);
			})
		e.preventDefault();
	}

	return (
		<div className="my-5 py-2">

			<Container>

				<h1 className="my-5 text-center fw-bold theme-secondary-text border-bottom pb-4">Add New Service</h1>

				<form onSubmit={handleAddService} className="w-50 mx-auto">

					<div class="row mb-3">
						<div class="col-sm-10 col-md-12">
							<input required ref={nameRef} type="text" class="form-control" placeholder="Place Name" />
						</div>
					</div>

					<div class="row mb-3">
						<div class="col-sm-10 col-md-12">
							<textarea required ref={descriptionRef} rows="5" className="w-100 form-control" placeholder="Description"></textarea>
						</div>
					</div>

					<div class="row">
						<div class="col">
							<input required ref={basicPriceRef} type="number" class="form-control" placeholder="Basic Price ৳" />
						</div>

						<div class="col">
							<input required ref={discountPriceRef} type="number" class="form-control" placeholder="Discount Price ৳" />
						</div>
					</div>

					<div class="row mt-3">
						<div class="col-sm-10 col-md-12">
							<input required ref={imageRef} type="url" class="form-control" placeholder="Image URL" />
						</div>
					</div>

					<button type="submit" class="theme-primary-btn my-3 py-1 w-100">Submit</button>
				</form>
			</Container>
		</div>
	);
};

export default AddNewService;