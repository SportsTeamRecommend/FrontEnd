import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* 상단 로고 영역 */}
      <div className={styles.headerTop}>
        <div className={styles.logoBox}>로고</div>
        <h1 className={styles.siteTitle}>MY TEAM FINDER</h1>
      </div>

      {/* 네비게이션 영역 */}
      <nav className={styles.navBar}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ''}`
              }
            >
              홈
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ''}`
              }
            >
              통계
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/compare"
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ''}`
              }
            >
              비교
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/result"
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ''}`
              }
            >
              결과
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
