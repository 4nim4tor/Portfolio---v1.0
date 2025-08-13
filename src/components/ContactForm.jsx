import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

export default function ContactForm() {
	const form = useRef();
	const [status, setStatus] = useState("");
	const [messageSent, setMessageSent] = useState(false);

	const sendEmail = async (e) => {
		e.preventDefault();

		const botField = form.current["bot-field"].value;
		if (botField) {
			setStatus("Spam detected. Submission blocked.");
			return;
		}

		try {
			const result = await emailjs.sendForm(
				"service_u9be5sd",
				"template_xbcgd8z",
				form.current,
				"VM9X-R95eTZuRD2CN"
			);
			console.log("Success:", result);
			setStatus("Message sent successfully!");
			setMessageSent(true);
			form.current.reset();
		} catch (error) {
			console.error("Error:", error);
			setStatus("Failed to send message. Please try again.");
		}
	};

	useEffect(() => {
		if (messageSent) {
			const timer = setTimeout(() => {
				setMessageSent(false);
				setStatus(""); // Optional: clear status message too
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [messageSent]);

	return (
		<div className="form-container">
			<form
				ref={form}
				onSubmit={sendEmail}
				className={`contact-form ${messageSent ? "faded" : ""}`}
			>
				<label style={{ display: "none" }}>
					Do not fill this out if you're human:
					<input type="text" name="bot-field" />
				</label>
				<label>
					Name
					<input type="text" name="name" required />
				</label>
				<label>
					Email
					<input type="email" name="email" required />
				</label>
				<label>
					Subject
					<input type="text" name="subject" required />
				</label>
				<label>
					Message
					<textarea name="message" rows="5" required></textarea>
				</label>

				<button type="submit" className="submit-btn">
					Send Message
				</button>
				{status && <p className="form-status">{status}</p>}
			</form>
			{messageSent && (
				<div className="confirmation-overlay">
					<div className="confirmation-content">
						<span className="emoji">😊</span>
						<p>
							Thank you for contacting me!
							<br />
							I'll reply to you as soon as possible.
						</p>
					</div>
				</div>
			)}
		</div>
	);
}
