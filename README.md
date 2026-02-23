# 포트폴리오 앱 개발 프로젝트

개인 포트폴리오 웹사이트 (HTML, CSS, JavaScript)

## 개요

- **프로젝트명**: Portfolio App
- **목적**: 개발자 소개, 스킬, 프로젝트, 연락처를 보여주는 단일 페이지 포트폴리오
- **기술 스택**: HTML5, CSS3, Vanilla JavaScript

## 구조

```
portfolio/
├── index.html   # 메인 페이지 (홈, 소개, 스킬, 프로젝트, 연락처)
├── styles.css   # 스타일 (다크 테마, 밝은 그린 액센트, 반응형)
├── script.js    # 인터랙션 (모바일 메뉴, 스크롤 효과)
└── README.md    # 프로젝트 설명 (본 문서)
```

## 테마

- 배경: 다크 (#0d0d0f)
- 액센트: 밝은 그린 (#22c55e, #4ade80)
- 폰트: Outfit, JetBrains Mono

## 실행 방법

1. `index.html`을 브라우저에서 직접 열기
2. 또는 로컬 서버: `npx serve .` (portfolio 폴더에서 실행)

## 수정 시 참고

- 이름/소개/이메일/링크: `index.html` 수정
- 색상/레이아웃: `styles.css`의 `:root` 변수 및 해당 섹션
- 프로젝트 카드 추가: `index.html`의 `.projects-grid` 안에 `.project-card` 복사 후 내용 변경
