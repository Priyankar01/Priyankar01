import React from 'react';
import './landing.css';
import LandingImg from '../../assets/coding-man-icon.png';
import { Link } from 'react-scroll';

function Landing() {
	return (
		<>
			<section id="landing">
				<div className="landing-wrapper">
					<div className="landing-left-section">
						<h1>
							Hello, I am
							<span className="name"> Priyankar Dutta</span>, <br />
							I'm a full-stack web developer.
						</h1>
						<Link
							activeClass="active"
							to="about"
							offset={-10}
							duration={100}
							className="landing-btn">
							View my work
						</Link>
					</div>
					<div className="landing-right-section">
						<img className="landing-image" src={LandingImg} alt="" />
					</div>
				</div>
			</section>
		</>
	);
}

export default Landing;
