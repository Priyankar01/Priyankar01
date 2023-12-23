import React from 'react';
import './footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Link } from 'react-scroll';

function Footer() {
	return (
		<>
			<section id="footer">
				<div className="footer-wrapper">
					<div className="footer-top-btn">
						<Link activeClass="active" to="landing" offset={-10} duration={100}>
							<span>
								<KeyboardDoubleArrowUpIcon fontSize="large" />
							</span>
						</Link>
					</div>
					<div className="footer-links">
						<ul className="footer-link-list">
							<li className="footer-link-item">
								<a
									href="https://github.com/Priyankar01"
									target="_blank"
									rel="noreferrer">
									<GitHubIcon fontSize="large" />
								</a>
							</li>
							<li className="footer-link-item">
								<a
									href="https://www.linkedin.com/in/priyankardutta/"
									target="_blank"
									rel="noreferrer">
									<LinkedInIcon fontSize="large" />
								</a>
							</li>
							<li className="footer-link-item">
								<a
									href="https://www.facebook.com/priyankar.dutta.73/"
									target="_blank"
									rel="noreferrer">
									<FacebookIcon fontSize="large" />
								</a>
							</li>
							<li className="footer-link-item">
								<a
									href="https://www.instagram.com/priyankar_dutta01/"
									target="_blank"
									rel="noreferrer">
									<InstagramIcon fontSize="large" />
								</a>
							</li>
						</ul>
					</div>
					<div className="footer-copyright">
						PRIYANKAR DUTTA <span>© 2023</span>{' '}
					</div>
				</div>
			</section>
		</>
	);
}

export default Footer;
