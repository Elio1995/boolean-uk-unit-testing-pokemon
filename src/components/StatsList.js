function StatsList(props) {
  const { stats } = props;

  return (
    <ul className="stats-list">
      {stats.map((statItem, index) => {
        const { stat, base_stat } = statItem;
        return (
          <li key={index}>
            <h3>{stat.name}</h3>
            <span>{base_stat}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default StatsList;
