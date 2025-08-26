import "../styles/Header.css";
import { scrollToSection } from "../utilities/scrollToSection";

export default function Header() {
	const handleClick = (e, id) => {
		e.preventDefault();
		scrollToSection(id, -50);
	};

	return (
		<header className="header">
			<h2 className="logo typewriter-mini">{"[<Dev />]"}</h2>
			<nav className="nav">
				<a
					href="#home"
					onClick={(e) => handleClick(e, "home")}
					className="active"
				>
					Home
				</a>
				<a href="#about" onClick={(e) => handleClick(e, "about")}>
					About
				</a>
				<a href="#projects" onClick={(e) => handleClick(e, "projects")}>
					Projects
				</a>
				<a href="#skills" onClick={(e) => handleClick(e, "skills")}>
					Skills
				</a>
				<a href="#contact" onClick={(e) => handleClick(e, "contact")}>
					Contact
				</a>
			</nav>
		</header>
	);
}

{
	/* <h2 className="logo">
				<span className="typewriter-bracket">[</span>
				<span className="typewriter-core">&lt;Dev</span>
				<span className="typewriter-close"> /&gt;]</span>
			</h2> */
}
