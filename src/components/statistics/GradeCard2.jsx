// 각 팀의 보색 계산해서 progressBar 색 return
const getComplementaryColor = (hex) => {
  if (!hex || hex.length < 4) {
    return null;
  }

  let color = hex.startsWith('#') ? hex.slice(1) : hex;

  if (color.length === 3) {
    color = color
      .split('')
      .map((char) => char + char)
      .join('');
  }
  const num = parseInt(color, 16);

  const r = (num >> 16) & 0xff;
  const g = (num >> 8) & 0xff;
  const b = num & 0xff;

  const invertedR = 255 - r;
  const invertedG = 255 - g;
  const invertedB = 255 - b;

  const invertedHex = ((invertedR << 16) | (invertedG << 8) | invertedB)
    .toString(16)
    .padStart(6, '0');

  return `#${invertedHex}`;
};

const GradeCard2 = ({
  rank,
  img,
  teamName,
  recommendations,
  likes,
  color,
  styles,
}) => {
  const rankClass = styles[`rank${rank}`] || '';
  const progressColor = getComplementaryColor(color);

  return (
    <div
      className={`${styles.priceCard2} ${rankClass}`}
      style={{ backgroundColor: color }}
    >
      <div className={styles.itemInfo}>
        <div className={styles.textGroup}>
          <div className={styles.grade}>#{rank}</div>
        </div>
        <div
          className={styles.iconBox2}
          style={{
            boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.4)',
          }}
        >
          <img src={img} className={styles.icon} />
        </div>

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
            style={{
              width: `${likes * 1.2}%`,
              backgroundColor: progressColor,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default GradeCard2;
