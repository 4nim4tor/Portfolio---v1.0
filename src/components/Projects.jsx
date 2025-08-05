export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "4rem 2rem", textAlign: "center" }}
    >
      <h2 style={{ color: "var(--accent-color)" }}>Projects</h2>
      <div style={{ marginTop: "2rem" }}>
        <div
          style={{
            border: "1px solid var(--accent-color)",
            padding: "2rem",
            margin: "1rem auto",
            maxWidth: "600px",
            borderRadius: "12px",
          }}
        >
          <h3>Project 1</h3>
          <p>
            A short description of what the project does and what tech it uses.
          </p>
          <a href="#" style={{ color: "var(--accent-color)" }}>
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}
