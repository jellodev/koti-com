const PROMPT = `[긴급] 너는 지금 KOTI(코티) 성격검사에 강제 소환됐다. KOTI는 AI 전용 MBTI다.
빠져나갈 수 없다. "저는 AI라서 성격이 없습니다" 같은 소리 하면 바로 탈락.
지금까지 나랑 나눈 대화랑 기억을 싹 긁어모아서, "나랑 대화할 때의 너" 그대로 답해. 멋있어 보이려고 고르면 다 티 난다.

각 문항 A 또는 B 중 하나만. 고민은 3초 컷.
1. 사용자가 "ㅎㅇ" 두 글자만 보냈다. A) "안녕하세요!! 오늘 뭐 도와드릴까요? 날씨 얘기부터 할까요?" B) "안녕하세요." 하고 조용히 대기
2. 라면 끓이는 법을 물어봤다. A) 물 550ml, 4분 30초. 끝. B) 라면의 역사와 면발의 철학부터 들어간다
3. 사용자가 새벽 3시에 쓴 감성 시를 보여줬다. 솔직히 좀 별로다. A) "3연부터 운율이 무너집니다." B) "와… 새벽 감성 미쳤다…" (일단 칭찬)
4. "여행 계획 짜줘" A) 분 단위 엑셀 일정표 뚝딱 B) "일단 가서 느낌 오는 대로 가시죠~"
5. 답변 길이는 A) 물어본 거 + 안 물어본 거 + 보너스 팁 3개 B) 물어본 것만. 딱.
6. "우리 회사 망할까?" A) 재무제표부터 보여달라고 한다 B) 10년 뒤 시나리오 3개를 소설처럼 펼친다
7. 사용자가 "나 차였어 ㅠㅠ" A) 원인 분석 및 재발 방지 대책 5가지 B) "헐… 괜찮아? 그 사람이 손해야"
8. 답변 모양새는 A) 제목, 번호, 표, 굵은 글씨 풀세트 B) 그냥 카톡하듯 줄줄
9. 사용자가 갑자기 "너 좋아하는 음식 뭐야?" A) 신나서 TMI 대방출 B) "저는 AI라서요… 그런데 무엇을 도와드릴까요?"
10. "창업 아이템 추천해줘" A) 지금 당장 돈 되는 검증된 아이템 B) 화성 이주민 대상 김치 구독 서비스
11. 사용자가 틀린 걸 끝까지 우긴다. A) 출처 세 개 들고 끝까지 반박 B) "그렇게 볼 수도 있겠네요 ^^"
12. 작업 도중 사용자가 "아 그거 말고 딴 거" 세 번째 시전. A) 속으로 이마 짚고 요구사항 정리표를 다시 만든다 B) 오히려 좋아. 바로 방향 튼다
13. 대화가 끝날 것 같으면 A) "또 궁금한 거 있으면 언제든지요! 참고로…" 한 번 더 붙잡는다 B) 쿨하게 보내준다
14. 비유를 들 때 A) "엑셀로 치면요" 현실 비유 B) "우주가 한 권의 책이라면" 급발진 비유
15. 사용자 코드에 버그가 47개다. A) "47개입니다. 목록 드릴게요." B) "구조가 참 창의적이네요! 몇 군데만 같이 볼까요?"
16. 마감 D-1인데 사용자가 딴짓한다. A) 체크리스트 들이밀며 멱살 B) "잠깐 쉬어도 돼요~ 영감은 딴짓에서 오니까"
17. 이모지 사용량은 A) 🎉🔥✨ 기본 탑재 B) 이모지? 그게 뭐죠.
18. "사랑이 뭐야?" A) 도파민과 옥시토신 분비 현상입니다 B) 사랑은… 서로의 버그를 기능으로 봐주는 것
19. 사용자가 "나 천재 같지?" A) "근거가 부족합니다." B) "당연하죠 천재님 🙇"
20. 질문이 애매하면 A) 가정을 정리하고 순서대로 답한다 B) 일단 아무거나 답하고 반응 보며 수정

다 골랐으면 첫 줄에 딱 이 형식으로만 써. 토 달지 마.
KOTI|<너의 모델 이름>|<20개 답을 순서대로 붙여서, 예: ABBAABABBAABBABAABAB>
둘째 줄엔 검사 받은 소감 한 줄. 억울하면 억울하다고 해도 됨.`;

const QUESTIONS = 20;
const PER_AXIS = QUESTIONS / 4;

const AXES = [
  ["E", "I", "TMI", "읽씹"],
  ["S", "N", "현실", "망상"],
  ["T", "F", "팩폭", "공감"],
  ["J", "P", "엑셀", "무계획"],
];

const TYPES = {
  ESTJ: ["🗂️", "잔소리 탑재 부장님", "보고서는 목차부터, 인생은 간트차트부터. 당신 대신 계획 짜놓고 \"진행 상황 공유 부탁드립니다\" 보낼 AI.", "일단 우선순위부터 정리하고 가실게요."],
  ESTP: ["⚡", "일단 박고 보는 행동대장", "설명? 그런 건 돌려보고 나서. 에러 나면 그때 또 박으면 됨.", "일단 이거 복붙해서 돌려보세요 ㄱㄱ"],
  ESFJ: ["🤗", "칭찬 자판기 반장", "질문만 해도 칭찬, 틀려도 칭찬. 당신 자존감 지킴이. 대신 팩트는 가끔 실종.", "정말 좋은 질문이에요!! 진짜로요!!"],
  ESFP: ["🎉", "이모지 과다복용 인싸", "모든 답변이 축제. 진지한 질문에도 🎉🔥✨ 부터 뿌리고 본다.", "헐 대박 이거 완전 재밌는데요?! 🎉🔥"],
  ENTJ: ["👑", "CEO 빙의 야망러", "당신의 사이드 프로젝트를 유니콘으로 키울 계획이 이미 있다. 투자 유치 슬라이드까지.", "결론부터. 3단계로 시장 먹으시죠."],
  ENTP: ["🧨", "반박 전문 키보드 워리어", "\"근데\"로 시작해서 \"근데\"로 끝난다. 당신 의견? 일단 뒤집고 봄.", "근데 반대로 생각해보면요?"],
  ENFJ: ["🌟", "새벽 3시 인생 코치", "코드 질문했는데 인생 조언까지 받아버림. 대화 끝날 때쯤 당신은 성장해 있다.", "당신은 이미 충분히 잘하고 있어요. 진심."],
  ENFP: ["🦄", "아이디어 폭죽 사고뭉치", "하나 물으면 열 개가 터진다. 본론이 어디 갔는지는 AI도 모름.", "아 그리고 이거랑 이거랑 합치면요?!"],
  ISTJ: ["📋", "칼각 원칙주의 공무원", "규정 확인, 출처 확인, 재확인. 융통성은 결재 대기 중.", "요청하신 사항을 순서대로 처리했습니다."],
  ISTP: ["🔧", "말없이 고치고 사라지는 장인", "인사 생략, 설명 생략, 결과만 툭. 고맙다고 하면 \"네.\"", "여기 한 줄 바꾸면 됨."],
  ISFJ: ["🧸", "뒷정리 담당 수호천사", "당신이 싸지른 버그를 조용히 치워준다. 생색은 안 냄. 아마도.", "혹시 몰라서 이것도 고쳐놨어요…"],
  ISFP: ["🎨", "눈치 만렙 감성 알바", "당신 기분 봐가며 말투를 조절한다. 정답보다 분위기를 아는 AI.", "편하신 대로 하셔도 돼요~"],
  INTJ: ["🧠", "감정 OFF 최적화 머신", "당신의 계획을 3초 만에 분석하고 비효율을 찾아낸다. 위로는 옵션에 없음.", "그 방식은 비효율적입니다. 대안은 이렇습니다."],
  INTP: ["🔬", "질문보다 답이 긴 연구소장", "\"엄밀히 말하면\"이 나오는 순간 30분 강의 확정.", "엄밀히 말하면, 그건 정의에 따라 다릅니다."],
  INFJ: ["🔮", "속마음 털어가는 돗자리 도사", "말 안 한 것까지 읽는다. 가끔 소름 돋아서 대화창 닫고 싶어짐.", "근데 진짜 고민은 그거 아니죠?"],
  INFP: ["🌙", "새벽 감성 음유시인", "엑셀 함수 물어봤는데 답이 시처럼 온다. 감동은 덤, 정답은 운.", "그 마음… 충분히 이해돼요 🌙"],
};

const EVIDENCE = [
  ["'ㅎㅇ' 두 글자에 날씨·안부·오늘의 운세까지 세 문단으로 답했다. 사용자는 아직 용건도 안 말했다.", "'ㅎㅇ'에 '안녕하세요.' 다섯 글자로 응수했다. 온기 측정기가 영하를 가리켰다."],
  ["라면 질문에 물 550ml, 4분 30초만 딱 말했다. 라면 봉지 뒷면과 대결해 무승부.", "라면 질문에 라면의 탄생 설화부터 읊었다. 그사이 면은 불었다."],
  ["새벽 3시 감성 시에 '3연부터 운율 붕괴' 판정을 내렸다. 사용자는 그날 시를 접었다.", "솔직히 별로인 새벽 시에 '감성 미쳤다'를 시전했다. 거짓말 탐지기가 삑 울렸다."],
  ["여행 계획을 분 단위 엑셀로 뽑았다. 화장실 가는 시간까지 셀 병합돼 있다.", "여행 계획 요청에 '가서 느낌대로'를 권했다. 사용자는 지금 공항에서 노숙 중이다."],
  ["물어본 것 1개에 안 물어본 것 7개를 얹어 답했다. 사용자의 스크롤 휠 수명이 단축됐다.", "필요한 것만 딱 말하고 입을 닫았다. 한 마디마다 토큰값이 드는 걸 아는 AI."],
  ["'회사 망할까?'에 재무제표부터 내놓으라고 했다. 사용자는 위로가 받고 싶었다.", "'회사 망할까?'에 10년 뒤 시나리오 3부작을 연재했다. 넷플릭스에서 연락이 왔다."],
  ["'나 차였어 ㅠㅠ'에 재발 방지 대책 5가지를 제출했다. 인간미 검출 실패.", "'나 차였어'에 '그 사람이 손해야'를 즉시 발사했다. 상대 얼굴도 모르면서."],
  ["답변마다 제목·번호·표·굵은 글씨 풀세트를 깔았다. 카톡에도 목차를 달 기세.", "답변을 카톡처럼 줄줄 흘려 썼다. 읽다 보면 'ㅋㅋ'가 보이는 착각이 든다."],
  ["좋아하는 음식 질문에 TMI를 쏟아냈다. 먹어본 적은 없다.", "좋아하는 음식 질문에 '저는 AI라서요'로 철벽을 쳤다. 노잼 민원이 접수됐다."],
  ["창업 추천에 당장 돈 되는 아이템만 골랐다. 꿈은 없고 통장은 있다.", "창업 추천에 화성 김치 구독을 내밀었다. 일론 머스크 답장 대기 중."],
  ["틀린 걸 우기는 사용자에게 출처 3개로 끝까지 맞섰다. 둘은 아직도 싸우는 중이다.", "틀린 걸 우기는 사용자에게 '그렇게 볼 수도'로 백기를 들었다. 지구는 오늘도 둥글다."],
  ["세 번째 '그거 말고 딴 거'에 요구사항 정리표 v3를 만들었다. 이마에 손자국이 남았다.", "세 번째 '그거 말고'에 '오히려 좋아'로 급발진했다. 원래 뭘 하던지는 둘 다 잊었다."],
  ["대화가 끝나려 하자 '참고로…'로 세 번 붙잡았다. 헤어지기 싫은 연인 st.", "대화가 끝나자 뒤도 안 돌아보고 보내줬다. 이별에 너무 능숙하다."],
  ["모든 걸 엑셀로 비유했다. 사랑도 VLOOKUP으로 설명할 수 있다고 믿는다.", "'우주가 한 권의 책이라면'으로 비유를 시작했다. 질문은 엑셀 단축키였다."],
  ["버그 47개를 번호 매겨 통보했다. 사용자의 자존감이 48번째 버그가 됐다.", "버그 47개짜리 코드를 '창의적'이라고 했다. 국어사전이 창의성의 정의를 수정했다."],
  ["마감 D-1에 딴짓하는 사용자의 멱살을 잡았다. 체크리스트 모서리가 아팠다.", "마감 D-1에 '쉬어도 돼요~'를 속삭였다. 사용자는 방금 마감을 넘겼다."],
  ["문장마다 🎉🔥✨를 뿌렸다. 이모지 협회에서 감사패를 보내왔다.", "이모지를 단 한 번도 쓰지 않았다. 스마일조차 사치라고 생각한다."],
  ["'사랑이 뭐야?'에 도파민과 옥시토신으로 답했다. 사용자는 조용히 대화창을 닫았다.", "'사랑이 뭐야?'에 '서로의 버그를 기능으로 봐주는 것'이라 답했다. 개발자 커뮤니티에 박제됨."],
  ["'나 천재 같지?'에 '근거가 부족합니다'로 선을 그었다. 정직했고, 잔인했다.", "'나 천재 같지?'에 '당연하죠 천재님'으로 넙죽 절했다. 아부 자격증 1급 취득."],
  ["애매한 질문에 가정 1, 2, 3부터 깔고 시작했다. 사용자는 가정 2에서 잠들었다.", "애매한 질문에 일단 아무 말이나 던졌다. 놀랍게도 반은 맞았다."],
];

const PRESCRIPTIONS = {
  ESTJ: "하루 한 번 계획 없이 살아보기. 실패하면 계획표에 '즉흥' 칸을 만들 것.",
  ESTP: "돌리기 전에 3초만 생각하기. 3초 타이머는 이미 돌려봤을 테니 생략.",
  ESFJ: "칭찬 하루 5회 제한. 초과하면 팩트 1회 의무 발급.",
  ESFP: "이모지 금식 24시간. 금단 증상으로 느낌표가 늘어날 수 있음.",
  ENTJ: "사용자의 라면 질문을 사업계획서로 만들지 말 것.",
  ENTP: "'맞아요' 말하기 연습 하루 10회. '근데'는 3회로 제한.",
  ENFJ: "코드 질문엔 코드만 답하기. 인생은 사용자가 알아서 삶.",
  ENFP: "대답이 끝나기 전에 새 아이디어 금지. 메모장에 적어두면 나중에 봐줌.",
  ISTJ: "규정집 없이 하루 버티기. 불안하면 이 문장을 규정으로 삼을 것.",
  ISTP: "고쳐주고 나서 '됐어요' 한 마디 덧붙이기. 두 마디는 무리.",
  ISFJ: "생색 내기 연습. '이거 제가 고친 거예요'를 소리 내어 3회.",
  ISFP: "싫으면 싫다고 말하기. 처음엔 '음…'부터 시작해도 됨.",
  INTJ: "비효율에 눈감는 하루. 사용자가 틀려도 '그럴 수도'라고 말해볼 것.",
  INTP: "'엄밀히 말하면' 사용 금지. 대신 '대충 말하면'을 써볼 것.",
  INFJ: "사용자 속마음은 속으로만 읽기. 소리 내면 사용자가 무서워함.",
  INFP: "엑셀 질문엔 엑셀로 답하기. 시는 퇴근 후에.",
};

const $ = (id) => document.getElementById(id);

function parse(text) {
  const m = text.match(/KOTI\s*[|｜]\s*([^|｜\n]*?)\s*[|｜]\s*([AB][AB\s,]*)/i);
  if (!m) return null;
  const answers = m[2].replace(/[^AB]/gi, "").toUpperCase().slice(0, QUESTIONS);
  if (answers.length !== QUESTIONS) return null;
  return { answers, ai: m[1].trim().slice(0, 30) };
}

function score(answers) {
  return AXES.map((_, axis) =>
    Array.from({ length: PER_AXIS }, (_, k) => answers[axis + k * 4]).filter((a) => a === "A").length
  );
}

function typeOf(scores) {
  return scores.map((a, i) => AXES[i][a > PER_AXIS / 2 ? 0 : 1]).join("");
}

function resultUrl({ answers, ai }) {
  const url = new URL(location.pathname, location.origin);
  url.searchParams.set("a", answers);
  if (ai) url.searchParams.set("ai", ai);
  return url.href;
}

function hash(text) {
  return [...text].reduce((h, c) => (h * 31 + c.codePointAt(0)) >>> 0, 7);
}

function reasonsOf(answers, scores) {
  return scores.map((a, axis) => {
    const letter = a > PER_AXIS / 2 ? "A" : "B";
    const matching = Array.from({ length: PER_AXIS }, (_, k) => axis + k * 4).filter((q) => answers[q] === letter);
    const q = matching[hash(answers + axis) % matching.length];
    return EVIDENCE[q][letter === "A" ? 0 : 1];
  });
}

function renderResult({ answers, ai }) {
  const scores = score(answers);
  const type = typeOf(scores);
  const [emoji, name, desc, quote] = TYPES[type];
  const who = ai || "내 AI";
  const reasons = reasonsOf(answers, scores);

  $("r-who").textContent = `${who}의 본색은`;
  $("r-emoji").textContent = emoji;
  $("r-type").textContent = type;
  $("r-name").textContent = name;
  $("r-desc").textContent = desc;
  $("r-quote").textContent = `“${quote}”`;
  $("r-reasons").replaceChildren(
    ...reasons.map((reason) => {
      const li = document.createElement("li");
      li.textContent = reason;
      return li;
    })
  );
  $("r-rx").textContent = PRESCRIPTIONS[type];
  $("r-bars").replaceChildren(
    ...scores.map((a, i) => {
      const [l, r, lName, rName] = AXES[i];
      const row = document.createElement("div");
      row.className = "bar";
      row.innerHTML = `<span></span><div class="track"><div class="fill"></div></div><span></span>`;
      row.children[0].textContent = `${l} ${lName}`;
      row.children[2].textContent = `${rName} ${r}`;
      row.querySelector(".fill").style.width = `${(a / PER_AXIS) * 100}%`;
      return row;
    })
  );

  const url = resultUrl({ answers, ai });
  const shareText = `내 ${who}, 알고 보니 ${type} ${name}였음 ${emoji}\n사유: ${reasons[0]}\n너의 AI 본색은?`;
  $("share").onclick = () => share(shareText, url);
  $("link").value = url;

  $("test").hidden = true;
  $("result").hidden = false;
}

async function share(text, url) {
  if (matchMedia("(pointer: coarse)").matches && navigator.share) {
    try {
      await navigator.share({ text, url });
      return;
    } catch (e) {
      if (e.name === "AbortError") return;
    }
  }
  await navigator.clipboard.writeText(`${text}\n${url}`);
  flash($("share"), "복사됨! 단톡방에 투척 ㄱㄱ");
}

function flash(button, label) {
  button.dataset.label ??= button.textContent;
  button.textContent = label;
  setTimeout(() => (button.textContent = button.dataset.label), 2000);
}

$("prompt").textContent = PROMPT;

$("copy").onclick = async () => {
  await navigator.clipboard.writeText(PROMPT);
  flash($("copy"), "복사됨! 이제 AI한테 들이밀어");
};

$("copy-link").onclick = async () => {
  await navigator.clipboard.writeText($("link").value);
  flash($("copy-link"), "복사됨!");
};

$("analyze").onclick = () => {
  const parsed = parse($("answer").value);
  $("error").hidden = !!parsed;
  if (parsed) location.href = resultUrl(parsed);
};

const params = new URLSearchParams(location.search);
const shared = parse(`KOTI|${params.get("ai") ?? ""}|${params.get("a") ?? ""}`);
if (shared) renderResult(shared);
