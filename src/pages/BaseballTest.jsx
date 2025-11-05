import WeightSlider from '../components/test/WeightSlider';
import LiveResultCard from '../components/test/LiveResultCard';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import {
  baseballSliderLabels,
  baseballSliderCheckobx,
  region,
} from '../utils/testData';
import {
  Container,
  Title,
  TestContainer,
  RankSection,
  SliderSection,
} from './TestPageCache.styles';

const BaseballTest = () => {
  const nav = useNavigate();
  const goResultPage = () => {
    nav('/result');
  };

  return (
    <Container>
      <Title>KBO</Title>
      <TestContainer>
        <SliderSection>
          <WeightSlider
            labels={baseballSliderLabels}
            region={region}
            checkLabels={baseballSliderCheckobx}
          />
        </SliderSection>
        <RankSection>
          <LiveResultCard type={'kbo'} />
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

export default BaseballTest;
