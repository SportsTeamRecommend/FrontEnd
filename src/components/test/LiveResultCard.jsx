import styles from './LiveResultCard.module.css';

const mokeData = {
  f1: [
    { team: 'Red Bull Racing' },
    { team: 'Mercedes-AMG' },
    { team: 'Ferrari' },
  ],
  baseball: [
    { team: '롯데 자이언츠' },
    { team: '두산 베어스' },
    { team: 'NC 다이노스' },
  ],
};

const LiveResultCard = ({ type }) => {
  return (
    <div className={styles["live-result-card"]}>
      <h2 className={styles["live-result-card__title"]}>실시간 결과</h2>
      <ol className={styles["live-result-card__list"]}>
        {mokeData[type].map((item, idx) => (
          <li key={idx} className={styles["live-result-card__item"]}>
            <span className={styles["live-result-card__team"]}>{item.team}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default LiveResultCard;
