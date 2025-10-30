import WeightSlider from '../components/test/WeightSlider';
import LiveResultCard from '../components/test/LiveResultCard';
import Button from '../components/common/Button';
import styles from './F1Test.module.css';
import { useNavigate } from 'react-router-dom';
import { f1SliderLabels, f1SliderCheckobx } from '../utils/testData';

const F1Test = () => {
  const nav = useNavigate();
  const goResultPage = () => {
    nav('/result');
  };

  return (
    <div className={styles['f1test-page']}>
      <h1 className={styles['f1test-title']}>F1 테스트</h1>
      <div className={styles['test-container']}>
        <div className={styles['slider-section']}>
          <WeightSlider
            labels={f1SliderLabels}
            checkLabels={f1SliderCheckobx}
            region={null}
          />
        </div>
        <div className={styles['rank-section']}>
          <LiveResultCard type={'f1'} />
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

export default F1Test;
