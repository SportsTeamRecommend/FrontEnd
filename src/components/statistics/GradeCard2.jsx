import styled from 'styled-components';

const PriceCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background: ${({ $color }) => $color || 'rgba(55, 65, 81, 0.86)'};
  padding: 16px 10px;
  margin-bottom: 24px;
  min-width: 500px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-right: 20px;
`;

const TextGroup = styled.div`
  display: flex;
  min-width: 40px;
  justify-content: center;
`;

const GradeText = styled.div`
  color: #fffff0;
  font-family: Inter, sans-serif;
  font-size: 26px;
  font-weight: 700;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 10px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
`;

const TeamImage = styled.img`
  width: 60px;
  border-radius: 6px;
`;

const TeamName = styled.div`
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
`;

const ItemStats = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StatGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  white-space: nowrap;
  overflow: hidden;
`;

const Text = styled.div`
  color: #fff;
  font-size: 14px;
`;

const Recommendation = styled.div`
  color: #ffcc00;
`;

const Like = styled.div`
  color: #9cc2ff;
`;

const ProgressBar = styled.div`
  width: 120px;
  height: 10px;
  background-color: #6c757d;
  border-radius: 5px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  border-radius: 5px;
`;

// 🔹 보색 계산 함수
const getComplementaryColor = (hex) => {
  if (!hex || hex.length < 4) return null;

  let color = hex.startsWith('#') ? hex.slice(1) : hex;

  if (color.length === 3) {
    color = color
      .split('')
      .map((char) => char + char)
      .join('');
  }

  const num = parseInt(color, 16);
  const r = (num >> 16) & 0xff;
  const g = (num >> 8) & 0xff;
  const b = num & 0xff;

  const invertedR = 255 - r;
  const invertedG = 255 - g;
  const invertedB = 255 - b;

  const invertedHex = ((invertedR << 16) | (invertedG << 8) | invertedB)
    .toString(16)
    .padStart(6, '0');

  return `#${invertedHex}`;
};

// 🔹 메인 컴포넌트
const GradeCard2 = ({ rank, img, teamName, recommendations, likes, color }) => {
  const progressColor = getComplementaryColor(color);

  return (
    <PriceCard $color={color}>
      <ItemInfo>
        <TextGroup>
          <GradeText>#{rank}</GradeText>
        </TextGroup>

        <IconBox>
          <TeamImage src={img} alt={`${teamName} logo`} />
        </IconBox>

        <TeamName>{teamName}</TeamName>
      </ItemInfo>

      <ItemStats>
        <StatGroup>
          <Text>추천 횟수</Text>
          <Recommendation>{Number(recommendations).toFixed(0)}</Recommendation>
        </StatGroup>

        <StatGroup>
          <Text>좋아요</Text>
          <Like>{Number(likes).toFixed(1)}%</Like>
        </StatGroup>

        <ProgressBar>
          <ProgressFill
            style={{
              width: `${likes * 1.2}%`,
              backgroundColor: progressColor,
            }}
          />
        </ProgressBar>
      </ItemStats>
    </PriceCard>
  );
};

export default GradeCard2;
