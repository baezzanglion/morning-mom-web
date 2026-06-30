# 🌱 워크숍 OS 사용권 페이지 — 아침 10분 배포 가이드

> 자고 일어났을 때 이거 따라 하시면 됩니다.
> 코드는 다 작성·푸시 완료. **Vercel 배포 + 환경변수**만 남았어요.

---

## 작업 요약 (이미 완료된 것)

- `api/claude-proxy.js` 생성 — Vercel Function (백엔드 프록시)
- `workshop.html` 생성 — API 키 입력 X, 자동 백엔드 호출
- `vercel.json` 생성 — Vercel 설정
- git push → GitHub repo에 업로드 완료

---

## 아침 할 일 (10분)

### 1️⃣ Vercel 가입·로그인 (이미 있으면 skip, 2분)

- https://vercel.com → GitHub 계정으로 로그인
- 무료 (Hobby) plan 충분

### 2️⃣ 새 프로젝트 생성 (3분)

1. Vercel 대시보드 → "Add New..." → "Project"
2. Import Git Repository → `baezzanglion/morning-mom-web` 선택
3. Framework Preset: Other (자동 감지 안 되면)
4. Root Directory: `.` (기본)
5. Environment Variables 클릭 → 추가:
   - Name: `ANTHROPIC_API_KEY`
   - Value: `sk-ant-api03-xxx...` (본인 Anthropic API 키 그대로)
6. Deploy 클릭

→ 1-2분 후 배포 완료. URL 받음 (예: `morning-mom-web-xxx.vercel.app`)

### 3️⃣ 작동 테스트 (2분)

- 브라우저에서 `https://[받은URL]/workshop.html` 접속
- 받는 사람 입력 + "AI 후보 3개 제안받기" 클릭
- 후보 3개 도착 → ✓

### 4️⃣ 5명에게 URL 공유 (3분)

```
[5명 워크숍 — OS 사용권 URL]

🎁 https://[받은URL]/workshop.html

- 외부 공유 금지 (5명 한정)
- 사용 기간: 워크숍 후 1주 (~7/8)
- API 키 입력 X — 바로 사용 가능
- 모르는 거 슬랙으로!
```

---

## 문제 해결

### 🔴 "ANTHROPIC_API_KEY 환경변수가 설정되지 않았습니다"
→ Vercel 대시보드 → Settings → Environment Variables → 추가 → 재배포

### 🔴 카드 생성 실패 (500 에러)
→ Vercel 대시보드 → Functions → claude-proxy 로그 확인
→ API 키 유효한지 확인 (console.anthropic.com)

### 🔴 GitHub 연동 실패
→ Vercel에서 GitHub 권한 다시 부여 (Settings → Git → Reconnect)

---

## 일주일 후 (7/8) — 사용권 자동 만료

1. Vercel 대시보드 → Settings → Environment Variables
2. `ANTHROPIC_API_KEY` 값 삭제 또는 틀린 값으로 교체
3. 재배포

→ 5명도 더 이상 사용 못 함 (자연 폐기).

---

## 비용 추정

- 워크숍 시연 + 5명 일주일 사용 = 약 $4-5
- Vercel Function 무료 plan 충분
- 신경 안 써도 되는 수준

---

## 변경된 파일 정리

```
~/morning-mom-web-deploy/
├── api/
│   └── claude-proxy.js          [신규] Vercel Function 백엔드
├── workshop.html                 [신규] OS 사용권 페이지
├── vercel.json                   [신규] Vercel 설정
├── WORKSHOP_DEPLOY_GUIDE.md      [신규] 이 파일
├── create.html                   [그대로] 일반 페이지 (GitHub Pages)
└── ... 기존 파일 그대로
```

기존 `create.html`은 건드리지 않음 — GitHub Pages에서 그대로 작동.
`workshop.html`만 Vercel에 별도 배포 — 5명 한정.

---

## 한 줄

**자고 일어나서 10분만 투자하면, 5명에게 진짜 선물 손에 쥐어줄 수 있어요.** 🌱
