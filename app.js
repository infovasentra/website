/**
 * VASENTRA — CORE INTERACTIVE JAVASCRIPT ENGINE
 * Handles:
 * - Native Mandarin Speech Synthesis & Tone Lab
 * - Word of the Day rotation & Audio
 * - HSK 1 to HSK 6 Interactive Curriculum
 * - Multilingual Switcher (EN, HI, ZH)
 * - FAQ Accordion
 * - Multi-Modal Conversion Management (Demo, Eligibility, Quote)
 * - WhatsApp Lead Deep Links to +91 99035 44047
 */

// 1. Complete HSK 1 to HSK 6 Curriculum Database
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

// 2. Word of the Day Dictionary
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
    hanzi: "学习",
    pinyin: "xuéxí",
    meaning: "To study / To learn",
    sentence: "学习中文能为你打开世界之门。(Xuéxí Zhōngwén néng wèi nǐ dǎkāi shìjiè zhī mén.) — Learning Chinese opens doors to the world."
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

// 3. Speech Synthesis & Tone Lab
function speakMandarin(hanzi, pinyin) {
  event?.currentTarget?.classList.add("playing");
  setTimeout(() => {
    document.querySelectorAll(".tone-card").forEach(c => c.classList.remove("playing"));
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
  } else {
    // Fallback tone chime
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

// 4. HSK Level Renderer
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

// 5. FAQ Accordion Toggle
function toggleFaq(btn) {
  const item = btn.parentElement;
  const wasActive = item.classList.contains("active");
  document.querySelectorAll(".faq-item").forEach(el => el.classList.remove("active"));
  if (!wasActive) {
    item.classList.add("active");
  }
}

// 6. Navigation Smooth Scroll Helper
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// 7. Language Switcher (EN, HI, ZH)
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

// 8. Modal Management (Demo, Eligibility, Quote)
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

// 9. Form Submission Handlers (WhatsApp Routing to +91 99035 44047)
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

// 10. Initialization
document.addEventListener("DOMContentLoaded", () => {
  renderLevel(1);
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
