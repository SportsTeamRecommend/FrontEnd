import styled from 'styled-components';

const CardDescriptionWrapper = styled.div`
  padding-top: 10px;
  margin-bottom: 70px;
  gap: 4px;
  width: 97%;
`;

const DescriptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;
const BaseText = styled.div`
  color: #fff;
  font-family: Inter;

  font-style: normal;
  font-weight: 700;
`;
const Title = styled(BaseText)`
  font-size: 14px;
  line-height: normal;
`;
const Description = styled(BaseText)`
  font-size: 10px;
  line-height: 14px;
  margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;
const Button = styled.button`
  border-radius: 15px;
  background: rgba(86, 91, 98, 0.86);
  width: 246px;
  height: 46px;
  flex-shrink: 0;

  border-radius: 15px;

  display: flex;

  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const RetryButton = styled(Button)`
  background: rgba(86, 91, 98, 0.86);
`;
const KboButton = styled(Button)`
  background: rgba(25, 38, 71, 0.86);
`;

const ResultActions = () => {
  return (
    <CardDescriptionWrapper>
      <DescriptionGroup>
        <Title>용어 설명</Title>
        <Description>
          WCC : 1년동안 가장 많은 포인트를 가져간 팀이 차지하는 팀 우승
          <br />
          WDC : 1년동안 가장 많은 포인트를 획득한 드라이버가 차지하는 개인 우승
          <br />
          포디움 : 각 경기마다 3위 안에 든 횟수 <br />
          우승 : 각 경기마다 1위한 횟수 <br />
        </Description>
      </DescriptionGroup>
      <ButtonGroup>
        <RetryButton>다시 테스트하기</RetryButton>
        <KboButton>KBO 테스트하기</KboButton>
      </ButtonGroup>
    </CardDescriptionWrapper>
  );
};

export default ResultActions;
