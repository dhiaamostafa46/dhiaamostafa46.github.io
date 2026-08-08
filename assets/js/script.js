// Streamlined Core Competencies Stack Data Array
const stackData = [
  {
    category: "Backend & Systems Architecture",
    category_ar: "هندسة الواجهات الخلفية والأنظمة",
    items: [
      { name: "C# & .NET Core (.NET 6/7/8)", name_ar: "C# & .NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "Node.js & NestJS", name_ar: "Node.js & NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" },
      { name: "PHP & Laravel (MVC)", name_ar: "PHP & Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
      { name: "RESTful APIs & WebSockets", name_ar: "REST APIs & WebSockets", icon: "https://img.icons8.com/color/48/api.png" },
      { name: "Microservices & CQRS", name_ar: "Microservices & CQRS", icon: "https://img.icons8.com/color/48/module.png" },
      { name: "Clean Architecture & Patterns", name_ar: "Clean Architecture", icon: "https://img.icons8.com/color/48/architecture.png" }
    ]
  },
  {
    category: "Databases & Data Engineering",
    category_ar: "قواعد البيانات وهندسة الأداء",
    items: [
      { name: "SQL Server (T-SQL & Procs)", name_ar: "SQL Server & T-SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
      { name: "PostgreSQL & MySQL", name_ar: "PostgreSQL & MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Redis (Caching & Queues)", name_ar: "Redis Caching & Queues", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "MongoDB (NoSQL)", name_ar: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Indexing & Query Optimization", name_ar: "تحسين أداء قواعد البيانات", icon: "https://img.icons8.com/color/48/database.png" },
      { name: "Multi-Tenant Data Isolation", name_ar: "عزل بيانات تعدد المستأجرين", icon: "https://img.icons8.com/color/48/schema.png" }
    ]
  },
  {
    category: "Mobile Development & Flutter",
    category_ar: "تطوير تطبيقات الجوال و Flutter",
    items: [
      { name: "Flutter & Dart (Cross-Platform)", name_ar: "تطوير Flutter & Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "iOS & Android Apps Delivery", name_ar: "تطبيقات iOS و Android", icon: "https://img.icons8.com/color/48/android-os.png" },
      { name: "State Management (Bloc / Provider)", name_ar: "إدارة الحالة Bloc & Provider", icon: "https://img.icons8.com/color/48/workflow.png" },
      { name: "REST APIs & WebSockets Integration", name_ar: "ربط التطبيقات بالـ APIs والـ WebSockets", icon: "https://img.icons8.com/color/48/api.png" },
      { name: "Offline Storage (SQLite / Hive)", name_ar: "قواعد البيانات المحلية SQLite & Hive", icon: "https://img.icons8.com/color/48/data-configuration.png" },
      { name: "Push Notifications & Firebase (FCM)", name_ar: "الإشعارات الفورية Firebase FCM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
    ]
  },
  {
    category: "Enterprise Integrations & ZATCA",
    category_ar: "تكامل أنظمة الشركات والفوترة",
    items: [
      { name: "Evix ERP & SAP Sync", name_ar: "ربط Evix ERP & SAP", icon: "https://img.icons8.com/color/48/system-task.png" },
      { name: "ZATCA Phase-2 E-Invoicing", name_ar: "الفوترة الإلكترونية زاتكا", icon: "https://img.icons8.com/color/48/bill.png" },
      { name: "Multi-Tenant SaaS Platforms", name_ar: "منصات SaaS متعددة المستأجرين", icon: "https://img.icons8.com/color/48/cloud-network.png" },
      { name: "Payment Gateways (Tabby, HyperPay)", name_ar: "بوابات الدفع تابي وهايبر باي", icon: "https://img.icons8.com/color/48/card-in-use.png" },
      { name: "E-Correspondence & Archiving", name_ar: "أنظمة المراسلات والأرشفة", icon: "https://img.icons8.com/color/48/documents.png" },
      { name: "Identity & RBAC (SSO, OAuth2)", name_ar: "أمان الصلاحيات والمصادقة", icon: "https://img.icons8.com/color/48/security-checked.png" }
    ]
  },
  {
    category: "Cloud, DevOps & AI Automation",
    category_ar: "السحابة، الـ DevOps والذكاء الاصطناعي",
    items: [
      { name: "Azure DevOps (CI/CD)", name_ar: "Azure DevOps & CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "AWS Cloud Services", name_ar: "خدمات AWS السحابية", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Docker Containerization", name_ar: "حاويات Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Azure OpenAI & LLM Workflows", name_ar: "أتمتة الذكاء الاصطناعي LLMs", icon: "https://img.icons8.com/color/48/brain.png" },
      { name: "OCR & RAG Search", name_ar: "استخراج المستندات OCR & RAG", icon: "https://img.icons8.com/color/48/search-database.png" },
      { name: "Nginx, Linux & Git", name_ar: "Linux, Nginx & Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" }
    ]
  },
  {
    category: "Team Leadership & Delivery",
    category_ar: "القيادة التقنية وإدارة التسليم",
    items: [
      { name: "Team Leadership & Mentorship", name_ar: "قيادة وتوجيه الفرق البرمجية", icon: "https://img.icons8.com/color/48/manager.png" },
      { name: "Agile / Scrum Management", name_ar: "إدارة منهجيات Agile & Scrum", icon: "https://img.icons8.com/color/48/scrum.png" },
      { name: "Architecture & Code Reviews", name_ar: "مراجعة الأكواد والتصميم المعماري", icon: "https://img.icons8.com/color/48/code-file.png" },
      { name: "Sprint Planning & Estimation", name_ar: "تخطيط الدورات وتقدير الجهود", icon: "https://img.icons8.com/color/48/calendar.png" },
      { name: "SDLC & Requirements Analysis", name_ar: "تحليل متطلبات الأعمال SDLC", icon: "https://img.icons8.com/color/48/process.png" }
    ]
  }
];

// Comprehensive Projects Data Array for Instant Rendering
let projectsData = [];

$(document).ready(function () {

  // Theme Toggle Initialization
  initThemeToggle();

  // Mobile Menu Toggle
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if (window.scrollY > 60) {
      $('#scroll-top').addClass('active');
    } else {
      $('#scroll-top').removeClass('active');
    }

    // Scroll spy
    $('section').each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr('id');

      if (top > offset && top < offset + height) {
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }
    });
  });

  // Smooth Scrolling for Anchors
  $('a[href*="#"]').on('click', function (e) {
    if ($(this).attr('href') === '#') return;
    e.preventDefault();
    let target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 80,
      }, 500, 'linear');
    }
  });

  // Vanilla Tilt Initialization
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll(".service-card, .skill-category, .contact-info-card, .work .box"), {
      max: 8,
      speed: 400,
      glare: true,
      "max-glare": 0.15
    });
  }

  // Initializations
  initTypedText();
  initCodeCard();
  initSkillsSection();
  initProjectsSection();
  initIntakeForm();

  // Listen to Language Changes
  document.addEventListener('languageChanged', function (e) {
    const lang = e.detail.lang;
    renderSkills(lang);
    renderProjects(lang);
    updateCodeCardContent(currentCodeTab, lang);
  });
});

// Dynamic Page Title when tab changes
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === "visible") {
    document.title = "Dhiaa Mostafa | Systems Architect & Full-Stack Engineer";
  } else {
    document.title = "Dhiaa Mostafa | Systems Architect Profile";
  }
});

/* ===== THEME SWITCHER ===== */
const themes = ['dark', 'light', 'cyber'];
let currentThemeIndex = 0;

function applyTheme(themeName) {
  document.documentElement.setAttribute('data-theme', themeName);
  localStorage.setItem('theme', themeName);
  
  const icon = themeName === 'light' ? 'fa-sun' : (themeName === 'cyber' ? 'fa-bolt' : 'fa-moon');
  const label = themeName === 'light' ? 'Light' : (themeName === 'cyber' ? 'Cyber' : 'Dark');
  
  $('#theme-toggle').html(`<i class="fas ${icon}"></i> <span>${label}</span>`);
}

function initThemeToggle() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  currentThemeIndex = themes.indexOf(savedTheme) !== -1 ? themes.indexOf(savedTheme) : 0;
  applyTheme(themes[currentThemeIndex]);

  $('#theme-toggle').on('click', function () {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    applyTheme(themes[currentThemeIndex]);
  });
}

// Typed.js Animation Setup
let typedInstance = null;
function initTypedText() {
  if (typeof Typed !== 'undefined' && $('.typing-text').length) {
    typedInstance = new Typed(".typing-text", {
      strings: [
        " Laravel, Node.js &amp; NestJS Backends",
        " Evix ERP &amp; Enterprise Integrations",
        " SaaS Multi-Tenant Architectures",
        " Azure OpenAI &amp; LLM Automation",
        " WebSockets &amp; Real-Time Dispatchers",
        " Redis Queues &amp; Database Tuning"
      ],
      loop: true,
      typeSpeed: 40,
      backSpeed: 25,
      backDelay: 1500,
    });
  }
}

/* ===== HERO CODE CARD WIDGET ===== */
let currentCodeTab = 'profile';
const codeSnippets = {
  profile: {
    en: `<p><span class="c-key">export interface</span> <span class="c-str">SystemArchitect</span> <span class="c-punc">{</span></p>
<p>&nbsp;&nbsp;<span class="c-key">name</span><span class="c-punc">:</span> <span class="c-str">"Dhiaa Mostafa"</span><span class="c-punc">;</span></p>
<p>&nbsp;&nbsp;<span class="c-key">title</span><span class="c-punc">:</span> <span class="c-str">"Senior Systems & Full-Stack Architect"</span><span class="c-punc">;</span></p>
<p>&nbsp;&nbsp;<span class="c-key">experience</span><span class="c-punc">:</span> <span class="c-str">"6+ Years"</span><span class="c-punc">;</span></p>
<p>&nbsp;&nbsp;<span class="c-key">core_stack</span><span class="c-punc">:</span> [<span class="c-str">"Laravel"</span>, <span class="c-str">"Node.js"</span>, <span class="c-str">"NestJS"</span>, <span class="c-str">"React"</span>]<span class="c-punc">;</span></p>
<p>&nbsp;&nbsp;<span class="c-key">specialization</span><span class="c-punc">:</span> <span class="c-str">"SaaS Multi-Tenant & Evix ERP Integrations"</span><span class="c-punc">;</span></p>
<p>&nbsp;&nbsp;<span class="c-key">solutions_value</span><span class="c-punc">:</span> <span class="c-str">"SAR 4M+"</span><span class="c-punc">;</span></p>
<p>&nbsp;&nbsp;<span class="c-key">active_agents</span><span class="c-punc">:</span> <span class="c-num">7000</span><span class="c-punc">;</span> <span class="c-comm">// Active Logistics Agents</span></p>
<p>&nbsp;&nbsp;<span class="c-key">status</span><span class="c-punc">:</span> <span class="c-str">"OPERATIONAL"</span><span class="c-punc">;</span></p>
<p><span class="c-punc">}</span></p>`,
    ar: `<p><span class="c-key">export interface</span> <span class="c-str">مهندس_الأنظمة</span> <span class="c-punc">{</span></p>
<p>&nbsp;&nbsp;<span class="c-key">الاسم</span><span class="c-punc">:</span> <span class="c-str">"ضياء مصطفى"</span><span class="c-punc">;</span></p>
<p>&nbsp;&nbsp;<span class="c-key">المسمى</span><span class="c-punc">:</span> <span class="c-str">"كبير مهندسي البرمجيات والأنظمة"</span><span class="c-punc">;</span></p>
<p>&nbsp;&nbsp;<span class="c-key">الخبرة</span><span class="c-punc">:</span> <span class="c-str">"+6 سنوات"</span><span class="c-punc">;</span></p>
<p>&nbsp;&nbsp;<span class="c-key">التقنيات</span><span class="c-punc">:</span> [<span class="c-str">"Laravel"</span>, <span class="c-str">"Node.js"</span>, <span class="c-str">"NestJS"</span>, <span class="c-str">"React"</span>]<span class="c-punc">;</span></p>
<p>&nbsp;&nbsp;<span class="c-key">التخصص</span><span class="c-punc">:</span> <span class="c-str">"الأنظمة السحابية وربط Evix ERP"</span><span class="c-punc">;</span></p>
<p>&nbsp;&nbsp;<span class="c-key">قيمة_الحلول</span><span class="c-punc">:</span> <span class="c-str">"أكثر من 4M ريال"</span><span class="c-punc">;</span></p>
<p>&nbsp;&nbsp;<span class="c-key">السفراء_النشطين</span><span class="c-punc">:</span> <span class="c-num">7000</span><span class="c-punc">;</span> <span class="c-comm">// سفير وسائق توصيل</span></p>
<p>&nbsp;&nbsp;<span class="c-key">الحالة</span><span class="c-punc">:</span> <span class="c-str">"جاهز للتشغيل"</span><span class="c-punc">;</span></p>
<p><span class="c-punc">}</span></p>`
  }
};

function updateCodeCardContent(tab, lang = 'en') {
  currentCodeTab = tab;
  // Always force 'en' for the code card to maintain standard IDE format
  const content = codeSnippets[tab] ? codeSnippets[tab]['en'] : '';
  
  const container = $('#code-card-content');
  if (!container || !container.length) return;

  container.removeClass('anim-fade-up');
  
  // Trigger reflow for animation restart safely
  if (container[0]) {
    void container[0].offsetWidth;
  }
  
  container.html(content);
  container.addClass('anim-fade-up');
}

function initCodeCard() {
  const lang = localStorage.getItem('lang') || 'en';
  updateCodeCardContent('profile', lang);

  $('.code-tab').on('click', function () {
    $('.code-tab').removeClass('active');
    $(this).addClass('active');
    const tab = $(this).data('tab');
    const currentLang = localStorage.getItem('lang') || 'en';
    updateCodeCardContent(tab, currentLang);
  });

  $('#copyCodeBtn').on('click', function() {
    // extract pure text from the html snippet for copying
    const textToCopy = $('#code-card-content').text().trim();
    navigator.clipboard.writeText(textToCopy).then(() => {
      const btn = $(this);
      const icon = btn.find('i');
      icon.removeClass('fa-copy').addClass('fa-check');
      btn.addClass('copied');
      
      setTimeout(() => {
        icon.removeClass('fa-check').addClass('fa-copy');
        btn.removeClass('copied');
      }, 2000);
    });
  });
}

/* ===== SKILLS MATRIX COMPONENT ===== */
let currentSkillCategory = 'all';
let currentSkillSearch = '';

const catIcons = {
  "Backend & Systems Architecture": "fa-server",
  "Databases & Data Engineering": "fa-database",
  "Mobile Development & Flutter": "fa-mobile-alt",
  "Enterprise Integrations & ZATCA": "fa-network-wired",
  "Cloud, DevOps & AI Automation": "fa-cloud",
  "Team Leadership & Delivery": "fa-user-tie"
};

function renderSkills(lang = 'en') {
  const container = $('#skillsContainer');
  if (!container || !container.length) return;
  container.empty();

  let html = '<div class="skills-grid-container">';
  let count = 0;

  stackData.forEach(group => {
    const catName = (lang === 'ar' && group.category_ar) ? group.category_ar : group.category;
    const catIcon = catIcons[group.category] || "fa-code";
    
    // Filter items by search query if typed
    let items = group.items.filter(item => {
      if (!currentSkillSearch) return true;
      const q = currentSkillSearch.toLowerCase();
      const name = item.name.toLowerCase();
      const nameAr = (item.name_ar || '').toLowerCase();
      return name.includes(q) || nameAr.includes(q);
    });

    if (items.length > 0) {
      count++;
      html += `
        <div class="skill-category">
          <div class="skill-category-header">
            <div class="cat-title-wrap">
              <i class="fas ${catIcon} cat-icon"></i>
              <h3 class="skill-category-title">${catName}</h3>
            </div>
            <span class="skill-count-badge">${items.length} ${lang === 'ar' ? 'تقنيات' : 'Techs'}</span>
          </div>
          <div class="skill-chips">
      `;
      items.forEach(item => {
        const itemName = (lang === 'ar' && item.name_ar) ? item.name_ar : item.name;
        html += `
          <div class="skill-chip">
            <div class="chip-icon-box">
              <img src="${item.icon}" alt="${itemName}" onerror="this.src='https://img.icons8.com/color/48/code.png'">
            </div>
            <span>${itemName}</span>
          </div>
        `;
      });
      html += `
          </div>
        </div>
      `;
    }
  });

  html += '</div>';

  if (count === 0) {
    const noResultsText = lang === 'ar' ? 'لم يتم العثور على تقنيات مطابقة' : 'No matching technologies found.';
    container.html(`<p style="text-align: center; color: var(--text-muted); font-size: 1.2rem; padding: 4rem;">${noResultsText}</p>`);
  } else {
    container.html(html);
  }
}

function initSkillsSection() {
  const lang = localStorage.getItem('lang') || 'en';
  renderSkills(lang);

  $('#skills-search-input').on('keyup input', function () {
    currentSkillSearch = $(this).val();
    const currentLang = localStorage.getItem('lang') || 'en';
    renderSkills(currentLang);
  });
}

/* ===== PROJECTS CATALOG COMPONENT ===== */
let currentProjectFilter = 'all';
let currentProjectSearch = '';
let projectsShowAll = false;
const PROJECTS_PAGE_SIZE = 9;

function renderProjects(lang = 'en') {
  const container = $('#projectsContainer');
  container.empty();

  let filtered = projectsData.filter(proj => {
    if (currentProjectFilter !== 'all' && proj.category !== currentProjectFilter) {
      return false;
    }
    if (currentProjectSearch) {
      const q = currentProjectSearch.toLowerCase();
      const name = proj.name.toLowerCase();
      const nameAr = (proj.name_ar || '').toLowerCase();
      const desc = proj.desc.toLowerCase();
      const descAr = (proj.desc_ar || '').toLowerCase();
      return name.includes(q) || nameAr.includes(q) || desc.includes(q) || descAr.includes(q);
    }
    return true;
  });

  // Sort projects: Projects with valid links first, projects without links second
  filtered.sort((a, b) => {
    const hasLinkA = !!(a.link || (a.links && a.links.view && a.links.view !== '#') || a.demo_url || a.github_url);
    const hasLinkB = !!(b.link || (b.links && b.links.view && b.links.view !== '#') || b.demo_url || b.github_url);
    if (hasLinkA && !hasLinkB) return -1;
    if (!hasLinkA && hasLinkB) return 1;
    return 0;
  });

  if (filtered.length === 0) {
    const emptyText = lang === 'ar' ? 'لم يتم العثور على مشاريع مطابقة' : 'No matching projects found.';
    container.append(`<div class="no-projects-msg text-center" style="grid-column: 1/-1; padding: 3rem 1rem;"><p style="color: var(--text-muted); font-size: 1.1rem;">${emptyText}</p></div>`);
    return;
  }

  const hasMore = !projectsShowAll && filtered.length > PROJECTS_PAGE_SIZE;
  const toShow = projectsShowAll ? filtered : filtered.slice(0, PROJECTS_PAGE_SIZE);

  toShow.forEach((proj, idx) => {
    const title = lang === 'ar' ? (proj.name_ar || proj.name) : proj.name;
    const desc = lang === 'ar' ? (proj.desc_ar || proj.desc) : proj.desc;
    const viewLink = proj.link || (proj.links && proj.links.view !== '#' ? proj.links.view : '') || proj.demo_url || proj.github_url || '';
    const num = (idx + 1).toString().padStart(2, '0');

    const cardHtml = `
      <div class="box mac-card" data-index="${idx}">
        <div class="mac-header">
          <div class="mac-dots">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <span class="mac-badge">${proj.category}</span>
          <span class="mac-num">#${num}</span>
        </div>

        <div class="mac-screen">
          <img src="${proj.image}" alt="${title}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80';" />
          <div class="mac-screen-overlay">
            ${viewLink
              ? `<a href="${viewLink}" target="_blank" rel="noopener noreferrer" class="mac-overlay-btn" onclick="event.stopPropagation()">
                  <span>${lang === 'ar' ? 'زيارة الموقع' : 'Visit Platform'}</span>
                  <i class="fas fa-external-link-alt"></i>
                 </a>`
              : `<span class="mac-overlay-btn">
                  <span>${lang === 'ar' ? 'عرض التفاصيل' : 'View Details'}</span>
                  <i class="fas fa-eye"></i>
                 </span>`}
          </div>
        </div>

        <div class="mac-body">
          <h3 class="mac-title">${title}</h3>
          <p class="mac-desc">${desc}</p>
          <div class="mac-footer">
            ${viewLink
              ? `<a href="${viewLink}" target="_blank" rel="noopener noreferrer" class="mac-action-link" onclick="event.stopPropagation()">
                  <span>${lang === 'ar' ? 'رابط المشروع' : 'Project Link'}</span>
                  <i class="fas fa-arrow-up-right-from-square"></i>
                 </a>`
              : `<span class="mac-action-link secondary">
                  <span>${lang === 'ar' ? 'تفاصيل المشروع' : 'Project Details'}</span>
                  <i class="fas fa-arrow-right"></i>
                 </span>`}
          </div>
        </div>
      </div>`;
    container.append(cardHtml);
  });

  // Show "View More" button if there are more projects
  if (hasMore) {
    const remaining = filtered.length - PROJECTS_PAGE_SIZE;
    const viewMoreText = lang === 'ar'
      ? `<i class="fas fa-th"></i> عرض الباقي (${remaining} مشروع)`
      : `<i class="fas fa-th"></i> View More (${remaining} projects)`;
    const viewMoreBtn = $(`
      <div class="projects-view-more" style="grid-column: 1/-1; text-align: center; margin-top: 1rem;">
        <button class="btn-view-more" id="btnViewMoreProjects">${viewMoreText}</button>
      </div>
    `);
    container.append(viewMoreBtn);
    $('#btnViewMoreProjects').on('click', function () {
      projectsShowAll = true;
      renderProjects(localStorage.getItem('lang') || 'en');
    });
  }

  // Attach click listener for modal
  $('.work .box').on('click', function () {
    const index = $(this).data('index');
    openProjectModal(toShow[index], lang);
  });
}

function openProjectModal(proj, lang = 'en') {
  if (!proj) return;
  const title = (lang === 'ar' && proj.name_ar) ? proj.name_ar : proj.name;
  const desc = (lang === 'ar' && proj.desc_ar) ? proj.desc_ar : proj.desc;
  const features = (lang === 'ar' && proj.features_ar) ? proj.features_ar : (proj.features || []);

  $('#modalCategory').text(proj.category);
  $('#modalTitle').text(title);
  $('#modalImage').attr('src', proj.image);
  $('#modalDescription').text(desc);

  // Features List
  const featuresContainer = $('#modalFeaturesList');
  featuresContainer.empty();
  if (features.length > 0) {
    features.forEach(ft => {
      featuresContainer.append(`
        <li>
          <i class="fas fa-check-circle"></i>
          <span>${ft}</span>
        </li>
      `);
    });
  } else {
    const defaultFt = lang === 'ar' 
      ? "تطوير معمارية عالية الأداء والتوافق مع أعلى معايير أمان البيانات وصلاحيات النظام." 
      : "Engineered production-grade architecture compliant with high performance and security standards.";
    featuresContainer.append(`
      <li>
        <i class="fas fa-check-circle"></i>
        <span>${defaultFt}</span>
      </li>
    `);
  }

  // Metrics
  const metricsContainer = $('#modalMetrics');
  metricsContainer.empty();
  const metricsList = proj.metrics || [
    { val: "Enterprise", lbl: "Architecture" },
    { val: "99.9%", lbl: "Reliability" }
  ];
  metricsList.forEach(m => {
    metricsContainer.append(`
      <div class="modal-metric">
        <span class="metric-val">${m.val}</span>
        <span class="metric-lbl">${m.lbl}</span>
      </div>
    `);
  });

  // Stack badges
  const tagsContainer = $('#modalTags');
  tagsContainer.empty();
  const sampleStack = [proj.category, 'RESTful APIs', 'Database Optimization', 'Production Architecture'];
  sampleStack.forEach(st => {
    tagsContainer.append(`<span class="service-tag">${st}</span>`);
  });

  // Visit Link button
  const visitBtn = $('#modalVisitBtn');
  const viewUrl = proj.link || (proj.links && proj.links.view !== '#' ? proj.links.view : '') || proj.demo_url || proj.github_url || '';
  if (viewUrl && viewUrl !== '#') {
    visitBtn.attr('href', viewUrl).show();
  } else {
    visitBtn.hide();
  }

  $('#projectModal').addClass('active');
}

function initProjectsSection() {
  const lang = localStorage.getItem('lang') || 'en';
  
  if (window.externalProjectsData) {
    projectsData = window.externalProjectsData;
  } else {
    console.error('No external projects data found.');
  }

  renderProjects(lang);

  $('.filter-btn').on('click', function () {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');
    currentProjectFilter = $(this).data('filter');
    projectsShowAll = false; // reset on filter change
    const currentLang = localStorage.getItem('lang') || 'en';
    renderProjects(currentLang);
  });

  $('#project-search-input').on('keyup input', function () {
    currentProjectSearch = $(this).val();
    projectsShowAll = false; // reset on search change
    const currentLang = localStorage.getItem('lang') || 'en';
    renderProjects(currentLang);
  });

  $('#modalCloseBtn, #projectModal').on('click', function (e) {
    if (e.target === this || e.target.id === 'modalCloseBtn') {
      $('#projectModal').removeClass('active');
    }
  });
}

/* ===== INTERACTIVE SYSTEM INTAKE PORTAL ===== */
function initIntakeForm() {
  $('#intakeForm').on('submit', function (e) {
    e.preventDefault();
    const contact = $('#intake-contact').val().trim();
    const details = $('#intake-details').val().trim();

    if (!contact || !details) return;

    const btn = $('#btn-submit-form');
    const originalContent = btn.html();
    const currentLang = localStorage.getItem('lang') || 'ar';
    const sendingText = currentLang === 'ar' ? 'جارٍ الإرسال...' : 'Sending...';

    // Hide any prior alert messages
    $('#form-success-msg').hide();
    $('#form-error-msg').hide().empty();

    // Show sending state & disable button
    btn.html(`<i class="fas fa-spinner fa-spin"></i> <span>${sendingText}</span>`).prop('disabled', true);

    // Endpoint selection: Vercel/Node backend vs GitHub Pages cloud AJAX service
    const isNodeBackend = window.location.hostname.includes('vercel.app') || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

    const requestPromise = isNodeBackend
      ? fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contact, details })
        }).then(res => res.json())
      : fetch('https://formsubmit.co/ajax/dhiaamostafa46@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: contact,
            contact_info: contact,
            message: details,
            _subject: `[Operations Console] New Project Request from ${contact}`,
            _template: 'table'
          })
        }).then(res => res.json());

    requestPromise
      .then((data) => {
        const isSuccess = data && (data.success === true || data.success === 'true' || data.ok === true);

        if (isSuccess) {
          // Show success message
          $('#form-success-msg').slideDown();

          // Reset form fields
          $('#intakeForm')[0].reset();

          // Restore button state
          btn.html(originalContent).prop('disabled', false);

          // Auto-hide success message after 7 seconds
          setTimeout(() => {
            $('#form-success-msg').slideUp();
          }, 7000);
        } else {
          let errMsg = data.message || (currentLang === 'ar' ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة لاحقاً.' : 'Failed to send request.');
          if (data.message && data.message.includes('Activation')) {
            errMsg = currentLang === 'ar'
              ? 'تم إرسال رابط تفعيل الخدمة لأول مرة إلى البريد الإلكتروني (dhiaamostafa46@gmail.com). يرجى تفقد البريد والضغط على رابط التفعيل لمرة واحدة فقط لتفعيل الإرسال المباشر.'
              : 'Form activation link sent to dhiaamostafa46@gmail.com. Please check your inbox and click activate link.';
          }
          throw new Error(errMsg);
        }
      })
      .catch((error) => {
        let isNetworkError = false;
        let errorMsg = error.message || '';

        if (!errorMsg || errorMsg === 'Failed to fetch' || errorMsg.includes('fetch') || errorMsg.includes('NetworkError')) {
          isNetworkError = true;
          errorMsg = currentLang === 'ar' 
            ? 'تعذر الاتصال بالشبكة حالياً. يمكنك الإرسال مباشرة عبر الواتساب أو البريد:'
            : 'Network connection error. Use direct options below:';
        }

        const waMessage = `Hello Dhiaa,%0A%0A*NEW PROJECT REQUEST*%0A- *Contact Info:* ${encodeURIComponent(contact)}%0A- *Project Details:* ${encodeURIComponent(details)}`;
        const waUrl = `https://api.whatsapp.com/send?phone=966533166742&text=${waMessage}`;
        const mailtoUrl = `mailto:dhiaamostafa46@gmail.com?subject=${encodeURIComponent('Project Request from ' + contact)}&body=${encodeURIComponent(details)}`;

        let fallbackHtml = `<div><i class="fas fa-exclamation-triangle"></i> <span id="form-error-text">${errorMsg}</span></div>`;
        if (isNetworkError) {
          fallbackHtml += `
            <div style="margin-top: 10px; padding-top: 10px; border-top: 1px dashed rgba(239,68,68,0.4); display: flex; gap: 10px; flex-wrap: wrap;">
              <a href="${waUrl}" target="_blank" class="btn-secondary" style="padding: 4px 12px; font-size: 0.8rem; border-color: #10b981; color: #10b981;">
                <i class="fab fa-whatsapp"></i> ${currentLang === 'ar' ? 'إرسال مباشر عبر WhatsApp' : 'Send via WhatsApp'}
              </a>
              <a href="${mailtoUrl}" target="_blank" class="btn-secondary" style="padding: 4px 12px; font-size: 0.8rem; border-color: #38bdf8; color: #38bdf8;">
                <i class="fas fa-envelope"></i> ${currentLang === 'ar' ? 'إرسال عبر البريد المباشر' : 'Send via Email'}
              </a>
            </div>
          `;
        }

        $('#form-error-msg').html(fallbackHtml).slideDown();

        // Restore button state
        btn.html(originalContent).prop('disabled', false);
      });
  });
}
