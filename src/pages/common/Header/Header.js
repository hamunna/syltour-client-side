import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
	return (
		<header>
			<Navbar bg="transparent" variant="dark" className="border-bottom" fixed="top">
				<Container>
					<Navbar.Brand href="#home" className="fw-bold h4">
						<span className="theme-secondary-text">Syl</span>
						<span className="">Tour</span>
					</Navbar.Brand>

					<Nav className="me-auto">
						<Nav.Link href="/home">Home</Nav.Link>
						<Nav.Link href="/home#places">Best Places</Nav.Link>
						<Nav.Link href="/home#blog">Blog</Nav.Link>
					</Nav>

					<Nav className="ms-auto">
						<Nav.Link href="#features">Serch Icon</Nav.Link>
						<Nav.Link href="#pricing">SignIn Icon</Nav.Link>
					</Nav>

					{/* Show this part if a user Logged In */}
					<Nav className="ms-auto">
						<Nav.Link href="#features">Search Icon</Nav.Link>

						<NavDropdown title="ProfileImg" id="navbarScrollingDropdown">


							<NavDropdown.Item href="#action4">My Orders</NavDropdown.Item>
							<NavDropdown.Divider />

							<NavDropdown.Item href="#action6">Add New Service</NavDropdown.Item>
							<NavDropdown.Divider />

							<NavDropdown.Item href="#action5">Manage All Orders</NavDropdown.Item>
							<NavDropdown.Divider />

							<NavDropdown.Item href="#action3">LogOut</NavDropdown.Item>
						</NavDropdown>

					</Nav>

				</Container>
			</Navbar>
		</header>
	);
};

export default Header;