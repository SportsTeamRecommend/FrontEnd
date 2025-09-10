import './DescriptionBox.css';

const DescriptionBox = ({ des }) => {
  console.log(des);
  return (
    <div className="DB_card">
      <h3 className="feature-title">{des.title}</h3>
      <p className="feature-description">{des.description}</p>
    </div>
  );
};

export default DescriptionBox;
