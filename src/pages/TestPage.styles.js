import styled from 'styled-components';

const breakpoints = {
  mobile: '767px',
  tablet: '1023px',
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  gap: 40px;
  padding: 30px 0;
`;

export const Title = styled.h1`
  text-align: center;
  color: white;
  margin: 0;
`;

export const TestContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;

  /* Tablet */
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }

  /* Mobile */
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const RankSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 600px;
  background: rgba(31, 41, 55, 0.4);
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  color: #e5e7eb;
  font-family: system-ui, sans-serif;
  gap: 20px;
  width: 20%;
  justify-content: space-around;
  align-items: center;

  /* Tablet */
  @media (max-width: ${breakpoints.tablet}) {
    width: 60%;
  }

  /* Mobile */
  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
    min-height: auto;
  }
`;

export const SliderSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 600px;
  background: rgba(31, 41, 55, 0.4);
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  color: #e5e7eb;
  font-family: system-ui, sans-serif;
  gap: 20px;
  width: 60%;

  /* Tablet */
  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }

  /* Mobile */
  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
    min-height: auto;
  }
`;
