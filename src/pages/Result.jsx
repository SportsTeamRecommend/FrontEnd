import styled from 'styled-components';

import ResultCard from '../components/result/ResultCard';
import Header from '../components/result/Header';

const ResultContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Result = () => {
  return (
    <ResultContainer>
      <Header />
      <ResultCard />
    </ResultContainer>
  );
};

export default Result;
