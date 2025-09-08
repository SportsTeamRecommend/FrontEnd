// homepage의 "왜 이 테스트를 해야 할까요?" 밑에 들어가는 설명 박스들
// width 1000px 이상일 시 위 3개, 아래 2개 구조 고정
// width 1000px 아래로 내려가면 세로로 5개 나열
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <>
      <div className="Title">왜 이 테스트를 해야 할까요?</div>
      <div className="top-row">
        <div className="D_Box">Description Box 1</div>
        <div className="D_Box">Description Box 2</div>
        <div className="D_Box">Description Box 3</div>
      </div>
      <div className="bottom-row">
        <div className="D_Box">Description Box Box Box 4</div>
        <div className="D_Box">Description Box Box Box 5</div>
      </div>
    </>
  );
};

export default DescriptionBox;
