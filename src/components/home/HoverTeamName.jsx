import './HoverTeamName.css';

const HoverTeamName = ({ name, color, xy, delayClass }) => {
  return (
    <div
      className={`float-box ${delayClass ?? ''}`}
      style={{ left: xy.x, top: xy.y, backgroundColor: color }}
    >
      {name}
    </div>
  );
};

export default HoverTeamName;
