import WeightSlider from '../components/test/WeightSlider';
import LiveResultCard from '../components/test/LiveResultCard';
import Button from '../components/Button';
import styles from './BaseballTest.module.css';
import { useNavigate } from 'react-router-dom';

const BaseballTest = () => {
  const baseballSliderLabels = [
    '팀 성적',
    '근본',
    '프랜차이즈 스타',
    '성장 가능성(평균 연령대)',
    '연고지',
    '팬덤 규모',
  ];

  const nav = useNavigate();
  const goResultPage = () => {
    nav('/result');
  };

  return (
    <div className={styles["baseball-test-page"]}>
      <div className={styles["baseball-test-title"]}>BaseballTest</div>
      <div className={styles["test-container"]}>
        <div className={styles["slider-section"]}>
          <WeightSlider labels={baseballSliderLabels} />
        </div>
        <div className={styles["rank-section"]}>
          <LiveResultCard type={'baseball'} />
        </div>
      </div>
      <div className={styles["button-section"]}>
        <Button
          text="결과 보러 가기"
          type="resultPage"
          onClick={goResultPage}
        />
      </div>
    </div>
  );
};

export default BaseballTest;
