import Chart from '../components/compare/Chart';
import Button from '../components/common/Button';
import styles from './Compare.module.css';
import { useState } from 'react';
import { f1Teams, kboTeams } from '../utils/teamData';

const Compare = () => {
  const [type, setType] = useState('f1');
  const [team1, setTeam1] = useState(null);
  const [team2, setTeam2] = useState(null);

  const changeTypeF1 = () => {
    setType('f1');
    setTeam1(null);
    setTeam2(null);
  };
  const changeTypeKBO = () => {
    setType('baseball');
    setTeam1(null);
    setTeam2(null);
  };

  const onSelectTeam1 = (e) => {
    const selectedName = e.target.value;
    const currentTeams = type === 'f1' ? f1Teams : kboTeams;
    const selectedTeamData = currentTeams.find(
      (team) => team.name === selectedName
    );
    setTeam1(selectedTeamData);
  };

  const onSelectTeam2 = (e) => {
    const selectedName = e.target.value;
    const currentTeams = type === 'f1' ? f1Teams : kboTeams;
    const selectedTeamData = currentTeams.find(
      (team) => team.name === selectedName
    );
    setTeam2(selectedTeamData);
  };

  return (
    <div className={styles['compare-page']}>
      <div className={styles['header']}>
        <h2>팀 전력 비교</h2>
        <p>두 팀의 전력을 한눈에 비교해 보세요.</p>
      </div>
      <div className={styles['button-section']}>
        <Button onClick={changeTypeF1} text="F1팀 비교" type="compare-f1" />
        <Button
          onClick={changeTypeKBO}
          text="KBO팀 비교"
          type="compare-baseball"
        />
      </div>
      <div className={styles['team-select-section']}>
        팀1 :{' '}
        <select onChange={onSelectTeam1}>
          <option value="">선택</option>
          {type === 'f1'
            ? f1Teams.map((team) => (
                <option key={team.id} value={team.name}>
                  {team.name}
                </option>
              ))
            : kboTeams.map((team) => (
                <option key={team.id} value={team.name}>
                  {team.name}
                </option>
              ))}
        </select>
        팀2 :{' '}
        <select onChange={onSelectTeam2}>
          <option value="">선택</option>
          {type === 'f1'
            ? f1Teams.map((team) => (
                <option key={team.id} value={team.name}>
                  {team.name}
                </option>
              ))
            : kboTeams.map((team) => (
                <option key={team.id} value={team.name}>
                  {team.name}
                </option>
              ))}
        </select>
      </div>
      <div className={styles['chart-section']}>
        {team1 && team2 ? (
          <Chart team1={team1} team2={team2} />
        ) : (
          <p>비교할 팀을 선택해 주세요.</p>
        )}
      </div>
    </div>
  );
};

export default Compare;
