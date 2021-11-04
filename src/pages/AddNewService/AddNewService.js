import React from 'react';
import { Container } from 'react-bootstrap';

const AddNewService = () => {
	return (
		<div className="my-5 py-2">

			<Container>

				<h1 className="my-5 text-center fw-bold theme-secondary-text border-bottom pb-4">Add New Service</h1>

				<form className="w-50 mx-auto">

					<div class="row mb-3">
						<div class="col-sm-10 col-md-12">
							<input type="text" class="form-control" placeholder="Place Name" />
						</div>
					</div>

					<div class="row mb-3">
						<div class="col-sm-10 col-md-12">
							<textarea rows="5" className="w-100 form-control" placeholder="Description"></textarea>
						</div>
					</div>

					<div class="row">
						<div class="col">
							<input type="text" class="form-control" placeholder="Basic Price" />
						</div>

						<div class="col">
						<input type="text" class="form-control" placeholder="Discount Price" />
						</div>
					</div>

					<button type="submit" class="theme-primary-btn my-3 py-1 w-100">Submit</button>
				</form>
			</Container>
		</div>
	);
};

export default AddNewService;