// Comprehensive Stack Data Array for Instant Rendering
const stackData = [
  {
    category: "Backend Engineering",
    category_ar: "هندسة الواجهات الخلفية",
    items: [
      { name: "Laravel", name_ar: "لارافل", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
      { name: "Node.js", name_ar: "نود جي إس", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "NestJS", name_ar: "نيست جي إس", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" },
      { name: "PHP", name_ar: "بي إتش بي", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "TypeScript", name_ar: "تايب سكريبت", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Express.js", name_ar: "إكسبريس", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "RESTful APIs", name_ar: "واجهات REST", icon: "https://img.icons8.com/color/48/api.png" },
      { name: "GraphQL", name_ar: "جراف كيو إيل", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
      { name: "WebSockets", name_ar: "ويب سوكيتس", icon: "https://img.icons8.com/color/48/websocket.png" }
    ]
  },
  {
    category: "Data & Persistence",
    category_ar: "قواعد البيانات والتخزين",
    items: [
      { name: "PostgreSQL", name_ar: "بوستجري إس كيو إيل", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", name_ar: "ماي إس كيو إيل", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Redis Cache & Queue", name_ar: "ريديس كاش وطوابير", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "MongoDB", name_ar: "مونجو دي بي", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
    ]
  },
  {
    category: "Enterprise Integrations",
    category_ar: "تكامل أنظمة الشركات",
    items: [
      { name: "Evix ERP Sync", name_ar: "ربط إيفكس ERP", icon: "https://img.icons8.com/color/48/system-task.png" },
      { name: "ZATCA E-Invoicing Phase 2", name_ar: "الفوترة الضريبية زاتكا", icon: "https://img.icons8.com/color/48/bill.png" },
      { name: "Tabby BNPL", name_ar: "تابي للدفع الآجل", icon: "https://img.icons8.com/color/48/bank-cards.png" },
      { name: "HyperPay / Payment Gateways", name_ar: "بوابات الدفع الإلكتروني", icon: "https://img.icons8.com/color/48/card-in-use.png" }
    ]
  },
  {
    category: "AI & Intelligent Automation",
    category_ar: "الذكاء الاصطناعي والأتمتة",
    items: [
      { name: "Azure OpenAI APIs", name_ar: "أزور أوبن إيه آي", icon: "https://img.icons8.com/color/48/brain.png" },
      { name: "PDF OCR & Line Extraction", name_ar: "استخراج بيانات الفواتير OCR", icon: "https://img.icons8.com/color/48/document.png" },
      { name: "RAG & Vector Search", name_ar: "البحث الشعاعي RAG", icon: "https://img.icons8.com/color/48/search-database.png" },
      { name: "Python Automation", name_ar: "أتمتة بايثون", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
    ]
  },
  {
    category: "Cloud & DevOps",
    category_ar: "السحابة وهندسة التشغيل",
    items: [
      { name: "Docker Containerization", name_ar: "حاويات دوكر", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "AWS Cloud Services", name_ar: "خدمات أبلود السحابية", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Git & GitHub CI/CD", name_ar: "جيت وجيت هاب", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Nginx & Linux Admin", name_ar: "خوادم لينكس ونجينكس", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" }
    ]
  }
];

// Comprehensive Projects Data Array for Instant Rendering
const projectsData = [
  {
    name: "Multi-Tenant Fleet Logistics Platform",
    name_ar: "منصة اللوجستيات وإدارة الأسطول المتعددة المشتركين",
    category: "Full Stack",
    desc: "Architected a high-concurrency SaaS logistics dispatcher supporting 7,000+ active fleet agents across Saudi Arabia with real-time WebSockets vehicle tracking.",
    desc_ar: "تصميم وبناء منصة سحابية لوجستية تخدم أكثر من 7000 مندوب توصيل مع التتبع اللحظي عبر خوادم WebSockets في السعودية.",
    image: "./projects/img/2026-05-16_eyein-sa-home_01.png"
  },
  {
    name: "Evix ERP Enterprise Integration Hub",
    name_ar: "مركز ربط وتكامل نظام Evix ERP للشركات",
    category: "Enterprise Solutions",
    desc: "Connected 500+ subscribed corporate businesses to Evix ERP with double-entry ledger sync, automated inventory updates, and ZATCA E-Invoicing Phase 2.",
    desc_ar: "ربط أكثر من 500 شركة مشتركة بنظام Evix ERP مع مزامنة القيود المحاسبية المزدوجة والفوترة الضريبية زاتكا المرحلة الثانية.",
    image: "./projects/img/2026-05-16_evix-sa-ar-admin_01.png"
  },
  {
    name: "Azure OpenAI PDF Invoice OCR Ledger Pipeline",
    name_ar: "مسارات قراءة الفواتير بالذكاء الاصطناعي Azure OpenAI",
    category: "Full Stack",
    desc: "Automated invoice parsing from unstructured PDFs into structured ERP ledgers using Azure OpenAI Vision and Python document pipelines.",
    desc_ar: "أتمتة قراءة الفواتير غير المنظمة من ملفات PDF وحساب القيود المحاسبية تلقائياً عبر نماذج الذكاء الاصطناعي أزور أوبن إيه آي.",
    image: "./projects/img/2024-07-07_eyeintec_01.png"
  },
  {
    name: "Eyein Code Commercial Platform",
    name_ar: "منصة أين كود التجارية البرمجية",
    category: "Full Stack",
    desc: "Engineered scalable digital commerce platform with multi-channel authentication, Role-Based Access Control (RBAC), and Tabby BNPL payment integration.",
    desc_ar: "بناء منصة أين كود الرقمية المتكاملة مع صلاحيات المستخدمين المتقدمة وتكامل بوابات الدفع تابي والدفع الإلكتروني.",
    image: "./projects/img/2026-05-16_eyeincode_01.png"
  },
  {
    name: "Musaned United HRMS & Payroll Portal",
    name_ar: "منصة مساند المتحدة لإدارة الموارد البشرية والرواتب",
    category: "Enterprise Solutions",
    desc: "Architected NestJS + Next.js enterprise portal for automated payroll processing, employee attendance tracking, and leave management.",
    desc_ar: "تصميم منصة مؤسسية بـ NestJS و Next.js لمعالجة مسيرات الرواتب الآلية وتتبع حضور الموظفين والإجازات.",
    image: "./projects/img/2025-02-05_musanid-sa_01.png"
  },
  {
    name: "ACTES Group Commercial Solutions",
    name_ar: "منصة مجموعة أكتس التجارية",
    category: "Enterprise Solutions",
    desc: "Built corporate solution platform for commercial clients with optimized database query structures and high performance.",
    desc_ar: "تطوير منصة الأعمال التجارية لمجموعة أكتس مع تحسين استعلامات قواعد البيانات والأداء العالي.",
    image: "./projects/img/2024-07-03_actesgroup_01.png"
  },
  {
    name: "Barmgely Software Solutions Portal",
    name_ar: "منصة برمجيلي للحلول البرمجية",
    category: "Full Stack",
    desc: "Custom web platform built with Laravel RESTful APIs, responsive React frontend, and automated email deployment triggers.",
    desc_ar: "منصة ويب مخصصة مبنية بـ Laravel APIs وواجهة React متجاوبة لدعم حلول البرمجة والتطوير.",
    image: "./projects/img/2024-07-03_barmgely_01.png"
  },
  {
    name: "Miran Mobile E-Commerce & Hospitality App",
    name_ar: "تطبيق ميران للهواتف والضيافة",
    category: "Mobile App",
    desc: "Cross-platform Flutter application for mobile ordering, e-commerce catalog browsing, and real-time order status tracking.",
    desc_ar: "تطبيق موبايل متعدد المنصات بإستخدام Flutter للطلب والتصفح المباشر ومتابعة حالة الطلبات.",
    image: "./projects/img/2024-07-03_miranedu_01.png"
  }
];

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
    document.title = "Dhiaa Mostafa | Senior Systems Architect & Full-Stack Engineer";
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
  const savedTheme = localStorage.getItem('theme') || 'light';
  currentThemeIndex = themes.indexOf(savedTheme) !== -1 ? themes.indexOf(savedTheme) : 1;
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
initTypedText();

/* ===== HERO CODE CARD WIDGET ===== */
let currentCodeTab = 'profile';
const codeSnippets = {
  profile: {
    en: `<p><span class="c-key">const</span> <span class="c-str">architect</span> = <span class="c-punc">{</span></p>
<p>&nbsp;&nbsp;<span class="c-key">name</span><span class="c-punc">:</span> <span class="c-str">"Dhiaa Mostafa"</span><span class="c-punc">,</span></p>
<p>&nbsp;&nbsp;<span class="c-key">role</span><span class="c-punc">:</span> <span class="c-str">"Senior Systems & Full-Stack Architect"</span><span class="c-punc">,</span></p>
<p>&nbsp;&nbsp;<span class="c-key">experience</span><span class="c-punc">:</span> <span class="c-num">6</span><span class="c-str">+ years</span><span class="c-punc">,</span></p>
<p>&nbsp;&nbsp;<span class="c-key">solutions_value</span><span class="c-punc">:</span> <span class="c-str">"SAR 4M+"</span><span class="c-punc">,</span></p>
<p>&nbsp;&nbsp;<span class="c-key">active_agents</span><span class="c-punc">:</span> <span class="c-num">7000</span><span class="c-punc">,</span></p>
<p>&nbsp;&nbsp;<span class="c-key">erp_clients</span><span class="c-punc">:</span> <span class="c-num">500</span> <span class="c-comm">// Evix ERP Subscribers</span></p>
<p><span class="c-punc">};</span></p>`,
    ar: `<p><span class="c-key">const</span> <span class="c-str">مهندس_الأنظمة</span> = <span class="c-punc">{</span></p>
<p>&nbsp;&nbsp;<span class="c-key">الاسم</span><span class="c-punc">:</span> <span class="c-str">"ضياء مصطفى"</span><span class="c-punc">,</span></p>
<p>&nbsp;&nbsp;<span class="c-key">المسمى</span><span class="c-punc">:</span> <span class="c-str">"كبير مهندسي البرمجيات والأنظمة"</span><span class="c-punc">,</span></p>
<p>&nbsp;&nbsp;<span class="c-key">الخبرة</span><span class="c-punc">:</span> <span class="c-num">6</span><span class="c-str">+ سنوات</span><span class="c-punc">,</span></p>
<p>&nbsp;&nbsp;<span class="c-key">قيمة_الحلول</span><span class="c-punc">:</span> <span class="c-str">"أكثر من 4 مليون ريال"</span><span class="c-punc">,</span></p>
<p>&nbsp;&nbsp;<span class="c-key">العملاء_النشطين</span><span class="c-punc">:</span> <span class="c-num">7000</span> <span class="c-comm">// سائق وسفير توصيل</span></p>
<p><span class="c-punc">};</span></p>`
  },
  system: {
    en: `<p><span class="c-comm">// System Ecosystem Config</span></p>
<p><span class="c-key">architecture</span><span class="c-punc">:</span> <span class="c-str">"Multi-Tenant SaaS + Microservices"</span><span class="c-punc">,</span></p>
<p><span class="c-key">core_stack</span><span class="c-punc">:</span> [<span class="c-str">"Laravel"</span>, <span class="c-str">"Node.js"</span>, <span class="c-str">"NestJS"</span>, <span class="c-str">"React"</span>]<span class="c-punc">,</span></p>
<p><span class="c-key">databases</span><span class="c-punc">:</span> [<span class="c-str">"PostgreSQL"</span>, <span class="c-str">"Redis (Cache/Queue)"</span>, <span class="c-str">"MySQL"</span>]<span class="c-punc">,</span></p>
<p><span class="c-key">integrations</span><span class="c-punc">:</span> [<span class="c-str">"Evix ERP"</span>, <span class="c-str">"ZATCA E-Invoicing"</span>, <span class="c-str">"Tabby"</span>]<span class="c-punc">,</span></p>
<p><span class="c-key">performance</span><span class="c-punc">:</span> <span class="c-str">"40%+ Query Optimization via Redis"</span></p>`,
    ar: `<p><span class="c-comm">// إعدادات بيئة الأنظمة المعمارية</span></p>
<p><span class="c-key">معمارية_النظام</span><span class="c-punc">:</span> <span class="c-str">"SaaS متعدد المستأجرين + Microservices"</span><span class="c-punc">,</span></p>
<p><span class="c-key">التقنيات_الرئيسية</span><span class="c-punc">:</span> [<span class="c-str">"Laravel"</span>, <span class="c-str">"Node.js"</span>, <span class="c-str">"NestJS"</span>, <span class="c-str">"React"</span>]<span class="c-punc">,</span></p>
<p><span class="c-key">قواعد_البيانات</span><span class="c-punc">:</span> [<span class="c-str">"PostgreSQL"</span>, <span class="c-str">"Redis Cache"</span>, <span class="c-str">"MySQL"</span>]<span class="c-punc">,</span></p>
<p><span class="c-key">التكاملات</span><span class="c-punc">:</span> [<span class="c-str">"Evix ERP"</span>, <span class="c-str">"الفوترة الضريبية زاتكا"</span>, <span class="c-str">"Tabby"</span>]</p>`
  },
  ai: {
    en: `<p><span class="c-comm"># Azure OpenAI Document Pipeline</span></p>
<p><span class="c-key">def</span> <span class="c-str">process_invoice_pdf</span>(file_path):</p>
<p>&nbsp;&nbsp;vision_data = azure_ocr.extract(file_path)</p>
<p>&nbsp;&nbsp;ledger_json = llm.parse(vision_data, schema=ZATCA_SCHEMA)</p>
<p>&nbsp;&nbsp;erp.insert_double_entry_ledger(ledger_json)</p>
<p>&nbsp;&nbsp;<span class="c-key">return</span> <span class="c-str">"STATUS 200: INVOICE_SYNCED"</span></p>`,
    ar: `<p><span class="c-comm"># مسار معالجة الفواتير بالذكاء الاصطناعي</span></p>
<p><span class="c-key">def</span> <span class="c-str">قراءة_ملف_الفاتورة</span>(مسار_الملف):</p>
<p>&nbsp;&nbsp;بيانات_النص = azure_ocr.استخراج(مسار_الملف)</p>
<p>&nbsp;&nbsp;القيد_المحاسبي = llm.تحليل(بيانات_النص, النموذج=زاتكا)</p>
<p>&nbsp;&nbsp;erp.إدخال_القيد_المزدوج(القيد_المحاسبي)</p>
<p>&nbsp;&nbsp;<span class="c-key">return</span> <span class="c-str">"حالة 200: تم الربط بنجاح"</span></p>`
  }
};

function updateCodeCardContent(tab, lang = 'en') {
  currentCodeTab = tab;
  // Always force 'en' for the code card to maintain standard IDE format
  const content = codeSnippets[tab] ? codeSnippets[tab]['en'] : '';
  
  const container = $('#code-card-content');
  container.removeClass('anim-fade-up');
  
  // Trigger reflow for animation restart
  void container[0].offsetWidth;
  
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

function renderSkills(lang = 'en') {
  const container = $('#skillsContainer');
  container.empty();

  let filteredGroups = stackData.filter(group => {
    if (currentSkillCategory !== 'all' && group.category !== currentSkillCategory) {
      return false;
    }
    return true;
  });

  let html = '<div class="skills-grid-container">';
  let count = 0;

  filteredGroups.forEach(group => {
    const catName = (lang === 'ar' && group.category_ar) ? group.category_ar : group.category;
    
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
          <h3 class="skill-category-title">${catName}</h3>
          <div class="skill-chips">
      `;
      items.forEach(item => {
        const itemName = (lang === 'ar' && item.name_ar) ? item.name_ar : item.name;
        html += `
          <div class="skill-chip">
            <img src="${item.icon}" alt="${itemName}" onerror="this.src='https://img.icons8.com/color/48/code.png'">
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
    container.html(`<p style="text-align: center; color: var(--text-muted); font-size: 1.4rem; padding: 4rem;">${noResultsText}</p>`);
  } else {
    container.html(html);
  }
}

function initSkillsSection() {
  const lang = localStorage.getItem('lang') || 'en';
  renderSkills(lang);

  $('.skills-tab').on('click', function () {
    $('.skills-tab').removeClass('active');
    $(this).addClass('active');
    currentSkillCategory = $(this).data('cat');
    const currentLang = localStorage.getItem('lang') || 'en';
    renderSkills(currentLang);
  });

  $('#skills-search-input').on('keyup input', function () {
    currentSkillSearch = $(this).val();
    const currentLang = localStorage.getItem('lang') || 'en';
    renderSkills(currentLang);
  });
}

/* ===== PROJECTS CATALOG COMPONENT ===== */
let currentProjectFilter = 'all';
let currentProjectSearch = '';

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

  if (filtered.length === 0) {
    const emptyText = lang === 'ar' ? 'لم يتم العثور على مشاريع مطابقة للبحث' : 'No matching projects found.';
    container.html(`<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); font-size: 1.4rem; padding: 4rem;">${emptyText}</p>`);
    return;
  }

  filtered.forEach((proj, idx) => {
    const title = (lang === 'ar' && proj.name_ar) ? proj.name_ar : proj.name;
    const desc = (lang === 'ar' && proj.desc_ar) ? proj.desc_ar : proj.desc;
    const btnText = lang === 'ar' ? 'عرض التفاصيل والمعمارية' : 'View Architecture Specs';

    const cardHtml = `
      <div class="box" data-index="${idx}">
        <div class="image">
          <img src="${proj.image}" alt="${title}" onerror="this.src='./assets/images/profile2_enhanced.jpg'">
          <span class="category-badge">${proj.category}</span>
        </div>
        <div class="content">
          <h3>${title}</h3>
          <p>${desc}</p>
          <span class="btn-case-study">
            <span>${btnText}</span>
            <i class="fas fa-arrow-right"></i>
          </span>
        </div>
      </div>
    `;
    container.append(cardHtml);
  });

  // Attach click listener for modal
  $('.work .box').on('click', function () {
    const index = $(this).data('index');
    openProjectModal(filtered[index], lang);
  });
}

function openProjectModal(proj, lang = 'en') {
  if (!proj) return;
  const title = (lang === 'ar' && proj.name_ar) ? proj.name_ar : proj.name;
  const desc = (lang === 'ar' && proj.desc_ar) ? proj.desc_ar : proj.desc;

  $('#modalCategory').text(proj.category);
  $('#modalTitle').text(title);
  $('#modalImage').attr('src', proj.image);
  $('#modalDescription').text(desc);

  // Stack badges
  const tagsContainer = $('#modalTags');
  tagsContainer.empty();
  const sampleStack = [proj.category, 'RESTful APIs', 'Database Optimization', 'Production Architecture'];
  sampleStack.forEach(st => {
    tagsContainer.append(`<span class="service-tag">${st}</span>`);
  });

  $('#projectModal').addClass('active');
}

function initProjectsSection() {
  const lang = localStorage.getItem('lang') || 'en';
  renderProjects(lang);

  $('.filter-btn').on('click', function () {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');
    currentProjectFilter = $(this).data('filter');
    const currentLang = localStorage.getItem('lang') || 'en';
    renderProjects(currentLang);
  });

  $('#project-search-input').on('keyup input', function () {
    currentProjectSearch = $(this).val();
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
    
    // Show sending state
    btn.html('<i class="fas fa-spinner fa-spin"></i> <span data-i18n="btn_sending">Sending...</span>').prop('disabled', true);

    // Prepare message
    const message = `Hello Dhiaa,%0A%0A*NEW PROJECT REQUEST*%0A- *Contact Info:* ${encodeURIComponent(contact)}%0A- *Project Details:* ${encodeURIComponent(details)}`;

    // Open WhatsApp in a new tab
    window.open(`https://api.whatsapp.com/send?phone=966533166742&text=${message}`, '_blank');

    // Simulate background sending completion for UI
    setTimeout(() => {
      // Show success message
      $('#form-success-msg').slideDown();
      
      // Clear form
      $('#intakeForm')[0].reset();

      // Reset button
      btn.html(originalContent).prop('disabled', false);

      // Hide success message after 5 seconds
      setTimeout(() => {
        $('#form-success-msg').slideUp();
      }, 5000);
    }, 1000);
  });
}
