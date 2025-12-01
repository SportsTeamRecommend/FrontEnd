import styled from 'styled-components';

// 헤더 전체를 감싸는 컨테이너
const HeaderWrapper = styled.header`
  width: 100%;
  text-align: center; /* 모든 텍스트를 중앙 정렬 */
  margin-bottom: 13px; /* 헤더와 아래 콘텐츠(팀 카드) 사이의 간격 */
  color: #ffffff; /* 기본 텍스트 색상 (흰색) */
  margin-top: 95px;
`;

// 메인 제목: "당신에게 추천하는 F1 팀"
const MainTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px; /* 이미지에 맞는 적절한 크기 */
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 2px; /* 제목과 부제목 사이 간격 */
  gap: 8px;
`;

// 부제목: "당신의 성향 분석 결과를..."
const Subtitle = styled.p`
  font-size: 18px;
  color: #bdc1c6; /* 메인 제목보다 약간 어두운 회색 */
  margin: 0; /* 위아래 마진 제거 */
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Header = ({ type }) => {
  const color = type === 'f1' ? '#EF4444' : '#2563EB';
  const text = type === 'f1' ? 'F1' : 'KBO';
  return (
    <HeaderWrapper>
      <MainTitle>
        당신에게 추천하는 <span style={{ color: color }}>{text}</span>팀
      </MainTitle>
      <Subtitle>
        당신의 성향 분석 결과를 바탕으로 가장 잘 맞는 {text} 팀을 찾았습니다!
      </Subtitle>
    </HeaderWrapper>
  );
};

export default Header;
