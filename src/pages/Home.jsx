import './Home.css';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import DescriptionBox from '../components/DescriptionBox';

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
      <div className="header">
        <div className="logo-section">
          <div className="logo-icon"></div>
          <span className="logo-text">우리 웹사이트 이름</span>
        </div>
        <div className="language-selector">
          <span>🇰🇷 한국어</span>
        </div>
      </div>

      <h1 className="site_title">팀추천 해줍니다(사이트 이름)</h1>
      <div>
        <p className="site_content">당신의 스포츠 팀을 찾아보세요</p>
        <p className="site_content">당신의 팀은?</p>
      </div>
      <div className="btn_container">
        <Button onClick={goF1Test} text="F1" type="f1" />
        <Button onClick={goBaseballTest} text="BASEBALL" type="baseball" />
      </div>
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
  );
};

export default Home;
