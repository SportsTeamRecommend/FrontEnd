import { useEffect, useRef, useState } from 'react';

import * as S from './Statistics.styles.js';

import Button from '../components/common/Button';
import GradeCard from '../components/statistics/GradeCard';
import GradeCard2 from '../components/statistics/GradeCard2';

import { f1TopTeams, kboTopTeams } from '../utils/teamStatisticsData.js';

import api from './../utils/axios.js';

const fetchF1Statistics = async () => {
  try {
    const res = await api.get('/api/f1/statistics');

    return res.data; // [{ team, recommended, likedPercentage }]
  } catch (error) {
    console.error('F1 통계 데이터 조회 중 에러 발생', error);
    throw error;
  }
};

const Statistics = () => {
  const [type, setType] = useState('f1');
  const [stats, setStats] = useState([]);

  const statisticsF1 = () => {
    setType('f1');
  };
  const statisticsKbo = () => {
    setType('kbo');
  };

  useEffect(() => {
    const localTeamData = type === 'f1' ? f1TopTeams : kboTopTeams;

    const loadData = async () => {
      try {
        // 우선 F1 통계만 구현되어 있어 F1 데이터만
        const apiData = type === 'f1' ? await fetchF1Statistics() : [];
        // console.log(apiData);

        const icons = ['🥇', '🥈', '🥉'];
        const mergedData = apiData.map((apiTeam, index) => {
          // API 데이터의 team 이름을 포함하는 로컬 데이터를 찾기
          const localTeam = localTeamData.find((local) =>
            local.teamName.includes(apiTeam.team)
          );

          return {
            // API 데이터 사용
            recommendations: apiTeam.recommended,
            likes: apiTeam.likedPercentage,

            // 로컬 데이터 사용
            rank: index + 1,
            icon: index < 3 ? icons[index] : `${index + 1}`,
            teamName: localTeam ? localTeam.teamName : apiTeam.team,
            img: localTeam ? localTeam.img : null, // 일치하는 팀이 없으면 null
            color: localTeam ? localTeam.color : '#808080', // 기본 색상
          };
        });
        setStats(mergedData); // 합친 데이터로 설정
      } catch (error) {
        console.error(`통계 데이터 조회 중 에러 발생`, error);
      }
    };
    loadData();
  }, [type]);

  const topThreeTeams = stats.slice(0, 3);
  const remainTeams = stats.slice(3, 10);
  const displayTeams =
    topThreeTeams.length > 1
      ? [topThreeTeams[1], topThreeTeams[0], ...topThreeTeams.slice(2)]
      : topThreeTeams;

  return (
    <S.StatisticsContainer>
      <S.Grid>
        <S.FirstContent>
          <S.MainTitle>팀 인기도 통계</S.MainTitle>
          <S.SubTitle>
            사용자들이 가장 많이 선택한 팀과 최신 트렌드를 확인해보세요.
          </S.SubTitle>
          <S.BtnContainer>
            <Button
              onClick={statisticsF1}
              text="F1팀 통계"
              type="statistics-f1"
            />
            <Button
              onClick={statisticsKbo}
              text="KBO팀 통계"
              type="statistics-kbo"
            />
          </S.BtnContainer>
        </S.FirstContent>
        <S.SubContent>
          <S.SubContentTitle>Top 3</S.SubContentTitle>
          <S.PriceGrid>
            {displayTeams.map((team) => (
              <GradeCard
                key={team.rank}
                rank={team.rank}
                icon={team.icon}
                img={team.img}
                teamName={team.teamName}
                recommendations={team.recommendations}
                likes={team.likes}
                color={team.color}
              />
            ))}
          </S.PriceGrid>
        </S.SubContent>
        <S.SubContent>
          <S.SubContentTitle>전체 통계</S.SubContentTitle>
          <S.SubPriceGrid>
            {remainTeams.map((team) => (
              <GradeCard2
                key={team.rank}
                rank={team.rank}
                icon={team.icon}
                img={team.img}
                teamName={team.teamName}
                recommendations={team.recommendations}
                likes={team.likes}
                color={team.color}
              />
            ))}
          </S.SubPriceGrid>
        </S.SubContent>
      </S.Grid>
    </S.StatisticsContainer>
  );
};

export default Statistics;
