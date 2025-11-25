import styled from 'styled-components';

export const HomeContainer = styled.div`
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center; /* 모바일 기준 */
`;

export const FirstText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const MainTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  color: #ffffff;
  line-height: 1.2;
  @media (max-width: 767px) {
    font-size: 1.5rem;
    word-break: keep-all;
  }
`;

export const Description = styled.div`
  font-size: 1.125rem;
  color: #f9fafb;
  line-height: 1.6;
  @media (max-width: 767px) {
    font-size: 0.9rem;
    word-break: keep-all;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 20px;
  align-items: center;
  justify-content: center;

  @media (min-width: 740px) {
    flex-direction: row;
  }
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IllustrationBox = styled.div`
  width: 20rem;
  height: 20rem;
  background: rgba(31, 41, 55, 0.3);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(75, 85, 99, 0.3);
  gap: 20px;
  position: relative;
`;

export const CircleBox = styled.div`
  width: 30%;
  height: 30%;
  background: rgba(31, 41, 55);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DBHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 3rem;
`;

export const DBTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 1rem;
  @media (max-width: 767px) {
    font-size: 1.3rem;
    word-break: keep-all;
  }
`;

export const DBDescription = styled.p`
  color: #f3f4f6;
  font-size: 1.125rem;
  @media (max-width: 767px) {
    font-size: 0.9rem;
    word-break: keep-all;
  }
`;

export const DBGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 20px;

  @media (min-width: 740px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
