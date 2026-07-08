export type TranslationKey = keyof typeof translations.en;
export const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "Manifesto",
    nav_projects: "Systems",
    nav_services: "Services",
    nav_stack: "Stack",
    nav_ai: "AI Ops",
    nav_contact: "Intake",
    nav_status: "SYSTEM: ACTIVE",
    nav_latency: "LATENCY: 24ms",
    // Hero
    hero_status: "[ CONTROL CENTER // PORTFOLIO V2.0 ]",
    hero_title: "Engineering Scalable Business Systems, ERP Integrations & Operational AI",
    hero_sub: "I build enterprise-grade software systems — from multi-tenant SaaS platforms and ERP integrations to real-time logistics operations and AI-driven automation. My focus is on back-end business logic, data consistency, performance, and secure integrations that power daily operations.",
    cta_primary: "[ Initialize Intake ]",
    cta_secondary: "View Systems Catalog",
    // Core Metrics
    metric_erp_title: "ERP Integrations",
    metric_erp_desc: "Endpoints connected to core databases",
    metric_fleet_title: "Daily Active Operators",
    metric_fleet_desc: "Tracked concurrently via WebSockets",
    metric_latency_title: "Query Latency Optimization",
    metric_latency_desc: "Tuned via Redis & Query restructuring",
    metric_uptime_title: "Production Uptime",
    metric_uptime_desc: "Maintained via Dockerized workflows",
    // Capability Domains
    dom_title: "Operational Engineering Domains",
    dom_sub: "I do not build basic display pages. I architect internal operating systems.",
    dom_erp_title: "ERP & Accounting Engines",
    dom_erp_desc: "Designing secure ledger journals, invoice postings, stock management, cash reconciliations, and automatic payouts.",
    dom_api_title: "Integration Pipelines & APIs",
    dom_api_desc: "Connecting core systems to payment checkouts, shipping carriers, WhatsApp API, and local invoice authorities (ZATCA).",
    dom_saas_title: "Multi-tenant SaaS Platforms",
    dom_saas_desc: "Architecting applications featuring database-level tenant isolation, custom permissions (RBAC), and subscription controllers.",
    // AI Section
    ai_title: "AI as an Operational Layer, Not a Side Widget",
    ai_sub: "I integrate LLM capabilities to automate data ingestion and decision-making within admin panels.",
    ai_invoice_title: "Document Intelligence",
    ai_invoice_desc: "Extracting invoice totals, line items, and VAT values from PDFs into structured database records using JSON schema matching.",
    ai_intent_title: "Intent-to-Action Automation",
    ai_intent_desc: "Parsing incoming support messages or emails to generate helpdesk tickets, alter delivery statuses, or trigger payment refunds.",
    ai_assist_title: "Conversational Admin Dashboards",
    ai_assist_desc: "Creating voice and text interfaces that allow operators to query sales or database metrics in natural language.",
    // Footer
    foot_log: "SYS_LOG: connection secured. rendering WebGL core...",
    foot_copy: "© 2026 Dhiaa Mostafa. Systems & Integration Architect."
  },
  ar: {
    // Navigation
    nav_home: "الرئيسية",
    nav_about: "المنفستو",
    nav_projects: "الأنظمة",
    nav_services: "الخدمات",
    nav_stack: "التقنيات",
    nav_ai: "الذكاء الاصطناعي",
    nav_contact: "طلب نظام",
    nav_status: "النظام: نشط",
    nav_latency: "زمن الاستجابة: 24ms",
    // Hero
    hero_status: "[ مركز القيادة الرقمي // إصدار 2.0 ]",
    hero_title: "هندسة أنظمة الأعمال القابلة للتوسع، تكاملات الـ ERP، والذكاء الاصطناعي التشغيلي",
    hero_sub: "أقوم بتصميم وبناء برمجيات حقيقية للمؤسسات: من منصات SaaS متعددة المستأجرين وتكاملات الـ ERP، إلى الأنظمة اللوجستية الفورية وأتمتة العمليات بالذكاء الاصطناعي. أركز على منطق العمل الخلفي، سلامة البيانات، الأداء، والتكاملات الموثوقة التي تعتمد عليها الشركات يومياً.",
    cta_primary: "[ إرسال متطلبات المشروع ]",
    cta_secondary: "استعراض دليل الأنظمة",
    // Core Metrics
    metric_erp_title: "تكاملات ERP للمؤسسات",
    metric_erp_desc: "نقاط ربط نشطة بنواة قواعد البيانات",
    metric_fleet_title: "مستخدم وسائق نشط يومياً",
    metric_fleet_desc: "تتبع متزامن لحظي باستخدام WebSockets",
    metric_latency_title: "تسريع استجابة النظام",
    metric_latency_desc: "تحسين الاستعلامات والتحميل عبر Redis",
    metric_uptime_title: "معدل استقرار التشغيل",
    metric_uptime_desc: "تشغيل مستمر بحاويات Docker و CI/CD",
    // Capability Domains
    dom_title: "مجالات الهندسة التشغيلية",
    dom_sub: "أنا لا أصمم صفحات ثابتة؛ أنا أبني أنظمة تشغيل رقمية داخلية للأعمال.",
    dom_erp_title: "أنظمة الـ ERP والعمليات المالية",
    dom_erp_desc: "تطوير محركات القيود المحاسبية، إصدار الفواتير، جرد المخازن، تسوية الخزائن، والمدفوعات التلقائية.",
    dom_api_title: "قنوات الربط والـ APIs والتكاملات",
    dom_api_desc: "ربط الأنظمة الخلفية ببوابات الدفع الإلكتروني، شركات الخدمات اللوجستية، نظام الفوترة الضريبية (هيئة الزكاة)، والـ WhatsApp API.",
    dom_saas_title: "منصات الـ SaaS متعددة العملاء",
    dom_saas_desc: "بناء معمارية برمجية مع عزل كامل لقواعد بيانات المستخدمين، وإدارة الصلاحيات (RBAC)، ومحركات الفواتير والاشتراكات.",
    // AI Section
    ai_title: "الذكاء الاصطناعي كطبقة تشغيل أساسية، وليس مجرد ميزة جانبية",
    ai_sub: "دمج قدرات النماذج اللغوية الكبيرة (LLMs) لأتمتة إدخال البيانات واتخاذ القرارات داخل لوحات الإدارة.",
    ai_invoice_title: "تحليل المستندات والفواتير",
    ai_invoice_desc: "استخراج قيم فواتير الموردين والضرائب وبنودها من ملفات PDF وترحيلها كمدخلات مهيكلة (JSON) للـ ERP تلقائياً.",
    ai_intent_title: "أتمتة الإجراءات الذكية",
    ai_intent_desc: "تحليل رسائل الدعم الفني أو البريد الإلكتروني وتوليد تذاكر تشغيلية أو إجراء استرجاع مالي للعميل تلقائياً حسب السياق.",
    ai_assist_title: "لوحات التحكم التفاعلية بالصوت والنص",
    ai_assist_desc: "بناء واجهات محادثة تمكن مدراء النظام من استعلام أرقام المبيعات أو مؤشرات الأداء بأسلوب السؤال والجواب الطبيعي.",
    // Footer
    foot_log: "SYS_LOG: تم تأمين الاتصال بنجاح. بدء تشغيل WebGL...",
    foot_copy: "© 2026 ضياء مصطفى. مهندس أنظمة وبرمجيات وتكاملات."
  }
};
