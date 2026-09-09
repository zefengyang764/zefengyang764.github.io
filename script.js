const translations = {
  zh: {
    documentTitle: "Zefeng Yang | 个人主页",
    description: "Zefeng Yang 的个人主页，展示个人简介、经历、作品与联系方式。",
    skip: "跳到主要内容",
    navAbout: "关于",
    navExperience: "经历",
    navProjects: "作品",
    navContact: "联系",
    heroEyebrow: "你好，我是",
    heroName: "杨<br><span>泽锋</span>",
    heroDescription: "这里是一段示例介绍：我对新事物保持好奇，正在探索、学习，并认真创造属于自己的作品。",
    viewWork: "查看作品",
    emailMe: "给我邮件",
    availability: "保持好奇，持续创造",
    aboutEyebrow: "关于我",
    aboutTitle: "把好奇心变成<br>真实的作品。",
    aboutBodyOne: "这是示例文案：你可以在这里介绍自己是谁、正在做什么，以及你最看重的事情。",
    aboutBodyTwo: "不需要写得像正式简历。几句真诚、具体的话，往往更容易让别人认识你。",
    skillOne: "持续学习",
    skillTwo: "创意思考",
    skillThree: "沟通协作",
    skillFour: "解决问题",
    experienceEyebrow: "我的经历",
    experienceTitle: "一路学习，一路成长。",
    experienceDateOne: "现在",
    experienceRoleOne: "探索中的创造者",
    experiencePlaceOne: "个人成长 · 示例内容",
    experienceBodyOne: "学习新的工具与方法，把想法一步步变成可以被看见和使用的成果。",
    experienceDateTwo: "从前",
    experienceRoleTwo: "你的上一段经历",
    experiencePlaceTwo: "学校或组织 · 示例内容",
    experienceBodyTwo: "这里可以写一段学习、工作、志愿活动，或任何对你有意义的经历。",
    projectsEyebrow: "精选作品",
    projectsTitle: "一些正在发生的想法。",
    projectLabelOne: "制作AI术语HTML · 01",
    projectTitleOne: "AI 基础名词速查",
    projectBodyOne: "基础 AI 名词页面，适合从语言、上下文、工具、Agent 等概念开始了解。",
    projectLabelTwo: "制作AI术语HTML · 02",
    projectTitleTwo: "AI 领域名词速查",
    projectBodyTwo: "扩展 AI 领域常见词，包含插件、多模态、开源、工作流和 AI Native 等概念。",
    projectLabelThree: "制作AI术语HTML · 03",
    projectTitleThree: "AI 模型训练名词速查",
    projectBodyThree: "围绕模型训练相关词汇，整理 Token、数据集、微调、蒸馏、评测等内容。",
    projectLabelFour: "制作AI术语HTML · 04",
    projectTitleFour: "AI 系统能力名词速查",
    projectBodyFour: "整理模型、API Key、Function Calling、Memory、向量数据库、Guardrails 等系统能力名词。",
    openProject: "打开作品",
    comingSoon: "内容即将更新",
    contactEyebrow: "保持联系",
    contactTitle: "有想法？<br>来聊聊吧。",
    contactBody: "欢迎通过邮件联系我，也可以在 GitHub 上看看我最近的动态。",
    backToTop: "返回顶部 ↑",
    themeLight: "切换浅色模式",
    themeDark: "切换深色模式",
    portraitAlt: "Zefeng Yang 的 GitHub 头像"
  },
  en: {
    documentTitle: "Zefeng Yang | Personal Website",
    description: "The personal website of Zefeng Yang, featuring an introduction, experience, work, and contact details.",
    skip: "Skip to main content",
    navAbout: "About",
    navExperience: "Experience",
    navProjects: "Work",
    navContact: "Contact",
    heroEyebrow: "Hello, I am",
    heroName: "Zefeng<br><span>Yang.</span>",
    heroDescription: "Sample introduction: I stay curious about new things, keep exploring and learning, and turn ideas into work of my own.",
    viewWork: "View my work",
    emailMe: "Email me",
    availability: "Stay curious. Keep creating.",
    aboutEyebrow: "About me",
    aboutTitle: "Turning curiosity into<br>something real.",
    aboutBodyOne: "Sample copy: use this space to share who you are, what you are doing, and what matters most to you.",
    aboutBodyTwo: "It does not need to read like a formal resume. A few honest, specific sentences often say much more.",
    skillOne: "Continuous learning",
    skillTwo: "Creative thinking",
    skillThree: "Collaboration",
    skillFour: "Problem solving",
    experienceEyebrow: "Experience",
    experienceTitle: "Learning and growing along the way.",
    experienceDateOne: "Now",
    experienceRoleOne: "Creator in exploration",
    experiencePlaceOne: "Personal growth · Sample",
    experienceBodyOne: "Learning new tools and methods, then turning ideas into outcomes people can see and use.",
    experienceDateTwo: "Before",
    experienceRoleTwo: "Your previous experience",
    experiencePlaceTwo: "School or organization · Sample",
    experienceBodyTwo: "Add a meaningful chapter from your studies, work, volunteering, or personal journey here.",
    projectsEyebrow: "Selected work",
    projectsTitle: "A few ideas taking shape.",
    projectLabelOne: "AI Terminology HTML · 01",
    projectTitleOne: "AI Basics Glossary",
    projectBodyOne: "A starter AI glossary covering language, context, tools, Agent, and related concepts.",
    projectLabelTwo: "AI Terminology HTML · 02",
    projectTitleTwo: "AI Field Glossary",
    projectBodyTwo: "An expanded glossary for AI terms such as plugins, multimodal, open source, workflows, and AI Native.",
    projectLabelThree: "AI Terminology HTML · 03",
    projectTitleThree: "AI Model Training Glossary",
    projectBodyThree: "A model-training glossary covering tokens, datasets, fine-tuning, distillation, evaluation, and more.",
    projectLabelFour: "AI Terminology HTML · 04",
    projectTitleFour: "AI Systems Capability Glossary",
    projectBodyFour: "A glossary of system capability terms including model, API key, Function Calling, Memory, vector database, and Guardrails.",
    openProject: "Open project",
    comingSoon: "Content coming soon",
    contactEyebrow: "Get in touch",
    contactTitle: "Have an idea?<br>Let's talk.",
    contactBody: "Feel free to reach out by email or visit GitHub to see what I have been up to.",
    backToTop: "Back to top ↑",
    themeLight: "Switch to light mode",
    themeDark: "Switch to dark mode",
    portraitAlt: "GitHub profile picture of Zefeng Yang"
  }
};

const root = document.documentElement;
const languageButton = document.querySelector("#language-toggle");
const themeButton = document.querySelector("#theme-toggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');
const descriptionMeta = document.querySelector('meta[name="description"]');
const portrait = document.querySelector(".portrait");

function applyLanguage(language) {
  const copy = translations[language];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value) {
      element.innerHTML = value;
    }
  });

  root.lang = language === "zh" ? "zh-CN" : "en";
  document.title = copy.documentTitle;
  descriptionMeta.content = copy.description;
  portrait.alt = copy.portraitAlt;
  languageButton.textContent = language === "zh" ? "EN" : "中文";
  languageButton.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换为中文");
  localStorage.setItem("language", language);
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  const isDark = theme === "dark";
  const language = root.lang.startsWith("zh") ? "zh" : "en";
  themeButton.setAttribute("aria-label", translations[language][isDark ? "themeLight" : "themeDark"]);
  themeMeta.content = isDark ? "#171715" : "#f4f1eb";
  localStorage.setItem("theme", theme);
}

languageButton.addEventListener("click", () => {
  const nextLanguage = root.lang.startsWith("zh") ? "en" : "zh";
  applyLanguage(nextLanguage);
  applyTheme(root.dataset.theme);
});

themeButton.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

const storedLanguage = localStorage.getItem("language");
const browserLanguage = navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
applyLanguage(storedLanguage || browserLanguage);

const storedTheme = localStorage.getItem("theme");
const preferredTheme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
applyTheme(storedTheme || preferredTheme);

document.querySelector("#year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 16);
}, { passive: true });
