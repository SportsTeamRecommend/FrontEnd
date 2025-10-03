import ferrariImg from './../../public/f.jpg';

const GradeCard2 = ({
  rank,
  icon,
  teamName,
  recommendations,
  likes,
  styles,
}) => {
  const rankClass = styles[`rank${rank}`] || '';

  return (
    <div className={`${styles.priceCard2} ${rankClass}`}>
      <div className={styles.itemInfo}>
        <div className={styles.grade}>#{icon}</div>
        <img src={ferrariImg} className={styles.icon} />
        <div className={styles.teamName}>{teamName}</div>
      </div>
      <div className={styles.itemStats}>
        <div className={styles.statGroup}>
          <div className={styles.text}>추천 횟수</div>
          <div className={styles.number1}>{recommendations}</div>
        </div>

        <div className={styles.statGroup}>
          <div className={styles.text}>좋아요</div>
          <div className={styles.number2}>{likes}%</div>
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${likes * 1.2}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default GradeCard2;
