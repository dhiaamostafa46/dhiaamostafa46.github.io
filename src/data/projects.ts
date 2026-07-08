export interface Project {
  slug: string;
  titleEN: string;
  titleAR: string;
  category: 'ERP' | 'SaaS' | 'Integrations' | 'AI';
  summaryEN: string;
  summaryAR: string;
  problemEN: string;
  problemAR: string;
  techStack: string[];
  metricsEN: string[];
  metricsAR: string[];
  modulesEN: string[];
  modulesAR: string[];
  challengesEN: string;
  challengesAR: string;
  solutionEN?: string;
  solutionAR?: string;
  gallery: string[]; // Added gallery field
}

export const projects: Project[] = [
  {
    slug: "evix-erp-core",
    titleEN: "EVIX ERP Core Integration Platform",
    titleAR: "منصة تكاملات ونواة تشغيل Evix ERP",
    category: "ERP",
    summaryEN: "An API and data synchronization system linking 500+ client merchant applications to core financial ledger databases.",
    summaryAR: "نظام ربط ومزامنة بيانات يربط أكثر من 500 متجر تجاري بقاعدة البيانات المالية المركزية للـ ERP.",
    problemEN: "Merchant sales data was unsynchronized, causing tax filing errors and accounting discrepancies.",
    problemAR: "كانت بيانات مبيعات المتاجر غير متزامنة، مما أدى إلى حدوث أخطاء في الفواتير الضريبية وتناقضات محاسبية.",
    techStack: ["Laravel", "Node.js", "Redis", "MySQL", "ZATCA API"],
    metricsEN: ["500+ Active Clients", "100k+ Transactions/Day", "0% Sync Discrepancies"],
    metricsAR: ["500+ عميل تجاري نشط", "100 ألف+ حركة مالية يومية", "0% أخطاء في المطابقة المزامنة"],
    modulesEN: ["Double-entry Ledger Engine", "ZATCA Compliance Sync", "Sales Webhook Broker"],
    modulesAR: ["محرك القيود مزدوج القيد", "مزامنة الفاتورة الإلكترونية مع هيئة الزكاة", "وسيط الـ Webhooks التشغيلي للمبيعات"],
    challengesEN: "Handling network failures during ZATCA compliance checks without blocking merchant checkout requests. Solved using background retry jobs (Horizon).",
    challengesAR: "معالجة انقطاع الاتصال بالشبكة أثناء فحص الفوترة مع هيئة الزكاة دون تعطيل عمليات دفع العملاء. تم حلها باستخدام قوائم المهام الخلفية مع محرك إعادة المحاولة التلقائي.",
    solutionEN: "Implemented an event-driven architecture using RabbitMQ.",
    solutionAR: "تنفيذ بنية تعتمد على الأحداث باستخدام RabbitMQ.",
    gallery: [
      "/projects/2026-05-16_evix-sa-ar-admin_01.png",
      "/projects/2026-05-16_evix-sa-ar_01.png",
      "/projects/2024-07-07_evix-sa-ar_01.png"
    ]
  },
  {
    slug: "eyein-ecosystem",
    titleEN: "Eyein Tech & Code Ecosystem",
    titleAR: "منظومة Eyein البرمجية والتقنية",
    category: "SaaS",
    summaryEN: "A comprehensive tech ecosystem encompassing corporate portals, SaaS platforms, and digital product distribution.",
    summaryAR: "منظومة تقنية شاملة تتضمن بوابات للشركات، منصات SaaS، وتوزيع المنتجات الرقمية.",
    problemEN: "The company needed a unified backend architecture to run multiple isolated SaaS products under a single operational umbrella.",
    problemAR: "احتاجت الشركة إلى معمارية خلفية موحدة لتشغيل عدة منتجات SaaS معزولة تحت مظلة تشغيلية واحدة.",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Docker", "AWS"],
    metricsEN: ["3+ Interconnected Portals", "High Concurrency", "Sub-second API Responses"],
    metricsAR: ["3 بوابات مترابطة", "تحمل ضغط عالي", "استجابة API في أجزاء من الثانية"],
    modulesEN: ["Unified Authentication SSO", "Multi-Tenant Resource Allocation", "Digital Asset Delivery", "Centralized Analytics Dashboard"],
    modulesAR: ["تسجيل الدخول الموحد (SSO)", "تخصيص الموارد متعدد المستأجرين", "توصيل الأصول الرقمية", "لوحة تحكم تحليلية مركزية"],
    challengesEN: "Maintaining state and session isolation across Eyein Code, Eyein Tec, and Lens Portals without heavy duplication of user logic.",
    challengesAR: "الحفاظ على استقلالية الجلسات عبر بوابات Eyein Code و Eyein Tec دون تكرار الأكواد البرمجية للمستخدمين.",
    solutionEN: "Implemented a centralized OAuth2 provider and a shared microservice backbone for billing and tenant management.",
    solutionAR: "تنفيذ مزود OAuth2 مركزي وعمود فقري من الخدمات المصغرة (Microservices) لإدارة الفوترة والمستأجرين.",
    gallery: [
      "/projects/2026-05-16_eyeintec-home_01.png",
      "/projects/2026-05-16_eyeincode_01.png",
      "/projects/2026-05-16_eyein-sa-home_01.png",
      "/projects/2024-07-07_lenses-eyein-sa_01.png",
      "/projects/2024-07-07_eyeintec_01.png",
      "/projects/2024-07-07_eyein-sa-home_01.png"
    ]
  },
  {
    slug: "watantumuh-org",
    titleEN: "Watan Tumuh Enterprise Portal",
    titleAR: "بوابة منصة وطن طموح",
    category: "Integrations",
    summaryEN: "A robust corporate portal and management system streamlining operations and membership services.",
    summaryAR: "بوابة مؤسسية متينة ونظام إدارة لتبسيط العمليات التشغيلية وخدمات الأعضاء.",
    problemEN: "Operational workflows were highly fragmented across legacy systems resulting in slow membership processing.",
    problemAR: "كانت مسارات العمل مجزأة بشكل كبير عبر أنظمة قديمة مما أدى إلى بطء في معالجة طلبات الأعضاء.",
    techStack: ["React", "Laravel", "MySQL", "Redis"],
    metricsEN: ["100% Workflow Digitalization", "Fast Load Times", "Automated Reporting"],
    metricsAR: ["رقمنة مسارات العمل بنسبة 100%", "سرعة تحميل عالية", "تقارير مؤتمتة"],
    modulesEN: ["Membership Management Engine", "Automated Workflow Approvals", "Dynamic Content Management"],
    modulesAR: ["محرك إدارة العضويات", "موافقات مسارات العمل الآلية", "نظام إدارة المحتوى الديناميكي"],
    challengesEN: "Migrating highly sensitive legacy membership data to the new unified database schema without downtime.",
    challengesAR: "ترحيل بيانات العضويات القديمة الحساسة إلى مخطط قاعدة البيانات الجديد دون إيقاف النظام.",
    solutionEN: "Used a custom ETL (Extract, Transform, Load) script that synced data iteratively during off-peak hours.",
    solutionAR: "استخدام سكريبت ETL مخصص لترحيل البيانات بشكل متكرر وتدريجي خارج أوقات الذروة.",
    gallery: [
      "/projects/2026-05-16_watantumuh-org-sa_01.png"
    ]
  },
  {
    slug: "miranedu-platform",
    titleEN: "MiranEdu LMS Platform",
    titleAR: "منصة ميران التعليمية (MiranEdu)",
    category: "SaaS",
    summaryEN: "A scalable Learning Management System capable of hosting heavy video streaming and concurrent exams.",
    summaryAR: "نظام إدارة تعليم (LMS) قابل للتوسع قادر على استضافة بث الفيديوهات الثقيلة والاختبارات المتزامنة.",
    problemEN: "Traditional LMS systems crashed during peak exam times due to massive concurrent database writes.",
    problemAR: "كانت أنظمة التعليم التقليدية تتعطل أوقات ذروة الاختبارات بسبب عمليات الكتابة المتزامنة الضخمة على قاعدة البيانات.",
    techStack: ["Node.js", "React", "MongoDB", "AWS MediaLive", "Redis"],
    metricsEN: ["10k+ Concurrent Users", "Secure Video DRM", "99.9% Uptime"],
    metricsAR: ["10 آلاف+ مستخدم متزامن", "تشفير فيديو DRM آمن", "99.9% استقرار النظام"],
    modulesEN: ["Video DRM Streaming", "Concurrent Exam Engine", "Automated Grading", "Student Analytics"],
    modulesAR: ["بث فيديو مشفر DRM", "محرك اختبارات عالي التزامن", "تصحيح آلي", "تحليلات أداء الطلاب"],
    challengesEN: "Ensuring video content couldn't be easily downloaded or shared without authorization.",
    challengesAR: "ضمان عدم إمكانية تنزيل أو مشاركة المحتوى المرئي دون تصريح.",
    solutionEN: "Integrated an HLS stream with signed URLs and strict CORS policies wrapped behind a secure proxy.",
    solutionAR: "دمج بث HLS مع روابط مشفرة وسياسات CORS صارمة مغلفة خلف بروكسي آمن.",
    gallery: [
      "/projects/2024-07-03_miranedu_01.png"
    ]
  },
  {
    slug: "hasti-research",
    titleEN: "HASTI Research Priorities Gov Portal",
    titleAR: "بوابة الأولويات البحثية - HASTI",
    category: "Integrations",
    summaryEN: "An official governmental and academic portal designed to align national research efforts with strategic priorities.",
    summaryAR: "بوابة حكومية وأكاديمية رسمية مصممة لمواءمة الجهود البحثية الوطنية مع الأولويات الاستراتيجية.",
    problemEN: "Lack of a centralized academic repository led to duplicate research funding and disconnected academic efforts.",
    problemAR: "أدى غياب مستودع أكاديمي مركزي إلى ازدواجية في تمويل الأبحاث وانفصال الجهود الأكاديمية.",
    techStack: ["PHP", "Laravel", "Vue.js", "PostgreSQL", "Elasticsearch"],
    metricsEN: ["Centralized Repository", "Advanced Search Algorithms", "Government Compliance"],
    metricsAR: ["مستودع مركزي للأبحاث", "خوارزميات بحث متقدمة", "متوافق مع المعايير الحكومية"],
    modulesEN: ["Research Proposal Submission", "Peer Review Workflow", "Grant Allocation Tracker", "Semantic Search Engine"],
    modulesAR: ["نظام تقديم المقترحات البحثية", "مسار عمل المراجعة الأكاديمية", "متتبع تخصيص المنح", "محرك بحث دلالي"],
    challengesEN: "Implementing an extremely precise search engine to detect overlapping research topics efficiently.",
    challengesAR: "تنفيذ محرك بحث دقيق جداً لاكتشاف مواضيع البحث المتداخلة بفاعلية.",
    solutionEN: "Deployed Elasticsearch to index documents and perform semantic similarity scoring.",
    solutionAR: "نشر محرك Elasticsearch لعمل فهرسة للمستندات وإجراء تقييمات التشابه الدلالي للأبحاث.",
    gallery: [
      "/projects/2024-07-03_research-priorities-hasti-gov-ye_01.png",
      "/projects/2024-07-03_research-priorities-hasti-gov-ye_02.png"
    ]
  },
  {
    slug: "barmgely-saas",
    titleEN: "Barmgely B2B Service Platform",
    titleAR: "منصة برمجلي لخدمات الأعمال",
    category: "SaaS",
    summaryEN: "A digital service delivery platform connecting enterprises with specialized software engineering resources.",
    summaryAR: "منصة لتقديم الخدمات الرقمية تربط الشركات بموارد هندسة البرمجيات المتخصصة.",
    problemEN: "Service requisition and milestone tracking was manual, leading to scope creep and delayed deployments.",
    problemAR: "كان طلب الخدمات وتتبع الإنجاز يدوياً، مما أدى إلى زحف نطاق العمل وتأخير التسليم.",
    techStack: ["Next.js", "Express", "PostgreSQL", "Stripe API"],
    metricsEN: ["Automated Milestones", "Integrated Billing", "Client Dashboard"],
    metricsAR: ["إنجاز مؤتمت للمراحل", "نظام فوترة مدمج", "لوحة تحكم تفاعلية للعميل"],
    modulesEN: ["Milestone Tracker", "Escrow Billing System", "Client Comms Hub"],
    modulesAR: ["متتبع مراحل التنفيذ", "نظام فوترة وحفظ حقوق", "مركز تواصل العملاء"],
    challengesEN: "Handling multi-currency payments and milestone-based releases securely.",
    challengesAR: "التعامل مع المدفوعات متعددة العملات وإصدار الدفعات بناءً على المراحل بأمان.",
    solutionEN: "Built a robust Stripe Connect integration tailored for escrow-like milestone fulfillment.",
    solutionAR: "بناء تكامل متين مع Stripe Connect مصمم خصيصاً لتنفيذ الدفعات المشروطة بالإنجاز.",
    gallery: [
      "/projects/2024-07-03_barmgely_01.png"
    ]
  },
  {
    slug: "actesgroup-erp",
    titleEN: "ActesGroup Enterprise Portal",
    titleAR: "بوابة شركات ActesGroup",
    category: "ERP",
    summaryEN: "A comprehensive internal portal for managing resources, logistics, and multi-departmental operations.",
    summaryAR: "بوابة داخلية شاملة لإدارة الموارد، اللوجستيات، والعمليات متعددة الأقسام.",
    problemEN: "Siloed departmental software caused significant bottlenecks in logistics and financial approvals.",
    problemAR: "برامج الأقسام المنعزلة سببت اختناقات كبيرة في اللوجستيات والموافقات المالية.",
    techStack: ["Angular", "Node.js", "SQL Server"],
    metricsEN: ["1 Unified Dashboard", "Departmental Sync", "Real-time Audits"],
    metricsAR: ["لوحة تحكم مركزية واحدة", "مزامنة بين الأقسام", "تدقيق مالي لحظي"],
    modulesEN: ["Logistics Router", "HR & Payroll Engine", "Approval Chains"],
    modulesAR: ["مُوجّه اللوجستيات", "محرك الموارد البشرية والرواتب", "سلاسل الاعتمادات المالية"],
    challengesEN: "Unifying wildly different database schemas from legacy internal tools.",
    challengesAR: "توحيد مخططات قواعد بيانات مختلفة تماماً قادمة من أدوات داخلية قديمة.",
    solutionEN: "Developed an API gateway that normalizes incoming data into a strict internal standard structure.",
    solutionAR: "تطوير واجهة API وسيطة (Gateway) تقوم بتوحيد البيانات الواردة إلى هيكل معياري داخلي صارم.",
    gallery: [
      "/projects/2024-07-03_actesgroup_01.png"
    ]
  },
  {
    slug: "musanid-sys",
    titleEN: "Musanid Service System",
    titleAR: "نظام مساند للخدمات الموثقة",
    category: "Integrations",
    summaryEN: "A specialized integration interface for secure recruitment and regulatory compliance workflows.",
    summaryAR: "واجهة تكامل متخصصة لعمليات التوظيف الآمنة ومسارات العمل المتوافقة مع الأنظمة الحكومية.",
    problemEN: "Manual vetting and document verification processes were slow and prone to human error.",
    problemAR: "كانت عمليات الفحص اليدوي وتوثيق المستندات بطيئة وعرضة للخطأ البشري.",
    techStack: ["C# .NET", "React", "PostgreSQL", "RabbitMQ"],
    metricsEN: ["Zero-Error Verification", "High Throughput", "Automated Compliance"],
    metricsAR: ["توثيق بلا أخطاء", "إنتاجية عمليات عالية", "تطابق أنظمة آلي"],
    modulesEN: ["Document Verification Pipeline", "Regulatory Audit Trails", "Secure Biometric Hash Storage"],
    modulesAR: ["مسار توثيق المستندات", "سجلات تدقيق تنظيمية", "تخزين مشفر للبيانات الحيوية"],
    challengesEN: "Processing massive volumes of document images and verifying them against governmental APIs in real-time.",
    challengesAR: "معالجة أحجام هائلة من صور المستندات والتحقق منها مع الـ APIs الحكومية لحظياً.",
    solutionEN: "Implemented a distributed queue architecture (RabbitMQ) to batch-process validation tasks asynchronously.",
    solutionAR: "تنفيذ بنية طوابير موزعة (RabbitMQ) لمعالجة مهام التحقق على دفعات بشكل غير متزامن.",
    gallery: [
      "/projects/2025-02-05_musanid-sa_01.png"
    ]
  },
  {
    slug: "enterprise-dashboard-core",
    titleEN: "Enterprise POS & Accounting Core",
    titleAR: "لوحات تحكم العمليات المحاسبية والمبيعات",
    category: "ERP",
    summaryEN: "A highly customized internal dashboard for real-time POS analytics and accounting reconciliation.",
    summaryAR: "لوحة تحكم داخلية مخصصة لتحليلات نقاط البيع (POS) والتسويات المحاسبية في الوقت الفعلي.",
    problemEN: "Lack of centralized visualization for daily POS operations led to slow financial reporting.",
    problemAR: "أدى غياب واجهة رؤية مركزية لعمليات نقاط البيع اليومية إلى بطء في إعداد التقارير المالية.",
    techStack: ["Vue.js", "Laravel", "MySQL", "TailwindCSS"],
    metricsEN: ["Real-time Sync", "Multi-branch Support", "Granular Roles"],
    metricsAR: ["مزامنة فورية", "دعم فروع متعددة", "صلاحيات دقيقة"],
    modulesEN: ["Dynamic Charting Engine", "Cash Reconciliation", "Branch Manager Audit"],
    modulesAR: ["محرك رسوم بيانية ديناميكي", "تسوية الخزائن النقدية", "سجل تدقيق مدراء الفروع"],
    challengesEN: "Rendering massive datasets on the frontend without browser memory leaks.",
    challengesAR: "عرض مجموعات بيانات ضخمة على الواجهة الأمامية دون التسبب في تسرب ذاكرة المتصفح.",
    solutionEN: "Implemented chunked data fetching and virtualized lists for heavy tables.",
    solutionAR: "تنفيذ جلب البيانات على دفعات وقوائم افتراضية (Virtualized Lists) للجداول الثقيلة.",
    gallery: [
      "/projects/2024-07-06_capture-11_01.png",
      "/projects/2024-07-06_capture-3_01.png",
      "/projects/2024-07-06_capture-4_01.png",
      "/projects/2024-07-06_capture-6_01.png"
    ]
  },
  {
    slug: "inventory-logistics-sys",
    titleEN: "Inventory & Fleet Management System",
    titleAR: "نظام إدارة المخزون وحركة الأسطول",
    category: "SaaS",
    summaryEN: "A robust internal tool tracking warehouse inventory thresholds and active fleet movements.",
    summaryAR: "أداة داخلية قوية لتتبع مستويات مخزون المستودعات وحركات الأسطول النشطة.",
    problemEN: "Inventory discrepancies and lost fleet tracking caused supply chain delays.",
    problemAR: "التناقضات في المخزون وفقدان تتبع الأسطول تسببت في تأخيرات بسلسلة التوريد.",
    techStack: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
    metricsEN: ["Live GPS Sync", "Automated Alerts", "100% Tracking"],
    metricsAR: ["مزامنة GPS حية", "تنبيهات تلقائية", "تتبع بنسبة 100%"],
    modulesEN: ["Fleet Dispatch UI", "Warehouse Topology Viewer", "Restock Predictor AI"],
    modulesAR: ["واجهة توجيه الأسطول", "مستكشف خريطة المستودع", "الذكاء الاصطناعي للتنبؤ بإعادة التخزين"],
    challengesEN: "Optimizing the GPS ping rate to balance accuracy with server load.",
    challengesAR: "تحسين معدل تحديث الـ GPS للموازنة بين الدقة وحمل الخادم.",
    solutionEN: "Implemented adaptive pinging that decreases frequency when vehicles are stationary.",
    solutionAR: "تنفيذ تحديث تكيفي يقلل من تكرار إرسال الموقع عندما تكون المركبات متوقفة.",
    gallery: [
      "/projects/2026-05-16_127-0-0-1-5566_01.png",
      "/projects/2026-05-16_127-0-0-1-5566_02.png",
      "/projects/2026-05-09_screenshot_01.jpg",
      "/projects/screencapture-127-0-0-1-5566-2026-05-16-18_09_28.png"
    ]
  }
];
