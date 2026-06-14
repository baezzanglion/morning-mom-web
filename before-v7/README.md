# morning-mom · 따뜻한 메시지 카드

> 사랑하는 사람에게 한 줄, 손글씨 카드로.

매일 아침 받는 사람에게 보낼 따뜻한 한 줄을 만들고 손글씨 카드(PNG)로 다운로드·복사할 수 있는 정적 웹앱.
스폰지클럽 3주차 미션 1·2·3 결과물의 공유용 인터페이스.

## 사용

[`https://baezzanglion.github.io/morning-mom-web/`](https://baezzanglion.github.io/morning-mom-web/) 에서 바로 사용.

1. 받는 사람·간단 프로필·톤 입력
2. (선택) 본인 Anthropic API key 등록 → "✨ AI 후보 3개 제안받기"로 LLM 후보 받기
3. 메시지 직접 편집 또는 후보 선택
4. 폰트 토글 (둥근 손글씨 / 차분한 명조)
5. PNG 다운로드 또는 이미지 클립보드 복사 → 카톡에 바로 붙여넣기

## 메시지 양식

- **의미단위 줄바꿈**: `|`로 끊는다
- **강조**: 한 줄을 `**...**`으로 감싸면 굵게

예:
```
사랑 받는 게|당연한 사람이 있어요.|**엄마, 당신이에요.**
```

## 기술

- 단일 HTML (Vanilla JS + Canvas), 의존성 0
- 한국어 폰트: Google Fonts (Gaegu, Gowun Batang)
- LLM 호출: Anthropic API 브라우저 직접 호출 (`anthropic-dangerous-direct-browser-access`)
- API key는 본인 브라우저 LocalStorage에만 저장 (서버 X)

## 라이선스 / 안전

- API key는 페이지 캡쳐·공유 시 노출 위험. 다른 사람에게 페이지 보여줄 때는 먼저 "지우기"로 LocalStorage에서 제거.
- 이 페이지 자체는 사용자의 프로필이나 메시지를 어디에도 저장·전송하지 않음.

## 만든 곳

스폰지클럽 (2026년 5–6월, 7주 AI 교육과정) 3주차 미션.
