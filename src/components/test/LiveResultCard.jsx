import styled from 'styled-components';
import { getTeamColor } from '../../utils/teamColor';
import { getTeamLogo, getTeamName } from '../../utils/liveResultData';

const Card = styled.div`
  width: 90%;
`;

const Title = styled.h2`
  margin: 0 0 6px;
  font-size: 24px;
  font-weight: 700;
`;

const List = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  gap: 30px;
  padding: 15px;
  border-radius: 12px;
  align-items: center;
  height: 80px;
  font-size: 18px;
  font-weight: 500;
`;

const Span = styled.span``;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
`;

const LiveResultCard = ({ type, data }) => {
  // API 데이터 + 이미지 + 색상 매핑
  const mapped = data.map((team) => ({
    name: getTeamName(type, team.name),
    img: getTeamLogo(type, team.name),
    color: getTeamColor(type, team.name),
  }));

  if (type === 'kbo' && data.length === 0) {
    return (
      <Card>
        <span>연고지를 선택해주세요.</span>
      </Card>
    );
  }
  return (
    <Card>
      <Title>Top 3</Title>
      <List>
        {mapped.map((item, idx) => (
          <Item key={idx} style={{ backgroundColor: item.color }}>
            <Span>{idx + 1}</Span>
            <Image src={item.img} alt={item.team} />
            <Span>{item.name}</Span>
          </Item>
        ))}
      </List>
    </Card>
  );
};

export default LiveResultCard;
