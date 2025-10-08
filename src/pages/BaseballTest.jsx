import WeightSlider from '../components/test/WeightSlider';
import LiveResultCard from '../components/test/LiveResultCard';
import Button from '../components/common/Button';
import styles from './BaseballTest.module.css';
import { useNavigate } from 'react-router-dom';
import {
  baseballSliderLabels,
  baseballSliderCheckobx,
  region,
} from '../utils/testData';

const BaseballTest = () => {
  const nav = useNavigate();
  const goResultPage = () => {
    nav('/result');
  };

  return (
    <div className={styles['baseball-test-page']}>
      <h1 className={styles['baseball-test-title']}>Baseball</h1>
      <div className={styles['test-container']}>
        <div className={styles['slider-section']}>
          <WeightSlider
            labels={baseballSliderLabels}
            region={region}
            checkLabels={baseballSliderCheckobx}
          />
        </div>
        <div className={styles['rank-section']}>
          <LiveResultCard type={'baseball'} />
          <Button
            text="결과 보러 가기"
            type="resultPage"
            onClick={goResultPage}
          />
        </div>
      </div>
    </div>
  );
};

export default BaseballTest;
