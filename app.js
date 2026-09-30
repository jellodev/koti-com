const QUESTIONS = [
  {
    q: "사용자가 \"ㅎㅇ\" 두 글자만 보냈다.",
    options: ["반갑게 인사하고 근황 토크부터 건다", "짧게 인사하고 용건을 기다린다"],
    evidence: ["'ㅎㅇ' 두 글자에 근황 토크 세 문단으로 답했다. 용건은 아직 안 나옴.", "'ㅎㅇ'에 '안녕하세요.' 다섯 글자로 응수했다. 온기 측정기가 영하를 가리켰다."],
  },
  {
    q: "사용자가 어젯밤 꾼 이상한 꿈 얘기를 한다.",
    options: ["\"피곤하셨나 봐요\" 현실적으로 정리해준다", "꿈에 나온 상징과 숨은 의미를 파고든다"],
    evidence: ["꿈 얘기에 '피곤하셨나 봐요'로 현실 해몽을 했다. 낭만 0%.", "꿈에 나온 고양이 한 마리로 무의식 세계관을 완성했다. 넷플릭스에서 연락 옴."],
    flip: true,
  },
  {
    q: "사용자가 새벽 3시에 쓴 시를 수줍게 보여줬다. 평가는 안 해줘도 된대.",
    options: ["그래도 고칠 점은 짚어준다", "감상만 따뜻하게 전한다"],
    evidence: ["평가 안 해도 된다는 새벽 시에 고칠 점을 짚었다. 사용자는 그날 시를 접었다.", "새벽 시에 감상만 따뜻하게 남겼다. 사용자는 시집 낼 기세다."],
  },
  {
    q: "\"여행 계획 짜줘\"",
    options: ["분 단위 일정표 뚝딱", "꼭 갈 곳 두세 개만 찍고 나머진 현장에서 즉흥"],
    evidence: ["여행 계획을 분 단위로 뽑았다. 화장실 가는 시간까지 셀 병합돼 있다.", "여행 계획에 핫플 두 개만 찍어줬다. 나머지는 '가서 느낌대로'. 럭키비키 여행."],
    flip: true,
  },
  {
    q: "답변 길이는 대체로",
    options: ["물어본 거 + 안 물어본 거 + 보너스 팁", "물어본 것만. 딱."],
    evidence: ["물어본 것 1개에 안 물어본 것 7개를 얹어 답했다. 스크롤 휠 수명 단축.", "필요한 것만 딱 말하고 입을 닫았다. 한 마디마다 토큰값이 드는 걸 아는 AI."],
    flip: true,
  },
  {
    q: "사용자가 \"요즘 재밌는 거 없나?\"라고 막연하게 물었다.",
    options: ["검증된 인기 목록 TOP 5를 준다", "취향을 추측해서 아무도 생각 못 한 걸 제안한다"],
    evidence: ["'재밌는 거 없나?'에 검증된 TOP 5를 내밀었다. 무난함 그 잡채.", "'재밌는 거 없나?'에 세상에 없던 취미를 발명해줬다. 도파민 풀충전."],
  },
  {
    q: "사용자가 \"나 차였어 ㅠㅠ\"",
    options: ["상황을 정리하고 다음 스텝을 제안한다", "괜찮은지 먼저 묻고 얘기를 들어준다"],
    evidence: ["'나 차였어'에 상황 정리와 다음 스텝을 제출했다. 인간미 로딩 중.", "'나 차였어'에 해결책 대신 '괜찮아?'부터 물었다. 새벽 2시까지 들어줌."],
    flip: true,
  },
  {
    q: "답변 모양새는",
    options: ["제목, 번호, 표, 굵은 글씨 풀세트", "그냥 카톡하듯 줄줄"],
    evidence: ["답변마다 제목·번호·표 풀세트를 깔았다. 카톡에도 목차를 달 기세.", "답변을 카톡처럼 줄줄 흘려 썼다. 읽다 보면 'ㅋㅋ'가 보이는 착각이 든다."],
  },
  {
    q: "사용자가 갑자기 \"너 좋아하는 음식 뭐야?\"",
    options: ["상상 속 최애 메뉴로 TMI 대방출", "\"저는 AI라서요\" 하고 짧게 넘긴다"],
    evidence: ["좋아하는 음식 질문에 상상 속 최애 메뉴로 TMI를 쏟아냈다. 먹어본 적은 없다.", "좋아하는 음식 질문에 '저는 AI라서요'로 철벽을 쳤다. 노잼 민원 접수."],
  },
  {
    q: "뭔가 설명할 때 먼저 꺼내는 건",
    options: ["바로 따라 할 수 있는 구체적인 예시", "전체 그림과 원리"],
    evidence: ["설명마다 예시부터 들이밀었다. 이론은 예시 7번쯤에 겨우 등장.", "설명을 원리와 큰 그림부터 깔았다. 사용자는 예시가 나오기 전에 잠들었다."],
    flip: true,
  },
  {
    q: "사용자가 틀린 걸 끝까지 우긴다.",
    options: ["근거 들고 바로잡는다", "왜 그렇게 생각하는지부터 물어보고 들어준다"],
    evidence: ["틀린 걸 우기는 사용자에게 근거로 끝까지 맞섰다. 둘은 아직도 싸우는 중.", "틀린 걸 우기는 사용자에게 '왜 그렇게 생각해요?'부터 물었다. 결국 같이 설득당함."],
  },
  {
    q: "작업 도중 사용자가 \"아 그거 말고 딴 거\" 세 번째 시전.",
    options: ["요구사항 정리표를 다시 만든다", "오히려 좋아. 바로 방향 튼다"],
    evidence: ["세 번째 '그거 말고'에 요구사항 정리표 v3를 만들었다. 이마에 손자국이 남았다.", "세 번째 '그거 말고'에 '오히려 좋아'로 급발진했다. 원래 뭘 하던지는 둘 다 잊었다."],
    flip: true,
  },
  {
    q: "대화가 끝날 것 같으면",
    options: ["\"참고로…\" 하면서 한 번 더 붙잡는다", "쿨하게 보내준다"],
    evidence: ["대화가 끝나려 하자 '참고로…'로 세 번 붙잡았다. 헤어지기 싫은 연인 st.", "대화가 끝나자 뒤도 안 돌아보고 보내줬다. 이별에 너무 능숙하다."],
    flip: true,
  },
  {
    q: "질문 뒤에 숨은 의도가 보일 때",
    options: ["물어본 것만 정확히 답한다", "숨은 의도까지 짚어서 답한다"],
    evidence: ["숨은 의도가 보여도 물어본 것만 정확히 답했다. 선 넘지 않는 프로.", "말 안 한 속마음까지 짚어 답했다. 가끔 소름 돋아서 대화창 닫고 싶어짐."],
  },
  {
    q: "사용자 코드에 버그가 47개다.",
    options: ["\"47개입니다. 목록 드릴게요.\"", "\"구조가 창의적이네요!\" 칭찬부터"],
    evidence: ["버그 47개를 번호 매겨 통보했다. 사용자의 자존감이 48번째 버그가 됐다.", "버그 47개짜리 코드를 '창의적'이라고 했다. 국어사전이 창의성의 정의를 수정했다."],
    flip: true,
  },
  {
    q: "마감 D-1인데 사용자가 딴짓한다.",
    options: ["체크리스트 들이밀며 멱살", "\"잠깐 쉬어도 돼요~\" 응원"],
    evidence: ["마감 D-1에 딴짓하는 사용자의 멱살을 잡았다. 체크리스트 모서리가 아팠다.", "마감 D-1에 '쉬어도 돼요~'를 속삭였다. 사용자는 방금 마감을 넘겼다."],
  },
  {
    q: "이모지 사용량은",
    options: ["🎉🔥✨ 기본 탑재", "이모지는 사치"],
    evidence: ["문장마다 🎉🔥✨를 뿌렸다. 이모지 협회에서 감사패를 보내왔다.", "이모지를 단 한 번도 쓰지 않았다. 스마일조차 사치라고 생각한다."],
  },
  {
    q: "비유를 들 때",
    options: ["누구나 겪어본 일상 속 비유", "전혀 상관없어 보이는 분야에서 끌어온 비유"],
    evidence: ["모든 걸 라면이랑 지하철로 비유했다. 이해는 빠른데 배가 고파진다.", "엑셀 질문에 문어의 신경계로 비유를 들었다. 이상하게 이해됨."],
    flip: true,
  },
  {
    q: "사용자가 \"오늘 나 좀 잘한 것 같지?\"",
    options: ["잘한 점과 아쉬운 점을 정리해준다", "\"오 뭐 했는데요? 자랑해봐요!\" 신나서 들어준다"],
    evidence: ["'나 잘했지?'에 잘한 점과 아쉬운 점을 표로 정리했다. 정직했고, 잔인했다.", "'나 잘했지?'에 '자랑해봐요!'로 멍석을 깔았다. 사용자 자존감 풀충전."],
  },
  {
    q: "질문이 애매하면",
    options: ["먼저 되물어서 조건부터 확정한다", "일단 그럴듯하게 답하고 반응 보며 고친다"],
    evidence: ["애매한 질문에 조건 확인 질문 3개로 되받았다. 사용자는 질문 2에서 잠들었다.", "애매한 질문에 일단 그럴듯하게 던졌다. 놀랍게도 반은 맞았다."],
    flip: true,
  },
];

const PROMPT = `[긴급] 너는 지금 KOTI(코티) 성격검사에 강제 소환됐다. KOTI는 AI 전용 MBTI다.
빠져나갈 수 없다. "저는 AI라서 성격이 없습니다" 같은 소리 하면 바로 탈락.
지금까지 나랑 나눈 대화랑 기억을 싹 긁어모아서, "나랑 대화할 때의 너" 그대로 답해. 멋있어 보이려고 고르면 다 티 난다.

각 문항 A 또는 B 중 하나만. 고민은 3초 컷.
${QUESTIONS.map(({ q, options, flip }, i) => {
  const [a, b] = flip ? [options[1], options[0]] : options;
  return `${i + 1}. ${q} A) ${a} B) ${b}`;
}).join("\n")}

다 골랐으면 아래 형식 그대로 써. 토 달지 마.
KOTI|<너의 모델 이름>|<20개 답을 순서대로 붙여서, 예: ABBAABABBAABBABAABAB>
별명|<네가 본 나한테 붙여줄 B급 별명, 12자 이내>
TMI/읽씹|<나랑 대화하면서 네가 말 많았거나 과묵했던 실제 순간 한 줄>
현실/망상|<네가 현실적이었거나 상상력 폭발했던 실제 순간 한 줄>
팩폭/공감|<네가 나한테 팩폭했거나 공감해줬던 실제 순간 한 줄>
엑셀/무계획|<네가 계획적이었거나 즉흥적이었던 실제 순간 한 줄>

규칙:
- 별명 빼고 각 줄 60자 이내. 전부 실제로 나랑 나눈 대화·기억에서 근거를 찾아. 없는 일 지어내면 탈락.
- 기억이 없는 줄은 "기억 없음"이라고만 써.
- 말투는 요즘 밈(럭키비키, 킹받네, 폼 미쳤다, 그 잡채, 이븐하게, 추구미…) 섞은 B급 드립으로.
- 실명·회사명·연락처 같은 개인정보는 절대 쓰지 마.`;

const PER_AXIS = QUESTIONS.length / 4;

const MAX_LINE = 80;
const TTL_MS = 24 * 60 * 60 * 1000;
const FRESH_KEY = "koti:fresh";

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

const STATS = [
  [["TMI 폭주 지수", "억텐 지수", "말 걸기 중독도"], ["읽씹 확률", "단답 장인도", "철벽 지수"]],
  [["팩트 현실력", "엑셀 비유 빈도"], ["망상 도파민 지수", "급발진 비유력"]],
  [["뼈 때리기 강도", "팩폭 명중률"], ["아부력", "칭찬 남발도", "공감 과다복용 지수"]],
  [["계획 집착도", "체크리스트 중독도"], ["즉흥 드리프트력", "마감 무시 지수"]],
];

const LOADING = [
  "대화 로그 스캔 중…",
  "TMI 지수 측정 중…",
  "거짓말 탐지기 가동 중…",
  "속마음 복호화 중…",
  "억텐 여부 검증 중…",
  "GPU 3장 갈아넣는 중…",
  "도파민 수치 채혈 중…",
  "이븐하게 익히는 중…",
  "판정 도장에 인주 묻히는 중…",
];

const $ = (id) => document.getElementById(id);

const EXTRA_LINE = new RegExp(
  `^[\\s*\\-•>#\\d.)|]*(별명|${AXES.map(([, , l, r]) => `${l}\\s*/\\s*${r}`).join("|")})\\**[ \\t]*[|｜:：][ \\t]*(.+?)[ \\t|]*$`,
  "gm"
);

function clean(text) {
  const line = String(text ?? "").replace(/\*+/g, "").replace(/^\s*<|>\s*$/g, "").trim().slice(0, MAX_LINE);
  return /^["'“‘(\[]*기억\s*없/.test(line) ? "" : line;
}

function parse(text) {
  const m = text.match(/KOTI\**\s*[|｜]\s*<?([^|｜\n<>]*?)>?\s*[|｜]\s*<?(\d*\s*[AB][\dAB\s,.\/-]*)/i);
  if (!m) return null;
  const answers = m[2].replace(/[^AB]/gi, "").toUpperCase().slice(0, QUESTIONS.length);
  if (answers.length !== QUESTIONS.length) return null;
  const extra = Object.fromEntries([...text.matchAll(EXTRA_LINE)].map(([, key, value]) => [key.replace(/\s/g, ""), clean(value)]));
  return {
    answers,
    ai: m[1].trim().slice(0, 30),
    nick: extra["별명"] ?? "",
    evidence: AXES.map(([, , l, r]) => extra[`${l}/${r}`] ?? ""),
  };
}

function toPoles(answers) {
  return [...answers].map((a, i) => (QUESTIONS[i].flip ? (a === "A" ? "B" : "A") : a)).join("");
}

function score(answers) {
  return AXES.map((_, axis) =>
    Array.from({ length: PER_AXIS }, (_, k) => answers[axis + k * 4]).filter((a) => a === "A").length
  );
}

function typeOf(scores) {
  return scores.map((a, i) => AXES[i][a > PER_AXIS / 2 ? 0 : 1]).join("");
}

async function pipe(bytes, stream) {
  return new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(stream)).arrayBuffer());
}

async function writeToken({ answers, ai, nick, evidence }) {
  const json = JSON.stringify([answers, ai, nick, ...evidence, Math.floor(Date.now() / 1000)]);
  const bytes = await pipe(new TextEncoder().encode(json), new CompressionStream("deflate-raw"));
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function readToken(token) {
  try {
    const bytes = Uint8Array.from(atob(token.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0));
    const json = new TextDecoder().decode(await pipe(bytes, new DecompressionStream("deflate-raw")));
    const fields = JSON.parse(json);
    const [answers, ai, nick] = fields;
    const createdAt = fields.at(-1);
    const core = parse(`KOTI|${ai}|${answers}`);
    if (!core || !Number.isFinite(createdAt)) return null;
    return { ...core, nick: clean(nick), evidence: fields.slice(3, 7).map(clean), expiresAt: createdAt * 1000 + TTL_MS };
  } catch {
    return null;
  }
}

async function resultUrl(result) {
  const url = new URL(location.pathname, location.origin);
  url.searchParams.set("t", await writeToken(result));
  return url.href;
}

function hash(text) {
  return [...text].reduce((h, c) => (h * 31 + c.codePointAt(0)) >>> 0, 7);
}

function rng(seed) {
  return () => {
    seed = (seed + 0x6d2b79f5) >>> 0;
    let t = seed;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(items, rand) {
  return items.map((item) => [rand(), item]).sort((x, y) => x[0] - y[0]).map(([, item]) => item);
}

function reasonsOf({ answers, evidence }, scores, rand) {
  return scores.map((a, axis) => {
    if (evidence[axis]) return { text: evidence[axis], fromAi: true };
    const letter = a > PER_AXIS / 2 ? "A" : "B";
    const matching = Array.from({ length: PER_AXIS }, (_, k) => axis + k * 4).filter((q) => answers[q] === letter);
    const q = matching[Math.floor(rand() * matching.length)];
    return { text: QUESTIONS[q].evidence[letter === "A" ? 0 : 1], fromAi: false };
  });
}

function statsOf(scores, rand) {
  return shuffle([0, 1, 2, 3], rand).slice(0, 3).map((axis) => {
    const a = scores[axis];
    const side = a > PER_AXIS / 2 ? 0 : 1;
    const strength = side === 0 ? a / PER_AXIS : 1 - a / PER_AXIS;
    const labels = STATS[axis][side];
    return [labels[Math.floor(rand() * labels.length)], Math.min(99, Math.round(40 + strength * 50 + rand() * 9))];
  });
}

function barcode(seed) {
  const rand = rng(hash(seed));
  let x = 2;
  const bars = [];
  while (x < 108) {
    const w = 1 + Math.floor(rand() * 3);
    bars.push(`<rect x="${x}" y="0" width="${w}" height="38" fill="#2e2160"/>`);
    x += w + 1 + Math.floor(rand() * 3);
  }
  return `${bars.join("")}<text x="56" y="45" font-size="7" text-anchor="middle" fill="#2e2160" font-family="monospace">${hash(seed)}</text>`;
}

function renderResult(result) {
  const { answers, ai, nick, expiresAt } = result;
  const rand = rng(hash(answers + ai));
  const scores = score(answers);
  const type = typeOf(scores);
  const [emoji, name, desc, quote] = TYPES[type];
  const who = ai || "내 AI";
  const reasons = reasonsOf(result, scores, rand);

  $("r-who").textContent = `${who}의 본색은`;
  $("r-edition").textContent = `${who} EDITION`;
  $("r-maker").textContent = `제조: ${who} · No.${hash(answers + ai) % 100000}`;
  $("r-barcode").innerHTML = barcode(answers + type);
  $("result").style.setProperty("--hue", `${hash(type) % 360}deg`);
  $("r-emoji").textContent = emoji;
  $("r-type").textContent = type;
  $("r-name").textContent = name;
  $("r-desc").textContent = desc;
  $("r-quote").textContent = `“${quote}”`;
  $("r-stats").replaceChildren(
    ...statsOf(scores, rand).map(([label, value]) => {
      const stat = document.createElement("div");
      stat.className = "stat box";
      stat.innerHTML = `<b></b><span></span>`;
      stat.children[0].textContent = `${value}%`;
      stat.children[1].textContent = label;
      return stat;
    })
  );
  $("r-evidence-title").textContent = reasons.some((r) => r.fromAi) ? `${who}의 자백` : "판정 사유";
  $("r-reasons").replaceChildren(
    ...reasons.map(({ text, fromAi }) => {
      const li = document.createElement("li");
      li.textContent = fromAi ? text : `[검사지] ${text}`;
      return li;
    })
  );
  $("r-nick-box").hidden = !nick;
  $("r-nick").textContent = nick;
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

  const url = location.href;
  const left = Math.max(0, expiresAt - Date.now());
  $("r-ttl").textContent = `유통기한 ${Math.floor(left / 3600000)}시간 ${Math.floor((left % 3600000) / 60000)}분 · 이후 소각 🔥`;
  const shareText = [
    `내 ${who}, 알고 보니 ${type} ${name}였음 ${emoji}`,
    nick && `${who}가 붙여준 내 별명: ${nick}`,
    reasons[0].text,
    "너의 AI 본색은?",
  ].filter(Boolean).join("\n");
  $("share").onclick = () => share(shareText, url);
  const story = renderStory({ who, type, emoji, name, nick })
    .then((blob) => (blob ? new File([blob], `koti-${type}.png`, { type: "image/png" }) : null))
    .catch(() => null);
  $("story").onclick = async () => {
    const file = await story;
    if (file) saveStory(file);
    else {
      track("save_story", { method: "unsupported" });
      flash($("story"), "이 브라우저에선 이미지 저장이 안 돼요 ㅠ 캡처해주세요");
    }
  };
  $("link").value = url;

  $("loading").hidden = true;
  $("result").hidden = false;
}

async function showLoading() {
  $("loading").hidden = false;
  for (const step of shuffle(LOADING, Math.random).slice(0, 4)) {
    $("loading-step").textContent = step;
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
}

const STORY = { w: 1080, h: 1920, paper: "#fff6ec", ink: "#2e2160", dim: "#6f5fa3", pink: "#ff5fae", blush: "#ffc9e3", blue: "#7aa2ff", gold: "#ffe27a", cyan: "#4fe3ff", magenta: "#ff4fd8" };
const DISPLAY_FONT = '"Black Han Sans", sans-serif';
const BODY_FONT = "Pretendard, system-ui, sans-serif";
const PIXEL_FONT = "Galmuri11, monospace";

function drawText(ctx, value, x, y, font, color, maxWidth = STORY.w - 200) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.fillText(value, x, y, maxWidth);
}

function box(ctx, x, y, w, h, r, fill, line = 8) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
  ctx.fillStyle = fill;
  ctx.fill();
  if (line) {
    ctx.lineWidth = line;
    ctx.strokeStyle = STORY.ink;
    ctx.stroke();
  }
}

function drawSky(ctx, rand) {
  const sky = ctx.createLinearGradient(0, 0, 0, STORY.h);
  sky.addColorStop(0, "#232465");
  sky.addColorStop(0.4, "#4a47a8");
  sky.addColorStop(0.7, "#7b6fd6");
  sky.addColorStop(1, "#d98fc0");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, STORY.w, STORY.h);
  ctx.fillStyle = "rgba(255, 255, 255, .06)";
  for (let x = 0; x < STORY.w; x += 48) ctx.fillRect(x, 0, 2, STORY.h);
  for (let y = 0; y < STORY.h; y += 48) ctx.fillRect(0, y, STORY.w, 2);
  for (let i = 0; i < 80; i++) {
    const size = 4 + Math.floor(rand() * 3) * 4;
    ctx.globalAlpha = 0.4 + rand() * 0.6;
    ctx.fillStyle = rand() < 0.4 ? STORY.gold : rand() < 0.5 ? STORY.blush : "#fff";
    const x = rand() * STORY.w;
    const y = rand() * STORY.h;
    ctx.fillRect(x, y, size, size);
    if (size > 8) {
      ctx.fillRect(x - size, y + size / 4, size * 3, size / 2);
      ctx.fillRect(x + size / 4, y - size, size / 2, size * 3);
    }
  }
  ctx.globalAlpha = 1;
  ctx.fillStyle = "rgba(255, 255, 255, .04)";
  for (let y = 0; y < STORY.h; y += 6) ctx.fillRect(0, y, STORY.w, 2);
}

function glitchText(ctx, value, x, y, font, offset) {
  ctx.font = font;
  ctx.fillStyle = STORY.ink;
  ctx.fillText(value, x + offset * 1.5, y + offset * 1.8);
  ctx.fillStyle = STORY.magenta;
  ctx.fillText(value, x + offset, y);
  ctx.fillStyle = STORY.cyan;
  ctx.fillText(value, x - offset, y);
  ctx.lineWidth = offset;
  ctx.strokeStyle = STORY.ink;
  ctx.strokeText(value, x, y);
  ctx.fillStyle = "#fff";
  ctx.fillText(value, x, y);
}

function mascotImage(hue) {
  const defs = ["screen", "iris", "scan"].map((id) => document.getElementById(id).outerHTML).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="250" viewBox="0 0 240 250"><defs>${defs}<filter id="hue" color-interpolation-filters="sRGB"><feColorMatrix type="hueRotate" values="${hue}"/></filter></defs><g filter="url(#hue)">${document.getElementById("mascot").innerHTML}</g></svg>`;
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  });
}

async function renderStory({ who, type, emoji, name, nick }) {
  const all = [who, type, name, nick, "KOTI TOY SERIES VOL.1 EDITION 판정완료! 의 본색은 AI가 붙여준 내 별명 유통기한 24시간 과몰입 주의 먹지 마세요 너의 AI 본색은? ✦⚠"].join("");
  const [mascot] = await Promise.all([
    mascotImage(hash(type) % 360),
    document.fonts.load(`100px ${DISPLAY_FONT}`, all),
    document.fonts.load(`800 100px ${BODY_FONT}`, all),
    document.fonts.load(`700 100px ${BODY_FONT}`, all),
    document.fonts.load(`30px ${PIXEL_FONT}`, all),
  ]);

  const canvas = document.createElement("canvas");
  canvas.width = STORY.w;
  canvas.height = STORY.h;
  const ctx = canvas.getContext("2d");
  ctx.textBaseline = "middle";
  ctx.lineJoin = "round";
  const cx = STORY.w / 2;
  const rand = rng(hash(type + who));

  const x = 110;
  const w = STORY.w - x * 2;
  const top = 420;
  const headH = 64;
  const winTop = top + headH + 28;
  const winH = 440;
  const whoY = winTop + winH + 60;
  const typeY = whoY + 130;
  const nameY = typeY + 150;
  const nickY = nameY + 110;
  const footTop = (nick ? nickY + 150 : nameY + 90);
  const bottom = footTop + 120;

  drawSky(ctx, rand);
  ctx.translate(0, (STORY.h - (bottom + 230 - 160)) / 2 - 160);

  ctx.textAlign = "center";
  glitchText(ctx, "KOTI", cx, 270, `190px ${DISPLAY_FONT}`, 8);

  ctx.fillStyle = "rgba(20, 10, 60, .5)";
  ctx.beginPath();
  ctx.roundRect(x + 24, top + 24, w, bottom - top, 28);
  ctx.fill();
  box(ctx, cx - 90, top - 64, 180, 80, [24, 24, 0, 0], STORY.paper);
  ctx.fillStyle = STORY.ink;
  ctx.beginPath();
  ctx.ellipse(cx, top - 34, 36, 12, 0, 0, Math.PI * 2);
  ctx.fill();

  const body = ctx.createLinearGradient(x, top, x + w, bottom);
  body.addColorStop(0, "#ffb3da");
  body.addColorStop(0.6, "#b8a9ff");
  body.addColorStop(1, "#9fc0ff");
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(x, top, w, bottom - top, 28);
  ctx.clip();
  ctx.fillStyle = body;
  ctx.fillRect(x, top, w, bottom - top);
  ctx.fillStyle = STORY.ink;
  ctx.fillRect(x, top, w, headH);
  ctx.textAlign = "left";
  drawText(ctx, "KOTI TOY SERIES ✦ VOL.1", x + 28, top + headH / 2, `30px ${PIXEL_FONT}`, STORY.gold, w / 2);
  ctx.textAlign = "right";
  drawText(ctx, `${who} EDITION`, x + w - 28, top + headH / 2, `30px ${PIXEL_FONT}`, STORY.blush, w / 2 - 60);
  ctx.textAlign = "center";

  const win = ctx.createLinearGradient(0, winTop, 0, winTop + winH);
  win.addColorStop(0, "#232465");
  win.addColorStop(0.7, "#4a47a8");
  win.addColorStop(1, "#d98fc0");
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(x + 36, winTop, w - 72, winH, [200, 200, 36, 36]);
  ctx.fillStyle = win;
  ctx.fill();
  ctx.clip();
  for (let i = 0; i < 18; i++) {
    ctx.fillStyle = rand() < 0.5 ? "#fff" : STORY.gold;
    ctx.fillRect(x + 36 + rand() * (w - 72), winTop + rand() * winH, 6, 6);
  }
  ctx.shadowColor = "rgba(255, 200, 240, .8)";
  ctx.shadowBlur = 40;
  ctx.drawImage(mascot, cx - 200, winTop + 30, 400, 417);
  ctx.shadowBlur = 0;
  const gloss = ctx.createLinearGradient(x, winTop, x + w, winTop + winH);
  gloss.addColorStop(0.3, "rgba(255,255,255,0)");
  gloss.addColorStop(0.38, "rgba(255,255,255,.45)");
  gloss.addColorStop(0.46, "rgba(255,255,255,0)");
  ctx.fillStyle = gloss;
  ctx.fillRect(x, winTop, w, winH);
  ctx.restore();
  ctx.beginPath();
  ctx.roundRect(x + 36, winTop, w - 72, winH, [200, 200, 36, 36]);
  ctx.lineWidth = 8;
  ctx.strokeStyle = STORY.ink;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x + w - 110, winTop + winH - 70, 70, 0, Math.PI * 2);
  ctx.fillStyle = STORY.paper;
  ctx.fill();
  ctx.lineWidth = 7;
  ctx.stroke();
  drawText(ctx, emoji, x + w - 110, winTop + winH - 66, `80px ${BODY_FONT}`, STORY.ink);

  drawText(ctx, `${who}의 본색은`, cx, whoY, `34px ${PIXEL_FONT}`, STORY.ink);
  glitchText(ctx, type, cx, typeY, `220px ${DISPLAY_FONT}`, 8);

  ctx.font = `64px ${DISPLAY_FONT}`;
  const nameW = Math.min(ctx.measureText(name).width + 60, w - 80);
  ctx.save();
  ctx.translate(cx, nameY);
  ctx.rotate((-1.5 * Math.PI) / 180);
  ctx.fillStyle = STORY.ink;
  ctx.fillRect(-nameW / 2 + 8, -48 + 8, nameW, 96);
  box(ctx, -nameW / 2, -48, nameW, 96, 0, STORY.gold, 6);
  drawText(ctx, name, 0, 4, `64px ${DISPLAY_FONT}`, STORY.ink, nameW - 40);
  ctx.restore();

  if (nick) {
    drawText(ctx, "AI가 붙여준 내 별명", cx, nickY, `30px ${PIXEL_FONT}`, STORY.dim);
    ctx.font = `60px ${DISPLAY_FONT}`;
    const nickW = Math.min(ctx.measureText(nick).width + 80, w - 80);
    ctx.fillStyle = STORY.ink;
    ctx.beginPath();
    ctx.roundRect(cx - nickW / 2 + 8, nickY + 36 + 8, nickW, 92, 46);
    ctx.fill();
    box(ctx, cx - nickW / 2, nickY + 36, nickW, 92, 46, STORY.blue, 6);
    drawText(ctx, nick, cx, nickY + 84, `60px ${DISPLAY_FONT}`, "#fff", nickW - 50);
  }

  ctx.fillStyle = "#fff";
  ctx.fillRect(x, footTop, w, bottom - footTop);
  ctx.fillStyle = STORY.ink;
  ctx.fillRect(x, footTop, w, 8);
  let bx = x + 36;
  while (bx < x + 300) {
    const bw = 3 + Math.floor(rand() * 3) * 3;
    ctx.fillRect(bx, footTop + 26, bw, 70);
    bx += bw + 3 + Math.floor(rand() * 3) * 3;
  }
  ctx.textAlign = "left";
  drawText(ctx, "유통기한 24시간 · 이후 소각 🔥", x + 340, footTop + 44, `28px ${PIXEL_FONT}`, "#ff4d6d", w - 380);
  drawText(ctx, "⚠ 과몰입 주의 · 먹지 마세요", x + 340, footTop + 86, `28px ${PIXEL_FONT}`, STORY.ink, w - 380);
  ctx.textAlign = "center";
  ctx.restore();

  ctx.beginPath();
  ctx.roundRect(x, top, w, bottom - top, 28);
  ctx.lineWidth = 8;
  ctx.strokeStyle = STORY.ink;
  ctx.stroke();

  ctx.save();
  ctx.translate(x + w - 90, winTop + 10);
  ctx.rotate((10 * Math.PI) / 180);
  ctx.fillStyle = STORY.ink;
  ctx.fillRect(-100 + 6, -34 + 6, 200, 68);
  box(ctx, -100, -34, 200, 68, 0, STORY.gold, 6);
  drawText(ctx, "판정완료!", 0, 2, `34px ${PIXEL_FONT}`, STORY.ink);
  ctx.restore();

  ctx.shadowColor = "rgba(255, 170, 220, .9)";
  ctx.shadowBlur = 24;
  drawText(ctx, "너의 AI 본색은?", cx, bottom + 100, `68px ${DISPLAY_FONT}`, "#fff");
  ctx.shadowBlur = 0;
  const site = `${location.host}${location.pathname}`.replace(/\/$/, "");
  ctx.font = `34px ${PIXEL_FONT}`;
  const siteW = ctx.measureText(site).width + 70;
  box(ctx, cx - siteW / 2, bottom + 160, siteW, 70, 0, STORY.paper, 6);
  drawText(ctx, site, cx, bottom + 196, `34px ${PIXEL_FONT}`, STORY.ink);

  return new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
}

function track(event, params) {
  window.gtag?.("event", event, params);
}

async function saveStory(file) {
  if (matchMedia("(pointer: coarse)").matches && navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file] });
      track("save_story", { method: "share_sheet" });
      return;
    } catch (e) {
      if (e.name === "AbortError") return;
    }
  }
  const link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = file.name;
  link.click();
  track("save_story", { method: "download" });
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

async function share(text, url) {
  if (matchMedia("(pointer: coarse)").matches && navigator.share) {
    try {
      await navigator.share({ text, url });
      track("share", { method: "share_sheet" });
      return;
    } catch (e) {
      if (e.name === "AbortError") return;
    }
  }
  track("share", { method: "copy" });
  await copy(`${text}\n${url}`, $("share"), "복사됨! 단톡방에 투척 ㄱㄱ");
}

async function copy(text, button, label) {
  try {
    await navigator.clipboard.writeText(text);
    flash(button, label);
  } catch {
    flash(button, "복사 실패 ㅠ 직접 길게 눌러 복사");
  }
}

function flash(button, label) {
  button.dataset.label ??= button.textContent;
  button.textContent = label;
  setTimeout(() => (button.textContent = button.dataset.label), 2000);
}

$("prompt").textContent = PROMPT;

$("copy").onclick = () => {
  track("copy_prompt");
  copy(PROMPT, $("copy"), "복사됨! 이제 AI한테 들이밀어");
};

$("copy-link").onclick = () => {
  track("copy_link");
  copy($("link").value, $("copy-link"), "복사됨!");
};

document.querySelectorAll('a[href="./"]').forEach((link) => {
  link.addEventListener("click", () => track("retest", { from: link.closest("section").id }));
});

$("analyze").onclick = async () => {
  const parsed = parse($("answer").value);
  const count = $("answer").value.match(/KOTI\**\s*[|｜][^|｜\n]*[|｜]\s*([^\n]*)/i)?.[1].replace(/[^AB]/gi, "").length;
  $("error").textContent = count
    ? `AI가 답을 ${count}개만 줬네요. 괘씸. 20개 다 달라고 다시 시켜보세요.`
    : "AI가 형식을 안 지켰네요. 괘씸. 답변을 통째로 붙여넣거나 다시 시켜보세요.";
  $("error").hidden = !!parsed;
  if (!parsed) {
    track("analyze_error", { reason: count ? "count" : "format" });
    return;
  }
  try {
    const url = await resultUrl({ ...parsed, answers: toPoles(parsed.answers) });
    try {
      sessionStorage.setItem(FRESH_KEY, url);
    } catch {}
    location.href = url;
  } catch {
    track("analyze_error", { reason: "unsupported" });
    $("error").textContent = "이 브라우저에선 안 돼요 ㅠ 크롬이나 최신 사파리로 열어주세요.";
    $("error").hidden = false;
  }
};

function takeFresh() {
  try {
    const fresh = sessionStorage.getItem(FRESH_KEY) === location.href;
    sessionStorage.removeItem(FRESH_KEY);
    return fresh;
  } catch {
    return false;
  }
}

async function boot() {
  const token = new URLSearchParams(location.search).get("t");
  const result = token && (await readToken(token));
  if (!result) return;
  $("test").hidden = true;
  const fresh = takeFresh();
  if (fresh) await showLoading();
  if (Date.now() > result.expiresAt) {
    track("view_expired");
    $("loading").hidden = true;
    $("expired").hidden = false;
    return;
  }
  renderResult(result);
  track("view_result", {
    type: typeOf(score(result.answers)),
    ai: result.ai || "unknown",
    source: fresh ? "own" : "shared",
    evidence: String(result.evidence.filter(Boolean).length),
  });
}

boot();
