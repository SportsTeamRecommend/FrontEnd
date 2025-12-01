// components/StatCard.jsx
import styled from 'styled-components';

// --- Styled Components ---

// 카드 전체를 감싸는 컨테이너
const GroupWrapper = styled.div`
  flex: 1; /* 1:1 비율로 공간을 나눠 가짐 */
  background-color: #2d323e; /* 배경색 (페이지 배경과 동일하게) */
  padding: 24px;
  border-radius: 12px;

  /* 화면이 768px 이하일 때 세로 정렬 */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 14px;
  }
`;

// "역대 성적"과 같은 그룹 제목
const GroupTitle = styled.h2`
  font-size: 20px;
  color: #e8eaed;
  margin-top: 0;
  margin-bottom: 12px;
`;

// 제목 아래의 구분선
const TitleDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #5f6368;
  margin-bottom: 16px;
`;

const CardGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  // 스탯카드 2x2로 변경
  @media (max-width: 320px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const MiniStatCard = styled.div`
  background-color: #3e4450;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100px;
`;

const MiniLabel = styled.span`
  color: #bdc1c6;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  word-break: keep-all;
`;

const MiniDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #5f6368;
  margin-bottom: 12px;
`;

const MiniValue = styled.span`
  color: #fdd835; /* 노란색 값 */
  font-size: 32px;
  font-weight: bold;
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

// --- 메인 컴포넌트 ---

/**
 * 스탯 그룹 카드 컴포넌트 (예: "역대 성적", "시즌 성적")
 * @param {string} title - 카드 상단 제목
 * @param {Array<Object>} stats - 4개의 스탯 객체 배열
 * (예: [{ label: 'WCC', value: 6 }, ...])
 */
const StatCard = ({ title, stats = [], style, className }) => {
  return (
    <GroupWrapper style={style} className={className}>
      <GroupTitle>{title}</GroupTitle>
      <TitleDivider />
      <CardGrid>
        {/* stats 배열을 map으로 돌려 4개의 미니 카드를 렌더링 */}
        {stats.map((stat, index) => (
          <MiniStatCard key={index}>
            <MiniLabel>{stat.label}</MiniLabel>
            <MiniDivider />
            <MiniValue>{stat.value}</MiniValue>
          </MiniStatCard>
        ))}
      </CardGrid>
    </GroupWrapper>
  );
};

export default StatCard;
