/**
 * VASENTRA LANGUAGES — INTERACTIVE ENGINE
 * Features: Native Mandarin Speech & Audio Tone Synthesis, Interactive HSK Matrix,
 * Dynamic Personas, WhatsApp Lead Routing, and Glass UI State.
 */

// 1. Complete HSK 1 to HSK 6 Curriculum Data (Directly from VasEntra Official Course Flyer)
const HSK_LEVELS = [
  {
    level: 1,
    name: "HSK 1",
    subtitle: "Beginner",
    summary: "Sound out Mandarin and handle simple everyday exchanges.",
    words: 150,
    hours: 40,
    color: "#E11D48",
    bgClass: "bg-rose",
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
    bgClass: "bg-amber",
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
    bgClass: "bg-emerald",
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
    bgClass: "bg-blue",
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
    bgClass: "bg-purple",
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
    bgClass: "bg-crimson",
    curriculum: [
      "Authentic TV, radio, and news broadcasts",
      "Abstract and specialised topics",
      "Summarising long texts and recordings",
      "Negotiation, interviews, and presentations",
      "Full HSK 6 mock tests and evaluation"
    ],
    sampleSentence: "在国际跨国合作与商业谈判中，深刻理解彼此的文化底蕴与商业礼仪是达成双赢的关键。(Zài guójì kuàguó hézuò yǔ shāngyè tánpàn zhōng, shēnkè lǐjiě bǐcǐ de wénhuà dǐyùn yǔ shāngyè lǐyí shì dáchéng shuāngyíng de guānjiàn.) — In cross-border cooperation and trade negotiations, deeply understanding cultural nuances and business etiquette is key to win-win success."
  }
];

// Current active level
let currentActiveLevel = 1;

// 2. Render HSK Level Detail Card
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

// Level switcher tab handler
function selectLevel(levelNum) {
  currentActiveLevel = levelNum;
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

// 3. Audio & Pronunciation Soundboard (SpeechSynthesis with fallback Web Audio chime)
function speakMandarin(hanzi, pinyin) {
  // Visual feedback
  event?.currentTarget?.classList.add("playing");
  setTimeout(() => {
    document.querySelectorAll(".tone-card").forEach(c => c.classList.remove("playing"));
  }, 700);

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(hanzi);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.85; // slightly slower for clean learner comprehension

    // Attempt to pick a natural Chinese voice if loaded
    const voices = window.speechSynthesis.getVoices();
    const zhVoice = voices.find(v => v.lang.includes('zh') || v.lang.includes('cmn'));
    if (zhVoice) {
      utterance.voice = zhVoice;
    }
    window.speechSynthesis.speak(utterance);
  } else {
    // Web Audio Tone Synthesis Fallback
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    } catch (e) {
      console.warn("Audio unavailable", e);
    }
  }
}

// 4. Modal Handlers
function openDemoModal() {
  const modal = document.getElementById("demoModal");
  if (modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
}

function openDemoModalWithLevel(levelName) {
  openDemoModal();
  const select = document.getElementById("userLevel");
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value.includes(levelName)) {
        select.selectedIndex = i;
        break;
      }
    }
  }
}

function closeDemoModal() {
  const modal = document.getElementById("demoModal");
  if (modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

function handleModalClick(event) {
  if (event.target.id === "demoModal") {
    closeDemoModal();
  }
}

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDemoModal();
  }
});

// 5. Form Submission -> WhatsApp Lead Routing
function handleDemoSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const level = form.level.value;
  const goal = form.goal.value;

  const message = `Hi VasEntra Languages! 🌟%0A%0AI want to book a Free 30-Min Demo Session.%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Target Level:* ${encodeURIComponent(level)}%0A*Primary Goal:* ${encodeURIComponent(goal)}%0A%0APlease let me know the upcoming batch schedule!`;

  const waUrl = `https://wa.me/919903544047?text=${message}`;

  closeDemoModal();
  // Open WhatsApp in new tab
  window.open(waUrl, "_blank", "noopener,noreferrer");
}

// 6. Initialization
document.addEventListener("DOMContentLoaded", () => {
  // Render initial HSK 1 level
  renderLevel(1);

  // Set current year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Pre-load speech synthesis voices (Chrome/Safari async voice loading)
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }
});
