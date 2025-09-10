import WeightSlider from '../components/WeightSlider';
import LiveResultCard from '../components/LiveResultCard';
import Button from '../components/Button';
import './F1Test.css';
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
    <div className="f1test-page">
      <div className="f1test-title">F1Test</div>
      <div className="test-container">
        <div className="slider-section">
          <WeightSlider labels={f1SliderLabels} />
        </div>
        <div className="rank-section">
          <LiveResultCard type={'f1'} />
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

export default F1Test;
