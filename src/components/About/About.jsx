import React, { useEffect } from 'react';
import './about.css';
import Dynamic from '../../assets/dynamic.png';
import Proactive from '../../assets/proactive.png';
import Timing from '../../assets/timing.png';
import Responsive from '../../assets/responsive.png';
import Logo from '../../assets/coding-man-icon.png';


function About() {
	return (
		<>
			<section id="about">
				<div class="about-wrapper">
					<div class="about-heading">
						<h1>About</h1>
					</div>
					<div class="about-points">
						<ul class="about-points-list">
							<li class="about-list-item">
								<div class="about-list-item-img">
									<div>
										<img src={Timing} alt="" width="50px" />
									</div>
								</div>
								<div class="about-list-item-topic">Fast</div>
								<div class="about-list-item-tag">
									Fast load times and lag free interaction, my highest priority.
								</div>
							</li>
							<li class="about-list-item">
								<div class="about-list-item-img">
									<div>
										<img src={Responsive} alt="" width="50px" />
									</div>
								</div>
								<div class="about-list-item-topic">Responsive</div>
								<div class="about-list-item-tag">
									My layouts will work on any device, big or small.
								</div>
							</li>
							<li class="about-list-item">
								<div class="about-list-item-img">
									<div>
										<img src={Proactive} alt="" width="50px" />
									</div>
								</div>
								<div class="about-list-item-topic">Intuitive</div>
								<div class="about-list-item-tag">
									Strong preference for easy to use, intuitive UX/UI.
								</div>
							</li>
							<li class="about-list-item">
								<div class="about-list-item-img">
									<div>
										<img src={Dynamic} alt="" width="50px" />
									</div>
								</div>
								<div class="about-list-item-topic">Dynamic</div>
								<div class="about-list-item-tag">
									Websites don't have to be static, I love making pages come to
									life.
								</div>
							</li>
						</ul>
					</div>
					<div class="about-personal">
						<div class="about-personal-info">
							<div>
								<img src={Logo} alt="My Pic" />
							</div>
							<div>
								<h1>Who's this guy?</h1>
								<p>
									I'm <strong>Priyankar Dutta</strong>, and I wear the hat of
									<strong>Full Stack Developer</strong>. This platform is more
									than just a digital space—it's a testament to my enduring
									passion for websites, applications, technolgies and IT. My
									journey in [briefly mention your journey or experience] has
									been a fascinating exploration of [key aspects of your
									mission]. Here at [Your Name or Brand], our commitment is to
									[briefly describe the core principles or values you uphold].
									We aspire to [mention key goals or objectives], offering you
									[briefly describe the unique value or experience] as we
									navigate the exciting realms of [your niche]. Join me in this
									vibrant community, where we share not just information but a
									collective enthusiasm for [your niche]. Thank you for being a
									part of our journey!
								</p>
							</div>
						</div>
						<div class="about-personal-skills"></div>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;