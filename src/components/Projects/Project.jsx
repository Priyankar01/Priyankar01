import React from 'react';
import './projects.css';
import Bar from '../../assets/header-bar-white.png';

function Project() {
	return (
		<>
			<section id="projects">
				<div className="project-wrapper">
					<p className='project-heading'>PROJECTS</p>
					<span>
						<img src={Bar} alt="" width="80px" />
					</span>
					<div>
						<p className='ps'>I am still deciding what projects I should showcase.</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default Project;
