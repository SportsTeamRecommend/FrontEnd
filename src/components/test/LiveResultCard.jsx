import styles from './LiveResultCard.module.css';
import { liveResultData } from '../../utils/liveResultData';
import { getTeamColor } from '../../utils/teamColor';

const LiveResultCard = ({ type }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Top 3</h2>
      <ol className={styles.list}>
        {liveResultData[type].map((item, idx) => (
          <li
            key={idx}
            className={styles.item}
            style={{ backgroundColor: getTeamColor(type, item.name) }}
          >
            <span>{idx + 1}</span>
            <img src={item.img} alt={item.team} className={styles.image} />
            <span>{item.name}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default LiveResultCard;
