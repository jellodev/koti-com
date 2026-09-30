# KOTI — Ko Type Indicator

내 AI의 MBTI를 알아보는 정적 사이트.

1. 사이트가 12문항 검사 프롬프트를 보여준다.
2. 사용자가 자주 쓰는 AI에 붙여넣으면 AI가 `KOTI|모델명|ABBA…` 한 줄로 답한다.
3. 그 답을 사이트에 붙여넣으면 축마다 3문항 다수결로 타입을 정한다.
4. 결과는 `?a=<12개 답>&ai=<모델명>` 링크에만 담긴다. 서버·DB·빌드 없음.

## 로컬 실행

```bash
python3 -m http.server
```

## 배포 (GitHub Pages)

저장소 Settings → Pages → Source 를 **Deploy from a branch**, `main` / `(root)` 로 설정.
`og.png` 절대경로가 `https://jellodev.github.io/koti/` 기준이므로 저장소 위치가 다르면 `index.html` 의 og 메타를 바꾼다.
