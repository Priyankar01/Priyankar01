import React from 'react';
import './navabr.css';
import { Link } from 'react-scroll';
import Logo from '../../assets/logo.png';
import MenuIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
	return (
		<>
			<nav className="navbar">
				<div className="navbar-wrapper">
					<div className="navbar-logo-section">
						<img className="navbar-logo" src={Logo} alt="" />
					</div>
					<div className="navbar-link-section">
						<ul className="navbar-link-list ">
							<li>
								<Link
									activeClass="active"
									to="about"
									offset={-10}
									duration={100}
									onClick={handleLinkClick}>
									About
								</Link>
							</li>
							<li>
								<Link
									activeClass="active"
									to="projects"
									offset={0}
									duration={100}
									onClick={handleLinkClick}>
									Projects
								</Link>
							</li>
							<li>
								<Link
									activeClass="active"
									to="experience"
									offset={0}
									duration={100}
									onClick={handleLinkClick}>
									Experience
								</Link>
							</li>

							<li>
								<Link
									activeClass="active"
									to="contact"
									offset={0}
									duration={100}
									onClick={handleLinkClick}>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<span
						onClick={toggleNavbar}
						className="navbar-menu-bar"
						id="menu-icon">
						<MenuIcon fontSize="large" />
					</span>
					<span
						onClick={toggleNavbar}
						className="navbar-menu-bar"
						id="close-icon"
						style={{ display: 'none' }}>
						<CloseIcon fontSize="large" />
					</span>
				</div>
			</nav>
		</>
	);
}

function toggleNavbar() {
	const menuIcon = document.getElementById('menu-icon');
	const closeIcon = document.getElementById('close-icon');
	const links = document.querySelector('.navbar-link-list');

	// Toggle the visibility of the menu icon and close icon
	menuIcon.style.display = menuIcon.style.display === 'none' ? 'block' : 'none';
	closeIcon.style.display =
		closeIcon.style.display === 'none' ? 'block' : 'none';

	// Toggle the visibility of the navigation links
	links.classList.toggle('show-links');
}
function handleLinkClick() {
	const menuIcon = document.getElementById('menu-icon');
	const closeIcon = document.getElementById('close-icon');
	const links = document.querySelector('.navbar-link-list');

	// Set the display explicitly to show the menu icon and hide the close icon
	menuIcon.style.display = 'block';
	closeIcon.style.display = 'none';

	// Hide the navigation links
	links.classList.remove('show-links');
}

export default Navbar;
