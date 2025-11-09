import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import DescriptionBox from '../components/home/DescriptionBox';
import HoverTeamName from '../components/home/HoverTeamName';
import { DB_Description, TeamNames } from '../utils/homeData';
import { Trophy, Users, Target, Heart, Star } from 'lucide-react';
import * as S from './Home.styles';

const Home = () => {
  const nav = useNavigate();
  const goF1Test = () => nav('/test/f1');
  const goBaseballTest = () => nav('/test/baseball');

  return (
    <S.HomeContainer>
      <S.ContentGrid>
        {/* 왼쪽 영역 */}
        <S.LeftContent>
          <S.FirstText>
            <S.MainTitle>
              당신에게 딱 맞는
              <span style={{ color: '#fbbf24' }}> 스포츠 팀</span>을 찾아보세요!
            </S.MainTitle>
            <S.Description>
              F1과 KBO의 다양한 팀들 중에서 당신의 성향과 취향에 가장 잘 맞는
              팀을 추천해드립니다.
            </S.Description>
            <S.Description>
              간단한 테스트로 평생 응원할 팀을 만나보세요.
            </S.Description>
          </S.FirstText>

          <S.ButtonContainer>
            <Button onClick={goF1Test} text="F1팀" type="f1-button" />
            <Button onClick={goBaseballTest} text="KBO팀" type="kbo-button" />
          </S.ButtonContainer>
        </S.LeftContent>

        {/* 오른쪽 영역 */}
        <S.RightContent>
          <S.IllustrationBox>
            <S.CircleBox>
              <Users style={{ width: '3rem', height: '3rem', color: '#fff' }} />
            </S.CircleBox>
            <div style={{ color: '#ffffff', fontWeight: 500 }}>
              나만의 팀을 찾아보세요!
            </div>
            {TeamNames.map((b) => (
              <HoverTeamName
                key={b.name}
                name={b.name}
                color={b.color}
                xy={b.xy}
                delayClass={b.delayClass}
              />
            ))}
          </S.IllustrationBox>
        </S.RightContent>
      </S.ContentGrid>

      {/* 왜 이 테스트를 해야 하나요 */}
      <section>
        <S.DBHeader>
          <S.DBTitle>왜 이 테스트를 해야 할까요?</S.DBTitle>
          <S.DBDescription>
            당신의 성향을 분석해서 가장 잘 맞는 팀을 찾아드립니다
          </S.DBDescription>
        </S.DBHeader>

        <S.DBGrid>
          <DescriptionBox
            des={DB_Description[0]}
            icon={
              <Star
                style={{ width: '3rem', height: '3rem', color: '#C4B5FD' }}
              />
            }
          />
          <DescriptionBox
            des={DB_Description[1]}
            icon={
              <Target
                style={{ width: '3rem', height: '3rem', color: '#FBBF24' }}
              />
            }
          />
          <DescriptionBox
            des={DB_Description[2]}
            icon={
              <Users
                style={{ width: '3rem', height: '3rem', color: '#FFFFFF' }}
              />
            }
          />
          <DescriptionBox
            des={DB_Description[3]}
            icon={
              <Heart
                style={{ width: '3rem', height: '3rem', color: '#F87171' }}
              />
            }
          />
          <DescriptionBox
            des={DB_Description[4]}
            icon={
              <Trophy
                style={{ width: '3rem', height: '3rem', color: '#FBBF24' }}
              />
            }
          />
        </S.DBGrid>
      </section>
    </S.HomeContainer>
  );
};

export default Home;
