import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const userIcon = <FontAwesomeIcon icon={faUserCircle} />
const search = <FontAwesomeIcon icon={faSearch} />

const Header = () => {
	const { user, logOut } = useAuth();


	return (
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

				<Nav className="ms-auto h4">
					<Nav.Link href="#features" className="mx-3 h5">{search}</Nav.Link>

					{!user?.email ?
						<Nav.Link as={Link} to="/signIn">{userIcon}</Nav.Link>

						//Show this part if a user Logged In
						: <NavDropdown className="theme-secondary-text" title={userIcon} id="navbarScrollingDropdown">

							<img className="d-block mx-auto" style={{width: '60px', borderRadius: '50%'}} src={user?.photoURL} alt="" />
							
							<p className="px-2">Hello, <span style={{fontSize: '12px'}}>{user?.displayName}</span></p>

							<NavDropdown.Item href="#action4">My Orders</NavDropdown.Item>
							<NavDropdown.Divider />

							<NavDropdown.Item href="#action6">Add New Service</NavDropdown.Item>
							<NavDropdown.Divider />

							<NavDropdown.Item href="#action5">Manage All Orders</NavDropdown.Item>
							<NavDropdown.Divider />

							<button className="btn w-100 p-0 bg-warning" onClick={logOut}>
								<NavDropdown.Item href="#action3">LogOut</NavDropdown.Item>
							</button>

						</NavDropdown>
					}
				</Nav>


			</Container>
		</Navbar>
	);
};

export default Header;