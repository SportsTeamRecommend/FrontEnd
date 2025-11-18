export const f1Teams = [
  { id: 'redbull', name: 'Oracle RedBull Racing', stats: [2, 7, 8, 7, 4, 9] },
  { id: 'ferrari', name: 'Ferrari', stats: [6, 1, 3, 7, 5, 1] },
];

export const kboTeams = [
  { id: '한화', name: '한화 이글스' },
  { id: 'KIA', name: 'KIA 타이거즈' },
  { id: 'KT', name: 'KT 위즈' },
  { id: 'LG', name: 'LG 트윈스' },
  { id: '롯데', name: '롯데 자이언츠' },
  { id: 'NC', name: 'NC 다이노스' },
  { id: '두산', name: '두산 베어스' },
  { id: 'SSG', name: 'SSG 랜더스' },
  { id: '삼성', name: '삼성 라이온즈' },
  { id: '키움', name: '키움 히어로즈' },
];

const kboNameMap = Object.fromEntries(
  kboTeams.map((team) => [team.id.toLowerCase(), team.name])
);

export const getFullKboName = (shortName) => {
  if (!shortName) return null;
  return kboNameMap[shortName.toLowerCase()] || shortName;
};
