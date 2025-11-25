import styled from 'styled-components';

import StatCard from './StatCard';
import PlayerCard from './PlayerCard';

import redbull from './../../assets/f1-logo/redbull.svg';

import { getAllTeamData } from '../../utils/allTeamData';
import { useEffect, useState } from 'react';
import {
  nationalityToEmoji,
  nationalityToKorean,
} from '../../utils/nationalityMap';
const ResultCard = ({ teamName }) => {
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

    fetchData();
  }, []);

  if (!teamData) return;
  // console.log(teamData);

  const driverData1 = {
    name: teamData.drivers[0].name,
    imageUrl: teamData.drivers[0].imageUrl,
    // imageUrl: max,
    infoList: [
      {
        icon: nationalityToEmoji[teamData.drivers[0].nationality] || '🏁',
        label: nationalityToKorean[teamData.drivers[0].nationality] || 'Null',
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
  };
  const driverData2 = {
    name: teamData.drivers[1].name,
    imageUrl: teamData.drivers[1].imageUrl,
    // imageUrl: yuki,
    infoList: [
      {
        icon: nationalityToEmoji[teamData.drivers[1].nationality] || '🏁',
        label: nationalityToKorean[teamData.drivers[1].nationality] || 'Null',
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
  };
  const allTimeStats = [
    { label: 'WCC', value: teamData.worldChampionship },
    {
      label: 'WDC', // 이거 어떻게 처리할지 얘기 필요
      value:
        teamData.drivers[0].driverChampionship +
        teamData.drivers[1].driverChampionship,
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
