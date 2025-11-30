import api from './axios';

// 특정 팀의 정보를 모두 가져옴
export const getAllTeamData = async (type, teamName) => {
  try {
    const res = await api.get(`/api/${type}/team?name=${teamName}`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.error('팀 데이터 조회 중 에러 발생', error);
    throw error;
  }
};

export const reverseBirth = (birth) => {
  const arr = birth.split('/');
  return arr.reverse().join('/');
};
