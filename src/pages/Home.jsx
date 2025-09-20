import './Home.css';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import DescriptionBox from '../components/DescriptionBox';
import HoverTeamName from '../components/home/HoverTeamName';

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
const TeamNames = [
  {
    name: 'Ferrari',
    color: '#E02424',
    xy: { x: 300, y: 10 },
    delayClass: 'float-delay-1',
  },
  {
    name: 'Mclaren',
    color: '#F97316',
    xy: { x: -160, y: 155 },
    delayClass: 'float-delay-2',
  },
  {
    name: 'AMG',
    color: '#10B981',
    xy: { x: 330, y: 260 },
    delayClass: 'float-delay-3',
  },
  {
    name: '롯데 자이언츠',
    color: '#1E3A8A',
    xy: { x: -120, y: 30 },
    delayClass: 'float-delay-4',
  },
  {
    name: 'LG 트윈스',
    color: '#BE185D',
    xy: { x: 370, y: 120 },
    delayClass: 'float-delay-5',
  },
  {
    name: '키움 히어로즈',
    color: '#581C1C',
    xy: { x: -80, y: 300 },
    delayClass: 'float-delay-6',
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
                <span style={{ color: '#fbbf24' }}> 스포츠 팀</span>을
                찾아보세요!
              </h1>
              <div className="description">
                F1과 KBO의 다양한 팀들 중에서 당신의 성향과 취향에 가장 잘 맞는
                팀을 추천해드립니다.
              </div>
              <div className="description">
                간단한 테스트로 평생 응원할 팀을 만나보세요.
              </div>
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

          <div className="right-content">
            <div className="illustration-box">
              <div className="circle-box">
                <Users className="circle-icon" />
              </div>
              <div
                className="circle-text"
                style={{ color: '#ffffff', fontWeight: '500' }}
              >
                나만의 팀을 찾아보세요!
              </div>
              {TeamNames.map((b) => (
                <HoverTeamName
                  name={b.name}
                  color={b.color}
                  xy={b.xy}
                  delayClass={b.delayClass}
                />
              ))}
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
