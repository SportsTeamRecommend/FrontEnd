import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';

const CardDescriptionWrapper = styled.div`
  padding-top: 10px;
  margin-bottom: 70px;
  gap: 4px;
  width: 97%;
`;

const LikeShareButton = styled.button`
  width: 100px;
  height: 50px;
  flex-shrink: 0;

  color: white;
  border-radius: 10px;
  /* border: 2px solid #fff; */
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  background-color: ${(props) =>
    props.like ? 'rgba(248, 92, 92, 0.93)' : 'rgba(86, 91, 98, 0.86)'};
`;

const DescriptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 70px;
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

const TryButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const RetryButton = styled(Button)`
  background: rgba(86, 91, 98, 0.86);
`;
const KboButton = styled(Button)`
  background: rgba(25, 38, 71, 0.86);
`;

const ResultActions = ({ onClickLike, type }) => {
  const nav = useNavigate();

  const text = type === 'f1' ? 'KBO' : 'F1';
  const color = type === 'f1' ? '#2563EB' : '#EF4444';

  const handleRetry = () => {
    if (type === 'f1') {
      nav('/test/f1');
    } else {
      nav('/test/baseball');
    }
  };
  const handleGoTo = () => {
    if (type === 'f1') {
      nav('/test/baseball');
    } else {
      nav('/test/f1');
    }
  };

  const onClickShare = () => {
    toast.info('아직 지원하지 않는 기능입니다.');
  };

  return (
    <CardDescriptionWrapper>
      <ButtonGroup>
        <LikeShareButton onClick={onClickLike} like={'like'}>
          ❤️ 좋아요
        </LikeShareButton>
        <LikeShareButton onClick={onClickShare}>🔗 공유하기</LikeShareButton>
      </ButtonGroup>
      <DescriptionGroup>
        {/* <Title>용어 설명</Title>
        {type === 'f1' ? (
          <Description>
            WCC : 1년동안 가장 많은 포인트를 가져간 팀이 차지하는 팀 우승
            <br />
            WDC : 1년동안 가장 많은 포인트를 획득한 드라이버가 차지하는 개인
            우승
            <br />
            포디움 : 각 경기마다 3위 안에 든 횟수 <br />
            우승 : 각 경기마다 1위한 횟수 <br />
          </Description>
        ) : null} */}
      </DescriptionGroup>
      <TryButtonGroup>
        <RetryButton onClick={handleRetry}>다시 테스트하기</RetryButton>
        <KboButton onClick={handleGoTo} style={{ background: color }}>
          {text} 테스트하기
        </KboButton>
      </TryButtonGroup>
    </CardDescriptionWrapper>
  );
};

export default ResultActions;
