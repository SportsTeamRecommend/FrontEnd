import styles from './Button.module.css';

const Button = ({ onClick, text, type }) => {
  return (
    <button
      className={`${styles['sport-button']} ${styles[type]}`}
      onClick={onClick}
      text={text}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
