import styled from 'styled-components';

import StatCard from './StatCard';
import PlayerCard from './PlayerCard';

import { getAllTeamData } from '../../utils/allTeamData';
import { useEffect, useState } from 'react';
import {
  nationalityToEmoji,
  nationalityToKorean,
} from '../../utils/nationalityMap';
import { f1LogoMap, kboLogoMap } from '../../utils/teamLogoMap';
import { f1Team } from '../../utils/teamColor';

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
  background-color: ${(props) => props.$teamColor || 'white'};
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
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

const ResultCard = ({ teamName, type }) => {
  const [teamData, setTeamData] = useState(null);
  // console.log(teamData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllTeamData(teamName);
        setTeamData(data);
      } catch (error) {
        console.error(
          '팀 정보 데이터를 가져오는 데 오류가 발생했습니다.',
          error
        );
      }
    };

    fetchData(); // 페이지 로드 시 팀 데이터 가져오기
  }, [teamName]);

  if (!teamData) return <div>팀 데이터를 불러오는 중입니다...</div>;

  const logoMap = type === 'f1' ? f1LogoMap : kboLogoMap; // 결과 페이지 타입
  const logoSrc = logoMap[teamName] || ''; // 로컬 로고
  const teamColor = f1Team[teamName] || '#FFFFFF'; // 팀 색상

  const isF1 = type === 'f1';

  const driverData1 = isF1
    ? {
        name: teamData.drivers[0].name,
        imageUrl: teamData.drivers[0].imageUrl,
        infoList: [
          {
            icon: nationalityToEmoji[teamData.drivers[0].nationality] || '🏁',
            label:
              nationalityToKorean[teamData.drivers[0].nationality] || 'Null',
          },
          {
            icon: '📅',
            label: `${teamData.drivers[0].debutYear}년 데뷔`,
          },
          {
            icon: '🎂',
            label: teamData.drivers[0].dateOfBirth,
          },
        ],
      }
    : null;

  const driverData2 =
    isF1 && teamData.drivers.length > 1
      ? {
          name: teamData.drivers[1].name,
          imageUrl: teamData.drivers[1].imageUrl,
          infoList: [
            {
              icon: nationalityToEmoji[teamData.drivers[1].nationality] || '🏁',
              label:
                nationalityToKorean[teamData.drivers[1].nationality] || 'Null',
            },
            {
              icon: '📅',
              label: `${teamData.drivers[1].debutYear}년 데뷔`,
            },
            {
              icon: '🎂',
              label: teamData.drivers[1].dateOfBirth,
            },
          ],
        }
      : null;

  const allTimeStats = [
    { label: 'WCC', value: teamData.worldChampionship },
    {
      label: 'WDC',
      value: isF1
        ? teamData.drivers[0].driverChampionship +
          teamData.drivers[1].driverChampionship
        : '-',
    },
    { label: '우승', value: teamData.careerWins },
    { label: '포디움', value: teamData.careerPodiums },
  ];

  const seasonStats = [
    { label: '순위', value: teamData.seasonPosition },
    { label: '포인트', value: teamData.seasonPoint },
    { label: '우승', value: teamData.seasonWins },
    { label: '포디움', value: teamData.seasonPodiums },
  ];

  return (
    <ResultCardWrapper>
      <Header>
        <Logo $teamColor={teamColor}>
          <img src={logoSrc} alt={`${teamName} Logo`} />
        </Logo>

        <Text>
          <TeamName>{teamData.name}</TeamName>
          <TeamDescription>승부욕과 커리어의 정점</TeamDescription>
        </Text>
      </Header>
      <Content>
        {isF1 && driverData1 && (
          <PlayerCard
            name={driverData1.name}
            imageUrl={driverData1.imageUrl}
            infoList={driverData1.infoList}
            style={{ gridArea: 'player1' }}
          />
        )}
        {isF1 && driverData2 && (
          <PlayerCard
            name={driverData2.name}
            imageUrl={driverData2.imageUrl}
            infoList={driverData2.infoList}
            style={{ gridArea: 'player2' }}
          />
        )}
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
    </ResultCardWrapper>
  );
};

export default ResultCard;
