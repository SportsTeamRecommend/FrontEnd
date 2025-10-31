import React from 'react';
import styled from 'styled-components';

// --- Styled Components ---

// 1. 카드 전체를 감싸는 Wrapper
const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px; /* 이미지와 정보 사이 간격 */
  background-color: #3e4450; /* 어두운 카드 배경색 */
  padding: 20px;
  border-radius: 12px;
  color: white;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

// 2. 선수 이미지
const DriverImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 10px; /* 이미지 모서리 둥글게 */
  object-fit: cover; /* 이미지 비율 유지 */
`;

// 3. 이름 + 상세 정보 리스트를 감싸는 Wrapper
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px; /* 이름과 리스트 사이 간격 */
`;

// 4. 선수 이름
const DriverName = styled.h3`
  font-size: 28px;
  font-weight: bold;
  margin: 0;
`;

// 5. 상세 정보 (국적, 데뷔, 생일) 리스트
const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px; /* 각 항목(li) 사이 간격 */
`;

// 6. 상세 정보 리스트의 각 항목 (li)
const DetailItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px; /* 아이콘과 텍스트 사이 간격 */
`;

// 7. 아이콘 (이모지)
const DetailIcon = styled.span`
  font-size: 20px;
`;

// 8. 상세 정보 텍스트
const DetailText = styled.span`
  font-size: 18px;
  color: #e8eaed; /* 흰색보다 살짝 어두운 색 */
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
