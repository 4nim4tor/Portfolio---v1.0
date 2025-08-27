import "../styles/Contact.css";

import GitHubIcon from "../assets/GitHub.svg?react";
import LinkedInIcon from "../assets/LinkedIn.svg?react";
import ContactForm from "./subcomponents/ContactForm";
import AccessibleSection from "./subcomponents/AccessibleSection";
import SocialLink from "./subcomponents/SocialLink";

export default function Contact() {
	return (
		<AccessibleSection
			id="contact"
			title="Let’s Work Together"
			className="contact section"
		>
			<div className="contact-wrapper">
				<div className="contact-left">
					<h3 className="contact-subtitle">Get In Touch</h3>
					<p className="contact-description">
						Ready to bring your ideas to life? I’m always excited to work on new
						projects and collaborate with amazing people. Let’s discuss how we
						can create something incredible together.
					</p>
					<div className="social-links">
						<SocialLink
							href="https://www.linkedin.com/in/artur-jaworski-679287352/"
							label="Visit my LinkedIn"
						>
							<LinkedInIcon className="linked-in-icon" />
						</SocialLink>
						<SocialLink
							href="https://github.com/4nim4tor"
							label="Visit my Github"
						>
							<GitHubIcon className="git-hub-icon" />
						</SocialLink>
						<SocialLink></SocialLink>
					</div>
				</div>
				<div className="contact-right">
					<ContactForm />
				</div>
			</div>
		</AccessibleSection>
	);
}
