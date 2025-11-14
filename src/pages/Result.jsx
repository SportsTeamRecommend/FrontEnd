import styled from 'styled-components';

import ResultCard from '../components/result/ResultCard';
import Header from '../components/result/Header';
import TeamInfoSection from '../components/result/TeamInfoSection';
import ResultActions from '../components/result/ResultActions';

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
  return (
    <ResultContainer>
      <Header />
      <LineContainer>
        <ResultCard />
        <ResultActions />
      </LineContainer>

      <TeamInfoSection />
    </ResultContainer>
  );
};

export default Result;
