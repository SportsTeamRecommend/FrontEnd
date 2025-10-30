import StatCard from './StatCard';
import PlayerCard from './PlayerCard';

import { playerData } from '../../utils/playerData';

const ResultCard = () => {
  return (
    <div>
      <div className="playerCardGrid">
        {playerData.map((player, key) => {
          return (
            <PlayerCard
              key={key}
              name={player.name}
              image={player.image}
              nationality={player.nationality}
              details={player.details}
              stats={player.stats}
            />
          );
        })}
      </div>
      <div className="statCardGrid">{/* <StatCard /> */}</div>
    </div>
  );
};

export default ResultCard;
