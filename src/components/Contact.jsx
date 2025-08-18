import "../styles/Contact.css";

import GitHubIcon from "../assets/GitHub.svg?react";
import LinkedInIcon from "../assets/LinkedIn.svg?react";
import ContactForm from "./ContactForm";

export default function Contact() {
	return (
		<section className="contact section" id="contact">
			<h2 className="section-title typewriter-animation-1">
				Let’s Work Together
			</h2>

			<div className="contact-wrapper">
				<div className="contact-left">
					<h3 className="contact-subtitle">Get In Touch</h3>
					<p className="contact-description">
						Ready to bring your ideas to life? I’m always excited to work on new
						projects and collaborate with amazing people. Let’s discuss how we
						can create something incredible together.
					</p>
					<div className="social-links">
						<a
							href="https://www.linkedin.com/in/artur-jaworski-679287352/"
							className="social-icon"
							target="_blank"
							rel="noopener noreferrer"
						>
							<LinkedInIcon className="linked-in-icon" />
						</a>
						<a
							href="https://github.com/4nim4tor"
							className="social-icon"
							target="_blank"
							rel="noopener noreferrer"
						>
							<GitHubIcon className="git-hub-icon" />
						</a>
						<a
							href="#"
							className="social-icon"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={LinkedInIcon} alt="TBD" className="???-icon" />
						</a>
					</div>
				</div>
				<div className="contact-right">
					<ContactForm />
				</div>
			</div>
		</section>
	);
}
