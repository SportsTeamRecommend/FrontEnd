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
import api from '../utils/axios';
import { useState } from 'react';

const F1Test = () => {
  const nav = useNavigate();
  const [data, setData] = useState([]);

  const recommend = async (teamName) => {
    try {
      await api.post(`/api/f1/${teamName}/recommended`);
    } catch (err) {
      console.log(err);
    }
  };

  const goResultPage = async () => {
    if (data && data.length > 0) {
      const resultData = { type: 'f1', teamName: data[0].name };

      // 세션 스토리지
      sessionStorage.setItem('testResult', JSON.stringify(resultData));
      await recommend(resultData.teamName);
      nav(`/result`);
    }
  };

  const handleSliderUpdate = async (payload) => {
    try {
      const res = await api.post('/api/f1/recommend', payload.payload);
      // console.log('POST 성공:', res.data);
      setData(res.data);
    } catch (err) {
      console.error('POST 실패:', err);
    }
  };

  const resultData = data.slice(0, 3);

  return (
    <Container>
      <Title>F1</Title>
      <TestContainer>
        <SliderSection>
          <WeightSlider
            labels={f1SliderLabels}
            checkLabels={f1SliderCheckobx}
            region={null}
            type={'f1'}
            onUpdate={handleSliderUpdate}
          />
        </SliderSection>
        <RankSection>
          <LiveResultCard type={'f1'} data={resultData} />
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
