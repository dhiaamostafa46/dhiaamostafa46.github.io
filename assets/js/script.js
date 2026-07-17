$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
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

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // 3D Tilt initialization for static cards
    VanillaTilt.init(document.querySelectorAll(".service-card, .experience .box, .contact-info-card"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2
    });

});

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Dhiaa Mostafa";
        $("#favicon").attr("href", "assets/images/favicon.png");
    } else {
        document.title = "Come back! | Dhiaa Mostafa";
        $("#favicon").attr("href", "assets/images/favicon.png");
    }
});

// Typed.js effect
var typed = new Typed(".typing-text", {
    strings: [
        " PHP, Laravel &amp; Node.js backends",
        " React, Next.js &amp; Tailwind CSS",
        " AWS Cloud &amp; DevOps",
        " Microservices architecture",
        " Event-Driven design",
        " High-traffic production systems"
    ],
    loop: true,
    typeSpeed: 45,
    backSpeed: 25,
    backDelay: 1400,
});


let stackData = [
  {
    "category": "Backend Engineering",
    "items": [
      { "name": "PHP (Laravel)", "icon": "https://img.icons8.com/color/48/000000/laravel.png", "name_ar": "PHP (Laravel)" },
      { "name": "Node.js & Express.js", "icon": "https://img.icons8.com/color/48/000000/nodejs.png", "name_ar": "Node.js & Express.js" },
      { "name": "RESTful API Design & GraphQL", "icon": "https://img.icons8.com/color/48/000000/api-settings.png", "name_ar": "تصميم واجهات RESTful و GraphQL" },
      { "name": "WebSockets", "icon": "https://img.icons8.com/color/48/000000/network.png", "name_ar": "WebSockets" },
      { "name": "Auth & RBAC", "icon": "https://img.icons8.com/color/48/000000/security-checked.png", "name_ar": "المصادقة والصلاحيات (RBAC)" },
      { "name": "Microservices", "icon": "https://img.icons8.com/color/48/000000/module.png", "name_ar": "Microservices" },
      { "name": "Event-Driven Architecture", "icon": "https://img.icons8.com/color/48/000000/process.png", "name_ar": "المعمارية القائمة على الأحداث" }
    ],
    "category_ar": "هندسة الواجهات الخلفية (Backend)"
  },
  {
    "category": "Data & Persistence",
    "items": [
      { "name": "PostgreSQL", "icon": "https://img.icons8.com/color/48/000000/postgreesql.png", "name_ar": "PostgreSQL" },
      { "name": "MySQL", "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png", "name_ar": "MySQL" },
      { "name": "MongoDB", "icon": "https://img.icons8.com/color/48/000000/mongodb.png", "name_ar": "MongoDB" },
      { "name": "Redis (Caching & Queues)", "icon": "https://img.icons8.com/color/48/000000/redis.png", "name_ar": "Redis (تخزين مؤقت وطوابير)" },
      { "name": "Database Design & Opt.", "icon": "https://img.icons8.com/color/48/000000/database.png", "name_ar": "تصميم وتحسين قواعد البيانات" },
      { "name": "Multi-Tenant Modeling", "icon": "https://img.icons8.com/color/48/000000/schema.png", "name_ar": "نمذجة تعدد المستأجرين" }
    ],
    "category_ar": "قواعد البيانات والتخزين"
  },
  {
    "category": "Enterprise Integrations",
    "items": [
      { "name": "ERP & CRM Integrations", "icon": "https://img.icons8.com/color/48/000000/business-network.png", "name_ar": "تكامل أنظمة ERP و CRM" },
      { "name": "Payment Gateways", "icon": "https://img.icons8.com/color/48/000000/bank-cards.png", "name_ar": "بوابات الدفع" },
      { "name": "Logistics Systems", "icon": "https://img.icons8.com/color/48/000000/in-transit.png", "name_ar": "أنظمة الخدمات اللوجستية" },
      { "name": "Third-Party APIs", "icon": "https://img.icons8.com/color/48/000000/api-settings.png", "name_ar": "واجهات برمجية لجهات خارجية" },
      { "name": "ZATCA E-Invoicing", "icon": "https://img.icons8.com/color/48/000000/invoice.png", "name_ar": "الفوترة الإلكترونية (زاتكا)" },
      { "name": "Event-Driven Workflows", "icon": "https://img.icons8.com/color/48/000000/workflow.png", "name_ar": "مسارات العمل القائمة على الأحداث" },
      { "name": "Retry & Resiliency", "icon": "https://img.icons8.com/color/48/000000/shield.png", "name_ar": "المرونة وإعادة المحاولة" }
    ],
    "category_ar": "تكامل أنظمة الشركات"
  },
  {
    "category": "Cloud & DevOps",
    "items": [
      { "name": "AWS (EC2, S3, RDS)", "icon": "https://img.icons8.com/color/48/000000/amazon-web-services.png", "name_ar": "AWS (EC2, S3, RDS)" },
      { "name": "Docker", "icon": "assets/images/skills/docker.png", "name_ar": "Docker" },
      { "name": "CI/CD (GitHub/GitLab)", "icon": "https://img.icons8.com/color/48/000000/workflow.png", "name_ar": "CI/CD (GitHub/GitLab)" },
      { "name": "Git", "icon": "https://img.icons8.com/color/48/000000/git.png", "name_ar": "Git" },
      { "name": "Linux", "icon": "https://img.icons8.com/color/48/000000/linux.png", "name_ar": "Linux" }
    ],
    "category_ar": "الحوسبة السحابية و DevOps"
  },
  {
    "category": "AI & Intelligent Automation",
    "items": [
      { "name": "OpenAI (GPT)", "icon": "https://img.icons8.com/color/48/000000/artificial-intelligence.png", "name_ar": "OpenAI (GPT)" },
      { "name": "Google Gemini", "icon": "https://img.icons8.com/color/48/000000/google-logo.png", "name_ar": "Google Gemini" },
      { "name": "Anthropic Claude APIs", "icon": "https://img.icons8.com/color/48/000000/robot.png", "name_ar": "Anthropic Claude APIs" },
      { "name": "AI Workflow Automation", "icon": "https://img.icons8.com/color/48/000000/flow-chart.png", "name_ar": "أتمتة مسارات عمل الذكاء الاصطناعي" },
      { "name": "Prompt Engineering & RAG", "icon": "https://img.icons8.com/color/48/000000/brain.png", "name_ar": "هندسة الأوامر (Prompt) و RAG" },
      { "name": "Document Processing", "icon": "https://img.icons8.com/color/48/000000/document.png", "name_ar": "معالجة المستندات" }
    ],
    "category_ar": "الذكاء الاصطناعي والأتمتة"
  },
  {
    "category": "Frontend & Mobile",
    "items": [
      { "name": "React.js", "icon": "https://img.icons8.com/color/48/000000/react-native.png", "name_ar": "React.js" },
      { "name": "TypeScript & JS", "icon": "https://img.icons8.com/color/48/000000/typescript.png", "name_ar": "TypeScript & JS" },
      { "name": "Flutter", "icon": "https://img.icons8.com/color/48/000000/flutter.png", "name_ar": "Flutter" },
      { "name": "Firebase & Supabase", "icon": "https://img.icons8.com/color/48/000000/firebase.png", "name_ar": "Firebase & Supabase" }
    ],
    "category_ar": "الواجهات الأمامية والموبايل"
  },
  {
    "category": "Software Architecture",
    "items": [
      { "name": "SaaS Multi-Tenancy", "icon": "https://img.icons8.com/color/48/000000/cloud-network.png", "name_ar": "SaaS متعدد المستأجرين" },
      { "name": "Distributed Systems", "icon": "https://img.icons8.com/color/48/000000/network.png", "name_ar": "الأنظمة الموزعة" },
      { "name": "Scalable System Design", "icon": "https://img.icons8.com/color/48/000000/expand.png", "name_ar": "تصميم الأنظمة القابلة للتوسع" },
      { "name": "Clean Architecture", "icon": "https://img.icons8.com/color/48/000000/architecture.png", "name_ar": "المعمارية النظيفة" },
      { "name": "SDLC", "icon": "https://img.icons8.com/color/48/000000/process.png", "name_ar": "دورة حياة تطوير البرمجيات" }
    ],
    "category_ar": "معمارية البرمجيات"
  }
];

let projectsData = [
  { "name": "Evix ERP Integrations", "desc": "Architectural design and API integration of Evix ERP for enterprise clients via RESTful APIs.", "image": "./projects/img/2026-05-16_evix-sa-ar_01.png", "category": "Enterprise Solutions", "links": { "view": "#", "code": "#" }, "name_ar": "تكامل نظام Evix ERP", "desc_ar": "التصميم المعماري وربط واجهات Evix ERP للشركات عبر RESTful APIs." },
  { "name": "Musaned United", "desc": "Musaned United platform using NestJS and Next.js, delivering a scalable production-ready solution.", "image": "./projects/img/2025-02-05_musanid-sa_01.png", "category": "Full Stack", "links": { "view": "#", "code": "#" }, "name_ar": "مساند المتطورة", "desc_ar": "منصة مساند المتطورة باستخدام NestJS و Next.js لتقديم حلول متكاملة." },
  { "name": "Eyein Platform", "desc": "Enterprise web platforms and digital solutions for corporate, nonprofit, and commercial organizations.", "image": "./projects/img/2026-05-16_eyein-sa-home_01.png", "category": "Enterprise Solutions", "links": { "view": "#", "code": "#" }, "name_ar": "منصة آي إن", "desc_ar": "منصات الويب للمؤسسات والحلول الرقمية للشركات والمنظمات." },
  { "name": "Eyein Technology", "desc": "Corporate website and digital presence for Eyein Technology.", "image": "./projects/img/2026-05-16_eyeintec-home_01.png", "category": "Full Stack", "links": { "view": "#", "code": "#" }, "name_ar": "آي إن لتقنية المعلومات", "desc_ar": "موقع الشركات والتواجد الرقمي لشركة آي إن لتقنية المعلومات." },
  { "name": "Eyein Code", "desc": "Digital platform for Eyein Code.", "image": "./projects/img/2026-05-16_eyeincode_01.png", "category": "Full Stack", "links": { "view": "#", "code": "#" }, "name_ar": "آي إن كود", "desc_ar": "المنصة الرقمية لشركة آي إن كود." },
  { "name": "Watan Tumuh Foundation", "desc": "Digital presence and platform for Watan Tumuh Foundation.", "image": "./projects/img/2026-05-16_watantumuh-org-sa_01.png", "category": "Full Stack", "links": { "view": "#", "code": "#" }, "name_ar": "مؤسسة وطن طموح", "desc_ar": "التواجد الرقمي والمنصة الخاصة بمؤسسة وطن طموح." },
  { "name": "ACTES Group", "desc": "Enterprise website and platform for ACTES Group.", "image": "./projects/img/2024-07-03_actesgroup_01.png", "category": "Enterprise Solutions", "links": { "view": "#", "code": "#" }, "name_ar": "مجموعة أكتس", "desc_ar": "موقع الشركة والمنصة الخاصة بمجموعة أكتس." },
  { "name": "Barmgely", "desc": "Custom web application and business portal for Barmgely.", "image": "./projects/img/2024-07-03_barmgely_01.png", "category": "Full Stack", "links": { "view": "#", "code": "#" }, "name_ar": "برمجلي", "desc_ar": "تطبيق ويب مخصص وبوابة أعمال لمنصة برمجلي." },
  { "name": "Miran Edu", "desc": "Educational platform and management system for Miran.", "image": "./projects/img/2024-07-03_miranedu_01.png", "category": "Full Stack", "links": { "view": "#", "code": "#" }, "name_ar": "ميران التعليمية", "desc_ar": "منصة تعليمية ونظام إدارة لميران." },
  { "name": "HASTI Research Priorities", "desc": "Research priorities portal for HASTI.", "image": "./projects/img/2024-07-03_research-priorities-hasti-gov-ye_01.png", "category": "Enterprise Solutions", "links": { "view": "#", "code": "#" }, "name_ar": "الأولويات البحثية - HASTI", "desc_ar": "بوابة الأولويات البحثية للهيئة العليا للعلوم." },
  { "name": "HASTI Portal 2", "desc": "Secondary view for HASTI research priorities.", "image": "./projects/img/2024-07-03_research-priorities-hasti-gov-ye_02.png", "category": "Enterprise Solutions", "links": { "view": "#", "code": "#" }, "name_ar": "بوابة HASTI (2)", "desc_ar": "عرض إضافي لبوابة الأولويات البحثية." },
  { "name": "Eyein Lenses", "desc": "E-commerce platform for Eyein Lenses.", "image": "./projects/img/2024-07-07_lenses-eyein-sa_01.png", "category": "E-commerce", "links": { "view": "#", "code": "#" }, "name_ar": "عدسات آي إن", "desc_ar": "منصة التجارة الإلكترونية لعدسات آي إن." },
  { "name": "Evix ERP Admin Dashboard", "desc": "Admin dashboard for Evix ERP platform.", "image": "./projects/img/2026-05-16_evix-sa-ar-admin_01.png", "category": "Enterprise Solutions", "links": { "view": "#", "code": "#" }, "name_ar": "لوحة تحكم Evix ERP", "desc_ar": "لوحة تحكم للمسؤولين لمنصة Evix ERP." },
  { "name": "SaaS Logistics Platform", "desc": "Multi-tenant SaaS logistics platform.", "image": "./projects/img/2026-05-16_127-0-0-1-5566_01.png", "category": "Enterprise Solutions", "links": { "view": "#", "code": "#" }, "name_ar": "منصة لوجستية SaaS", "desc_ar": "منصة لوجستية متعددة المستأجرين (SaaS)." },
  { "name": "HR Management System", "desc": "HR Management System covering automated payroll.", "image": "./projects/img/2026-05-16_127-0-0-1-5566_02.png", "category": "Enterprise Solutions", "links": { "view": "#", "code": "#" }, "name_ar": "نظام إدارة الموارد البشرية", "desc_ar": "نظام شامل لإدارة الموارد البشرية." },
  { "name": "Project Dashboard", "desc": "Advanced project dashboard and management tool.", "image": "./projects/img/2024-07-06_capture-11_01.png", "category": "Full Stack", "links": { "view": "#", "code": "#" }, "name_ar": "لوحة إدارة المشاريع", "desc_ar": "لوحة متقدمة لإدارة المشاريع والأعمال." },
  { "name": "E-commerce System", "desc": "Multi-vertical e-commerce platform integration.", "image": "./projects/img/2024-07-06_capture-3_01.png", "category": "Full Stack", "links": { "view": "#", "code": "#" }, "name_ar": "نظام التجارة الإلكترونية", "desc_ar": "منصة تجارة إلكترونية متعددة القطاعات." },
  { "name": "Booking System", "desc": "Integrated booking and reservation system.", "image": "./projects/img/2024-07-06_capture-4_01.png", "category": "Enterprise Solutions", "links": { "view": "#", "code": "#" }, "name_ar": "نظام الحجوزات", "desc_ar": "نظام متكامل للحجوزات وإدارة المواعيد." },
  { "name": "School Management System", "desc": "School Management System platform.", "image": "./projects/img/2024-07-06_capture-6_01.png", "category": "Mobile App", "links": { "view": "#", "code": "#" }, "name_ar": "نظام إدارة المدارس", "desc_ar": "نظام إدارة المدارس." },
  { "name": "Evix SA v1", "desc": "Previous version of Evix SA platform.", "image": "./projects/img/2024-07-07_evix-sa-ar_01.png", "category": "Enterprise Solutions", "links": { "view": "#", "code": "#" }, "name_ar": "منصة Evix الإصدار الأول", "desc_ar": "الإصدار السابق من منصة Evix." },
  { "name": "Eyein SA v1", "desc": "Previous version of Eyein SA.", "image": "./projects/img/2024-07-07_eyein-sa-home_01.png", "category": "Enterprise Solutions", "links": { "view": "#", "code": "#" }, "name_ar": "منصة آي إن الإصدار الأول", "desc_ar": "الإصدار السابق لمنصة آي إن." },
  { "name": "Eyeintec v1", "desc": "Previous version of Eyeintec.", "image": "./projects/img/2024-07-07_eyeintec_01.png", "category": "Full Stack", "links": { "view": "#", "code": "#" }, "name_ar": "آي إن لتقنية المعلومات الإصدار الأول", "desc_ar": "موقع شركة آي إن لتقنية المعلومات (سابقاً)." },
  { "name": "System UI", "desc": "System UI screenshot.", "image": "./projects/img/2026-05-09_screenshot_01.jpg", "category": "Full Stack", "links": { "view": "#", "code": "#" }, "name_ar": "واجهة النظام", "desc_ar": "واجهة مستخدم لأحد الأنظمة المطورة." },
  { "name": "Restaurant Management", "desc": "Restaurant Management System dashboard.", "image": "./projects/img/screencapture-127-0-0-1-5566-2026-05-16-18_09_28.png", "category": "Full Stack", "links": { "view": "#", "code": "#" }, "name_ar": "إدارة المطاعم", "desc_ar": "لوحة تحكم نظام إدارة المطاعم." }
];

async function fetchData() {
    // Data is now embedded directly above to avoid local CORS issues
    return Promise.resolve();
}

function showSkills(lang = "en") {
    let skillsContainer = document.getElementById("skillsContainer");
    let html = "";
    stackData.forEach(group => {
        const catName = lang === "ar" && group.category_ar ? group.category_ar : group.category;
        html += `
        <div class="stack-group">
          <p class="stack-group-title">${catName}</p>
          <div class="stack-chips">
            ${group.items.map(item => {
                const itemName = lang === "ar" && item.name_ar ? item.name_ar : item.name;
                return `
                <span class="stack-chip">
                  <img src="${item.icon}" alt="${itemName}" />
                  ${itemName}
                </span>`;
            }).join("")}
          </div>
        </div>`;
    });
    skillsContainer.innerHTML = html;

    // 3D Tilt for dynamically loaded stack-groups
    VanillaTilt.init(document.querySelectorAll(".stack-group"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2
    });
}

function showProjects(lang = "en") {
    let projectsContainer = document.getElementById("projectsContainer");
    let projectHTML = "";
    projectsData
        .filter(project => project.category !== "android")
        .forEach(project => {
            const pName = lang === "ar" && project.name_ar ? project.name_ar : project.name;
            const pDesc = lang === "ar" && project.desc_ar ? project.desc_ar : project.desc;
            const viewText = lang === "ar" ? "عرض" : "View";
            projectHTML += `
        <div class="box tilt">
          <img draggable="false" src="${project.image}" alt="${pName}" />
          <div class="content">
            <div class="tag">
              <h3>${pName}</h3>
            </div>
            <div class="desc">
              <p>${pDesc}</p>
              <div class="btns">
                <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> ${viewText}</a>
              </div>
            </div>
          </div>
        </div>`;
        });
    projectsContainer.innerHTML = projectHTML;

    VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 8 });
    srtop.reveal('.work .box', { interval: 200 });
}

fetchData().then(() => {
    const currentLang = localStorage.getItem("lang") || "en";
    showSkills(currentLang);
    showProjects(currentLang);
});

document.addEventListener('languageChanged', (e) => {
    showSkills(e.detail.lang);
    showProjects(e.detail.lang);
});

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 800,
    reset: false,
    rotate: { x: 30, y: 0, z: 0 },
    scale: 0.95
});

/* Hero */
srtop.reveal('.home .greeting', { delay: 100 });
srtop.reveal('.home .content h2', { delay: 200 });
srtop.reveal('.home .content .hero-subtitle', { delay: 300 });
srtop.reveal('.home .content .hero-typed-line', { delay: 350 });
srtop.reveal('.home .hero-btns', { delay: 450 });
srtop.reveal('.home .socials', { delay: 500 });
srtop.reveal('.home .hero-widget', { delay: 300, origin: 'right' });

/* About */
srtop.reveal('.about .image', { delay: 200, origin: 'left' });
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 250 });
srtop.reveal('.about .stats-row', { delay: 300 });
srtop.reveal('.about .stat-item', { interval: 100 });
srtop.reveal('.about .profile-intro', { delay: 350 });
srtop.reveal('.about .resumebtn', { delay: 400 });

/* Services */
srtop.reveal('.service-card', { interval: 120 });

/* Skills */
srtop.reveal('.stack-panel', { delay: 200 });
srtop.reveal('.stack-group', { interval: 100 });

/* Education */
srtop.reveal('.education .box', { interval: 250 });

/* Certifications */
srtop.reveal('.cert-card', { interval: 150 });

/* Experience */
srtop.reveal('.experience .container', { interval: 250 });

/* Testimonials */
srtop.reveal('.testimonial-card', { interval: 180 });

/* Contact */
srtop.reveal('.hire-cta-banner', { delay: 200 });
srtop.reveal('.contact-info-card', { interval: 150 });
srtop.reveal('.contact .contact-image', { delay: 300, origin: 'right' });
