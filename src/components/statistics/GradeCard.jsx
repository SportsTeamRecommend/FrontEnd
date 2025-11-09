import styled, { css } from 'styled-components';

const PriceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 22vh;
  padding: 12px;
  border-radius: 10px;
  background: ${({ $color }) => $color || 'rgba(55, 65, 81, 0.86)'};
  transition: all 0.2s ease;

  ${({ $rank }) =>
    $rank === 1 &&
    css`
      min-height: 28vh;
    `}

  ${({ $rank }) =>
    $rank === 2 &&
    css`
      min-height: 25vh;
    `}
`;

const IconBox = styled.div`
  padding: 10px;
  border-radius: 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);

  ${({ $rank }) =>
    $rank === 1 &&
    css`
      width: 100px;
      height: 100px;
    `}

  ${({ $rank }) =>
    $rank === 2 &&
    css`
      width: 80px;
      height: 80px;
    `}

  ${({ $rank }) =>
    $rank === 3 &&
    css`
      width: 60px;
      height: 60px;
    `}
`;

const TeamImage = styled.img`
  border-radius: 6px;

  ${({ $rank }) =>
    $rank === 1 &&
    css`
      width: 90px;
    `}

  ${({ $rank }) =>
    $rank === 2 &&
    css`
      width: 70px;
    `}

  ${({ $rank }) =>
    $rank === 3 &&
    css`
      width: 50px;
    `}
`;

const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamName = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
`;

const RecommendAndHeartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid rgb(250, 250, 250);
`;

const BoxInCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 4px;
  margin: 20px;
  flex-direction: column;
`;

const Text = styled.div`
  color: #fff;
  font-size: 14px;
`;

const Recommedation = styled.div`
  color: #ffcc00;
`;

const Like = styled.div`
  color: #9cc2ff;
`;

const GradeCard = ({ rank, img, teamName, recommendations, likes, color }) => {
  return (
    <PriceCard $rank={rank} $color={color}>
      <IconBox $rank={rank}>
        <TeamImage src={img} $rank={rank} alt={`${teamName} logo`} />
      </IconBox>

      <TeamInfo>
        <TeamName>{teamName}</TeamName>

        <RecommendAndHeartGrid>
          <BoxInCard>
            <Text>추천 횟수</Text>
            <Recommedation>{recommendations}</Recommedation>
          </BoxInCard>

          <BoxInCard>
            <Text>좋아요</Text>
            <Like>{likes}%</Like>
          </BoxInCard>
        </RecommendAndHeartGrid>
      </TeamInfo>
    </PriceCard>
  );
};

export default GradeCard;
