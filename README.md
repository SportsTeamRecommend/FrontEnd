#  My Team Finder  
**F1 & KBO 성향 기반 팀 추천 서비스**

사용자의 성향, 취향, 선호도를 기반으로  
당신에게 가장 잘 맞는 **F1 팀 / KBO 팀**을 추천해주는 웹 서비스입니다.

간단한 테스트를 통해 당신의 응원팀을 찾고,  
각 팀의 특징을 비교하며 더 깊은 정보를 확인할 수 있습니다.

---

## ✨ 주요 기능

### 🔍 1. 팀 추천 설문 (F1 / KBO)
- 슬라이더 조절로 팀 성향 입력  
- 성적 / 팬덤 / 전통 / 언더독 / 프랜차이즈 등 다양한 기준 반영  
- 사용자의 선호도에 따라 Top 3 팀 추천

### 📊 2. 실시간 팀 비교
- F1 팀 또는 KBO 팀을 선택하여 핵심 지표 비교
- 성적, 팬덤 규모, 전통 등 여러 기준 제공
- UI 기반으로 직관적인 데이터 시각화

### 🧮 3. 점수 계산 로직
- 사용자 입력값(가중치)을 기반으로  
  팀별 고유 메트릭(F1Metrics, KboMetrics)을 종합하여  
  스코어 계산 후 Top3 선정

### 🎈 4. 홈 화면 Floating 애니메이션
- F1 / KBO 팀 이름이 배경에서 부드럽게 떠다니는 UI  
- 모바일에서는 좌표 자동 보정으로 화면이 절대 깨지지 않도록 처리

### 📱 5. 완전한 반응형 UI
- PC / Tablet / Mobile 전부 최적화  
- styled-components + CSS grid + flex 기반

### 📈 6. Vercel Analytics 연동
- 페이지뷰 / 사용자 방문 데이터 자동 수집  
- 배포 후 실시간 분석 가능

---

## 🛠️ 기술 스택

### Frontend
- **React 18**
- **Vite**
- **React Router**
- **styled-components**
- **Lucide Icons**
- **Vercel Analytics**

### Infra / DevOps
- **Vercel (프론트 배포)**
- **AWS EC2 (백엔드 서버)**
- **GitHub Actions (FlowTrack 자동데이터 수집)**

---

## 🚀 실행 방법

### 1. 패키지 설치
```bash
npm install
````

### 2. 로컬 실행

```bash
npm run dev
```

### 3. 빌드

```bash
npm run build
```

---

## 📦 배포(Vercel)

본 프로젝트는 **Vercel**을 사용하여 배포되었습니다.

---

## 📚 API & 데이터

### F1/ KBO 팀 데이터 출처

* 사용자 정의 메트릭(DB 저장)
* 팀별 이미지, 컬러맵, 메트릭 계산 함수 직접 제작

---

## 🤝 기여 방법

Pull Request 및 이슈 생성 환영합니다!
UI 개선, 지표 추가, 성능 개선 등 다양한 제안이 가능합니다.


---

## 🙋‍♂️ 문의

* 이메일: **[imde0205@gmail.com](mailto:imde0205@gmail.com)**
* 오류 제보: [Google Form 링크](https://docs.google.com/forms/d/e/1FAIpQLSfvKz1Y2eiLJXezSkOcq4jPb_RKqUvV_1xcTPt5zr7vQFmEfA/viewform)

