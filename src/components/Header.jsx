import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <h2 className="logo">[&lt;Dev /&gt;]</h2>
      <nav className="nav">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
