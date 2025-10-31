import styled from 'styled-components';

import StatCard from './StatCard';
import PlayerCard from './PlayerCard';

import { allTimeStats, seasonStats } from '../../utils/statData';

import redbull from './../../assets/f1-logo/redbull.svg';
import max from './../../assets/max.webp';
import yuki from './../../assets/yuki.webp';

const ResultCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 58px;

  border-radius: 10px;
  background: rgba(55, 65, 81, 0.4);
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
  margin-bottom: 14px;
`;
const Logo = styled.div`
  display: flex;
  width: 70px;
  height: 70px;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
  }
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;
const TeamName = styled.span`
  font-size: 32px;
  font-weight: bold;
  color: white;
`;
const TeamDescription = styled.span`
  font-size: 18px;

  color: #e0e0e0;
`;

const Content = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'player1 stats1'
    'player2 stats2';
  width: 100%;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'player1'
      'player2'
      'stats1'
      'stats2';
  }
`;

const Footer = styled.div`
  display: flex;
  gap: 45px;
  margin-top: 14px;
`;

const Button = styled.button`
  width: 243px;
  height: 31px;
  flex-shrink: 0;

  color: white;
  border-radius: 10px;
  border: 2px solid #fff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  background: ${(props) =>
    props.like ? 'rgba(248, 92, 92, 0.93)' : 'rgba(86, 91, 98, 0.86)'};
`;

const driverData1 = {
  name: 'Max Verrstappen',
  imageUrl: max, // 이미지 경로
  infoList: [
    {
      icon: '🇳🇱',
      label: '네덜란드',
    },
    {
      icon: '📅',
      label: '2015년 데뷔',
    },
    {
      icon: '🎂',
      label: '1997-09-30',
    },
  ],
};
const driverData2 = {
  name: 'Yuki Tsunoda',
  imageUrl: yuki,
  infoList: [
    {
      icon: '🇯🇵',
      label: '일본',
    },
    {
      icon: '📅',
      label: '2021년 데뷔',
    },
    {
      icon: '🎂',
      label: '2000-05-11',
    },
  ],
};

const ResultCard = () => {
  return (
    <ResultCardWrapper>
      <Header>
        <Logo>
          <img src={redbull} alt="Red Bull Racing Logo" />
        </Logo>

        <Text>
          <TeamName>Red Bull Racing</TeamName>
          <TeamDescription>승부욕과 커리어의 정점</TeamDescription>
        </Text>
      </Header>
      <Content>
        <PlayerCard
          name={driverData1.name}
          imageUrl={driverData1.imageUrl}
          infoList={driverData1.infoList}
          style={{ gridArea: 'player1' }}
        />
        <PlayerCard
          name={driverData2.name}
          imageUrl={driverData2.imageUrl}
          infoList={driverData2.infoList}
          style={{ gridArea: 'player2' }}
        />
        <StatCard
          title="역대 성적"
          stats={allTimeStats}
          style={{ gridArea: 'stats1' }}
        />
        <StatCard
          title="2025 시즌 성적"
          stats={seasonStats}
          style={{ gridArea: 'stats2' }}
        />
      </Content>
      <Footer>
        <Button like>마음에 들어요</Button>
        <Button>공유하기</Button>
      </Footer>
    </ResultCardWrapper>
  );
};

export default ResultCard;
