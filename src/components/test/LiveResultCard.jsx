import styled from 'styled-components';
import { getTeamColor } from '../../utils/teamColor';
import { getTeamLogo, getTeamName } from '../../utils/liveResultData';

const breakpoints = {
  mobile: '767px',
  tablet: '1023px',
};

const Card = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    width: 95%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

const Title = styled.h2`
  margin: 0 0 6px;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 20px;
  }
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
  gap: 10%;
  padding: 15px;
  border-radius: 12px;
  align-items: center;
  height: 80px;
  font-size: 18px;
  font-weight: 500;
  background: rgba(37, 50, 67, 0.4);

  @media (max-width: ${breakpoints.tablet}) {
    gap: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 14px;
    height: auto;
    padding: 12px;
    font-size: 15px;
  }
`;

const Span = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  white-space: normal;
  word-break: keep-all;
  overflow-wrap: break-word;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 40px;
    height: 40px;
    border-radius: 6px;
  }
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
