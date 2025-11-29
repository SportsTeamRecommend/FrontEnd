export const f1SliderLabels = [
  '팀 성적',
  '선수 성적',
  '근본',
  '언더독',
  '프랜차이즈',
  '팬덤 규모',
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
    preferenceKey: 'legacyPreference',
    importanceKey: 'legacyImportance',
  },
  {
    label: '언더독',
    preferenceKey: 'underdogPreference',
    importanceKey: 'underdogImportance',
  },
  {
    label: '프랜차이즈',
    preferenceKey: 'franchiseStarPreference',
    importanceKey: 'franchiseStarImportance',
  },
  {
    label: '팬덤 규모',
    preferenceKey: 'fandomPreference',
    importanceKey: 'fandomImportance',
  },
];

export const kboFields = [
  {
    label: '팀 성적',
    preferenceKey: 'recordPreference',
    importanceKey: 'recordImportance',
  },
  {
    label: '근본',
    preferenceKey: 'legacyPreference',
    importanceKey: 'legacyImportance',
  },
  {
    label: '팬덤 규모',
    preferenceKey: 'fandomPreference',
    importanceKey: 'fandomImportance',
  },
  {
    label: '성장 가능성',
    preferenceKey: 'growthPreference',
    importanceKey: 'growthImportance',
  },
  {
    label: '연고지',
    preferenceKey: 'regionPreference',
    importanceKey: 'regionImportance',
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
  ['상관없음', '언더독'],
  ['상관없음', '프랜차이즈'],
  ['상관없음', '큼', '작음'],
];

export const baseballSliderCheckobx = [
  ['상관없음', '강팀', '약팀'],
  ['상관없음', '전통', '신생'],
  ['상관없음', '많음', '적음'],
  ['상관없음', '높음'],
  ['상관없음', '가까운팀'],
  ['상관없음', '많음'],
];

export const regionList = [
  { label: '서울특별시', value: 'SEOUL' },
  { label: '부산광역시', value: 'BUSAN' },
  { label: '대구광역시', value: 'DAEGU' },
  { label: '인천광역시', value: 'INCHEON' },
  { label: '광주광역시', value: 'GWANGJU' },
  { label: '대전광역시', value: 'DAEJEON' },
  { label: '울산광역시', value: 'ULSAN' },
  { label: '세종특별자치시', value: 'SEJONG' },
  { label: '경기도', value: 'GYEONGGI' },
  { label: '강원도', value: 'GANGWON' },
  { label: '충청북도', value: 'CHUNGBUK' },
  { label: '충청남도', value: 'CHUNGNAM' },
  { label: '전라북도', value: 'JEONBUK' },
  { label: '전라남도', value: 'JEONNAM' },
  { label: '경상북도', value: 'GYEONGBUK' },
  { label: '경상남도', value: 'GYEONGNAM' },
  { label: '제주도', value: 'JEJU' },
];
