import styled from 'styled-components';

import ResultCard from '../components/result/ResultCard';
import Header from '../components/result/Header';
import TeamInfoSection from '../components/result/TeamInfoSection';
import ResultActions from '../components/result/ResultActions';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../utils/axios';

const ResultContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Result = () => {
  // 검사 페이지에서 넘어온 파라미터 가져오기

  // 세션 스토리지 데이터 state
  const [type, setType] = useState(null);
  const [teamName, setTeamName] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const savedResult = sessionStorage.getItem('testResult');

    // 검사 결과 데이터가 존재하면
    if (savedResult) {
      const { type, teamName } = JSON.parse(savedResult);
      // console.log(savedResult);

      setType(type);
      setTeamName(teamName);
    } else {
      // 저장된 값이 없으면 사용자에게 알리고 홈으로 이동
      alert('검사 결과가 없습니다. 테스트를 먼저 진행해주세요.');
      nav('/');
    }
  }, [nav]);

  if (!teamName) {
    return <div>결과를 불러오는 중입니다...</div>;
  }

  // 좋아요 증가 api
  const handleAddLike = async () => {
    try {
      await api.post(`/api/f1/${teamName}/like`);
      // console.log(`${topTeamName} 팀 좋아요 증가`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ResultContainer>
      <Header />
      <LineContainer>
        <ResultCard teamName={teamName} type={type} />
        <ResultActions onClickLike={handleAddLike} />
      </LineContainer>

      <TeamInfoSection teamName={teamName} />
    </ResultContainer>
  );
};

export default Result;
