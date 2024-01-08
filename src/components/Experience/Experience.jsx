import React, { useState } from 'react';
import './experience.css';
import Bar from '../../assets/header-bar-black.png';

function Experience() {
	const [selectedExperience, setSelectedExperience] = useState(null);

	const experiences = [
		{
			name: 'WNS',
			description:
				'From December 2022 to August 2023, as an Associate in Operations based in Noida, India, I effectively managed remote server operations, maintaining peak performance by monitoring and promptly resolving 93% of issues, while implementing crucial updates. My role involved fostering seamless communication with parking lot managers, resulting in the successful resolution of 95% of operational challenges through collaborative efforts. I played a key role in enhancing the efficiency of parking lot systems, providing technical support and achieving a notable 20% improvement in their overall functioning. Additionally, my oversight of remote server operations and timely technical support contributed to a commendable 12% increase in the overall performance of the parking lot systems.',
		},
		{
			name: 'YTechRaj',
			description:
				"From April 2021 to June 2021, I served as a Frontend Developer Intern in Delhi, India, where I played a pivotal role in the creation of frontend interfaces for over 5 website projects. Through collaborative efforts with clients and cross-functional teams, I achieved a remarkable 28% increase in project efficiency. My focus on developing responsive websites led to an impressive 25% enhancement in clients' online presence and a substantial 10-15% improvement in sales. Leveraging my expertise in HTML5, CSS, and JavaScript, I implemented advanced functionality that contributed to an almost 30% reduction in page load times. Additionally, I spearheaded effective communication strategies, resulting in a notable 12% increase in client satisfaction and the seamless execution of projects.",
		},
	];

	const handleExperienceClick = (experienceName) => {
		setSelectedExperience(experienceName);
	};

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
								{experiences.map((experience) => (
									<li key={experience.name}>
										<button
											onClick={() => handleExperienceClick(experience.name)}>
											{experience.name}
										</button>
									</li>
								))}
							</ul>
						</div>
						<div className="exp-right-section">
							{selectedExperience && (
								<div>
									<h6>{selectedExperience}</h6>
									<p>
										{
											experiences.find((exp) => exp.name === selectedExperience)
												.description
										}
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Experience;
