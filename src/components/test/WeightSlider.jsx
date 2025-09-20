import styles from './WeightSlider.module.css';
import { useState } from 'react';

const WeightSlider = ({ labels }) => {
  const [values, setValues] = useState(Array(labels.length).fill(0));

  const handleChange = (idx, newValue) => {
    const updated = [...values];
    updated[idx] = newValue;
    setValues(updated);
  };

  return (
    <div className={styles["weight-slider"]}>
      <div className={styles["weight-slider__header"]}>
        <h2>팀에서 무엇을 중요하게 생각하나요?</h2>
        <p>슬라이더를 오른쪽으로 움직여 본인의 성향을 표현해 보세요</p>
      </div>
      <div className={styles["weight-slider__list"]}>
        {labels.map((label, idx) => (
          <div key={idx} className={styles["weight-slider__item"]}>
            <span className={styles["weight-slider__label"]}>{label}</span>
            <input
              className={styles["weight-slider__range"]}
              type="range"
              value={values[idx]}
              min="0"
              max="10"
              step="0.1"
              onChange={(e) => handleChange(idx, Number(e.target.value))}
            />
            <span className={styles["weight-slider__value"]}>{values[idx]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeightSlider;
