import styled from 'styled-components';

export const StatisticsContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FirstContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.h1`
  font-weight: bold;
`;

export const SubTitle = styled.h2`
  font-weight: 400;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const SubContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  gap: 20px;
`;

export const SubContentTitle = styled.h1`
  font-weight: 800;
`;

export const PriceGrid = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-end;
  min-height: 24vh; /* 등수카드 최소 높이 */
`;

export const SubPriceGrid = styled.div`
  display: flex;
  flex-direction: column;
`;
