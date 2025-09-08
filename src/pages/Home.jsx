import './Home.css';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

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
      <h1 className="site_title">팀추천 해줍니다(사이트 이름)</h1>
      <div>
        <p className="site_content">당신의 스포츠 팀을 찾아보세요</p>
        <p className="site_content">당신의 팀은?</p>
      </div>
      <div className="btn_container">
        <Button onClick={goF1Test} text="F1" type="f1" />
        <Button onClick={goBaseballTest} text="BASEBALL" type="baseball" />
      </div>
    </div>
  );
};

export default Home;
