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
    projectLabelOne: "个人项目 · 示例",
    projectTitleOne: "我的第一个作品",
    projectBodyOne: "在这里介绍作品解决了什么问题、你做了什么，以及最终取得了怎样的结果。",
    projectLabelTwo: "学习记录 · 示例",
    projectTitleTwo: "一次有趣的探索",
    projectBodyTwo: "作品不一定宏大，一次学习、一篇文章或一个小实验，都值得被认真记录。",
    projectLabelThree: "未来计划 · 示例",
    projectTitleThree: "下一件想做的事",
    projectBodyThree: "写下你接下来想尝试的方向，也许它会成为一个很好的开始。",
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
    projectLabelOne: "Personal project · Sample",
    projectTitleOne: "My first project",
    projectBodyOne: "Describe the problem, what you contributed, and the result you achieved.",
    projectLabelTwo: "Learning note · Sample",
    projectTitleTwo: "A curious exploration",
    projectBodyTwo: "A project does not have to be huge. A lesson, an article, or a small experiment is worth sharing.",
    projectLabelThree: "Future plan · Sample",
    projectTitleThree: "What I want to try next",
    projectBodyThree: "Share the direction you want to explore next. Writing it down can be a meaningful start.",
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
