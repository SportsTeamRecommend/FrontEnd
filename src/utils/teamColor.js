export const kboTeam = {
  'KIA 타이거즈': '#EA0029',
  'LG 트윈스': '#C30452',
  '두산 베어스': '#1A1748',
  '롯데 자이언츠': '#041E42',
  '삼성 라이온즈': '#074CA1',
  '한화 이글스': '#FC4E00',
  'SSG 랜더스': '#CE0E2D',
  'NC 다이노스': '#315288',
  'KT 위즈': '#000000',
  '키움 히어로즈': '#570514',
};

export const f1Team = {
  'Oracle Red Bull Racing': '#1E41FF',
  'Mercedes-AMG Petronas': '#00D7B6',
  Ferrari: '#ED1131',
  McLaren: '#F47600',
  'Aston Martin Aramco': '#229971',
  Alpine: '#00A1E8',
  'Haas F1 Team': '#9C9FA2',
  'Kick Sauber': '#01C00E',
  Williams: '#1868DB',
  'Racing Bulls': '#6C98FF',
};

export const getTeamColor = (league, team) => {
  if (league === 'f1') {
    const foundKey = Object.keys(f1Team).find(
      (key) =>
        key.toLowerCase().includes(team.toLowerCase()) ||
        team.toLowerCase().includes(key.toLowerCase())
    );
    return f1Team[foundKey];
  }
  if (league === 'kbo') {
    const foundKey = Object.keys(kboTeam).find(
      (key) =>
        key.toLowerCase().includes(team.toLowerCase()) ||
        team.toLowerCase().includes(key.toLowerCase())
    );
    return kboTeam[foundKey];
  }
};
