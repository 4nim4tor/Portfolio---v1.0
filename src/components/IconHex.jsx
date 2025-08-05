export default function IconHex({ icon, label }) {
  return (
    <div className="hex-container">
      <div className="hex">
        <img src={icon} alt={label} className="hex-icon" />
      </div>
      <p className="hex-label">{label}</p>
    </div>
  );
}
