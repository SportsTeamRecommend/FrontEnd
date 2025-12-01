import styled from 'styled-components';

export const ResultContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 16px; // 모바일 화면 좌우 여백 추가
  box-sizing: border-box;
`;

export const LineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1190px; // 데스크탑에서 최대 너비 제한
`;
