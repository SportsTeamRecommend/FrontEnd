import styled, { css } from 'styled-components';

const breakpoints = {
  mobile: '767px',
};

const PriceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 220px;
  max-width: 180px;
  padding: 12px;
  border-radius: 10px;
  background: ${({ $color }) => $color || 'rgba(55, 65, 81, 0.86)'};
  transition: all 0.2s ease;
  gap: 10px;

  ${({ $rank }) =>
    $rank === 1 &&
    css`
      min-height: 280px;
    `}
  ${({ $rank }) =>
    $rank === 2 &&
    css`
      min-height: 250px;
    `}
  
  /* 📱 모바일에서는 카드 자체 확장 */
  @media (max-width: ${breakpoints.mobile}) {
    width: 85%;
    max-width: 85%;
    padding: 8px;
    ${({ $rank }) =>
      $rank === 1 &&
      css`
        min-height: 250px;
      `}
    ${({ $rank }) =>
      $rank === 2 &&
      css`
        min-height: 180px;
      `}
      ${({ $rank }) =>
      $rank === 3 &&
      css`
        min-height: 150px;
      `}
  }
`;

const IconBox = styled.div`
  padding: 10px;
  border-radius: 10px;
  display: flex;
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
  
  /* 모바일에서는 사이즈 축소 */
  @media (max-width: ${breakpoints.mobile}) {
    width: 55px;
    height: 55px;
  }
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
  
  @media (max-width: ${breakpoints.mobile}) {
    width: 60px;
  }
`;

const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* 모바일에서 grid가 넓게 쓰도록 */
`;

const TeamName = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
  }
`;

const RecommendAndHeartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  border-top: 1px solid rgb(250, 250, 250);

  /* 📱 모바일에서는 세로 정렬 */
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    row-gap: 5px;
  }
`;

const BoxInCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin: 20px;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 10px;
    font-size: 12px;
  }
`;

const Text = styled.div`
  color: #fff;
  font-size: 14px;
  white-space: nowrap;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 13px;
  }
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
            <Recommedation>{Number(recommendations).toFixed(0)}</Recommedation>
          </BoxInCard>

          <BoxInCard>
            <Text>좋아요</Text>
            <Like>{Number(likes).toFixed(1)}%</Like>
          </BoxInCard>
        </RecommendAndHeartGrid>
      </TeamInfo>
    </PriceCard>
  );
};

export default GradeCard;
