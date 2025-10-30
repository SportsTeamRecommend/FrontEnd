export const kboTeam = {
  'KIA Tigers': '#EA0029',
  'LG Twins': '#C30452',
  'Doosan Bears': '#1A1748',
  'Lotte Giants': '#041E42',
  'Samsung Lions': '#074CA1',
  'Hanwha Eagles': '#FC4E00',
  'SSG Landers': '#CE0E2D',
  'NC Dinos': '#315288',
  'KT Wiz': '#000000',
  'Kiwoom Heroes': '#570514',
};

export const f1Team = {
  'Oracle Red Bull Racing': '#1E41FF',
  'Mercedes-AMG Petronas': '#00D7B6',
  Ferrari: '#ED1131',
  McLaren: '#F47600',
  'Aston Martin Aramco': '#229971',
  Alpine: '#00A1E8',
  'Haas F1 Team': '#9C9FA2',
  'Kick Sauber (Stake F1 Team)': '#01C00E',
  Williams: '#1868DB',
  'Visa Cash App RB (RB F1 Team)': '#6C98FF',
};

export const getTeamColor = (league, team) => {
  if (league === 'kbo') {
    return kboTeam[team];
  }
  if (league === 'f1') {
    return f1Team[team];
  }
};
