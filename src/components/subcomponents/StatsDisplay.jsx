export default function StatsDisplay({ stats }) {
	return (
		<div className="about-stats">
			{stats.map((stat, index) => (
				<div className="stat" key={index}>
					<span>{stat.value}</span>
					<small>{stat.label}</small>
				</div>
			))}
		</div>
	);
}
