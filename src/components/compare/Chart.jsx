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
import { getFullName } from '../../utils/teamData';

// 차트에 필요한 구성 요소를 등록합니다.
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ team1, team2, type }) => {
  if (!team1 || !team2) return null;

  const team1Stats =
    type === 'kbo'
      ? [
          team1.record,
          team1.legacy,
          team1.fandom,
          team1.growth,
          team1.franchiseStar,
        ]
      : [
          team1.teamRecord,
          team1.driverRecord,
          team1.legacy,
          team1.franchiseStar,
          team1.underdog,
          team1.fandom,
        ];

  const team2Stats =
    type === 'kbo'
      ? [
          team2.record,
          team2.legacy,
          team2.fandom,
          team2.growth,
          team2.franchiseStar,
        ]
      : [
          team1.teamRecord,
          team1.driverRecord,
          team1.legacy,
          team1.franchiseStar,
          team1.underdog,
          team1.fandom,
        ];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#e0e0e0',
        },
      },
      title: {
        display: true,
        text: '팀 전력 비교',
        color: '#e0e0e0',
        font: { size: 20 },
      },
    },
    scales: {
      x: {
        grid: { color: 'rgba(224, 224, 224, 0.2)' },
        ticks: { color: '#e0e0e0' },
      },
      y: {
        min: 0,
        max: 10,
        grid: { color: 'rgba(224, 224, 224, 0.2)' },
        ticks: { color: '#e0e0e0' },
      },
    },
  };

  const data = {
    labels:
      type === 'f1'
        ? ['팀 성적', '선수 경력', '근본', '팬덤 규모', '언더독', '프랜차이즈']
        : ['팀 성적', '근본', '팬덤 규모', '성장 가능성', '프랜차이즈 스타'],
    datasets: [
      {
        label: getFullName(team1.teamName, type),
        data: team1Stats,
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: getFullName(team2.teamName, type),
        data: team2Stats,
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: '70vw', height: '400px' }}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default Chart;
