const GradeCard = ({
  rank,
  img,
  teamName,
  recommendations,
  likes,
  color,
  styles,
}) => {
  const rankClass = styles[`rank${rank}`] || '';
  const rankClassIcon = styles[`rankIcon${rank}`] || '';

  return (
    <div
      className={`${styles.priceCard} ${rankClass}`}
      style={{ backgroundColor: color }}
    >
      <div className={`${styles.iconBox} ${rankClassIcon}`}>
        <img src={img} className={`${styles.icon} ${rankClassIcon}`} />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div className={styles.teamName}>{teamName}</div>
        <div className={styles.recommandAndHeartGrid}>
          <div className={styles.boxInCard}>
            <div className={styles.text}>추천 횟수</div>
            <div className={styles.number1}>{recommendations}</div>
          </div>

          <div className={styles.boxInCard}>
            <div className={styles.text}>좋아요</div>
            <div className={styles.number2}>{likes}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradeCard;
