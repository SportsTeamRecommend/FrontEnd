const GradeCard = ({
  rank,
  icon,
  teamName,
  recommendations,
  likes,
  styles,
}) => {
  const rankClass = styles[`rank${rank}`] || '';

  return (
    <div className={`${styles.priceCard} ${rankClass}`}>
      <div className={styles.iconBox}>
        <div className={styles.icon}>{icon}</div>
      </div>
      <div className={styles.teamName}>{teamName}</div>
      <div className={styles.recommandAndHeartGrid}>
        <div className={styles.boxInCard}>
          <div className={styles.text}>추천 횟수</div>
          <div className={styles.number1}>{recommendations}</div>
        </div>
        <div className={styles.boxInCard}>
          <div className={styles.text}>좋아요</div>
          <div className={styles.number2}>{likes}</div>
        </div>
      </div>
    </div>
  );
};

export default GradeCard;
