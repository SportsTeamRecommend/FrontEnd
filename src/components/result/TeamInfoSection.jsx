import styled from 'styled-components';

import copang from './../../assets/copang.jpg';
import tving from './../../assets/tving.png';
import dal from '../../assets/dalluck.png';

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getAllTeamData } from '../../utils/allTeamData';

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

const TeamInfoSection = ({ teamName, type }) => {
  const text = type === 'f1' ? 'F1' : 'KBO';

  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllTeamData(type, teamName);
        setTeamData(data);
      } catch (error) {
        console.error(
          '팀 정보 데이터를 가져오는 데 오류가 발생했습니다.',
          error
        );
      }
    };

    fetchData(); // 페이지 로드 시 팀 데이터 가져오기
  }, [teamName, type]);

  const onClickSaveCalender = () => {
    toast.info('아직 지원하지 않는 기능입니다.');
  };

  if (!teamData) return <div>팀 데이터를 불러오는 중입니다...</div>;

  return (
    <SectionWrapper>
      <FirstContent>
        <MainTitle>팀 정보</MainTitle>
        <MainDescription>{teamData.description}</MainDescription>
      </FirstContent>
      <SecondContent>
        <Box flex={2}>
          <BoxTitle>하이라이트</BoxTitle>
          {/* videoUrl 받은 후 <iframe> 태그 사용*/}
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
