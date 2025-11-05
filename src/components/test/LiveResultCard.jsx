import styled from 'styled-components';
import { liveResultData } from '../../utils/liveResultData';
import { getTeamColor } from '../../utils/teamColor';

const Card = styled.div``;

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

const LiveResultCard = ({ type }) => {
  return (
    <Card>
      <Title>Top 3</Title>
      <List>
        {liveResultData[type].map((item, idx) => (
          <Item
            key={idx}
            style={{ backgroundColor: getTeamColor(type, item.name) }}
          >
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
