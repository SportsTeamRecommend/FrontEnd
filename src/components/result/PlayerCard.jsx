import styled from 'styled-components';

// --- Styled Components ---

// 1. 카드 전체 Wrapper
const CardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  background-color: #3e4450;
  padding: 20px;
  border-radius: 12px;
  color: white;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* 화면이 768px 이하일 때 세로 정렬 */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 14px;
  }
`;

// 2. 선수 이미지
const DriverImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 10px;
  display: block;
  border: 1px solid black;
  object-fit: cover;

  /* 모바일에서 이미지 줄이기 */
  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

// 3. 이름 + 상세 정보 Wrapper
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1; /* 남는 공간 자동 채우기 */

  @media (max-width: 768px) {
    align-items: center;
  }
`;

// 4. 이름
const DriverName = styled.h3`
  font-size: 28px;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

// 5. 상세 정보 리스트
const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

// 6. 상세 정보 항목
const DetailItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

// 7. 아이콘
const DetailIcon = styled.span`
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

// 8. 상세 텍스트
const DetailText = styled.span`
  font-size: 18px;
  color: #e8eaed;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// --- Component ---

/**
 * 선수 프로필 카드 컴포넌트
 * @param {string} name - 선수 이름
 * @param {string} imageUrl - 선수 이미지 URL
 * @param {Array<Object>} infoList - 상세 정보 배열
 * (예: [{ icon: '🇳🇱', label: '네덜란드' }, ...])
 */
const PlayerCard = ({ name, imageUrl, infoList = [], style, className }) => {
  return (
    <CardWrapper style={style} className={className}>
      <DriverImage src={imageUrl} alt={name} />
      <InfoWrapper>
        <DriverName>{name}</DriverName>
        <DetailsList>
          {/* infoList 배열을 map으로 돌려 각 항목을 렌더링 */}
          {infoList.map((item, index) => (
            <DetailItem key={index}>
              <DetailIcon>{item.icon}</DetailIcon>
              <DetailText>{item.label}</DetailText>
            </DetailItem>
          ))}
        </DetailsList>
      </InfoWrapper>
    </CardWrapper>
  );
};

export default PlayerCard;
