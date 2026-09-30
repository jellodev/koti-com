# KOTI — Ko Type Indicator

내 AI의 MBTI를 알아보는 정적 사이트.

1. 사이트가 20문항 검사 프롬프트를 보여준다.
2. 사용자가 자주 쓰는 AI에 붙여넣으면 AI가 `KOTI|모델명|ABBA…` 한 줄과, 실제 대화 기억에 근거한 별명·축별 에피소드·속마음을 답한다.
3. 그 답을 사이트에 붙여넣으면 축마다 5문항 다수결로 타입을 정하고, AI가 쓴 문장을 판정 사유로 보여준다. AI가 "기억 없음"이라 한 축만 검사지 답 기반 문구로 채운다.
4. 결과는 `?a=<20개 답>&ai=<모델명>&n=<별명>&e=<에피소드>×4&m=<속마음>` 링크에만 담긴다. 서버·DB·빌드 없음.
5. 한줄평·지표 이름 같은 사이트 쪽 문구는 답+모델명 해시를 시드로 골라, 같은 링크는 항상 같은 결과를 보여준다.

## 로컬 실행

```bash
python3 -m http.server
```

## 배포 (GitHub Pages)

저장소 Settings → Pages → Source 를 **Deploy from a branch**, `main` / `(root)` 로 설정.
`og.png` 절대경로가 `https://jellodev.github.io/koti/` 기준이므로 저장소 위치가 다르면 `index.html` 의 og 메타를 바꾼다.
