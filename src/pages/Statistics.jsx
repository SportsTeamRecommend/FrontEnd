import { useState } from 'react';

import styles from './Statistics.module.css';

import Button from '../components/common/Button';

const Statistics = () => {
  const [type, setType] = useState('f1');

  const statisticsF1 = () => {
    setType('f1');
  };
  const statisticsKbo = () => {
    setType('kbo');
  };

  return (
    <div className={styles.statisticsContainer}>
      <div className={styles.Grid}>
        <div className={styles.firstContent}>
          <h1>팀 인기도 통계</h1>
          <h2>사용자들이 가장 많이 선택한 팀과 최신 트렌드를 확인해보세요.</h2>
          <div className={styles.btnContainer}>
            <Button
              onClick={statisticsF1}
              text="F1팀 통계"
              type="statistics-f1"
            />
            <Button
              onClick={statisticsKbo}
              text="KBO팀 통계"
              type="statistics-kbo"
            />
          </div>
        </div>
        <div className={styles.secondContent}>
          <h1>Top 3</h1>
          <div className={styles.priceGrid}>
            {/* 2등 카드 */}
            <div className={styles.priceCard}>
              {/* 1~3등 카드 크기 다르게 */}
              <div className={styles.iconBox}>
                <div className={styles.icon}>icon</div>
              </div>
              <div className={styles.teamName}>Oracle Redbull racing</div>
              <div className={styles.recommandAndHeartGrid}>
                <div className={styles.boxInCard}>
                  <div className={styles.text}>추천 횟수</div>
                  <div className={styles.number1}>1,247</div>
                </div>
                <div className={styles.boxInCard}>
                  <div className={styles.text}>좋아요</div>
                  <div className={styles.number2}>26.7%</div>
                </div>
              </div>
            </div>
            {/* 1등 카드 */}
            <div className={styles.priceCard}>
              <div className={styles.iconBox}>
                <div className={styles.icon}>icon</div>
              </div>
              <div className={styles.teamName}>Ferrari</div>
              <div className={styles.recommandAndHeartGrid}>
                <div className={styles.boxInCard}>
                  <div className={styles.text}>추천 횟수</div>
                  <div className={styles.number1}>1,247</div>
                </div>
                <div className={styles.boxInCard}>
                  <div className={styles.text}>좋아요</div>
                  <div className={styles.number2}>26.7%</div>
                </div>
              </div>
            </div>
            {/* 3등 카드 */}
            <div className={styles.priceCard}>
              <div className={styles.iconBox}>
                <div className={styles.icon}>icon</div>
              </div>
              <div className={styles.teamName}>Mersedes</div>
              <div className={styles.recommandAndHeartGrid}>
                <div className={styles.boxInCard}>
                  <div className={styles.text}>추천 횟수</div>
                  <div className={styles.number1}>1,247</div>
                </div>
                <div className={styles.boxInCard}>
                  <div className={styles.text}>좋아요</div>
                  <div className={styles.number2}>26.7%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
