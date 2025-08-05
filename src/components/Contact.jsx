export default function Contact() {
  return (
    <section id="contact" style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <h2 style={{ color: "var(--accent-color)" }}>Let’s Work Together</h2>
      <form
        style={{
          maxWidth: "500px",
          margin: "2rem auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input type="text" placeholder="Name" style={{ padding: "0.75rem" }} />
        <input
          type="email"
          placeholder="Email"
          style={{ padding: "0.75rem" }}
        />
        <textarea
          placeholder="Your message"
          rows="5"
          style={{ padding: "0.75rem" }}
        ></textarea>
        <button
          type="submit"
          style={{
            backgroundColor: "var(--accent-color)",
            border: "none",
            padding: "1rem",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Send
        </button>
      </form>
    </section>
  );
}
