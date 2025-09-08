import './Button.css';

const Button = ({ onClick, text, type }) => {
  return (
    <button onClick={onClick} className={`btn_${type}`}>
      {text}
    </button>
  );
};

export default Button;
