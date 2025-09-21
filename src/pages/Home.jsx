import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import DescriptionBox from '../components/home/DescriptionBox';
import HoverTeamName from '../components/home/HoverTeamName';
import { DB_Description, TeamNames } from '../utils/homeData';

import { Trophy, Zap, Users, Target, Heart, Star } from 'lucide-react';

const Home = () => {
  const nav = useNavigate();
  const goF1Test = () => {
    nav('/test/f1');
  };
  const goBaseballTest = () => {
    nav('/test/baseball');
  };

  return (
    <div className={styles['home_container']}>
      {/* Main */}
      <div className={styles['main']}>
        <div className={styles['content-grid']}>
          <div className={styles['left-content']}>
            <div className={styles['first-text']}>
              <h1 className={styles['main-title']}>
                당신에게 딱 맞는
                <span style={{ color: '#fbbf24' }}> 스포츠 팀</span>을
                찾아보세요!
              </h1>
              <div className={styles['description']}>
                F1과 KBO의 다양한 팀들 중에서 당신의 성향과 취향에 가장 잘 맞는
                팀을 추천해드립니다.
              </div>
              <div className={styles['description']}>
                간단한 테스트로 평생 응원할 팀을 만나보세요.
              </div>
            </div>

            {/* F1, KBO Buttons */}

            <div className={styles['button-container']}>
              <Button onClick={goF1Test} text={'F1팀'} type={'f1-button'} />
              {/* <Zap className={styles['button-icon']} /> */}

              <Button
                onClick={goBaseballTest}
                text={'KBO팀'}
                type={'kbo-button'}
              />
            </div>
          </div>

          <div className={styles['right-content']}>
            <div className={styles['illustration-box']}>
              <div className={styles['circle-box']}>
                <Users className={styles['circle-icon']} />
              </div>
              <div
                className={styles['circle-text']}
                style={{ color: '#ffffff', fontWeight: '500' }}
              >
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
            </div>
          </div>
        </div>

        {/* Why ~ */}
        <section className={styles['descriptionBox_container']}>
          <div className={styles['DB_header']}>
            <h2 className={styles['DB_title']}>왜 이 테스트를 해야 할까요?</h2>
            <p className={styles['DB_description']}>
              당신의 성향을 분석해서 가장 잘 맞는 팀을 찾아드립니다
            </p>
          </div>
          <div className={styles['DB_grid']}>
            <DescriptionBox
              des={DB_Description[0]}
              icon={
                <Star className={styles['icon']} style={{ color: 'C4B5FD' }} />
              }
            />
            <DescriptionBox
              des={DB_Description[1]}
              icon={
                <Target
                  className={styles['icon']}
                  style={{ color: 'FBBF24' }}
                />
              }
            />
            <DescriptionBox
              des={DB_Description[2]}
              icon={
                <Users className={styles['icon']} style={{ color: 'FFFFFF' }} />
              }
            />
            <DescriptionBox
              des={DB_Description[3]}
              icon={
                <Heart className={styles['icon']} style={{ color: 'F87171' }} />
              }
            />
            <DescriptionBox
              des={DB_Description[4]}
              icon={
                <Trophy
                  className={styles['icon']}
                  style={{ color: 'FBBF24' }}
                />
              }
            />
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className={styles['footer']}></div>
    </div>
  );
};

export default Home;
