import styles from './WeightSlider.module.css';
import { useState } from 'react';

const WeightSlider = ({ labels, checkLabels, region }) => {
  const [values, setValues] = useState(Array(labels.length).fill(0));
  const [selectedOptions, setSelectedOptions] = useState(
    Array(labels.length).fill(null)
  );
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleChange = (idx, newValue) => {
    const updated = [...values];
    updated[idx] = newValue;
    setValues(updated);
  };

  const handleOptionChange = (groupIdx, itemIdx) => {
    const updated = [...selectedOptions];
    updated[groupIdx] = itemIdx;
    setSelectedOptions(updated);
  };

  return (
    <div className={styles['weight-slider']}>
      <div className={styles['weight-slider__header']}>
        <h2>팀에서 무엇을 중요하게 생각하나요?</h2>
        <p>슬라이더를 오른쪽으로 움직여 본인의 성향을 표현해 보세요</p>
      </div>
      <div className={styles['weight-slider__list']}>
        {labels.map((label, idx) => (
          <div key={idx} className={styles['weight-slider__item']}>
            <div className={styles['weight-slider__label-wrapper']}>
              <span className={styles['weight-slider__label']}>{label}</span>
              {label === '연고지' && region && (
                <select
                  className={styles['weight-slider__select']}
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                >
                  <option value="">선택하세요</option>
                  {region.map((r, rIdx) => (
                    <option key={rIdx} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <input
              className={styles['weight-slider__range']}
              type="range"
              value={values[idx]}
              min="0"
              max="10"
              step="0.1"
              onChange={(e) => handleChange(idx, Number(e.target.value))}
            />
            <span className={styles['weight-slider__value']}>
              {values[idx].toFixed(1)}
            </span>
            {checkLabels[idx] && (
              <div className={styles['weight-slider__checkboxes']}>
                {checkLabels[idx].map((checkLabel, checkIdx) => (
                  <label
                    key={checkIdx}
                    className={`${styles['weight-slider__checkbox-label']} ${selectedOptions[idx] === checkIdx ? styles['weight-slider__checkbox-label--selected'] : ''}`}
                  >
                    <input
                      type="radio"
                      name={`option-group-${idx}`}
                      checked={selectedOptions[idx] === checkIdx}
                      onChange={() => handleOptionChange(idx, checkIdx)}
                    />
                    <span>{checkLabel}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeightSlider;
