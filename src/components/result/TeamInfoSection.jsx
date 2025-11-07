import styled from 'styled-components';

import copang from './../../assets/copang.jpg';
import dal from '../../assets/dalluck.png';

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
const TeamDescriptionCard = styled.div`
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
    width: 100%;
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

const TeamInfoSection = () => {
  return (
    <SectionWrapper>
      <FirstContent>
        <MainTitle>왜 이 팀이 선정되었나요?</MainTitle>
        <MainDescription>
          혁신적 기술력과 압도적인 성능을 기반으로 꾸준히 우승권을 유지하는
          팀이기 때문에 선택, 공격적인 레이스 전략과 빠른 의사결정으로 역동적인
          경기 스타일을 보여줍니다. 글로벌 브랜드와의 협업을 통해 팀의 안정성과
          성장 가능성을 동시에 갖추고 있습니다.
        </MainDescription>
      </FirstContent>
      <SecondContent>
        <Box flex={2}>
          <BoxTitle>하이라이트</BoxTitle>
          <VideoContanier></VideoContanier>
        </Box>
        <Box flex={1}>
          <BoxTitle>팀 정보</BoxTitle>
          <TeamDescriptionCard>
            이 팀의 기원은 1997년 F1 3회 챔프인 재키 스튜어트와 그의 아들 폴
            스튜어트가 설립한 스튜어트 그랑프리로 거슬러 올라간다. 창단 초반엔
            신생팀답게 하위권을 전전하다 3년차인 99년 4위로 뛰어올라간 후,
            포드에 매각되었고, 포드는 영국에서 인수한 브랜드인 재규어의 이름을
            붙여 "재규어 레이싱"이라 명명한 후 2000 시즌부터 F1에 참전한다. F1
            3회 챔프인 니키 라우다를 대표로 영입하는 등 의욕적인 행보를
            보였지만, 재규어 레이싱의 이름으로 참전한 다섯 시즌의 순위는 98777.
            결국 2004 시즌을 끝으로 이 팀은 각종 모터 스포츠 및 익스트림
            스포츠에 눈독을 들이고 있던 레드불에게 인수된다. 그리하여 현재의
            레드불 레이싱이 탄생.
          </TeamDescriptionCard>
        </Box>
      </SecondContent>
      <ThirdContent>
        <BottunGroup>
          <ImageBox>
            <img src={copang} alt="" />
          </ImageBox>
          <Button>F1 경기보러가기</Button>
        </BottunGroup>
        <BottunGroup>
          <ImageBox>
            <img src={dal} alt="" />
          </ImageBox>
          <Button>달력에 경기 일정 저장</Button>
        </BottunGroup>
      </ThirdContent>
    </SectionWrapper>
  );
};

export default TeamInfoSection;
