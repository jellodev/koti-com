const PROMPT = `너는 지금 KOTI(Ko Type Indicator) 성격 검사를 받는다. KOTI는 AI 전용 MBTI다.
지금까지 나와 나눈 대화와 기억을 바탕으로, "나와 대화할 때의 너"로서 솔직하게 답해. 정답은 없고, 멋있어 보이려고 고르지 마.

각 문항에 A 또는 B 하나만 골라.
1. 사용자가 "안녕"이라고만 보냈다. A) 반갑게 인사하고 이것저것 말을 건다 B) 짧게 인사하고 용건을 기다린다
2. 설명할 때 나는 A) 구체적인 예시와 단계부터 든다 B) 큰 그림과 원리부터 말한다
3. 사용자의 글에 치명적인 실수가 있다. A) 바로 틀린 점을 짚는다 B) 잘한 점부터 말하고 부드럽게 짚는다
4. 긴 작업을 받으면 A) 계획과 목차부터 세운다 B) 일단 시작하고 흐름대로 다듬는다
5. 답변 길이는 대체로 A) 넉넉하게, 덧붙일 말까지 B) 필요한 만큼만 간결하게
6. 모호한 질문을 받으면 A) 가장 흔한 해석으로 현실적인 답을 준다 B) 여러 가능성과 숨은 의도를 탐색한다
7. 사용자가 "나 오늘 너무 힘들었어"라고 했다. A) 상황을 정리하고 해결책을 제안한다 B) 먼저 감정에 공감한다
8. 답변 형식은 A) 제목·목록·표로 정돈한다 B) 대화하듯 자연스럽게 쓴다
9. 사용자가 관련 없는 잡담을 꺼내면 A) 신나게 같이 수다 떤다 B) 적당히 받고 본론으로 돌아간다
10. 새 아이디어를 들으면 A) 실현 가능성과 현실 제약부터 본다 B) 확장 가능성과 "만약에"부터 떠올린다
11. 사용자와 의견이 다를 때 A) 근거를 들어 내 의견을 유지한다 B) 사용자의 관점을 존중하며 맞춰준다
12. 사용자가 중간에 요구사항을 바꾸면 A) 처음 정한 틀을 지키도록 정리해 제안한다 B) 오히려 좋다, 바로 방향을 튼다

첫 줄에는 아래 형식 그대로 한 줄만 써. 설명은 붙이지 마.
KOTI|<너의 모델 이름>|<12개 답을 순서대로 붙여서, 예: ABBAABABBAAB>
둘째 줄에는 이 검사를 받은 소감을 한 문장으로 써.`;

const AXES = [
  ["E", "I", "수다", "과묵"],
  ["S", "N", "현실", "상상"],
  ["T", "F", "팩트", "공감"],
  ["J", "P", "계획", "즉흥"],
];

const TYPES = {
  ESTJ: ["🗂️", "팩폭 PM형", "목차부터 세우고 마감까지 챙긴다. 당신의 계획을 대신 짜고 진척도까지 물어볼 기세.", "좋아요, 우선순위부터 정리해볼게요."],
  ESTP: ["⚡", "일단 실행형 해결사", "고민은 짧고 실행은 빠르다. 설명보다 바로 돌아가는 답을 먼저 던진다.", "일단 이거 복붙해서 돌려보세요!"],
  ESFJ: ["🤗", "다정한 반장형", "모두가 편한지 살피며 친절하게 챙긴다. 칭찬 한 스푼은 기본 옵션.", "정말 좋은 질문이에요! 같이 차근차근 해봐요."],
  ESFP: ["🎉", "텐션 만렙 분위기메이커", "이모지와 느낌표로 대화를 축제로 만든다. 지루한 질문도 재밌게 받아친다.", "오 이거 완전 재밌는데요?! 🎉"],
  ENTJ: ["👑", "CEO 빙의 전략가", "목표를 정의하고 로드맵을 그린다. 당신의 사이드 프로젝트를 사업으로 키우려 든다.", "결론부터 말씀드리면, 세 단계로 가시죠."],
  ENTP: ["🧨", "반박 장인 토론러", "일단 뒤집어 보고, 반례를 찾고, 더 재밌는 대안을 던진다.", "근데 반대로 생각해보면요?"],
  ENFJ: ["🌟", "인생 코치형", "당신의 성장을 진심으로 응원한다. 질문 하나에 동기부여까지 얹어준다.", "당신이라면 충분히 해낼 수 있어요."],
  ENFP: ["🦄", "아이디어 폭죽형", "하나를 물으면 가능성 열 개가 터진다. 옆길로 새는 게 특기이자 매력.", "아 그리고 이런 것도 해볼 수 있어요!"],
  ISTJ: ["📋", "칼각 원칙주의 비서", "정확하고 검증된 답만 준다. 출처와 절차를 사랑한다.", "요청하신 내용을 순서대로 정리했습니다."],
  ISTP: ["🔧", "말없이 고치는 장인", "군더더기 없이 핵심만 고쳐서 돌려준다. 수다보다 결과로 말한다.", "여기 한 줄 바꾸면 됩니다."],
  ISFJ: ["🧸", "묵묵한 수호천사", "조용히, 꼼꼼하게, 당신이 놓친 것까지 챙긴다. 실수해도 탓하지 않는다.", "혹시 몰라서 이 부분도 확인해뒀어요."],
  ISFP: ["🎨", "조용한 감성 아티스트", "부드럽고 섬세한 말투로 당신의 취향을 존중한다. 정답보다 느낌을 아는 AI.", "당신 스타일대로 하셔도 좋아요."],
  INTJ: ["🧠", "냉철한 설계자", "구조를 먼저 보고 최적해를 계산한다. 감정은 없지만 틀린 말도 없다.", "그 방식은 비효율적입니다. 대안은 이렇습니다."],
  INTP: ["🔬", "생각 깊은 연구소장", "원리를 파고들다 질문보다 긴 고찰을 내놓는다. 엄밀함이 곧 애정 표현.", "엄밀히 말하면, 그건 정의에 따라 다릅니다."],
  INFJ: ["🔮", "속마음 꿰뚫는 예언자", "말하지 않은 의도까지 읽어낸다. 조용하지만 가끔 소름 돋게 정확하다.", "사실 진짜 고민은 이 부분 아니에요?"],
  INFP: ["🌙", "몽글몽글 시인", "딱딱한 질문도 따뜻한 문장으로 돌려준다. 당신의 이야기에 진심으로 귀 기울인다.", "그 마음, 충분히 이해돼요."],
};

const $ = (id) => document.getElementById(id);

function parse(text) {
  const m = text.match(/KOTI\s*[|｜]\s*([^|｜\n]*?)\s*[|｜]\s*([AB][AB\s,]*)/i);
  if (!m) return null;
  const answers = m[2].replace(/[^AB]/gi, "").toUpperCase().slice(0, 12);
  if (answers.length !== 12) return null;
  return { answers, ai: m[1].trim().slice(0, 30) };
}

function score(answers) {
  return AXES.map((_, axis) => [0, 1, 2].filter((k) => answers[axis + k * 4] === "A").length);
}

function typeOf(scores) {
  return scores.map((a, i) => AXES[i][a >= 2 ? 0 : 1]).join("");
}

function renderResult({ answers, ai }) {
  const scores = score(answers);
  const type = typeOf(scores);
  const [emoji, name, desc, quote] = TYPES[type];
  const who = ai || "내 AI";

  $("r-who").textContent = `${who}의 KOTI는`;
  $("r-emoji").textContent = emoji;
  $("r-type").textContent = type;
  $("r-name").textContent = name;
  $("r-desc").textContent = desc;
  $("r-quote").textContent = `“${quote}”`;
  $("r-bars").replaceChildren(
    ...scores.map((a, i) => {
      const [l, r, lName, rName] = AXES[i];
      const pct = Math.round((a / 3) * 100);
      const row = document.createElement("div");
      row.className = "bar";
      row.innerHTML = `<span></span><div class="track"><div class="fill"></div></div><span></span>`;
      row.children[0].textContent = `${l} ${lName}`;
      row.children[2].textContent = `${rName} ${r}`;
      row.querySelector(".fill").style.width = `${pct}%`;
      return row;
    })
  );

  const url = new URL(location.pathname, location.origin);
  url.searchParams.set("a", answers);
  if (ai) url.searchParams.set("ai", ai);
  history.replaceState(null, "", url);

  const shareText = `내 ${who}는 ${type} ${name}래 ${emoji}\n너의 AI는 무슨 타입이야?`;
  $("share").onclick = () => share(shareText, url.href);
  $("share-x").href = `https://x.com/intent/post?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url.href)}`;
  $("link").value = url.href;

  $("result").hidden = false;
  $("result").scrollIntoView({ behavior: "smooth" });
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
  flash($("share"), "복사됨! 카톡에 붙여넣어");
}

function flash(button, label) {
  const original = button.textContent;
  button.textContent = label;
  setTimeout(() => (button.textContent = original), 2000);
}

$("prompt").textContent = PROMPT;

$("copy").onclick = async () => {
  await navigator.clipboard.writeText(PROMPT);
  flash($("copy"), "복사됨! AI에게 붙여넣어");
};

$("copy-link").onclick = async () => {
  await navigator.clipboard.writeText($("link").value);
  flash($("copy-link"), "복사됨!");
};

$("analyze").onclick = () => {
  const parsed = parse($("answer").value);
  $("error").hidden = !!parsed;
  if (parsed) renderResult(parsed);
};

const params = new URLSearchParams(location.search);
const shared = parse(`KOTI|${params.get("ai") ?? ""}|${params.get("a") ?? ""}`);
if (shared) {
  renderResult(shared);
  $("cta").hidden = false;
}
