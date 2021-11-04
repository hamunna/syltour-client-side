import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {
	const { user } = useAuth();

	return (
		<div style={{ margin: '100px auto' }}>
			<div className="container w-50">

				<h1 className="my-5 text-center fw-bold theme-secondary-text border-bottom pb-4">Place Order</h1>

				<form>
					<div class="mb-3">
						<input required type="text" class="form-control" value={user?.displayName} />
					</div>

					<div class="mb-3">
						<input required type="text" class="form-control" value={user?.email} />
					</div>

					<div class="mb-3">
						<input required type="text" class="form-control" placeholder="Address Line: 1" />
					</div>

					<div class="mb-3">
						<input required type="text" class="form-control" placeholder="Address Line: 2" />
					</div>

					<div class="row g-3">
						<div class="col-sm-7">
							<input required type="text" class="form-control" placeholder="City" aria-label="City"/>
						</div>
						<div class="col-sm">
							<input required type="text" class="form-control" placeholder="State" aria-label="State"/>
						</div>
						<div class="col-sm">
							<input required type="text" class="form-control" placeholder="Zip" aria-label="Zip"/>
						</div>
					</div>

					<button type="submit" className="theme-primary-btn w-100 my-4 py-2">Place Order</button>

				</form>
			</div>
		</div>
	);
};

export default PlaceOrder;