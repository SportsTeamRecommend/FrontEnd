const PlayerCard = ({ name, image, nationality, details, stats }) => {
  console.log(name);
  return (
    <div>
      <h3>{name}</h3>
      <h3>{image}</h3>
      <h3>
        {nationality.flagIcon} {nationality.country}
      </h3>
      <ul>
        {details.map((detail, idx) => (
          <li key={idx}>
            {detail.icon} {detail.label}
          </li>
        ))}
      </ul>
      <ul>
        {stats.map((stat, idx) => (
          <li key={idx}>
            {stat.label}: {stat.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerCard;
