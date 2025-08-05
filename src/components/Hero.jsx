import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="profile-circle">
        <img src="../assets/Profile-Pic.png" alt="Profile portrait of Artur" />
      </div>
      <h1>[Artur Jaworski]</h1>
      <p className="subtitle">Front-End Web Developer</p>
      <p className="description">
        Passionate about creating innovative web solutions that combine
        beautiful design with powerful functionality. Specializing in modern
        JavaScript frameworks and scalable backend architectures.
      </p>
      <div className="hero-buttons">
        <button>View My Work</button>
        <button className="outlined">Get In Touch</button>
      </div>
    </section>
  );
}
