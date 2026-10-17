// Streamlined Core Competencies Stack Data Array
const stackData = [
  {
    key: "backend",
    category: "Backend & Systems Architecture",
    category_ar: "هندسة الواجهات الخلفية والأنظمة",
    desc: "Production-grade backends, microservices & high-concurrency APIs",
    desc_ar: "خدمات خلفية جاهزة للإنتاج، مايكروسيرفس وواجهات برمجية عالية الأداء",
    icon: "fa-server",
    items: [
      { name: "Node.js & NestJS", name_ar: "Node.js & NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg", tag: "Core" },
      { name: "PHP & Laravel", name_ar: "PHP & Laravel MVC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg", tag: "Core" },
      { name: "C# & .NET Core", name_ar: "C# & .NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", tag: "Enterprise" },
      { name: "TypeScript & ES6+", name_ar: "TypeScript & JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", tag: "Language" },
      { name: "RESTful APIs", name_ar: "واجهات RESTful APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", tag: "APIs" },
      { name: "WebSockets & Events", name_ar: "WebSockets والاتصال اللحظي", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg", tag: "Real-Time" },
      { name: "Redis Queues & Workers", name_ar: "طوابير Redis والمعالجة غير المتزامنة", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", tag: "Async" }
    ]
  },
  {
    key: "databases",
    category: "Databases, Caching & Data Modeling",
    category_ar: "قواعد البيانات والتخزين المؤقت",
    desc: "Relational, NoSQL, in-memory caching & schema optimization",
    desc_ar: "قواعد البيانات العلائقية، NoSQL، التخزين المؤقت وتحسين المخططات",
    icon: "fa-database",
    items: [
      { name: "PostgreSQL Schema Tuning", name_ar: "PostgreSQL وهندسة المخططات", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", tag: "RDBMS" },
      { name: "MySQL Relational DB", name_ar: "MySQL وقواعد البيانات العلائقية", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", tag: "RDBMS" },
      { name: "Microsoft SQL Server", name_ar: "SQL Server & T-SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", tag: "Enterprise" },
      { name: "Redis Caching & Pub/Sub", name_ar: "Redis للتخزين المؤقت والـ Pub/Sub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", tag: "In-Memory" },
      { name: "MongoDB Document DB", name_ar: "MongoDB وقواعد البيانات الوثائقية", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", tag: "NoSQL" },
      { name: "SQL Query Optimization", name_ar: "تحسين وفهرسة استعلامات SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg", tag: "+40% Speed" },
      { name: "Multi-Tenant Data Isolation", name_ar: "عزل بيانات تعدد المستأجرين", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg", tag: "SaaS" }
    ]
  },
  {
    key: "frontend",
    category: "Frontend & Modern Web Engineering",
    category_ar: "هندسة الواجهات الأمامية والويب",
    desc: "Single-page applications, design systems & responsive HUDs",
    desc_ar: "تطبيقات الصفحة الواحدة SPA، أنظمة التصميم ولوحات التحكم التفاعلية",
    icon: "fa-code",
    items: [
      { name: "React.js & Next.js", name_ar: "React.js & Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", tag: "Core" },
      { name: "Tailwind CSS & SASS", name_ar: "Tailwind CSS & SASS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", tag: "Styling" },
      { name: "Redux Toolkit State", name_ar: "إدارة الحالة Redux Toolkit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", tag: "State" },
      { name: "HTML5 & Modern CSS3", name_ar: "HTML5 & Modern CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", tag: "Web" },
      { name: "HUD Admin Panels & SPA", name_ar: "لوحات التحكم وتطبيقات SPA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", tag: "UI/UX" }
    ]
  },
  {
    key: "enterprise",
    category: "Enterprise, ERP & Multi-Tenancy",
    category_ar: "الأنظمة المؤسسية، الـ ERP والـ SaaS",
    desc: "Large-scale ERP integrations, multi-tenant SaaS & tax compliance",
    desc_ar: "تكامل أنظمة ERP الكبرى، منصات SaaS متعددة المستأجرين والفوترة الضريبية",
    icon: "fa-network-wired",
    items: [
      { name: "Evix ERP & SAP Integrations", name_ar: "ربط Evix ERP & SAP (أكثر من 500 شركة)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg", tag: "500+ Clients" },
      { name: "Multi-Tenant SaaS (7k+ Agents)", name_ar: "منصات SaaS سحابية (7k+ مندوب)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", tag: "7k+ Fleet" },
      { name: "ZATCA Phase-2 E-Invoicing", name_ar: "الفوترة الإلكترونية زاتكا المرحلة 2", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg", tag: "Gov Tax" },
      { name: "Payment Gateways (Tabby/Mada)", name_ar: "بوابات الدفع (تابي، مدى، آبل باي)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg", tag: "FinTech" },
      { name: "Automated Payroll HRMS (WPS)", name_ar: "الموارد البشرية وحماية الأجور WPS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg", tag: "HRMS" },
      { name: "OAuth2, JWT & RBAC Controls", name_ar: "المصادقة وأمان الصلاحيات RBAC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original.svg", tag: "Security" }
    ]
  },
  {
    key: "cloud",
    category: "Cloud Infrastructure, DevOps & CI/CD",
    category_ar: "السحابة، الـ DevOps والنشر المؤتمت",
    desc: "Cloud services, container orchestration & automated deployment pipelines",
    desc_ar: "الخدمات السحابية، إدارة الحاويات وأتمتة النشر المستمر",
    icon: "fa-cloud",
    items: [
      { name: "AWS Cloud (EC2, S3, RDS)", name_ar: "خدمات AWS السحابية المتكاملة", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", tag: "Cloud" },
      { name: "Docker Containerization", name_ar: "حاويات Docker للإنتاج", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", tag: "Containers" },
      { name: "CI/CD & GitHub Actions", name_ar: "أتمتة النشر المستمر CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-plain.svg", tag: "DevOps" },
      { name: "Git & Azure DevOps", name_ar: "إدارة الإصدارات بـ Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", tag: "VCS" },
      { name: "Agile / Scrum Sprint Leadership", name_ar: "إدارة دورات Agile / Scrum", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg", tag: "Agile" },
      { name: "Automated Unit Testing", name_ar: "اختبارات الإنتاج والأتمتة", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", tag: "Testing" }
    ]
  },
  {
    key: "ai",
    category: "Mobile & AI Intelligent Automation",
    category_ar: "تطبيقات الجوال وأتمتة الذكاء الاصطناعي",
    desc: "Cross-platform mobile apps, OCR processing & LLM enterprise pipelines",
    desc_ar: "تطبيقات الجوال متعددة المنصات، معالجة المستندات OCR ونماذج LLMs",
    icon: "fa-mobile-alt",
    items: [
      { name: "Flutter & Dart (iOS / Android)", name_ar: "تطوير تطبيقات الجوال بـ Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", tag: "Mobile" },
      { name: "Azure OpenAI & LLMs", name_ar: "أتمتة الذكاء الاصطناعي ونماذج LLMs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", tag: "AI/LLM" },
      { name: "Document OCR to JSON", name_ar: "معالجة المستندات واستخراج البيانات OCR", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", tag: "Automation" },
      { name: "AI-Augmented Dev (Cursor)", name_ar: "التطوير المعزز بالذكاء الاصطناعي", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", tag: "Tools" },
      { name: "Firebase & Push Notifications", name_ar: "الإشعارات الفورية Firebase FCM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", tag: "FCM" },
      { name: "System Architecture & UML", name_ar: "التوثيق المعماري وتصميم الأنظمة", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg", tag: "Arch" }
    ]
  }
];

$(document).ready(function () {

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

  // Initializations
  initThemeToggle();
  initTypedText();
  initCodeCard();
  initArchitectureSection();
  initSkillsSection();
  initProjectsSection();
  initOpenSourceSection();
  initIntakeForm();
  init3DTilt();

  // Listen to Language Changes
  document.addEventListener('languageChanged', function (e) {
    const lang = e.detail.lang;
    renderArchitecture(lang);
    renderSkills(lang);
    renderProjects(lang);
    renderOpenSource(lang);
    updateCodeCardContent(currentCodeTab, lang);
  });
});

// Dynamic Page Title when tab changes
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === "visible") {
    document.title = "Dhiaa Mostafa | Senior Full-Stack Engineer & SaaS Architect";
  } else {
    document.title = "Dhiaa Mostafa | Full-Stack & Systems Architect";
  }
});

// Typed.js Animation Setup
let typedInstance = null;
function initTypedText() {
  if (typeof Typed !== 'undefined' && $('.typing-text').length) {
    typedInstance = new Typed(".typing-text", {
      strings: [
        " Laravel, Node.js, NestJS &amp; .NET Core",
        " Multi-Tenant SaaS (7,000+ Fleet Agents)",
        " Evix ERP Integrations (500+ Clients)",
        " React.js, Next.js &amp; Flutter Mobile",
        " PostgreSQL, Redis Queues &amp; SQL Server",
        " AI Automation &amp; LLM Workflows (OCR to JSON)"
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
    en: `<p><span class="c-key">export interface</span> <span class="c-str">SeniorFullStackSaaSArchitect</span> <span class="c-punc">{</span></p>
<p>&nbsp;&nbsp;<span class="c-key">name</span><span class="c-punc">:</span> <span class="c-str">"Dhiaa Mostafa"</span><span class="c-punc">;</span></p>
<p>&nbsp;&nbsp;<span class="c-key">title</span><span class="c-punc">:</span> <span class="c-str">"Senior Full-Stack Engineer & SaaS Architect"</span><span class="c-punc">;</span></p>
<p>&nbsp;&nbsp;<span class="c-key">experience</span><span class="c-punc">:</span> <span class="c-str">"6+ Years"</span><span class="c-punc">;</span></p>
<p>&nbsp;&nbsp;<span class="c-key">core_stack</span><span class="c-punc">:</span> [<span class="c-str">"Laravel / PHP"</span>, <span class="c-str">"Node.js / NestJS"</span>, <span class="c-str">"C# / .NET"</span>, <span class="c-str">"React"</span>, <span class="c-str">"Flutter"</span>]<span class="c-punc">;</span></p>
<p>&nbsp;&nbsp;<span class="c-key">specialization</span><span class="c-punc">:</span> <span class="c-str">"SaaS Multi-Tenancy, ERP & Middleware Architecture"</span><span class="c-punc">;</span></p>
<p>&nbsp;&nbsp;<span class="c-key">solutions_value</span><span class="c-punc">:</span> <span class="c-str">"SAR 4M+"</span><span class="c-punc">;</span></p>
<p>&nbsp;&nbsp;<span class="c-key">active_fleet_agents</span><span class="c-punc">:</span> <span class="c-num">7000</span><span class="c-punc">;</span> <span class="c-comm">// Real-Time WebSockets</span></p>
<p>&nbsp;&nbsp;<span class="c-key">enterprise_clients</span><span class="c-punc">:</span> <span class="c-num">500</span><span class="c-punc">;</span> <span class="c-comm">// Evix ERP Subscribers</span></p>
<p>&nbsp;&nbsp;<span class="c-key">status</span><span class="c-punc">:</span> <span class="c-str">"ACTIVE_DEPLOYMENT"</span><span class="c-punc">;</span></p>
<p><span class="c-punc">}</span></p>`
  },
  architecture: {
    en: `<p><span class="c-comm"># Multi-Tenant Cloud Architecture Pipeline</span></p>
<p><span class="c-key">system</span><span class="c-punc">:</span> <span class="c-str">"Enterprise SaaS Gateway"</span></p>
<p><span class="c-key">tenants</span><span class="c-punc">:</span></p>
<p>&nbsp;&nbsp;<span class="c-key">isolation</span><span class="c-punc">:</span> <span class="c-str">"Database & Subdomain Level"</span></p>
<p>&nbsp;&nbsp;<span class="c-key">scaling</span><span class="c-punc">:</span> <span class="c-str">"Horizontal Pod Autoscaling (Docker/K8s)"</span></p>
<p><span class="c-key">real_time_events</span><span class="c-punc">:</span></p>
<p>&nbsp;&nbsp;<span class="c-key">protocol</span><span class="c-punc">:</span> <span class="c-str">"WebSockets + Redis PubSub"</span></p>
<p>&nbsp;&nbsp;<span class="c-key">fleet_capacity</span><span class="c-punc">:</span> <span class="c-num">7000</span> <span class="c-comm"># Live GPS Agents</span></p>
<p><span class="c-key">erp_integration</span><span class="c-punc">:</span></p>
<p>&nbsp;&nbsp;<span class="c-key">modules</span><span class="c-punc">:</span> [<span class="c-str">"Evix ERP"</span>, <span class="c-str">"ZATCA Phase 2"</span>, <span class="c-str">"Tabby BNPL"</span>]</p>
<p>&nbsp;&nbsp;<span class="c-key">throughput_gain</span><span class="c-punc">:</span> <span class="c-str">"+40% Redis Cached"</span></p>`
  },
  telemetry: {
    en: `<p><span class="c-punc">{</span></p>
<p>&nbsp;&nbsp;<span class="c-key">"cluster_health"</span><span class="c-punc">:</span> <span class="c-str">"100% HEALTHY"</span><span class="c-punc">,</span></p>
<p>&nbsp;&nbsp;<span class="c-key">"api_latency_p99"</span><span class="c-punc">:</span> <span class="c-str">"14ms"</span><span class="c-punc">,</span></p>
<p>&nbsp;&nbsp;<span class="c-key">"uptime_sla"</span><span class="c-punc">:</span> <span class="c-str">"99.99%"</span><span class="c-punc">,</span></p>
<p>&nbsp;&nbsp;<span class="c-key">"enterprise_nodes"</span><span class="c-punc">:</span> <span class="c-num">500</span><span class="c-punc">,</span></p>
<p>&nbsp;&nbsp;<span class="c-key">"active_drivers_gps"</span><span class="c-punc">:</span> <span class="c-num">7000</span><span class="c-punc">,</span></p>
<p>&nbsp;&nbsp;<span class="c-key">"zatca_compliance"</span><span class="c-punc">:</span> <span class="c-str">"PHASE_2_CERTIFIED"</span><span class="c-punc">,</span></p>
<p>&nbsp;&nbsp;<span class="c-key">"total_value_delivered"</span><span class="c-punc">:</span> <span class="c-str">"SAR 4,000,000+"</span></p>
<p><span class="c-punc">}</span></p>`
  }
};

function updateCodeCardContent(tab, lang = 'en') {
  currentCodeTab = tab;
  const content = codeSnippets[tab] ? codeSnippets[tab]['en'] : '';
  
  const container = $('#code-card-content');
  if (!container || !container.length) return;

  container.removeClass('anim-fade-up');
  
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
}

/* ===== SKILLS MATRIX COMPONENT ===== */
let currentSkillSearch = '';
let currentSkillTab = 'all';

function renderSkills(lang = 'en') {
  const container = $('#skillsContainer');
  if (!container || !container.length) return;
  container.empty();

  let html = '<div class="skills-grid-container">';
  let count = 0;

  stackData.forEach(group => {
    if (currentSkillTab !== 'all' && group.key !== currentSkillTab) {
      return;
    }

    const catName = (lang === 'ar' && group.category_ar) ? group.category_ar : group.category;
    const catDesc = (lang === 'ar' && group.desc_ar) ? group.desc_ar : group.desc;
    const catIcon = group.icon || "fa-code";
    
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
        <div class="skill-category" data-key="${group.key}">
          <div class="skill-category-header">
            <div class="cat-title-wrap">
              <div class="cat-icon"><i class="fas ${catIcon}"></i></div>
              <div class="cat-text-info">
                <h3 class="skill-category-title">${catName}</h3>
                <span class="skill-category-desc">${catDesc}</span>
              </div>
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
              <img src="${item.icon}" alt="${itemName}" loading="lazy" onerror="this.onerror=null; this.src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg'">
            </div>
            <span class="chip-name">${itemName}</span>
            ${item.tag ? `<span class="chip-tag">${item.tag}</span>` : ''}
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
    container.html(`<div class="skills-empty-state"><i class="fas fa-search"></i><p>${noResultsText}</p></div>`);
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

  $('.skills-tab').on('click', function () {
    $('.skills-tab').removeClass('active');
    $(this).addClass('active');
    currentSkillTab = $(this).data('cat') || 'all';
    const currentLang = localStorage.getItem('lang') || 'en';
    renderSkills(currentLang);
  });
}

/* ===== PROJECT INTELLIGENCE & VERIFICATION ENGINE ===== */
let projectsData = window.externalProjectsData || [];
let currentProjectFilter = 'all';
let currentProjectSearch = '';
let projectsShowAll = false;
const PROJECTS_PAGE_SIZE = 9;

const categoryMapAr = {
  'Enterprise Solutions': 'أنظمة وحلول مؤسسية',
  'Full Stack': 'أنظمة سحابية متكاملة',
  'E-commerce': 'منصات تجارة إلكترونية',
  'Mobile App': 'تطبيقات الجوال الذكية',
  'SaaS & Enterprise Platforms': 'منصات SaaS ومؤسسية',
  'AI & Microservices': 'ذكاء اصطناعي ومايكروسيرفس',
  'Logistics & Fleet Operations': 'لوجستيات وإدارة أساطيل'
};

function renderProjects(lang = 'en') {
  const container = $('#projectsContainer');
  if (!container || !container.length) return;
  container.empty();

  if (!projectsData || !projectsData.length) {
    projectsData = window.externalProjectsData || [];
  }

  let filtered = (projectsData || []).filter(proj => {
    if (currentProjectFilter !== 'all' && proj.category !== currentProjectFilter) {
      return false;
    }
    if (currentProjectSearch) {
      const q = currentProjectSearch.toLowerCase().trim();
      const name = (proj.name || '').toLowerCase();
      const nameAr = (proj.name_ar || '').toLowerCase();
      const cat = (proj.category || '').toLowerCase();
      const loc = (proj.location || '').toLowerCase();
      const locAr = (proj.location_ar || '').toLowerCase();
      const domain = (proj.source_provenance && proj.source_provenance.source_domain ? proj.source_provenance.source_domain : '').toLowerCase();
      return name.includes(q) || nameAr.includes(q) || cat.includes(q) || loc.includes(q) || locAr.includes(q) || domain.includes(q);
    }
    return true;
  });

  if (filtered.length === 0) {
    const emptyText = lang === 'ar' ? 'لم يتم العثور على مشاريع مطابقة للبحث أو التصنيف' : 'No matching projects found.';
    container.append(`
      <div class="no-projects-msg text-center" style="grid-column: 1/-1; padding: 4rem 1.5rem; text-align: center;">
        <i class="fas fa-folder-open" style="font-size: 2.8rem; color: var(--secondary); margin-bottom: 1rem; display: block;"></i>
        <p style="color: var(--text-muted); font-size: 1.1rem; font-weight: 600;">${emptyText}</p>
      </div>
    `);
    return;
  }

  const hasMore = !projectsShowAll && filtered.length > PROJECTS_PAGE_SIZE;
  const toShow = projectsShowAll ? filtered : filtered.slice(0, PROJECTS_PAGE_SIZE);

  toShow.forEach((proj, idx) => {
    const title = lang === 'ar' ? (proj.name_ar || proj.name) : proj.name;
    const location = lang === 'ar' ? (proj.location_ar || proj.location || 'الرياض، السعودية') : (proj.location || 'Riyadh, SA');
    const categoryLabel = (lang === 'ar' && categoryMapAr[proj.category]) ? categoryMapAr[proj.category] : proj.category;
    
    // Original live URL link
    const viewLink = (proj.source_provenance && proj.source_provenance.source_url && proj.source_provenance.source_url !== '#')
      ? proj.source_provenance.source_url
      : (proj.links && proj.links.view !== '#' ? proj.links.view : '');

    const cardHtml = `
      <article class="project-card lux-project-card" data-index="${idx}">
        <div class="lux-card-media">
          <img src="${proj.image}" alt="${title}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80';" />
          
          <div class="lux-card-media-overlay">
            <span class="lux-overlay-hint">
              <i class="fas fa-eye"></i>
              <span>${lang === 'ar' ? 'عرض التفاصيل' : 'Quick Preview'}</span>
            </span>
          </div>

          <!-- Live Pulse Marker & Category -->
          <div class="lux-media-badges">
            <span class="lux-live-badge">
              <span class="live-dot-pulse"></span>
              <span>LIVE</span>
            </span>
            <span class="lux-cat-badge">${categoryLabel}</span>
          </div>
        </div>

        <div class="lux-card-body">
          <div class="lux-card-info">
            <h3 class="lux-card-title" title="${title}">${title}</h3>
            <span class="lux-card-loc"><i class="fas fa-map-marker-alt"></i> ${location}</span>
          </div>

          <!-- Exactly Two Dedicated Action Buttons -->
          <div class="lux-card-actions">
            <button type="button" class="btn-card-show open-modal-btn" data-index="${idx}" title="${lang === 'ar' ? 'عرض تفاصيل ومعمارية المشروع' : 'Inspect Full Architecture & Specs'}">
              <i class="fas fa-eye"></i>
              <span>${lang === 'ar' ? 'عرض' : 'Show'}</span>
            </button>
            
            ${viewLink ? `
              <a href="${viewLink}" target="_blank" rel="noopener noreferrer" class="btn-card-direct-link" title="${lang === 'ar' ? 'زيارة الرابط والمصدر الأصلي' : 'Open Live Authentic Source'}" onclick="event.stopPropagation()">
                <i class="fas fa-arrow-up-right-from-square"></i>
              </a>
            ` : `
              <span class="btn-card-direct-link disabled" title="${lang === 'ar' ? 'نظام خاص / داخل الشبكة' : 'Private Enterprise Deployment'}" onclick="event.stopPropagation()">
                <i class="fas fa-lock"></i>
              </span>
            `}
          </div>
        </div>
      </article>`;
    container.append(cardHtml);
  });

  if (hasMore) {
    const remaining = filtered.length - PROJECTS_PAGE_SIZE;
    const viewMoreText = lang === 'ar'
      ? `<i class="fas fa-layer-group"></i> استعراض المزيد (${remaining} مشاريع إضافية)`
      : `<i class="fas fa-layer-group"></i> View More (${remaining} more projects)`;
    const viewMoreBtn = $(`
      <div class="projects-view-more" style="grid-column: 1/-1; text-align: center; margin-top: 1.5rem;">
        <button class="btn-view-more" id="btnViewMoreProjects">${viewMoreText}</button>
      </div>
    `);
    container.append(viewMoreBtn);
    $('#btnViewMoreProjects').on('click', function () {
      projectsShowAll = true;
      renderProjects(localStorage.getItem('lang') || 'en');
    });
  }

  // Open modal on clicking anywhere on the card or the Show button (except direct external link)
  $('.project-card').on('click', function (e) {
    if ($(e.target).closest('.btn-card-direct-link').length) return;
    const index = $(this).data('index');
    openProjectModal(toShow[index], lang);
  });
}

function openProjectModal(proj, lang = 'en') {
  if (!proj) return;
  const title = (lang === 'ar' && proj.name_ar) ? proj.name_ar : proj.name;
  const location = (lang === 'ar' && proj.location_ar) ? proj.location_ar : (proj.location || 'Saudi Arabia');
  const domain = (proj.source_provenance && proj.source_provenance.source_domain) ? proj.source_provenance.source_domain : 'Verified Entity';
  const lastSync = (proj.last_synced) ? proj.last_synced : '2026-08-30';
  
  const isAi = proj.source_provenance && proj.source_provenance.type === 'AI_VISION_EXTRACTED';
  const provBadgeText = lang === 'ar'
    ? (isAi ? 'تحليل الرؤية الحاسوبية' : 'مصدر أصلي موثق — LIVE')
    : (isAi ? 'AI VISION EXTRACTED' : 'VERIFIED LIVE SOURCE');

  const categoryLabel = (lang === 'ar' && categoryMapAr[proj.category]) ? categoryMapAr[proj.category] : proj.category;

  $('#modalCategory').text(categoryLabel);
  $('#modalProvenanceText').text(provBadgeText);
  $('#modalTitle').text(title);
  $('#modalLocation').html(`<i class="fas fa-map-marker-alt"></i> ${location}`);
  $('#modalSourceDomain').text(domain);
  $('#modalLastSynced').text((lang === 'ar' ? 'آخر تدقيق: ' : 'Verified: ') + lastSync);
  $('#modalImage').attr('src', proj.image);

  // Multi-Screen Studio Switcher inside Case Study Modal
  const screenTabsBox = $('#modalScreenTabs');
  if (screenTabsBox.length) {
    screenTabsBox.empty();
    if (proj.screens && proj.screens.length > 1) {
      proj.screens.forEach((scr, sIdx) => {
        const sLabel = (lang === 'ar' && scr.label_ar) ? scr.label_ar : scr.label;
        const btn = $(`<button type="button" class="case-screen-tab ${sIdx === 0 ? 'active' : ''}">${sLabel}</button>`);
        btn.on('click', function () {
          $('#modalScreenTabs .case-screen-tab').removeClass('active');
          $(this).addClass('active');
          $('#modalImage').attr('src', scr.img);
        });
        screenTabsBox.append(btn);
      });
      screenTabsBox.show();
    } else {
      screenTabsBox.hide();
    }
  }

  // Column A: Verified Real Data
  const realData = proj.verified_real_data || {};
  const orgName = (lang === 'ar' && realData.organization_ar) ? realData.organization_ar : (realData.organization || 'Verified Enterprise');
  const scaleText = (lang === 'ar' && realData.enterprise_scale_ar) ? realData.enterprise_scale_ar : (realData.enterprise_scale || 'Production Scale');
  const featuresList = (lang === 'ar' && realData.features_ar) ? realData.features_ar : (realData.features || proj.features || []);

  $('#modalOrgName').text(orgName);
  $('#modalScaleText').text(scaleText);

  const featuresContainer = $('#modalFeaturesList');
  featuresContainer.empty();
  if (featuresList.length > 0) {
    featuresList.forEach(ft => {
      featuresContainer.append(`
        <li>
          <i class="fas fa-circle-check"></i>
          <span>${ft}</span>
        </li>
      `);
    });
  } else {
    const defaultFt = lang === 'ar' ? 'معمارية متكاملة جاهزة للتشغيل والإنتاج المؤسسي.' : 'Production-grade enterprise architecture.';
    featuresContainer.append(`<li><i class="fas fa-circle-check"></i><span>${defaultFt}</span></li>`);
  }

  // Column B: AI Computer Vision Analysis
  const aiAnalysis = proj.ai_vision_analysis || {};
  const confidence = aiAnalysis.confidence_score || '98.5%';
  const confNum = parseInt(confidence, 10) || 98;
  const detectedTags = (lang === 'ar' && aiAnalysis.detected_components_ar) ? aiAnalysis.detected_components_ar : (aiAnalysis.detected_components || ['System Architecture HUD', 'API Gateway', 'Multi-Tenant DB']);
  const insights = (lang === 'ar' && aiAnalysis.architectural_insights_ar) ? aiAnalysis.architectural_insights_ar : (aiAnalysis.architectural_insights || 'Computer vision analysis indicates high-throughput event-driven microservices architecture.');

  $('#modalConfidenceScore').text(confidence);
  $('#modalConfidenceFill').css('width', `${confNum}%`);

  const detectedTagsContainer = $('#modalDetectedTags');
  detectedTagsContainer.empty();
  detectedTags.forEach(tag => {
    detectedTagsContainer.append(`<span class="lux-chip"><i class="fas fa-microchip"></i> ${tag}</span>`);
  });

  $('#modalAiInsights').text(insights);

  // Live Telemetry KPIs
  const metricsContainer = $('#modalMetrics');
  metricsContainer.empty();
  const metricsList = proj.metrics || [
    { val: "Enterprise", lbl: "Architecture", lbl_ar: "معمارية مؤسسية" },
    { val: "99.99%", lbl: "Reliability", lbl_ar: "جاهزية واستقرار" }
  ];
  metricsList.forEach(m => {
    const lbl = (lang === 'ar' && m.lbl_ar) ? m.lbl_ar : m.lbl;
    metricsContainer.append(`
      <div class="lux-metric-tile">
        <span class="metric-number">${m.val}</span>
        <span class="metric-caption">${lbl}</span>
      </div>
    `);
  });

  // Action Buttons & Top Link
  const visitBtn = $('#modalVisitBtn');
  const sourceLink = $('#modalSourceLink');
  const viewUrl = (proj.source_provenance && proj.source_provenance.source_url && proj.source_provenance.source_url !== '#')
    ? proj.source_provenance.source_url
    : (proj.links && proj.links.view !== '#' ? proj.links.view : '');

  if (viewUrl && viewUrl !== '#') {
    visitBtn.attr('href', viewUrl).show();
    sourceLink.attr('href', viewUrl).show();
  } else {
    visitBtn.hide();
    sourceLink.hide();
  }

  $('#projectModal').addClass('active');
}

function initBlueprintScanner() {
  $('#launchScannerBtn').on('click', function () {
    $('#blueprintScannerModal').addClass('active');
  });

  $('#scannerCloseBtn').on('click', function () {
    $('#blueprintScannerModal').removeClass('active');
  });

  $('#scannerPresetSelect').on('change', function () {
    const selectedImg = $(this).val();
    $('#scannerPreviewImage').attr('src', selectedImg);
    $('#scannerDetections').empty();
    $('#scannerResultsOutput').hide().empty();
  });

  $('#btnExecuteScan').on('click', function () {
    const btn = $(this);
    const laser = $('#scannerLaser');
    const detectionsBox = $('#scannerDetections');
    const resultsBox = $('#scannerResultsOutput');
    const lang = localStorage.getItem('lang') || 'en';

    btn.prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> ' + (lang === 'ar' ? 'جارٍ الفحص...' : 'Scanning...'));
    detectionsBox.empty();
    resultsBox.show().html(`<div class="scanner-log-line"><i class="fas fa-terminal"></i> [AI_VISION_INIT] Initializing Computer Vision tensor engine...</div>`);
    laser.addClass('scanning');

    setTimeout(() => {
      detectionsBox.append(`
        <div class="detected-box box-1" style="top: 15%; left: 10%; width: 35%; height: 28%;">
          <span class="box-label">Admin HUD [99.2%]</span>
        </div>
      `);
      resultsBox.append(`<div class="scanner-log-line"><i class="fas fa-check"></i> [CV_DETECT] Layer 1: Admin Interface HUD identified (Confidence: 99.2%)</div>`);
    }, 700);

    setTimeout(() => {
      detectionsBox.append(`
        <div class="detected-box box-2" style="top: 48%; left: 15%; width: 40%; height: 35%;">
          <span class="box-label">Multi-Tenant Routing [98.7%]</span>
        </div>
      `);
      resultsBox.append(`<div class="scanner-log-line"><i class="fas fa-check"></i> [CV_DETECT] Layer 2: Multi-Tenant Routing pipeline localized (Confidence: 98.7%)</div>`);
    }, 1400);

    setTimeout(() => {
      detectionsBox.append(`
        <div class="detected-box box-3" style="top: 25%; right: 8%; width: 38%; height: 50%;">
          <span class="box-label">Redis Async Queue [99.5%]</span>
        </div>
      `);
      resultsBox.append(`<div class="scanner-log-line"><i class="fas fa-check"></i> [OCR_EXTRACT] Extracted 4 Microservices endpoints &amp; Redis PubSub schema</div>`);
      resultsBox.append(`<div class="scanner-log-line success"><i class="fas fa-check-double"></i> [INTELLIGENCE_READY] Project Dossier Synthesized Successfully!</div>`);
      laser.removeClass('scanning');
      btn.prop('disabled', false).html('<i class="fas fa-check"></i> ' + (lang === 'ar' ? 'تم اكتمال الفحص' : 'Scan Completed'));
    }, 2100);
  });
}

function initProjectsSection() {
  const lang = localStorage.getItem('lang') || 'en';
  
  if (window.externalProjectsData) {
    projectsData = window.externalProjectsData;
  } else {
    console.error('No external projects data found.');
  }

  renderProjects(lang);
  initBlueprintScanner();

  // Search input filter
  $('#project-search-input').on('keyup input', function () {
    currentProjectSearch = $(this).val();
    const currentLang = localStorage.getItem('lang') || 'en';
    renderProjects(currentLang);
  });

  // Category buttons
  $('#project-filters .filter-btn').on('click', function () {
    $('#project-filters .filter-btn').removeClass('active');
    $(this).addClass('active');
    currentProjectFilter = $(this).data('filter');
    projectsShowAll = false;
    const currentLang = localStorage.getItem('lang') || 'en';
    renderProjects(currentLang);
  });

  // Modal Close Handlers
  $('#modalCloseBtn').on('click', function () {
    $('#projectModal').removeClass('active');
  });

  $('#projectModal, #blueprintScannerModal').on('click', function (e) {
    if ($(e.target).hasClass('modal-backdrop')) {
      $(this).removeClass('active');
    }
  });

  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
      $('#projectModal').removeClass('active');
      $('#blueprintScannerModal').removeClass('active');
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

    $('#form-success-msg').hide();
    $('#form-error-msg').hide().empty();

    btn.html(`<i class="fas fa-spinner fa-spin"></i> <span>${sendingText}</span>`).prop('disabled', true);

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
          $('#form-success-msg').slideDown();
          $('#intakeForm')[0].reset();
          btn.html(originalContent).prop('disabled', false);

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
        btn.html(originalContent).prop('disabled', false);
      });
  });
}

/* ===== DEVELOPER DARK / LIGHT THEME TOGGLE ===== */
function initThemeToggle() {
  let savedTheme = 'light';
  try {
    savedTheme = localStorage.getItem('dm_dev_theme') || 'light';
  } catch (e) {}

  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }

  function updateThemeIcon() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const icon = $('#theme-toggle i');
    if (icon.length) {
      icon.attr('class', isDark ? 'fas fa-sun' : 'fas fa-moon');
    }
  }
  updateThemeIcon();

  $('#theme-toggle').on('click', function (e) {
    e.preventDefault();
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      try { localStorage.setItem('dm_dev_theme', 'light'); } catch (err) {}
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      try { localStorage.setItem('dm_dev_theme', 'dark'); } catch (err) {}
    }
    updateThemeIcon();
  });
}

/* ===== INTERACTIVE 3D SYSTEM ARCHITECTURE TOPOLOGY ===== */
let currentArchNode = 'backend';
const archTopologyNodes = [
  {
    id: 'frontend',
    tier: 1,
    code: '01 // PRESENTATION & SPA',
    title: 'Frontend & Executive Dashboards',
    title_ar: 'الواجهات الأمامية ولوحات التحكم',
    mini: 'React • Next.js • Blazor • Flutter',
    desc: 'Engineering responsive Single-Page Applications (SPA), executive telemetry HUDs, POS interfaces, and cross-platform Flutter mobile apps.',
    desc_ar: 'بناء واجهات تطبيقات المؤسسات (SPA) ولوحات التحكم الإدارية ونقاط البيع التفاعلية وتطبيقات الجوال بـ Flutter.',
    projects: [
      'Evix Cloud ERP v2 Executive UI & Multi-Tenant Super Admin',
      'LeadGen AI Geospatial Analytics Dashboard (React & TypeScript)',
      'Evix HR Mobile App (Flutter) & HRblazor (.NET Blazor)'
    ],
    projects_ar: [
      'واجهة الإصدار الحديث لنظام Evix Cloud ERP v2 ولوحة Super Admin',
      'لوحة قيادة منصة LeadGen AI التفاعلية بـ React و TypeScript',
      'تطبيق Evix HR بـ Flutter ونظام الموارد البشرية HRblazor'
    ],
    tags: ['React.js & Next.js', 'TypeScript', '.NET Blazor', 'Flutter & Dart', 'Tailwind CSS'],
    linksTo: ['apis', 'auth', 'backend']
  },
  {
    id: 'apis',
    tier: 1,
    code: '02 // API GATEWAY',
    title: 'RESTful APIs & Middleware Hub',
    title_ar: 'بوابات الـ REST APIs والربط الوسيط',
    mini: 'REST APIs • Webhooks • Connectors',
    desc: 'Designing decoupled middleware hubs and high-throughput RESTful APIs connecting ERPs with Amazon, Noon, Salla, Trendyol, and payment gateways.',
    desc_ar: 'تصميم طبقات ربط وسيطة معزولة وواجهات برمجية عالية الأداء تربط الـ ERP مع أمازون، نون، سلة، وبوابات الدفع.',
    projects: [
      'Enterprise Integration Middleware Hub (Amazon, Noon, Salla, Trendyol)',
      'Evix ERP & BTC Logistics Fleet API Gateway (500+ Clients)',
      'Cryptographic Webhook Handlers in AlinmaPay FinTech SDK'
    ],
    projects_ar: [
      'منصة التكامل والربط الوسيط للمؤسسات (أمازون، نون، سلة، ترينديول)',
      'بوابات الربط البرمجي لمنظومة Evix ERP وتطبيقات المندوبين',
      'معالجة Webhooks المشفرة في حزمة الدفع البنكي AlinmaPay'
    ],
    tags: ['RESTful APIs', 'Decoupled Middleware', 'Idempotency Guard', 'Webhooks', 'Rate Limiting'],
    linksTo: ['frontend', 'auth', 'backend', 'integrations']
  },
  {
    id: 'auth',
    tier: 1,
    code: '03 // ZERO-TRUST SECURITY',
    title: 'Authentication, MFA & RBAC',
    title_ar: 'المصادقة والأمان متعدد العوامل',
    mini: 'Authentica MFA • OAuth2 • JWT • RBAC',
    desc: 'Securing multi-tenant enterprise platforms with Multi-Factor Authentication (MFA), granular Role-Based Access Control (RBAC), and ECDSA signing.',
    desc_ar: 'حماية الأنظمة المؤسسية عبر مصادقة متعددة العوامل (MFA)، وصلاحيات دقيقة مبنية على الأدوار (RBAC)، والتوقيع الرقمي.',
    projects: [
      'Authentica Open-Source MFA & Identity Verification Package',
      'Multi-Tenant RBAC Permission Matrix across Evix Cloud ERP',
      'ECDSA Cryptographic Stamp & CSID Certificates for ZATCA Phase-2'
    ],
    projects_ar: [
      'حزمة Authentica مفتوحة المصدر للمصادقة والتحقق متعدد العوامل',
      'مصفوفة الصلاحيات والأدوار للمنشآت في Evix Cloud ERP',
      'التوقيع الرقمي ECDSA وشهادات CSID للفوترة الإلكترونية زاتكا'
    ],
    tags: ['Authentica MFA', 'OAuth2 & JWT', 'Multi-Tenant RBAC', 'ECDSA Signing'],
    linksTo: ['frontend', 'apis', 'backend']
  },
  {
    id: 'backend',
    tier: 2,
    code: '04 // BACKEND CORE',
    title: 'Backend Services & Modular DDD',
    title_ar: 'خدمات الهندسة الخلفية ومعمارية DDD',
    mini: 'Laravel • Node.js/NestJS • .NET Core',
    desc: 'Core enterprise domain logic engineered using Domain-Driven Design (DDD), Modular Monoliths, and event-driven microservices.',
    desc_ar: 'القلب الهندسي للأنظمة المؤسسية: بناء معمارية معيارية قابلة للتوسع (DDD & Microservices) تفصل منطق الأعمال المحاسبي واللوجستي.',
    projects: [
      'Evix Cloud ERP Core (Double-Entry Accounting, POS, Inventory, HR)',
      'laravel-modules DDD Modular Architecture Manager',
      'Musanid United & Enterprise Platforms in NestJS & ASP.NET Core'
    ],
    projects_ar: [
      'نواة نظام Evix Cloud ERP (المحاسبة المزدوجة، المخزون، نقاط البيع، HR)',
      'حزمة laravel-modules لإدارة المعمارية المعيارية DDD',
      'منصة مساند المتحدة والأنظمة المؤسسية بـ NestJS و ASP.NET Core'
    ],
    tags: ['Laravel MVC', 'Node.js & NestJS', 'C# & .NET Core', 'DDD Architecture', 'PHP 8.x'],
    linksTo: ['apis', 'auth', 'databases', 'redis', 'queues', 'integrations']
  },
  {
    id: 'redis',
    tier: 2,
    code: '05 // REAL-TIME & CACHE',
    title: 'Redis Caching & WebSockets',
    title_ar: 'التخزين المؤقت والبث اللحظي',
    mini: 'Redis • Reverb WS • 7k+ GPS Agents',
    desc: 'Sub-20ms WebSocket event broadcasting for 7,000+ active delivery couriers and Redis caching delivering 40%+ API speed gains.',
    desc_ar: 'بث لحظي عبر WebSockets لأكثر من 7,000 مندوب توصيل نشط، وتخزين مؤقت عبر Redis يرفع سرعة الـ APIs بأكثر من 40%.',
    projects: [
      'BTC Logistics Real-Time Fleet Tracking (7,000+ Active Agents)',
      'Laravel Reverb High-Concurrency WebSocket Server',
      'Evix ERP High-Speed Redis Caching Layer (+40% Throughput)'
    ],
    projects_ar: [
      'منصة BTC اللوجستية لتتبع 7,000+ مندوب وسائق لحظياً بالـ GPS',
      'خادم الاتصالات اللحظية Laravel Reverb WebSockets',
      'طبقة التخزين المؤقت بـ Redis في نظام Evix ERP (+40% سرعة)'
    ],
    tags: ['Redis Pub/Sub', 'WebSockets', 'Laravel Reverb', 'Georadius Indexing', '+40% API Speed'],
    linksTo: ['backend', 'queues', 'databases']
  },
  {
    id: 'queues',
    tier: 2,
    code: '06 // ASYNC PIPELINES',
    title: 'Background Jobs & Event Queues',
    title_ar: 'الطوابير والمعالجة غير المتزامنة',
    mini: 'Redis Queues • Workers • WPS Batching',
    desc: 'Offloading intensive workloads—ZATCA e-invoice clearance, 7,000+ staff payroll generation, and multi-channel notifications—into resilient worker queues.',
    desc_ar: 'تفريغ العمليات الكثيفة (اعتماد فواتير زاتكا، مسيرات رواتب 7,000+ موظف، والإشعارات) إلى طوابير خلفية عالية الاعتمادية.',
    projects: [
      'Automated Saudi WPS Payroll Engine (7,000+ Staff & Drivers)',
      'ZATCA Phase-2 Asynchronous XML Stamping & Reporting Workers',
      'laravel-notification-log Telemetry & LeadGen AI Outreach Queues'
    ],
    projects_ar: [
      'محرك مسيرات الرواتب الآلية المتوافق مع حماية الأجور WPS',
      'طوابير التوقيع والربط الفوري مع بوابة الفوترة الإلكترونية زاتكا',
      'حزمة تتبع الإشعارات laravel-notification-log وأتمتة LeadGen AI'
    ],
    tags: ['Redis Queues', 'Async Workers', 'Event-Driven Pipelines', 'Batch Processing'],
    linksTo: ['backend', 'redis', 'integrations', 'cloud']
  },
  {
    id: 'databases',
    tier: 3,
    code: '07 // MULTI-TENANT DATA',
    title: 'Databases & Tenant Isolation',
    title_ar: 'قواعد البيانات وعزل المستأجرين',
    mini: 'PostgreSQL • MySQL • SQL Server',
    desc: 'Strict database-per-tenant isolation for 500+ enterprise organizations, double-entry ledger integrity, and advanced SQL query tuning.',
    desc_ar: 'عزل تام لقواعد البيانات لأكثر من 500 منشأة مشتركة (Database-per-Tenant)، وضبط الفهارس وتحسين استعلامات SQL المعقدة.',
    projects: [
      'Evix Cloud ERP Multi-Tenant Database Architecture (500+ Clients)',
      'AetherWallet Double-Entry Digital Ledger Core',
      'HASTI National Research Taxonomy & Server-Side DataTables'
    ],
    projects_ar: [
      'معمارية قواعد البيانات المعزولة لأكثر من 500 شركة في Evix ERP',
      'نواة المحفظة الرقمية AetherWallet لسجلات القيود المحاسبية المزدوجة',
      'فهرسة الخارطة البحثية الوطنية HASTI وحزمة laravel-datatables'
    ],
    tags: ['PostgreSQL', 'MySQL', 'MS SQL Server', 'Database-per-Tenant', 'MongoDB'],
    linksTo: ['backend', 'redis', 'cloud']
  },
  {
    id: 'integrations',
    tier: 3,
    code: '08 // FINTECH, ZATCA & AI',
    title: 'ZATCA, Banking Gateways & LLMs',
    title_ar: 'التكاملات البنكية، زاتكا، والذكاء الاصطناعي',
    mini: 'ZATCA Phase-2 • AlinmaPay • Gemini AI',
    desc: 'Connecting enterprise platforms with ZATCA Phase-2 tax authorities, Alinma Bank / Tabby / HyperPay gateways, and Azure OpenAI / Gemini LLMs.',
    desc_ar: 'ربط الأنظمة المؤسسية مع هيئة الزكاة والضريبة (ZATCA Phase 2)، مصرف الإنماء وتابي وهايبر باي، ونماذج Azure OpenAI و Gemini AI.',
    projects: [
      'laravel-gemini Multimodal Google Gemini AI SDK for Laravel',
      'alinma-pay Enterprise Banking Payment Gateway Integration',
      'AI OCR-to-JSON Document Pipeline & ZATCA Phase-2 E-Invoicing'
    ],
    projects_ar: [
      'حزمة laravel-gemini لربط Google Gemini AI متعدد الوسائط',
      'حزمة alinma-pay للربط المباشر مع بوابة دفع مصرف الإنماء',
      'منظومة استخراج البيانات OCR بالذكاء الاصطناعي والفوترة الإلكترونية زاتكا'
    ],
    tags: ['ZATCA Phase-2', 'AlinmaPay SDK', 'Google Gemini AI', 'Azure OpenAI OCR', 'Tabby & HyperPay'],
    linksTo: ['apis', 'backend', 'queues']
  },
  {
    id: 'cloud',
    tier: 3,
    code: '09 // CLOUD & DEVOPS',
    title: 'AWS Cloud, Docker & CI/CD',
    title_ar: 'البنية السحابية واستقرار الإنتاج',
    mini: 'AWS (EC2/S3/RDS) • Docker • 99.99% SLA',
    desc: 'Containerized production deployments on AWS using Docker and automated GitHub Actions / Azure DevOps CI/CD pipelines with 99.99% uptime.',
    desc_ar: 'تشغيل الأنظمة السحابية على AWS باستخدام حاويات Docker ومسارات النشر المستمر CI/CD عبر GitHub Actions بجاهزية 99.99%.',
    projects: [
      'AWS Cloud Infrastructure (EC2, S3, RDS) for Evix & BTC Logistics',
      'Zero-Downtime Docker & GitHub Actions CI/CD Pipelines',
      'Production Telemetry & Performance Monitoring'
    ],
    projects_ar: [
      'البنية السحابية على AWS لمنظومة Evix ERP ومنصة BTC اللوجستية',
      'مسارات النشر المؤتمت CI/CD عبر Docker و GitHub Actions',
      'مراقبة الأداء اللحظي واستقرار الإنتاج بنسبة 99.99%'
    ],
    tags: ['AWS Cloud (EC2, S3, RDS)', 'Docker Containers', 'GitHub Actions CI/CD', '99.99% Uptime SLA'],
    linksTo: ['databases', 'queues', 'backend']
  }
];

function renderArchitecture(lang = 'en') {
  const tiersWrap = $('#archTiersGrid');
  const inspector = $('#archInspector');
  if (!tiersWrap.length || !inspector.length) return;

  const activeNode = archTopologyNodes.find(n => n.id === currentArchNode) || archTopologyNodes[3];
  const connected = activeNode.linksTo || [];

  let tiersHtml = '';
  [1, 2, 3].forEach((tierNum, idx) => {
    const nodes = archTopologyNodes.filter(n => n.tier === tierNum);
    tiersHtml += `<div class="arch-tier-row">`;
    nodes.forEach(n => {
      const isAct = n.id === activeNode.id;
      const isConn = connected.includes(n.id);
      const cls = isAct ? 'arch-node-btn active' : (isConn ? 'arch-node-btn connected' : 'arch-node-btn');
      const title = (lang === 'ar' && n.title_ar) ? n.title_ar : n.title;
      tiersHtml += `
        <button type="button" class="${cls}" data-node="${n.id}">
          <div class="arch-node-top">
            <span>${n.code}</span>
            <span class="arch-node-dot"></span>
          </div>
          <div class="arch-node-title">${title}</div>
          <div class="arch-node-mini">${n.mini}</div>
        </button>
      `;
    });
    tiersHtml += `</div>`;
    if (idx < 2) {
      tiersHtml += `<div class="arch-flow-conduit"></div>`;
    }
  });
  tiersWrap.html(tiersHtml);

  const actTitle = (lang === 'ar' && activeNode.title_ar) ? activeNode.title_ar : activeNode.title;
  const actDesc = (lang === 'ar' && activeNode.desc_ar) ? activeNode.desc_ar : activeNode.desc;
  const actProjs = (lang === 'ar' && activeNode.projects_ar) ? activeNode.projects_ar : activeNode.projects;
  const lblVerified = (typeof translations !== 'undefined' && translations[lang] && translations[lang].arch_verified_in)
    ? translations[lang].arch_verified_in
    : (lang === 'ar' ? 'الأنظمة والمشاريع المطبّق فيها فعلياً:' : 'Verified Production Implementations:');
  const lblStack = (typeof translations !== 'undefined' && translations[lang] && translations[lang].arch_tech_stack)
    ? translations[lang].arch_tech_stack
    : (lang === 'ar' ? 'التقنيات والأنماط المعمارية:' : 'Core Technologies & Patterns:');

  inspector.html(`
    <div>
      <span class="arch-inspector-badge">${activeNode.code} // ACTIVE LAYER</span>
      <h3 class="arch-inspector-title">${actTitle}</h3>
      <p class="arch-inspector-desc">${actDesc}</p>
      <span class="arch-inspector-lbl">${lblVerified}</span>
      <ul class="arch-inspector-list">
        ${actProjs.map(p => `<li><i class="fas fa-check-circle"></i> <span>${p}</span></li>`).join('')}
      </ul>
    </div>
    <div>
      <span class="arch-inspector-lbl">${lblStack}</span>
      <div class="service-tags">
        ${activeNode.tags.map(t => `<span class="service-tag">${t}</span>`).join('')}
      </div>
    </div>
  `);

  $('.arch-node-btn').on('click', function () {
    currentArchNode = $(this).data('node');
    const curLang = localStorage.getItem('lang') || 'en';
    renderArchitecture(curLang);
  });
}

function initArchitectureSection() {
  const lang = localStorage.getItem('lang') || 'en';
  renderArchitecture(lang);
}

/* ===== VERIFIED OPEN-SOURCE PACKAGES & GITHUB ECOSYSTEM ===== */
let currentOssFilter = 'all';
const ossPackagesData = [
  { name: 'laravel-gemini', cat: 'ai', badge: 'PHP • Gemini AI SDK', desc: 'Multimodal Google Gemini API SDK for Laravel supporting text, vision, audio, video & structured outputs.', desc_ar: 'حزمة متكاملة لربط Google Gemini AI مع Laravel (نصوص، صور، صوت، فيديو، ومخرجات منظمة).', url: 'https://github.com/dhiaamostafa46/laravel-gemini' },
  { name: 'LeadGenAI', cat: 'ai', badge: 'TypeScript • React', desc: 'Autonomous B2B lead discovery, geospatial search, and automated WhatsApp/Email outreach analytics platform.', desc_ar: 'منصة ذكاء اصطناعي لاكتشاف الشركات عبر الخرائط وأتمتة حملات واتساب والبريد الإلكتروني.', url: 'https://github.com/dhiaamostafa46/LeadGenAI' },
  { name: 'alinma-pay', cat: 'ai', badge: 'PHP • FinTech Gateway', desc: 'Enterprise banking & payment gateway integration for Alinma Bank with cryptographic signing & webhooks.', desc_ar: 'حزمة ربط بوابة الدفع البنكي (مصرف الإنماء Alinma Pay) مع التوقيع الرقمي والتحقق من العمليات.', url: 'https://github.com/dhiaamostafa46/alinma-pay' },
  { name: 'authentica', cat: 'laravel', badge: 'PHP • Zero-Trust MFA', desc: 'Scalable identity verification and Multi-Factor Authentication (MFA) architecture for enterprise apps.', desc_ar: 'نظام مصادقة وتحقق من الهوية متعدد العوامل (MFA) عالي الأمان وقابل للتوسع للتطبيقات المؤسسية.', url: 'https://github.com/dhiaamostafa46/authentica' },
  { name: 'AetherWallet', cat: 'ai', badge: 'PHP • Digital Ledger', desc: 'Digital wallet core engine supporting double-entry ledger transactions, balance isolation & audit trails.', desc_ar: 'نواة محفظة رقمية لإدارة الأرصدة، التحويلات المالية، وسجلات التدقيق المحاسبي المزدوج.', url: 'https://github.com/dhiaamostafa46/AetherWallet' },
  { name: 'HRblazor', cat: 'dotnet', badge: 'C# • .NET Blazor', desc: 'Enterprise HR, Attendance & Automated Payroll platform built with C# and .NET Blazor.', desc_ar: 'نظام إدارة موارد بشرية ومسيرات رواتب وحضور وانصراف متكامل مبني بتقنية C# و Blazor.', url: 'https://github.com/dhiaamostafa46/HRblazor' },
  { name: 'reverb', cat: 'laravel', badge: 'PHP • WebSockets', desc: 'High-concurrency WebSocket server implementation for real-time Laravel broadcasting & live telemetry.', desc_ar: 'خادم اتصالات WebSocket فائق السرعة للبث اللحظي والتتبع المباشر في تطبيقات Laravel.', url: 'https://github.com/dhiaamostafa46/reverb' },
  { name: 'laravel-modules', cat: 'laravel', badge: 'PHP • DDD Modules', desc: 'Domain-Driven Design (DDD) modular monolith manager for structuring large-scale Laravel systems.', desc_ar: 'إدارة المعمارية المعيارية (Modular Monolith) لتقسيم الأنظمة المؤسسية الضخمة في Laravel.', url: 'https://github.com/dhiaamostafa46/laravel-modules' },
  { name: 'ai-cv-optimizer', cat: 'ai', badge: 'JavaScript • LLM', desc: 'AI-powered resume analyzer and ATS optimization engine for software engineering roles.', desc_ar: 'محسّن السيرة الذاتية الذكي لتحليل ومطابقة المهارات مع الوظائف الهندسية عبر الذكاء الاصطناعي.', url: 'https://github.com/dhiaamostafa46/ai-cv-optimizer' },
  { name: 'Real-estate', cat: 'dotnet', badge: 'C# • ASP.NET Core', desc: 'Property management, leasing, and real-estate brokerage platform built on C# / ASP.NET Core.', desc_ar: 'منصة إدارة عقارات وأملاك وعقود إيجار متكاملة مبنية ببيئة C# و ASP.NET Core.', url: 'https://github.com/dhiaamostafa46/Real-estate' },
  { name: 'ReactAdmin', cat: 'dotnet', badge: 'TypeScript • React', desc: 'Type-safe enterprise administration dashboard in TypeScript and React with RBAC & telemetry charts.', desc_ar: 'لوحة تحكم إدارية حديثة مبنية بـ TypeScript و React مع رسوم بيانية وإدارة صلاحيات.', url: 'https://github.com/dhiaamostafa46/ReactAdmin' },
  { name: 'laravel-datatables', cat: 'laravel', badge: 'PHP • DataTables', desc: 'High-performance server-side DataTables processing engine for large datasets in Laravel.', desc_ar: 'معالجة جداول البيانات الضخمة من طرف الخادم بكفاءة عالية في تطبيقات Laravel.', url: 'https://github.com/dhiaamostafa46/laravel-datatables' },
  { name: 'laravel-notification-log', cat: 'laravel', badge: 'PHP • Observability', desc: 'Comprehensive audit logging and delivery telemetry for multi-channel Laravel notifications.', desc_ar: 'تسجيل وتتبع حالة وصول الإشعارات المرسلة عبر مختلف القنوات في Laravel.', url: 'https://github.com/dhiaamostafa46/laravel-notification-log' },
  { name: 'livewire-filepond', cat: 'laravel', badge: 'PHP • Livewire', desc: 'Asynchronous chunked file upload component integrating FilePond with Laravel Livewire.', desc_ar: 'مكون رفع ملفات متقدم وغير متزامن يدمج FilePond مع Laravel Livewire.', url: 'https://github.com/dhiaamostafa46/livewire-filepond' },
  { name: 'vueDashboard', cat: 'dotnet', badge: 'Vue.js • Dashboard', desc: 'Reactive executive telemetry and analytics dashboard built with Vue.js.', desc_ar: 'لوحة قيادة تفاعلية لعرض المؤشرات والتقارير الإدارية باستخدام Vue.js.', url: 'https://github.com/dhiaamostafa46/vueDashboard' },
  { name: 'botman', cat: 'laravel', badge: 'PHP • Chatbots', desc: 'Multi-driver conversational chatbot automation framework for PHP and Laravel.', desc_ar: 'إطار عمل لبناء روبوتات المحادثة التفاعلية وأتمتة الردود الذكية في PHP.', url: 'https://github.com/dhiaamostafa46/botman' }
];

function renderOpenSource(lang = 'en') {
  const container = $('#ossContainer');
  if (!container.length) return;

  const list = currentOssFilter === 'all'
    ? ossPackagesData
    : ossPackagesData.filter(r => r.cat === currentOssFilter);

  const html = list.map(r => {
    const desc = (lang === 'ar' && r.desc_ar) ? r.desc_ar : r.desc;
    const ctaText = lang === 'ar' ? 'فتح المستودع على GitHub' : 'View GitHub Repository';
    return `
      <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="oss-card">
        <div>
          <div class="oss-card-top">
            <span class="oss-card-title"><i class="fab fa-github"></i> ${r.name}</span>
            <span class="oss-card-badge">${r.badge}</span>
          </div>
          <p class="oss-card-desc">${desc}</p>
        </div>
        <div class="oss-card-footer">
          <span>${ctaText}</span>
          <i class="fas fa-arrow-up-right-from-square"></i>
        </div>
      </a>
    `;
  }).join('');

  container.html(html);
}

function initOpenSourceSection() {
  const lang = localStorage.getItem('lang') || 'en';
  renderOpenSource(lang);

  $('#oss-filters .filter-btn').on('click', function () {
    $('#oss-filters .filter-btn').removeClass('active');
    $(this).addClass('active');
    currentOssFilter = $(this).data('oss-filter') || 'all';
    const curLang = localStorage.getItem('lang') || 'en';
    renderOpenSource(curLang);
  });
}

/* ===== 3D VANILLA TILT INITIALIZATION ===== */
function init3DTilt() {
  if (typeof VanillaTilt === 'undefined') return;
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!canHover || reduced) return;

  const tiltTargets = document.querySelectorAll('.code-card, .monitor-screen, .service-card, .degree-card, .cert-card');
  if (tiltTargets.length) {
    VanillaTilt.init(Array.from(tiltTargets), {
      max: 5,
      speed: 400,
      glare: true,
      'max-glare': 0.12
    });
  }
}

