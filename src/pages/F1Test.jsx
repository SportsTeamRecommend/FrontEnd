import WeightSlider from '../components/test/WeightSlider';
import LiveResultCard from '../components/test/LiveResultCard';
import Button from '../components/Button';
import styles from './F1Test.module.css';
import { useNavigate } from 'react-router-dom';

const F1Test = () => {
  const f1SliderLabels = [
    '팀 성적',
    '선수 경력(성적)',
    '근본',
    '프랜차이즈 or 유스',
    '언더독',
    '팬덤 규모',
  ];

  const nav = useNavigate();
  const goResultPage = () => {
    nav('/result');
  };

  return (
    <div className={styles["f1test-page"]}>
      <div className={styles["f1test-title"]}>F1Test</div>
      <div className={styles["test-container"]}>
        <div className={styles["slider-section"]}>
          <WeightSlider labels={f1SliderLabels} />
        </div>
        <div className={styles["rank-section"]}>
          <LiveResultCard type={'f1'} />
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

export default F1Test;
