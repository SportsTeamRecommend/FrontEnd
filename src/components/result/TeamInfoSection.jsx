import styled from 'styled-components';

import copang from './../../assets/copang.jpg';
import tving from './../../assets/tving.png';
import dal from '../../assets/dalluck.png';

import { toast } from 'react-toastify';

const SectionWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 58px;
  box-sizing: border-box;
  gap: 27px;
  width: 100%;
  max-width: 1190px;
`;
const FirstContent = styled.div`
  text-align: center;
  gap: 15px;
  width: 100%;
`;
const MainTitle = styled.div`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 15px;
`;
const MainDescription = styled.div`
  border-radius: 10px;
  background: rgba(55, 65, 81, 0.5);
  padding: 40px 10px;

  display: flex;
  flex-direction: column;
  align-items: start;
  flex-shrink: 0;
  text-align: left;
`;

const SecondContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 21px;
  width: 100%;
  align-items: stretch;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${(props) => props.flex || 1};
  gap: 7px;
`;
const BoxTitle = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const VideoContanier = styled.div`
  flex: 1;
  border-radius: 10px;
  background: rgba(55, 65, 81, 0.5);
  padding: 20px 10px;
`;

const ThirdContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 56px;
`;
const BottunGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
`;
const ImageBox = styled.button`
  border-radius: 10px;
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  img {
    width: 115%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
const Button = styled.button`
  width: 213px;
  height: 43px;
  flex-shrink: 0;
  border-radius: 10px;

  border-radius: 10px;
  border: 2px solid #fff;
  background: rgba(86, 91, 98, 0.86);

  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TeamInfoSection = ({ type }) => {
  const text = type === 'f1' ? 'F1' : 'KBO';

  const onClickSaveCalender = () => {
    toast.info('아직 지원하지 않는 기능입니다.');
  };

  return (
    <SectionWrapper>
      <FirstContent>
        <MainTitle>팀 정보</MainTitle>
        <MainDescription>
          한화 이글스는 대전을 연고로 하며, KBO 리그에서 가장 열정적이고 의리
          있는 팬덤을 보유한 구단입니다. 과거 '다이너마이트 타선'이라 불리던
          화끈한 공격력과 1999년 한국시리즈 우승의 영광을 간직하고 있습니다.
          팀이 어려울 때도 변치 않는 응원을 보내는 팬들은 '보살 팬'이라는
          애칭으로 불릴 만큼 깊은 사랑을 자랑합니다. 최근에는 메이저리그에서
          돌아온 '괴물' 류현진의 복귀와 문동주, 노시환 등 젊은 스타들의 활약으로
          새로운 비상을 준비하고 있습니다. 승패를 떠나 끈끈한 낭만과 드라마를
          경험하고 싶다면 최고의 선택이 될 팀입니다.
        </MainDescription>
      </FirstContent>
      <SecondContent>
        <Box flex={2}>
          <BoxTitle>하이라이트</BoxTitle>
          <VideoContanier></VideoContanier>
        </Box>
      </SecondContent>
      <ThirdContent>
        <BottunGroup>
          <ImageBox>
            <img src={type === 'f1' ? copang : tving} alt="" />
          </ImageBox>
          <Button
            onClick={() =>
              type === 'f1'
                ? window.open(
                    'https://www.coupangplay.com/promotion/sportspass/'
                  )
                : window.open('https://www.tving.com/sports/kbo')
            }
          >
            {text} 경기보러가기
          </Button>
        </BottunGroup>
        <BottunGroup>
          <ImageBox>
            <img src={dal} alt="" />
          </ImageBox>
          <Button onClick={onClickSaveCalender}>달력에 경기 일정 저장</Button>
        </BottunGroup>
      </ThirdContent>
    </SectionWrapper>
  );
};

export default TeamInfoSection;
