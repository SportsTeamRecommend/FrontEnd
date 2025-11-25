import WeightSlider from '../components/test/WeightSlider';
import LiveResultCard from '../components/test/LiveResultCard';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { f1SliderLabels, f1SliderCheckobx } from '../utils/testData';
import {
  Container,
  Title,
  TestContainer,
  RankSection,
  SliderSection,
} from './TestPage.styles';

const F1Test = () => {
  const nav = useNavigate();
  const goResultPage = () => {
<<<<<<< Updated upstream
    nav('/result');
=======
    if (data && data.length > 0) {
      const resultData = { type: 'f1', teamName: data[0].name };

      // 세션 스토리지
      sessionStorage.setItem('testResult', JSON.stringify(resultData));

      nav(`/result`);
    }
>>>>>>> Stashed changes
  };

  return (
    <Container>
      <Title>F1</Title>
      <TestContainer>
        <SliderSection>
          <WeightSlider
            labels={f1SliderLabels}
            checkLabels={f1SliderCheckobx}
            region={null}
          />
        </SliderSection>
        <RankSection>
          <LiveResultCard type={'f1'} />
          <Button
            text="결과 보러 가기"
            type="resultPage"
            onClick={goResultPage}
          />
        </RankSection>
      </TestContainer>
    </Container>
  );
};

export default F1Test;
