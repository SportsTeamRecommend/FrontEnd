import styled from 'styled-components';

import ResultCard from '../components/result/ResultCard';

const ResultContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Header = styled.div`
  background-color: red;
  display: flex;
  align-items: center;
`;

const Result = () => {
  return <ResultCard />;
};

export default Result;
