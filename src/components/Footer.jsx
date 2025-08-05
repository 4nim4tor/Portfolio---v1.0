export default function Footer() {
  return (
    <footer
      style={{
        padding: "2rem",
        textAlign: "center",
        borderTop: "1px solid var(--accent-color)",
      }}
    >
      <p style={{ fontSize: "0.9rem" }}>
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </footer>
  );
}
