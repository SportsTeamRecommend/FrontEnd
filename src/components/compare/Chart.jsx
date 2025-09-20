import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// 차트에 필요한 구성 요소를 등록합니다.
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ team1, team2 }) => {
  // team1 또는 team2 데이터가 없을 경우 렌더링하지 않습니다.
  if (!team1 || !team2) {
    return null;
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#e0e0e0', // 범례 폰트 색상
        },
      },
      title: {
        display: true,
        text: '팀 전력 비교',
        color: '#e0e0e0',
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(224, 224, 224, 0.2)', // 그리드 라인 색상
        },
        ticks: {
          color: '#e0e0e0', // X축 라벨 색상
        },
      },
      y: {
        min: 0,
        max: 10,
        grid: {
          color: 'rgba(224, 224, 224, 0.2)',
        },
        ticks: {
          color: '#e0e0e0',
        },
      },
    },
  };

  const data = {
    labels: [
      '팀 성적',
      '선수 경력',
      '근본',
      '프랜차이즈 or 유스',
      '언더독',
      '팬덤',
    ],
    datasets: [
      {
        label: team1.name,
        data: team1.stats,
        backgroundColor: 'rgba(255, 99, 132, 0.7)', // 핑크색 계열
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: team2.name,
        data: team2.stats,
        backgroundColor: 'rgba(54, 162, 235, 0.7)', // 파란색 계열
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default Chart;
