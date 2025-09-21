import styles from './DescriptionBox.module.css';

const DescriptionBox = ({ des, icon }) => {
  return (
    <div className="DB_card">
      {icon}
      <h3 className={styles['feature-title']}>{des.title}</h3>
      <p className={styles['feature-description']}>{des.description}</p>
    </div>
  );
};

export default DescriptionBox;
