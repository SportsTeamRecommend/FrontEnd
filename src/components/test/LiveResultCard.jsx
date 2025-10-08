import styles from './LiveResultCard.module.css';
import { liveResultData } from '../../utils/liveResultData';

const LiveResultCard = ({ type }) => {
  return (
    <div className={styles['live-result-card']}>
      <h2 className={styles['live-result-card__title']}>실시간 순위</h2>
      <ol className={styles['live-result-card__list']}>
        {liveResultData[type].map((item, idx) => (
          <li key={idx} className={styles['live-result-card__item']}>
            <span>{idx + 1}</span>
            <span>{item.team}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default LiveResultCard;
