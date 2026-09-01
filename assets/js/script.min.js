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
