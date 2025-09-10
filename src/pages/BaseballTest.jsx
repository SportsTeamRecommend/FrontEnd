import WeightSlider from '../components/WeightSlider';
import LiveResultCard from '../components/LiveResultCard';
import Button from '../components/Button';
import './BaseballTest.css';
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
    <div className="baseball-test-page">
      <div className="baseball-test-title">BaseballTest</div>
      <div className="test-container">
        <div className="slider-section">
          <WeightSlider labels={baseballSliderLabels} />
        </div>
        <div className="rank-section">
          <LiveResultCard type={'baseball'} />
        </div>
      </div>
      <div className="button-section">
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
