/**
 * VASENTRA — CORE INTERACTIVE JAVASCRIPT ENGINE & STUDY LAB
 * Features:
 * - Interactive Study Lab: Level-Wise Vocabulary Vault with Native Audio
 * - Sentence Formation Studio: Word Block Assembly with Instant Verification & Grammar Insights
 * - Speech Synthesis Lab (Web Speech API + Web Audio Fallback)
 * - Word of the Day Rotation & Audio
 * - Multilingual Switcher (EN, HI, ZH)
 * - FAQ Accordion
 * - Direct WhatsApp Lead Routing (+91 99035 44047)
 */

// ==========================================================================
// 1. VOCABULARY VAULT DATABASE (Level-Wise Words with Audio & Examples)
// ==========================================================================
const VAULT_DATABASE = [
  // HSK 1
  {
    hanzi: "你好",
    pinyin: "nǐ hǎo",
    meaning: "Hello / Hi",
    level: "HSK 1",
    example: "你好！很高兴认识你。(Nǐ hǎo! Hěn gāoxìng rènshí nǐ.) — Hello! Nice to meet you."
  },
  {
    hanzi: "谢谢",
    pinyin: "xièxie",
    meaning: "Thank you / Thanks",
    level: "HSK 1",
    example: "太谢谢你的帮助了。(Tài xièxie nǐ de bāngzhù le.) — Thank you so much for your help."
  },
  {
    hanzi: "老师",
    pinyin: "lǎoshī",
    meaning: "Teacher",
    level: "HSK 1",
    example: "王老师是中国人。(Wáng lǎoshī shì Zhōngguórén.) — Teacher Wang is Chinese."
  },
  {
    hanzi: "朋友",
    pinyin: "péngyou",
    meaning: "Friend",
    level: "HSK 1",
    example: "我们是好朋友。(Wǒmen shì hǎo péngyou.) — We are good friends."
  },
  {
    hanzi: "学习",
    pinyin: "xuéxí",
    meaning: "To study / To learn",
    level: "HSK 1",
    example: "我每天学习中文。(Wǒ měitiān xuéxí Zhōngwén.) — I study Chinese every day."
  },
  {
    hanzi: "中国",
    pinyin: "Zhōngguó",
    meaning: "China",
    level: "HSK 1",
    example: "我想去中国留学。(Wǒ xiǎng qù Zhōngguó liúxué.) — I want to study in China."
  },

  // HSK 2
  {
    hanzi: "准备",
    pinyin: "zhǔnbèi",
    meaning: "To prepare / Ready",
    level: "HSK 2",
    example: "你准备好去机场了吗？(Nǐ zhǔnbèi hǎo qù jīchǎng le ma?) — Are you ready to go to the airport?"
  },
  {
    hanzi: "机场",
    pinyin: "jīchǎng",
    meaning: "Airport",
    level: "HSK 2",
    example: "飞机两点到机场。(Fēijī liǎng diǎn dào jīchǎng.) — The flight arrives at the airport at 2:00."
  },
  {
    hanzi: "便宜",
    pinyin: "piányi",
    meaning: "Cheap / Inexpensive",
    level: "HSK 2",
    example: "这件衣服很漂亮，也很便宜。(Zhè jiàn yīfu hěn piàoliang, yě hěn piányi.) — This clothing is pretty and cheap."
  },
  {
    hanzi: "帮助",
    pinyin: "bāngzhù",
    meaning: "To help / Assistance",
    level: "HSK 2",
    example: "谢谢你的帮助。(Xièxie nǐ de bāngzhù.) — Thank you for your assistance."
  },
  {
    hanzi: "时间",
    pinyin: "shíjiān",
    meaning: "Time",
    level: "HSK 2",
    example: "你明天有时间吗？(Nǐ míngtiān yǒu shíjiān ma?) — Do you have time tomorrow?"
  },
  {
    hanzi: "开始",
    pinyin: "kāishǐ",
    meaning: "To start / To begin",
    level: "HSK 2",
    example: "会议马上开始。(Huìyì mǎshàng kāishǐ.) — The meeting is starting right now."
  },

  // HSK 3
  {
    hanzi: "虽然...但是...",
    pinyin: "suīrán... dànshì...",
    meaning: "Although... but...",
    level: "HSK 3",
    example: "虽然汉语很难，但是很有趣。(Suīrán Hànyǔ hěn nán, dànshì hěn yǒuqù.) — Although Chinese is hard, it is interesting."
  },
  {
    hanzi: "解决",
    pinyin: "jiějué",
    meaning: "To solve / Settle",
    level: "HSK 3",
    example: "我们需要解决这个问题。(Wǒmen xūyào jiějué zhège wèntí.) — We need to resolve this problem."
  },
  {
    hanzi: "提高",
    pinyin: "tígāo",
    meaning: "To improve / Enhance",
    level: "HSK 3",
    example: "学习可以提高口语水平。(Xuéxí kěyǐ tígāo kǒuyǔ shuǐpíng.) — Studying can improve spoken fluency."
  },
  {
    hanzi: "参加",
    pinyin: "cānjiā",
    meaning: "To participate / Join",
    level: "HSK 3",
    example: "我要参加下个月的HSK考试。(Wǒ yào cānjiā xià gè yuè de HSK kǎoshì.) — I will take next month's HSK exam."
  },
  {
    hanzi: "机会",
    pinyin: "jīhuì",
    meaning: "Opportunity / Chance",
    level: "HSK 3",
    example: "这是一个难得的机会。(Zhè shì yí gè nándé de jīhuì.) — This is a rare opportunity."
  },
  {
    hanzi: "影响",
    pinyin: "yǐngxiǎng",
    meaning: "Influence / Impact",
    level: "HSK 3",
    example: "环境对人有很大影响。(Huánjìng duì rén yǒu hěn dà yǐngxiǎng.) — Environment has a huge impact on people."
  },

  // Business & Trade
  {
    hanzi: "合作",
    pinyin: "hézuò",
    meaning: "Cooperation / Partnership",
    level: "Business",
    example: "期待我们长期的友好合作。(Qīdài wǒmen chángqī de yǒuhǎo hézuò.) — Looking forward to our long-term partnership."
  },
  {
    hanzi: "价格",
    pinyin: "jiàgé",
    meaning: "Price / Quotation",
    level: "Business",
    example: "这个价格可以再便宜一点吗？(Zhège jiàgé kěyǐ zài piányi yìdiǎn ma?) — Can this price be a bit lower?"
  },
  {
    hanzi: "工厂",
    pinyin: "gōngchǎng",
    meaning: "Factory / Plant",
    level: "Business",
    example: "我们明天去义乌看工厂。(Wǒmen míngtiān qù Yìwū kàn gōngchǎng.) — Tomorrow we visit the factory in Yiwu."
  },
  {
    hanzi: "样品",
    pinyin: "yàngpǐn",
    meaning: "Sample",
    level: "Business",
    example: "请尽快给我们寄样品。(Qǐng jǐnkuài gěi wǒmen jì yàngpǐn.) — Please send us the sample as soon as possible."
  },
  {
    hanzi: "起订量",
    pinyin: "qǐdìngliàng",
    meaning: "Minimum Order Quantity (MOQ)",
    level: "Business",
    example: "这款产品的起订量是多少？(Zhè kuǎn chǎnpǐn de qǐdìngliàng shì duōshao?) — What is the MOQ for this product?"
  },
  {
    hanzi: "合同",
    pinyin: "hétong",
    meaning: "Contract / Agreement",
    level: "Business",
    example: "双方已经签署了采购合同。(Shuāngfāng yǐjīng qiānshǔ le cǎigòu hétong.) — Both parties signed the purchase contract."
  }
];

let activeVaultLevel = "HSK 1";
let vaultSearchQuery = "";

function renderVaultCards() {
  const container = document.getElementById("vaultWordsGrid");
  if (!container) return;

  const filtered = VAULT_DATABASE.filter(item => {
    const matchesLevel = activeVaultLevel === "All" || item.level === activeVaultLevel;
    const matchesQuery = !vaultSearchQuery || 
      item.hanzi.includes(vaultSearchQuery) || 
      item.pinyin.toLowerCase().includes(vaultSearchQuery.toLowerCase()) || 
      item.meaning.toLowerCase().includes(vaultSearchQuery.toLowerCase());
    return matchesLevel && matchesQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:32px; color:#64748B;">No vocabulary words found matching "${vaultSearchQuery}".</div>`;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="vault-word-card" onclick="speakMandarin('${item.hanzi}', '${item.pinyin}')" title="Click to hear pronunciation">
      <div class="word-card-top">
        <span class="word-hanzi">${item.hanzi}</span>
        <button class="btn-card-audio" onclick="event.stopPropagation(); speakMandarin('${item.hanzi}', '${item.pinyin}')" aria-label="Listen">🔊</button>
      </div>
      <span class="word-pinyin">${item.pinyin}</span>
      <span class="word-meaning">${item.meaning}</span>
      <div class="word-example">
        <strong>Example:</strong> ${item.example}
      </div>
    </div>
  `).join("");
}

function filterVaultLevel(level) {
  activeVaultLevel = level;
  document.querySelectorAll(".vault-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-vlevel") === level);
  });
  renderVaultCards();
}

function handleVaultSearch(e) {
  vaultSearchQuery = e.target.value.trim();
  renderVaultCards();
}

// ==========================================================================
// 2. SENTENCE FORMATION PRACTICE STUDIO
// ==========================================================================
const SENTENCE_CHALLENGES = [
  {
    level: "HSK 1",
    english: "I am Indian.",
    targetSentence: "我是印度人。",
    targetPinyin: "Wǒ shì Yìndùrén.",
    chips: ["我是", "印度人", "中国", "喜欢"],
    solutionOrder: ["我是", "印度人"],
    explanation: "Grammar Rule: Subject (我 - I) + Verb (是 - to be) + Nationality (印度人 - Indian). In Chinese, no articles ('a'/'an') are needed."
  },
  {
    level: "HSK 1",
    english: "I like learning Chinese.",
    targetSentence: "我喜欢学中文。",
    targetPinyin: "Wǒ xǐhuān xué Zhōngwén.",
    chips: ["我", "喜欢", "学", "中文", "老师", "不去"],
    solutionOrder: ["我", "喜欢", "学", "中文"],
    explanation: "Grammar Rule: Subject (我) + Modal Verb (喜欢 - like) + Action Verb (学 - study) + Object (中文 - Chinese)."
  },
  {
    level: "HSK 2",
    english: "I want to travel to China.",
    targetSentence: "我想去中国旅游。",
    targetPinyin: "Wǒ xiǎng qù Zhōngguó lǚyóu.",
    chips: ["我想", "去", "中国", "旅游", "昨天", "买东西"],
    solutionOrder: ["我想", "去", "中国", "旅游"],
    explanation: "Grammar Rule: Subject (我) + Desire (想 - want to) + Motion Verb (去 - go) + Place (中国) + Purpose Action (旅游 - travel)."
  },
  {
    level: "HSK 2",
    english: "Excuse me, where is the airport?",
    targetSentence: "请问机场在哪里？",
    targetPinyin: "Qǐngwèn jīchǎng zài nǎlǐ?",
    chips: ["请问", "机场", "在", "哪里？", "很远", "几点"],
    solutionOrder: ["请问", "机场", "在", "哪里？"],
    explanation: "Grammar Rule: Politeness (请问 - Excuse me) + Topic (机场 - airport) + Preposition/Verb (在 - located at) + Question Word (哪里 - where)."
  },
  {
    level: "HSK 3",
    english: "Although Chinese is hard, it is very useful.",
    targetSentence: "虽然汉语很难，但是很有用。",
    targetPinyin: "Suīrán Hànyǔ hěn nán, dànshì hěn yǒuyòng.",
    chips: ["虽然", "汉语很难，", "但是", "很有用。", "所以", "不难"],
    solutionOrder: ["虽然", "汉语很难，", "但是", "很有用。"],
    explanation: "Grammar Rule: Paired Conjunction (虽然...但是... - Although... but...). Notice that unlike English, Chinese requires both words in the pair."
  }
];

let currentSentenceIndex = 0;
let assembledChips = [];
let availableChips = [];
let completedScore = 0;

function loadSentenceChallenge(index) {
  const challenge = SENTENCE_CHALLENGES[index];
  if (!challenge) return;

  document.getElementById("sentenceLevelTag").textContent = `${challenge.level} • Challenge ${index + 1} of ${SENTENCE_CHALLENGES.length}`;
  document.getElementById("targetSentenceEn").textContent = `"${challenge.english}"`;
  document.getElementById("studioScore").textContent = `Score: ${completedScore} / ${SENTENCE_CHALLENGES.length}`;

  // Reset chips state
  assembledChips = [];
  // Shuffle chips for fairness
  availableChips = [...challenge.chips].sort(() => 0.5 - Math.random());

  renderAssembledChips();
  renderSourceChips();

  // Reset feedback & buttons
  const feedbackBox = document.getElementById("sentenceFeedbackBox");
  if (feedbackBox) {
    feedbackBox.style.display = "none";
    feedbackBox.className = "sentence-feedback-box";
  }
  document.getElementById("btnNextSentence").style.display = "none";
  document.getElementById("btnCheckSentence").style.display = "inline-flex";
}

function renderAssembledChips() {
  const container = document.getElementById("assembledChipsContainer");
  const placeholder = document.getElementById("zonePlaceholder");
  if (!container || !placeholder) return;

  if (assembledChips.length === 0) {
    placeholder.style.display = "block";
    container.innerHTML = "";
  } else {
    placeholder.style.display = "none";
    container.innerHTML = assembledChips.map((chip, idx) => `
      <div class="assembled-chip" onclick="removeAssembledChip(${idx})">
        <span>${chip}</span>
        <span class="chip-remove-x">✕</span>
      </div>
    `).join("");
  }
}

function renderSourceChips() {
  const container = document.getElementById("sourceChipsContainer");
  if (!container) return;

  container.innerHTML = availableChips.map((chip, idx) => {
    const isUsed = assembledChips.includes(chip);
    return `
      <button class="word-chip ${isUsed ? 'used' : ''}" onclick="addChipToSentence('${chip}')" ${isUsed ? 'disabled' : ''}>
        ${chip}
      </button>
    `;
  }).join("");
}

function addChipToSentence(chip) {
  assembledChips.push(chip);
  renderAssembledChips();
  renderSourceChips();
}

function removeAssembledChip(index) {
  assembledChips.splice(index, 1);
  renderAssembledChips();
  renderSourceChips();
}

function resetCurrentSentence() {
  assembledChips = [];
  renderAssembledChips();
  renderSourceChips();
  const feedbackBox = document.getElementById("sentenceFeedbackBox");
  if (feedbackBox) {
    feedbackBox.style.display = "none";
  }
}

function checkSentenceSolution() {
  const challenge = SENTENCE_CHALLENGES[currentSentenceIndex];
  const feedbackBox = document.getElementById("sentenceFeedbackBox");
  if (!feedbackBox) return;

  const isMatch = assembledChips.length === challenge.solutionOrder.length &&
    assembledChips.every((val, index) => val === challenge.solutionOrder[index]);

  feedbackBox.style.display = "block";

  if (isMatch) {
    feedbackBox.className = "sentence-feedback-box correct";
    feedbackBox.innerHTML = `
      <strong>🎉 Perfect! 太棒了！</strong><br>
      <span>${challenge.targetSentence} (${challenge.targetPinyin})</span><br>
      <span style="font-size:12px; margin-top:4px; display:block;">${challenge.explanation}</span>
    `;
    speakMandarin(challenge.targetSentence, challenge.targetPinyin);
    completedScore++;
    document.getElementById("studioScore").textContent = `Score: ${completedScore} / ${SENTENCE_CHALLENGES.length}`;
    document.getElementById("btnCheckSentence").style.display = "none";
    document.getElementById("btnNextSentence").style.display = "inline-flex";
  } else {
    feedbackBox.className = "sentence-feedback-box incorrect";
    feedbackBox.innerHTML = `
      <strong>Not quite right yet. Keep trying!</strong><br>
      <span>Hint: Check the word order or remove extra blocks. Click any word block in the box to remove it.</span>
    `;
  }
}

function speakCurrentSentence() {
  const challenge = SENTENCE_CHALLENGES[currentSentenceIndex];
  speakMandarin(challenge.targetSentence, challenge.targetPinyin);
}

function nextSentenceChallenge() {
  currentSentenceIndex = (currentSentenceIndex + 1) % SENTENCE_CHALLENGES.length;
  loadSentenceChallenge(currentSentenceIndex);
}

// 3. Tab Switcher for Study Lab (Words vs Sentences vs PDF)
function switchLabTab(tab) {
  document.querySelectorAll(".lab-pill-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".lab-tab-panel").forEach(panel => panel.classList.remove("active"));

  if (tab === 'words') {
    document.getElementById("tabBtnWords").classList.add("active");
    document.getElementById("labWordsPanel").classList.add("active");
    renderVaultCards();
  } else if (tab === 'sentences') {
    document.getElementById("tabBtnSentences").classList.add("active");
    document.getElementById("labSentencesPanel").classList.add("active");
    loadSentenceChallenge(currentSentenceIndex);
  } else if (tab === 'pdf') {
    document.getElementById("tabBtnPdf").classList.add("active");
    document.getElementById("labPdfPanel").classList.add("active");
  }
}

// ==========================================================================
// 4. HSK 1 TO HSK 6 CURRICULUM ROADMAP
// ==========================================================================
const HSK_LEVELS = [
  {
    level: 1,
    name: "HSK 1",
    subtitle: "Beginner",
    summary: "Sound out Mandarin and handle simple everyday exchanges.",
    words: 150,
    hours: 40,
    color: "#1D4ED8",
    curriculum: [
      "Pinyin, initials, finals, and the four tones",
      "Greetings, names, nationality, and family",
      "Numbers, dates, days, and telling time",
      "Daily routine, food, likes, and dislikes",
      "Directions and location words"
    ],
    sampleSentence: "你好！很高兴认识你。(Nǐ hǎo! Hěn gāoxìng rènshí nǐ.) — Hello! Nice to meet you."
  },
  {
    level: 2,
    name: "HSK 2",
    subtitle: "Elementary",
    summary: "Communicate in simple, routine tasks on familiar topics.",
    words: 300,
    hours: 50,
    color: "#D97706",
    curriculum: [
      "Weather, health, and shopping",
      "Transport, travel, and booking",
      "Hobbies, invitations, and ability",
      "Ongoing and completed actions",
      "Writing short notes of 5 to 6 sentences"
    ],
    sampleSentence: "明天天气怎么样？我想去买东西。(Míngtiān tiānqì zěnme yàng? Wǒ xiǎng qù mǎi dōngxī.) — How is the weather tomorrow? I want to go shopping."
  },
  {
    level: 3,
    name: "HSK 3",
    subtitle: "Pre-Intermediate",
    summary: "Manage most travel, study, and work situations and read short texts.",
    words: 600,
    hours: 60,
    color: "#059669",
    curriculum: [
      "Describing people, places, and experiences",
      "Past experience and future plans",
      "Travel planning and emergencies",
      "Complements and linking conjunctions",
      "Reading passages of about 300 words"
    ],
    sampleSentence: "虽然汉语很难，但是我非常喜欢学。(Suīrán Hànyǔ hěn nán, dànshì wǒ fēicháng xǐhuān xué.) — Although Chinese is difficult, I really like learning it."
  },
  {
    level: 4,
    name: "HSK 4",
    subtitle: "Intermediate",
    summary: "Discuss a wide range of topics smoothly with native speakers.",
    words: 1200,
    hours: 70,
    color: "#2563EB",
    curriculum: [
      "Careers and workplace communication",
      "Opinions, advice, and complaints",
      "Formal and informal registers",
      "Set expressions (chengyu) introduced",
      "A 3-minute oral presentation"
    ],
    sampleSentence: "关于这个项目，我认为我们需要进一步讨论。(Guānyú zhège xiàngmù, wǒ rènwéi wǒmen xūyào jìnyíbù tǎolùn.) — Regarding this project, I think we need further discussion."
  },
  {
    level: 5,
    name: "HSK 5",
    subtitle: "Pre-Advanced",
    summary: "Read newspapers and books and express ideas in extended speech.",
    words: 2500,
    hours: 80,
    color: "#7C3AED",
    curriculum: [
      "Media and news vocabulary",
      "Debate and persuasive speaking",
      "Reports, summaries, and formal letters",
      "Idioms and literary expressions",
      "Introduction to Chinese literature and film"
    ],
    sampleSentence: "随着全球经济的发展，掌握中文已经成为一项重要的竞争优势。(Suízhe quánqiú jīngjì de fāzhǎn, zhǎngwò Zhōngwén yǐjīng chéngwéi yí xiàng zhòngyào de jìngzhēng yōushì.) — With global economic development, mastering Chinese has become a vital competitive edge."
  },
  {
    level: 6,
    name: "HSK 6",
    subtitle: "Advanced",
    summary: "Near-fluent comprehension and confident professional use.",
    words: 5000,
    hours: 90,
    color: "#BE123C",
    curriculum: [
      "Authentic TV, radio, and news broadcasts",
      "Abstract and specialised topics",
      "Summarising long texts and recordings",
      "Negotiation, interviews, and presentations",
      "Full HSK 6 mock tests and evaluation"
    ],
    sampleSentence: "在国际跨国合作与商业谈判中，深刻理解彼此的文化底蕴与商业礼仪是达成双赢的关键。(Zài guójì kuàguó hézuò yǔ shāngyè tánpàn zhōng, shēnkè lǐjiě bǐcǐ de wénhuà dǐyùn yǔ shāngyè lǐyí shì dáchéng shuāngyíng de guānjiàn.) — In cross-border trade negotiations, deeply understanding cultural nuances is key to win-win success."
  }
];

function renderLevel(levelIndex) {
  const data = HSK_LEVELS.find(item => item.level === levelIndex) || HSK_LEVELS[0];
  const container = document.getElementById("levelDisplay");
  if (!container) return;

  const curriculumHtml = data.curriculum
    .map(item => `
      <div class="curriculum-item">
        <span class="check-bullet">✓</span>
        <span>${item}</span>
      </div>
    `)
    .join("");

  container.innerHTML = `
    <div class="level-header-row">
      <div class="level-title-wrap">
        <div class="level-number-badge" style="background: ${data.color}">
          ${data.level}
        </div>
        <div class="level-meta-title">
          <h3>${data.name} &bull; ${data.subtitle}</h3>
          <p>${data.summary}</p>
        </div>
      </div>
      <div class="level-pills-row">
        <span class="level-pill" style="color: ${data.color}">📖 ${data.words.toLocaleString()} words</span>
        <span class="level-pill" style="color: ${data.color}">⏱️ ${data.hours} hrs</span>
      </div>
    </div>

    <div class="level-curriculum-grid">
      ${curriculumHtml}
    </div>

    <div class="level-action-footer">
      <div class="sample-sentence">
        <strong>Example:</strong> ${data.sampleSentence}
      </div>
      <button class="btn-primary-glass" style="display:inline-flex; background:${data.color};" onclick="openDemoModalWithLevel('${data.name}')">
        Enrol in ${data.name}
      </button>
    </div>
  `;
}

function selectLevel(levelNum) {
  document.querySelectorAll(".level-tab").forEach(tab => {
    const tabNum = parseInt(tab.getAttribute("data-level"), 10);
    if (tabNum === levelNum) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
  renderLevel(levelNum);
}

// ==========================================================================
// 5. WORD OF THE DAY ROTATION
// ==========================================================================
const WOTD_LIST = [
  {
    hanzi: "朋友",
    pinyin: "péngyou",
    meaning: "Friend / Companion",
    sentence: "我们都是好朋友。(Wǒmen dōu shì hǎo péngyou.) — We are all good friends."
  },
  {
    hanzi: "合作",
    pinyin: "hézuò",
    meaning: "Cooperation / To collaborate",
    sentence: "期待与您的友好合作。(Qīdài yǔ nín de yǒuhǎo hézuò.) — Looking forward to friendly collaboration with you."
  },
  {
    hanzi: "机会",
    pinyin: "jīhuì",
    meaning: "Opportunity / Chance",
    sentence: "这是一个巨大的商业机会。(Zhè shì yí gè jùdà de shāngyè jīhuì.) — This is a huge business opportunity."
  },
  {
    hanzi: "发展",
    pinyin: "fāzhǎn",
    meaning: "Development / Growth",
    sentence: "印中两国具有广阔的发展前景。(Yìn-Zhōng liǎng guó jùyǒu guǎngkuò de fāzhǎn qiánjǐng.) — India and China share broad development prospects."
  }
];

let currentWotdIndex = 0;

function updateWotdDisplay() {
  const item = WOTD_LIST[currentWotdIndex];
  document.getElementById("wotdHanzi").textContent = item.hanzi;
  document.getElementById("wotdPinyin").textContent = item.pinyin;
  document.getElementById("wotdMeaning").textContent = item.meaning;
  document.getElementById("wotdSentence").textContent = item.sentence;
}

function cycleWotd() {
  currentWotdIndex = (currentWotdIndex + 1) % WOTD_LIST.length;
  updateWotdDisplay();
}

function playWotdAudio() {
  const item = WOTD_LIST[currentWotdIndex];
  speakMandarin(item.hanzi, item.pinyin);
}

// ==========================================================================
// 6. SPEECH SYNTHESIS & AUDIO
// ==========================================================================
function speakMandarin(hanzi, pinyin) {
  event?.currentTarget?.classList.add("playing");
  setTimeout(() => {
    document.querySelectorAll(".tone-card, .vault-word-card").forEach(c => c.classList.remove("playing"));
  }, 700);

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(hanzi);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.85;

    const voices = window.speechSynthesis.getVoices();
    const zhVoice = voices.find(v => v.lang.includes('zh') || v.lang.includes('cmn'));
    if (zhVoice) {
      utterance.voice = zhVoice;
    }
    window.speechSynthesis.speak(utterance);
  }
}

// ==========================================================================
// 7. FAQ ACCORDION & SCROLL
// ==========================================================================
function toggleFaq(btn) {
  const item = btn.parentElement;
  const wasActive = item.classList.contains("active");
  document.querySelectorAll(".faq-item").forEach(el => el.classList.remove("active"));
  if (!wasActive) {
    item.classList.add("active");
  }
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function setLanguage(lang) {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
  if (lang === 'hi') {
    document.querySelector(".brand-division").textContent = "भारत • चीन सेतु";
  } else if (lang === 'zh') {
    document.querySelector(".brand-division").textContent = "印中之桥";
  } else {
    document.querySelector(".brand-division").textContent = "INDIA • CHINA BRIDGE";
  }
}

// ==========================================================================
// 8. MODALS & FORMS ROUTED TO WHATSAPP (+91 99035 44047)
// ==========================================================================
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

function handleModalClick(event, modalId) {
  if (event.target.id === modalId) {
    closeModal(modalId);
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal("demoModal");
    closeModal("eligibilityModal");
    closeModal("quoteModal");
  }
});

function openDemoModal() {
  openModal("demoModal");
}

function openDemoModalForCohort(cohort) {
  openModal("demoModal");
  const select = document.getElementById("userCohort");
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value.includes(cohort)) {
        select.selectedIndex = i;
        break;
      }
    }
  }
}

function openDemoModalWithLevel(levelName) {
  openModal("demoModal");
}

function openEligibilityModal() {
  openModal("eligibilityModal");
}

function openQuoteModal(serviceType) {
  openModal("quoteModal");
  const select = document.getElementById("quoteServiceType");
  if (select && serviceType) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value.toLowerCase().includes(serviceType.toLowerCase())) {
        select.selectedIndex = i;
        break;
      }
    }
  }
}

function handleDemoSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const cohort = form.cohort.value;
  const time = form.time.value;

  const text = `Hi VASENTRA! 🌟%0A%0AI want to book a *Free 30-Min Demo Session*.%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Who is Learning:* ${encodeURIComponent(cohort)}%0A*Preferred Batch:* ${encodeURIComponent(time)}%0A%0APlease let me know the upcoming batch schedule!`;

  closeModal("demoModal");
  window.open(`https://wa.me/919903544047?text=${text}`, "_blank", "noopener,noreferrer");
}

function handleEligibilitySubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const degree = form.degree.value.trim();
  const targetProgram = form.targetProgram.value;

  const text = `Hi VASENTRA Study in China Team! 🎓%0A%0AI would like a *Free Eligibility Evaluation*.%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Current Education/Marks:* ${encodeURIComponent(degree)}%0A*Target Program:* ${encodeURIComponent(targetProgram)}%0A%0APlease evaluate my profile for CSC scholarships & university options!`;

  closeModal("eligibilityModal");
  window.open(`https://wa.me/919903544047?text=${text}`, "_blank", "noopener,noreferrer");
}

function handleQuoteSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const service = form.service.value;
  const details = form.details.value.trim();

  const text = `Hi VASENTRA Enterprise Team! 💼%0A%0AI want to request a *Quote*.%0A%0A*Name/Company:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Service:* ${encodeURIComponent(service)}%0A*Details:* ${encodeURIComponent(details)}%0A%0APlease share the pricing and availability!`;

  closeModal("quoteModal");
  window.open(`https://wa.me/919903544047?text=${text}`, "_blank", "noopener,noreferrer");
}

function handleNewsletter() {
  const emailInput = document.getElementById("newsletterEmail");
  const email = emailInput?.value.trim();
  if (email && email.includes("@")) {
    alert("Thank you! You are subscribed to VASENTRA's weekly Chinese word & cultural tip.");
    emailInput.value = "";
  } else {
    alert("Please enter a valid email address.");
  }
}

// ==========================================================================
// 9. INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderLevel(1);
  renderVaultCards();
  loadSentenceChallenge(0);
  updateWotdDisplay();

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }
});
