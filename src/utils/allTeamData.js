import api from 'axios';

// 특정 팀의 정보를 모두 가져옴
export const getAllTeamData = async (teamName) => {
  try {
    const res = await api.get(`/api/f1/team?name=${teamName}`);
    return res.data;
  } catch (error) {
    console.error('F1 팀 데이터 조회 중 에러 발생', error);
    throw error;
  }
};
