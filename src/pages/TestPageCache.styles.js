import styled from 'styled-components';

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
`;

export const RankSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 600px;
  height: 95%;
  background: rgba(31, 41, 55, 0.4);
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  color: #e5e7eb;
  font-family: system-ui, sans-serif;
  gap: 20px;
  width: 20%;
  justify-content: space-around;
`;

export const SliderSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 600px;
  height: 95%;
  background: rgba(31, 41, 55, 0.4);
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  color: #e5e7eb;
  font-family: system-ui, sans-serif;
  gap: 20px;
  width: 60%;
`;
