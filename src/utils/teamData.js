export const f1Teams = [
  { id: 'Red Bull Racing', name: 'Oracle Red Bull Racing' },
  { id: 'Ferrari', name: 'Ferrari' },
  { id: 'McLaren', name: 'McLaren' },
  { id: 'Mercedes', name: 'Mercedes-AMG Petronas' },
  { id: 'Williams', name: 'Williams' },
  { id: 'Racing Bulls', name: 'Racing Bulls' },
  { id: 'Aston Martin', name: 'Aston Martin Aramco' },
  { id: 'Haas F1 Team', name: 'Haas F1 Team' },
  { id: 'Kick Sauber', name: 'Kick Sauber' },
  { id: 'Alpine', name: 'Alpine' },
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

const f1NameMap = Object.fromEntries(
  f1Teams.map((team) => [team.id.toLowerCase(), team.name])
);

export const getFullName = (shortName, type) => {
  if (!shortName) return null;
  if (type === 'kbo') return kboNameMap[shortName.toLowerCase()];
  else return f1NameMap[shortName.toLowerCase()];
};
