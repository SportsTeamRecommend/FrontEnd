export const f1SliderLabels = [
  '팀 성적',
  '선수 성적',
  '근본',
  '팬덤 규모',
  '언더독',
  '프랜차이즈',
];

export const baseballSliderLabels = [
  '팀 성적',
  '근본',
  '팬덤 규모',
  '성장 가능성',
  '연고지',
  '프랜차이즈 스타',
];

export const f1Fields = [
  {
    label: '팀 성적',
    preferenceKey: 'teamRecordPreference',
    importanceKey: 'teamRecordImportance',
  },
  {
    label: '선수 성적',
    preferenceKey: 'driverRecordPreference',
    importanceKey: 'driverRecordImportance',
  },
  {
    label: '근본',
    preferenceKey: 'heritagePreference',
    importanceKey: 'heritageImportance',
  },
  {
    label: '팬덤 규모',
    preferenceKey: 'fandomPreference',
    importanceKey: 'fandomImportance',
  },
  {
    label: '언더독',
    preferenceKey: 'underdogSpiritPreference',
    importanceKey: 'underdogSpiritImportance',
  },
  {
    label: '프랜차이즈',
    preferenceKey: 'franchiseStarPreference',
    importanceKey: 'franchiseStarImportance',
  },
];

export const kboFields = [
  {
    label: '팀 성적',
    preferenceKey: 'teamRecordPreference',
    importanceKey: 'teamRecordImportance',
  },
  {
    label: '근본',
    preferenceKey: 'heritagePreference',
    importanceKey: 'heritageImportance',
  },
  {
    label: '팬덤 규모',
    preferenceKey: 'fandomPreference',
    importanceKey: 'fandomImportance',
  },
  {
    label: '성장 가능성',
    preferenceKey: 'driverRecordPreference', // 중요: 선수 성장 가능성 → 선수 기록으로 매핑
    importanceKey: 'driverRecordImportance',
  },
  {
    label: '연고지',
    preferenceKey: 'underdogSpiritPreference', // 원래 언더독이었지만 라벨명만 변경이라고 가정
    importanceKey: 'underdogSpiritImportance',
  },
  {
    label: '프랜차이즈 스타',
    preferenceKey: 'franchiseStarPreference',
    importanceKey: 'franchiseStarImportance',
  },
];

/**
 * string 타입으로 백엔드에 전달
 * NONE, HIGH, LOW
 */
export const f1SliderCheckobx = [
  ['상관없음', '강팀', '약팀'],
  ['상관없음', '좋음', '나쁨'],
  ['상관없음', '전통', '신생'],
  ['상관없음', '큼', '작음'],
  ['상관없음', '언더독'],
  ['상관없음', '프랜차이즈'],
];

export const baseballSliderCheckobx = [
  ['상관없음', '강팀', '약팀'],
  ['상관없음', '전통', '신생'],
  ['상관없음', '많음', '적음'],
  ['상관없음', '높음'],
  ['상관없음', '가까운팀'],
  ['상관없음', '많음'],
];

export const region = [
  '서울특별시',
  '부산광역시',
  '대구광역시',
  '인천광역시',
  '광주광역시',
  '대전광역시',
  '울산광역시',
  '세종특별자치시',
  '경기도',
  '강원도',
  '충청북도',
  '충청남도',
  '전라북도',
  '전라남도',
  '경상북도',
  '경상남도',
  '제주도',
];
