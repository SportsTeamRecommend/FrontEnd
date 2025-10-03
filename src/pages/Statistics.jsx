import { useState } from 'react';

import styles from './Statistics.module.css';

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
    <div className={styles.statisticsContainer}>
      <div className={styles.Grid}>
        <div className={styles.firstContent}>
          <h1>팀 인기도 통계</h1>
          <h2>사용자들이 가장 많이 선택한 팀과 최신 트렌드를 확인해보세요.</h2>
          <div className={styles.btnContainer}>
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
          </div>
        </div>
        <div className={styles.secondContent}>
          <h1>Top 3</h1>
          <div className={styles.priceGrid}>
            {displayTeams.map((team) => (
              <GradeCard
                key={team.rank}
                rank={team.rank}
                icon={team.icon}
                teamName={team.teamName}
                recommendations={team.recommendations}
                likes={team.likes}
                styles={styles}
              />
            ))}
          </div>
        </div>
        <div className={styles.thirdContent}>
          <h1>전체 통계</h1>
          <div className={styles.priceGrid2}>
            {remainTeams.map((team) => (
              <GradeCard2
                key={team.rank}
                rank={team.rank}
                icon={team.icon}
                teamName={team.teamName}
                recommendations={team.recommendations}
                likes={team.likes}
                styles={styles}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
