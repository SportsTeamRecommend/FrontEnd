import Chart from '../components/compare/Chart';
import Button from '../components/common/Button';
import { useState } from 'react';
import { f1Teams, kboTeams } from '../utils/teamData';
import styled from 'styled-components';

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  height: 100vh;
`;

const Header = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const TeamButton = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const TeamSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const TeamOption = styled.select`
  background-color: #374151;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 5px;
  width: 170px;
  margin-right: 30px;
`;

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
    <Container>
      <Header>
        <h2>팀 전력 비교</h2>
        <p>두 팀의 전력을 한눈에 비교해 보세요.</p>
      </Header>
      <TeamButton>
        <Button onClick={changeTypeF1} text="F1팀 비교" type="compare-f1" />
        <Button
          onClick={changeTypeKBO}
          text="KBO팀 비교"
          type="compare-baseball"
        />
      </TeamButton>
      <TeamSelect>
        팀1 :
        <TeamOption onChange={onSelectTeam1}>
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
        </TeamOption>
        팀2 :
        <TeamOption onChange={onSelectTeam2}>
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
        </TeamOption>
      </TeamSelect>
      <div>
        {team1 && team2 ? (
          <Chart team1={team1} team2={team2} />
        ) : (
          <p>비교할 팀을 선택해 주세요.</p>
        )}
      </div>
    </Container>
  );
};

export default Compare;
