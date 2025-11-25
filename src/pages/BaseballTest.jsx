import WeightSlider from '../components/test/WeightSlider';
import LiveResultCard from '../components/test/LiveResultCard';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import {
  baseballSliderLabels,
  baseballSliderCheckobx,
  regionList,
} from '../utils/testData';
import {
  Container,
  Title,
  TestContainer,
  RankSection,
  SliderSection,
} from './TestPage.styles';
import { useState } from 'react';
import api from '../utils/axios';

const BaseballTest = () => {
  const nav = useNavigate();
  const [data, setData] = useState([]);

  const goResultPage = () => {
    if (data && data.length > 0) {
      const resultData = { type: 'kbo', teamName: data[0].name };

      // 세션 스토리지
      sessionStorage.setItem('testResult', JSON.stringify(resultData));

      nav(`/result`);
    }
  };

  const [data, setData] = useState([]);

  const handleSliderUpdate = async ({ payload, userRegion }) => {
    // region 선택 안 했으면 API 호출 X
    if (!userRegion) return;

    try {
      const res = await api.post(
        `/api/kbo/recommend?userRegion=${userRegion}`,
        payload
      );
      // console.log('POST 성공:', res.data);
      setData(res.data);
    } catch (err) {
      console.error('POST 실패:', err);
    }
  };

  const resultData = data.slice(0, 3);


  return (
    <Container>
      <Title>KBO</Title>
      <TestContainer>
        <SliderSection>
          <WeightSlider
            labels={baseballSliderLabels}
            region={regionList}
            checkLabels={baseballSliderCheckobx}
            type={'kbo'}
            onUpdate={handleSliderUpdate}
          />
        </SliderSection>
        <RankSection>
          <LiveResultCard type={'kbo'} data={resultData} />
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
