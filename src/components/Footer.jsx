import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr className={styles.divider} />
      <div className={styles.links}>
        <div className="text-box">
          <a href="mailto:example@gmail.com">example@gmail.com</a>
        </div>
        <div className="text-box">
          <a href="/feedback">오류 및 제안</a>
        </div>
        <div className="text-box">
          <a href="/terms">이용약관</a>
        </div>
      </div>
      <div className={styles.copy}>
        © 2025 YourService. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
