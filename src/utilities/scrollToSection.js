export const scrollToSection = (id, offset = 0) => {
	const element = document.getElementById(id);
	if (element) {
		const top = element.getBoundingClientRect().top + window.scrollY + offset;
		window.scrollTo({ top, behavior: "smooth" });
	}
};
