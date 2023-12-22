import React from 'react';
import './navabr.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import Logo from '../../assets/logo.png';

function Navbar() {
	return (
		<>
			<nav className="navbar">
				<div className="navbar-wrapper">
					<div className="navbar-logo-section">
						<img className="navbar-logo" src={Logo} alt="" />
					</div>
					<div className="navbar-link-section">
						<ul className="navbar-link-list">
							<li>
								<Link activeClass="active" to="about" offset={-10} duration={100}>
									About
								</Link>
							</li>
							<li>
								<Link
									activeClass="active"
									to="experience"
									offset={0}
									duration={100}>
									Experience
								</Link>
							</li>
							<li>
								<Link
									activeClass="active"
									to="projects"
									offset={0}
									duration={100}>
									Projects
								</Link>
							</li>
							<li>
								<Link
									activeClass="active"
									to="speaking"
									offset={0}
									duration={100}>
									Speaking
								</Link>
							</li>
							<li>
								<Link
									activeClass="active"
									to="contact"
									offset={0}
									duration={100}>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
