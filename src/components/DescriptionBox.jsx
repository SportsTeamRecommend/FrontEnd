import './DescriptionBox.css';

const DescriptionBox = ({ des, icon }) => {
  return (
    <div className="DB_card">
      {icon}
      <h3 className="feature-title">{des.title}</h3>
      <p className="feature-description">{des.description}</p>
    </div>
  );
};

export default DescriptionBox;
