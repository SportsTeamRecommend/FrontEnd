import { useState } from 'react';

import styles from './Statistics.module.css';

import Button from '../components/common/Button';
import GradeCard from '../components/statistics/GradeCard';

const Statistics = () => {
  const [type, setType] = useState('f1');

  // TODO: API에서 실제 데이터를 받아와야 합니다.
  const f1TopTeams = [
    {
      rank: 2,
      icon: 'icon',
      teamName: 'Oracle Redbull Racing',
      recommendations: '1,247',
      likes: '26.7%',
    },
    {
      rank: 1,
      icon: 'icon',
      teamName: 'Ferrari',
      recommendations: '1,582',
      likes: '31.2%',
    },
    {
      rank: 3,
      icon: 'icon',
      teamName: 'McLaren',
      recommendations: '980',
      likes: '19.8%',
    },
  ];

  const kboTopTeams = [
    {
      rank: 2,
      icon: 'icon',
      teamName: 'LG Twins',
      recommendations: '1,110',
      likes: '25.5%',
    },
    {
      rank: 1,
      icon: 'icon',
      teamName: 'KIA Tigers',
      recommendations: '1,820',
      likes: '35.1%',
    },
    {
      rank: 3,
      icon: 'icon',
      teamName: 'Doosan Bears',
      recommendations: '850',
      likes: '18.2%',
    },
  ];

  const topTeams = type === 'f1' ? f1TopTeams : kboTopTeams;

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
            {topTeams.map((team) => (
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
        </div>
      </div>
    </div>
  );
};

export default Statistics;
