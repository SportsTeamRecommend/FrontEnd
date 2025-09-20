import styles from './Button.module.css';

const Button = ({ onClick, text, type }) => {
  return (
    <button onClick={onClick} className={styles[`btn_${type}`]}>
      {text}
    </button>
  );
};

export default Button;
