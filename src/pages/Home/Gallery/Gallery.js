import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const Gallery = () => {

	return (
		<div id="gallery" style={{ marginBottom: '20px', paddingTop: '40px' }}>
			<div className="container-fluid">

				<h1 className="my-5 text-center fw-bold theme-secondary-text border-bottom pb-4">Our Best Memories</h1>

				<div>
					<div class="row">
						<div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
							<img
								src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
								class="w-100 shadow-1-strong rounded mb-4"
								alt=""
							/>

							<img
								src="https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg"
								class="w-100 shadow-1-strong rounded mb-4"
								alt=""
							/>
						</div>

						<div class="col-lg-4 mb-4 mb-lg-0">
							<img
								src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg"
								class="w-100 shadow-1-strong rounded mb-4"
								alt=""
							/>

							<img
								src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
								class="w-100 shadow-1-strong rounded mb-4"
								alt=""
							/>
						</div>

						<div class="col-lg-4 mb-4 mb-lg-0">
							<img
								src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
								class="w-100 shadow-1-strong rounded mb-4"
								alt=""
							/>

							<img
								src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg"
								class="w-100 shadow-1-strong rounded mb-4"
								alt=""
							/>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};

export default Gallery;