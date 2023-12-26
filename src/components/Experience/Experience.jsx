import React from 'react';
import './experience.css';
import Bar from '../../assets/header-bar.png';

function Experience() {
	return (
		<>
			<section id="experience">
				<div className="exp-wrapper">
					<div className="exp-heading">
						<h1>EXPERIENCE</h1>
						<span>
							<img src={Bar} alt="" width="80px" />
						</span>
					</div>
					<div className="exp-section">
						<div className="exp-left-section">
							<ul>
								<li></li>
								<li></li>
							</ul>
						</div>
						<div className="exp-right-section"></div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Experience;
