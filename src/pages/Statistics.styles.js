import styled from 'styled-components';

const breakpoints = {
  mobile: '767px',
  tablet: '1023px',
};

export const StatisticsContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0px;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  gap: 30px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 20px;
  }
`;

export const FirstContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 10px;
  }
`;

export const MainTitle = styled.h1`
  font-weight: bold;
  font-size: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.6rem;
  }
`;

export const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.2rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    word-break: keep-all;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const SubContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  gap: 25px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 20px;
    gap: 18px;
  }
`;

export const SubContentTitle = styled.h1`
  font-weight: 800;
  font-size: 1.8rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.4rem;
  }
`;

export const PriceGrid = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-end;
  min-height: 24vh;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 20px;
  }
`;

export const SubPriceGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
  }
`;
