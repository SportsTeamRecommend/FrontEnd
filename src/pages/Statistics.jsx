import { useState } from 'react';

import * as S from './Statistics.styles.js';

import Button from '../components/common/Button';
import GradeCard from '../components/statistics/GradeCard';
import GradeCard2 from '../components/statistics/GradeCard2';

import { f1TopTeams, kboTopTeams } from '../utils/teamStatisticsData.js';

const Statistics = () => {
  const [type, setType] = useState('f1');

  const topTeams = type === 'f1' ? f1TopTeams : kboTopTeams;
  const topThreeTeams = topTeams.slice(0, 3);
  const remainTeams = topTeams.slice(3, 10);
  const displayTeams =
    topThreeTeams.length > 1
      ? [topThreeTeams[1], topThreeTeams[0], ...topThreeTeams.slice(2)]
      : topThreeTeams;
  const statisticsF1 = () => {
    setType('f1');
  };
  const statisticsKbo = () => {
    setType('kbo');
  };

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
