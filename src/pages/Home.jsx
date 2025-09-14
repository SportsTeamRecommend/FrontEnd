import './Home.css';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import DescriptionBox from '../components/DescriptionBox';

import { Trophy, Zap, Users, Target, Heart, Star } from 'lucide-react';

const DB_Description = [
  {
    key: 1,
    img: undefined,
    title: '커뮤니티',
    description: '같은 팀 팬들과 소통',
  },
  {
    key: 2,
    img: undefined,
    title: '재미있는 경험',
    description: '스포츠의 즐거움',
  },
  {
    key: 2,
    img: undefined,
    title: '재미있는 경험',
    description: '스포츠의 즐거움',
  },
  {
    key: 2,
    img: undefined,
    title: '재미있는 경험',
    description: '스포츠의 즐거움',
  },
  {
    key: 2,
    img: undefined,
    title: '재미있는 경험',
    description: '스포츠의 즐거움',
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
          <div className="logo-icon"></div>
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
                팀을 추천해드립니다. 간단한 테스트로 평생 응원할 팀을
                만나보세요.
              </p>
            </div>

            {/* Search Buttons */}
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
            <DescriptionBox des={DB_Description[0]} />
            <DescriptionBox des={DB_Description[1]} />
            <DescriptionBox des={DB_Description[2]} />
            <DescriptionBox des={DB_Description[3]} />
            <DescriptionBox des={DB_Description[4]} />
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="footer"></div>
    </div>
  );
};

export default Home;
