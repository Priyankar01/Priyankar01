import React from 'react';
import './about.css';
import { Link } from 'react-scroll';
import Dynamic from '../../assets/dynamic.png';
import Proactive from '../../assets/proactive.png';
import Timing from '../../assets/timing.png';
import Responsive from '../../assets/responsive.png';
import Logo from '../../assets/coding-man-icon.png';
import Bar from '../../assets/header-bar-black.png';

function About() {
	return (
		<>
			<section id="about">
				<div className="about-wrapper">
					<div className="about-heading">
						<h1>ABOUT</h1>
						<span>
							<img src={Bar} alt="" width="80px" />
						</span>
					</div>

					<div className="about-points">
						<ul className="about-points-list">
							<li className="about-list-item">
								<div className="about-list-item-img">
									<div>
										<img src={Timing} alt="" width="50px" />
									</div>
								</div>
								<div className="about-list-item-topic">Fast</div>
								<div className="about-list-item-tag">
									Fast load times and lag free interaction, my highest priority.
								</div>
							</li>
							<li className="about-list-item">
								<div className="about-list-item-img">
									<div>
										<img src={Responsive} alt="" width="50px" />
									</div>
								</div>
								<div className="about-list-item-topic">Responsive</div>
								<div className="about-list-item-tag">
									My layouts will work on any device, big or small.
								</div>
							</li>
							<li className="about-list-item">
								<div className="about-list-item-img">
									<div>
										<img src={Proactive} alt="" width="50px" />
									</div>
								</div>
								<div className="about-list-item-topic">Intuitive</div>
								<div className="about-list-item-tag">
									Strong preference for easy to use, intuitive UX/UI.
								</div>
							</li>
							<li className="about-list-item">
								<div className="about-list-item-img">
									<div>
										<img src={Dynamic} alt="" width="50px" />
									</div>
								</div>
								<div className="about-list-item-topic">Dynamic</div>
								<div className="about-list-item-tag">
									Websites don't have to be static, I love making pages come to
									life.
								</div>
							</li>
						</ul>
					</div>
					<div className="about-personal">
						<div className="about-personal-info">
							<div>
								<img className="about-personal-img" src={Logo} alt="My Pic" />
							</div>
							<div className="about-personal-content">
								<h1>Who's this guy?</h1>
								<p>
									I'm <strong>Priyankar Dutta</strong>, and I wear the hat of a{' '}
									<strong>Full Stack Developer</strong>. This platform is more
									than just a digital space—it's a testament to my enduring
									passion for websites, applications, technologies and IT. My
									journey as a developer has been a fascinating exploration of
									evolution and learning. Join me in this vibrant community,
									where we share not just information but a collective
									enthusiasm for web development. Thank you for being a part of
									our journey!
								</p>

								<div className="about-personal-skills">
									<div className="skills-list-section">
										<ul className="skills-list">
											<li>
												<img src="https://skillicons.dev/icons?i=git" alt="" />
											</li>
											<li>
												<img
													src="https://skillicons.dev/icons?i=react"
													alt=""
												/>
											</li>
											<li>
												<img src="https://skillicons.dev/icons?i=js" alt="" />
											</li>

											<li>
												<img
													src="https://skillicons.dev/icons?i=express"
													alt=""
												/>
											</li>
											<li>
												<img
													src="https://skillicons.dev/icons?i=nodejs"
													alt=""
												/>
											</li>
											<li>
												<img
													src="https://skillicons.dev/icons?i=mongodb"
													alt=""
												/>
											</li>
											<li>
												<img
													src="https://skillicons.dev/icons?i=mysql"
													alt=""
												/>
											</li>
											<li>
												<img src="https://skillicons.dev/icons?i=java" alt="" />
											</li>
											<li>
												<img src="https://skillicons.dev/icons?i=html" alt="" />
											</li>
											<li>
												<img src="https://skillicons.dev/icons?i=css" alt="" />
											</li>
										</ul>
									</div>
								</div>
								<button className="content-btn">
									<Link
										activeClass="active"
										to="footer"
										offset={-10}
										duration={100}>
										Connect With Me
									</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;
