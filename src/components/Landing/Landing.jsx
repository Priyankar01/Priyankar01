import React from 'react';
import './landing.css';
import LandingImg from '../../assets/coding-man-icon.png';
import { Link } from 'react-scroll';

function Landing() {
	return (
		<>
			<section id="landing">
				<div class="landing-wrapper">
					<div class="landing-left-section">
						<h1>
							Hello, I am
							<span class="name"> Priyankar Dutta</span>, <br />
							I'm a full-stack web developer.
						</h1>
						<Link
							activeClass="active"
							to="about"
							offset={-10}
							duration={100}
							class="landing-btn">
							View my work
						</Link>
					</div>
					<div class="landing-right-section">
						<img class="landing-image" src={LandingImg} alt="" />
					</div>
				</div>
			</section>
		</>
	);
}

export default Landing;
