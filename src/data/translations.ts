export type TranslationKey = keyof typeof translations.en;
export const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "Philosophy",
    nav_projects: "Case Studies",
    nav_services: "Expertise",
    nav_stack: "Tech Stack",
    nav_ai: "AI Operations",
    nav_contact: "Contact",
    nav_status: "Available for New Projects | Riyadh, KSA",
    nav_latency: "Based in KSA",
    // Hero
    hero_status: "Senior Technical Lead",
    hero_title: "Architecting Enterprise Systems & AI-Driven Workflows",
    hero_sub: "Specialized in high-concurrency SaaS platforms, complex ERP integrations, and operational AI. I build scalable back-end solutions that drive real business operations.",
    cta_primary: "Discuss Your Project",
    cta_secondary: "View Systems Catalog",
    // Core Metrics
    metric_erp_title: "5+ Years",
    metric_erp_desc: "Engineering Experience",
    metric_fleet_title: "500+",
    metric_fleet_desc: "ERP Integrations Deployed",
    metric_latency_title: "99.9%",
    metric_latency_desc: "Production Uptime",
    metric_uptime_title: "High Concurrency",
    metric_uptime_desc: "Zero Data Loss Architecture",
    // Capability Domains
    dom_title: "Core Expertise",
    dom_sub: "Solving complex operational bottlenecks through robust system architecture.",
    dom_erp_title: "ERP & Accounting Systems",
    dom_erp_desc: "Designing secure ledger journals, invoice postings, stock management, cash reconciliations, and automatic payouts.",
    dom_api_title: "Enterprise Integrations & APIs",
    dom_api_desc: "Connecting core systems to payment gateways, shipping carriers, WhatsApp APIs, and local tax authorities (ZATCA).",
    dom_saas_title: "Multi-tenant SaaS Platforms",
    dom_saas_desc: "Architecting applications featuring database-level tenant isolation, advanced role-based access control, and subscription billing.",
    // AI Section
    ai_title: "AI as an Operational Engine",
    ai_sub: "Integrating advanced LLM capabilities directly into your workflows to automate data ingestion and accelerate decision-making.",
    ai_invoice_title: "Intelligent Document Parsing",
    ai_invoice_desc: "Automatically extracting invoice totals, line items, and VAT values from PDFs into structured, actionable database records.",
    ai_intent_title: "Intent-to-Action Automation",
    ai_intent_desc: "Parsing incoming support messages to generate tickets, alter delivery statuses, or trigger workflows automatically.",
    ai_assist_title: "Conversational Analytics",
    ai_assist_desc: "Creating natural language interfaces that allow operators to query complex sales metrics effortlessly.",
    // Footer
    foot_log: "Committed to delivering engineering excellence.",
    foot_copy: "© 2026 Dhiaa Mostafa. Senior Technical Lead."
  },
  ar: {
    // Navigation
    nav_home: "الرئيسية",
    nav_about: "الفلسفة الهندسية",
    nav_projects: "دراسات الحالة",
    nav_services: "الخبرات",
    nav_stack: "التقنيات",
    nav_ai: "عمليات الذكاء الاصطناعي",
    nav_contact: "تواصل معي",
    nav_status: "متاح لمشاريع جديدة | الرياض، السعودية",
    nav_latency: "مقيم في السعودية",
    // Hero
    hero_status: "قائد تقني أول",
    hero_title: "هندسة أنظمة المؤسسات وأتمتة العمليات بالذكاء الاصطناعي",
    hero_sub: "متخصص في بناء منصات SaaS عالية التزامن، تكاملات أنظمة ERP المعقدة، والذكاء الاصطناعي التشغيلي. أبني حلول خلفية (Back-end) قابلة للتوسع تقود عمليات الشركات الحقيقية.",
    cta_primary: "ابدأ مشروعك",
    cta_secondary: "استعراض المشاريع",
    // Core Metrics
    metric_erp_title: "+5 سنوات",
    metric_erp_desc: "خبرة هندسية",
    metric_fleet_title: "+500",
    metric_fleet_desc: "عملية ربط ERP ناجحة",
    metric_latency_title: "99.9%",
    metric_latency_desc: "معدل استقرار التشغيل",
    metric_uptime_title: "تزامن عالي",
    metric_uptime_desc: "معمارية تضمن عدم فقدان البيانات",
    // Capability Domains
    dom_title: "مجالات التخصص",
    dom_sub: "حل العوائق التشغيلية المعقدة من خلال هندسة أنظمة قوية.",
    dom_erp_title: "أنظمة الـ ERP والعمليات المالية",
    dom_erp_desc: "تطوير محركات القيود المحاسبية، إصدار الفواتير، جرد المخازن، تسوية الخزائن، والمدفوعات التلقائية.",
    dom_api_title: "تكاملات الأنظمة والـ APIs",
    dom_api_desc: "ربط الأنظمة الخلفية ببوابات الدفع، شركات الخدمات اللوجستية، الفوترة الإلكترونية (هيئة الزكاة)، والـ WhatsApp API.",
    dom_saas_title: "منصات الـ SaaS متعددة العملاء",
    dom_saas_desc: "بناء معمارية برمجية تدعم العزل الكامل لبيانات المستخدمين، وإدارة الصلاحيات المتقدمة، وأنظمة الاشتراكات.",
    // AI Section
    ai_title: "الذكاء الاصطناعي كمحرك أساسي",
    ai_sub: "دمج قدرات الذكاء الاصطناعي المتقدمة مباشرة في بيئة عملك لأتمتة إدخال البيانات وتسريع عملية اتخاذ القرار.",
    ai_invoice_title: "التحليل الذكي للمستندات",
    ai_invoice_desc: "استخراج بيانات الفواتير والضرائب تلقائياً من ملفات PDF وتحويلها إلى مدخلات مهيكلة قابلة للمعالجة.",
    ai_intent_title: "أتمتة العمليات بناءً على السياق",
    ai_intent_desc: "تحليل رسائل الدعم الفني لتوليد تذاكر تشغيلية أو اتخاذ إجراءات فورية بشكل آلي بناءً على طلب العميل.",
    ai_assist_title: "التحليلات التفاعلية",
    ai_assist_desc: "توفير واجهات استعلام متقدمة تمكن صناع القرار من الحصول على أرقام المبيعات عبر لغة تخاطب طبيعية.",
    // Footer
    foot_log: "ملتزم بتقديم أفضل المعايير الهندسية والبرمجية.",
    foot_copy: "© 2026 ضياء مصطفى. قائد تقني أول."
  }
};
