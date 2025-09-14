import './Home.css';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import DescriptionBox from '../components/DescriptionBox';

import { Trophy, Zap, Users, Target, Heart, Star } from 'lucide-react';

const DB_Description = [
  {
    key: 1,
    title: '스포츠 입문',
    description: '흥미와 매력',
  },
  {
    key: 2,
    title: '정확한 분석',
    description: '성향 기반 매칭',
  },
  {
    key: 3,
    title: '커뮤니티',
    description: '소속감과 소통',
  },
  {
    key: 4,
    title: '나만의 팀',
    description: '성향과 취향을 반영',
  },
  {
    key: 5,
    title: '승리의 기쁨',
    description: '함께하는 환호',
  },
];

const Home = () => {
  const nav = useNavigate();
  const goF1Test = () => {
    nav('/test/f1');
  };
  const goBaseballTest = () => {
    nav('/test/baseball');
  };
  return (
    <div className="home_container">
      {/* Header */}
      <div className="header">
        <div className="logo-section">
          <div className="logo-icon">
            <Trophy
              style={{
                color: 'FBBF24',
                width: '2rem',
                height: '2rem',
              }}
            />
          </div>
          <span className="logo-text">우리 웹사이트 이름</span>
        </div>
        <div className="language-selector">
          <span>🇰🇷 한국어</span>
        </div>
      </div>

      {/* Main */}
      <div className="main">
        <div className="content-grid">
          <div className="left-content">
            <div className="first-text">
              <h1 className="main-title">
                당신에게 딱 맞는
                <br />
                <span style={{ color: '#fbbf24' }}>스포츠 팀</span>을
                <br />
                찾아보세요!
              </h1>
              <p className="description">
                F1과 KBO의 다양한 팀들 중에서 당신의 성향과 취향에 가장 잘 맞는
                팀을 추천해드립니다. <br />
                간단한 테스트로 평생 응원할 팀을 만나보세요.
              </p>
            </div>

            {/* F1, KBO Buttons */}
            <div className="button-container">
              <button
                className="sport-button f1-button"
                onClick={goF1Test}
                text="F1"
                type="f1"
              >
                <Zap className="button-icon" />
                F1 팀 찾기
              </button>
              <button
                className="sport-button kbo-button"
                onClick={goBaseballTest}
                text="BASEBALL"
                type="baseball"
              >
                <Trophy className="button-icon" />
                KBO 팀 찾기
              </button>
            </div>
          </div>

          {/* <div className="btn_container">
            <Button onClick={goF1Test} text="F1" type="f1" />
            <Button onClick={goBaseballTest} text="BASEBALL" type="baseball" />
          </div> */}
        </div>

        {/* Why ~ */}
        <section className="descriptionBox_container">
          <div className="DB_header">
            <h2 className="DB_title">왜 이 테스트를 해야 할까요?</h2>
            <p className="DB_description">
              당신의 성향을 분석해서 가장 잘 맞는 팀을 찾아드립니다
            </p>
          </div>
          <div className="DB_grid">
            <DescriptionBox
              des={DB_Description[0]}
              icon={<Star className="icon" style={{ color: 'C4B5FD' }} />}
            />
            <DescriptionBox
              des={DB_Description[1]}
              icon={<Target className="icon" style={{ color: 'FBBF24' }} />}
            />
            <DescriptionBox
              des={DB_Description[2]}
              icon={<Users className="icon" style={{ color: 'FFFFFF' }} />}
            />
            <DescriptionBox
              des={DB_Description[3]}
              icon={<Heart className="icon" style={{ color: 'F87171' }} />}
            />
            <DescriptionBox
              des={DB_Description[4]}
              icon={<Trophy className="icon" style={{ color: 'FBBF24' }} />}
            />
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="footer"></div>
    </div>
  );
};

export default Home;
