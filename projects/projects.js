window.externalProjectsData = [
  {
    "name": "Evix ERP Platform",
    "desc": "Enterprise cloud ERP & fleet operations management platform for logistics, inventory, accounting, HR, and drivers.",
    "image": "./projects/project/evix-erp-platform.png",
    "category": "Enterprise Solutions",
    "links": {
      "view": "https://evixdev.com/ar",
      "code": "#"
    },
    "name_ar": "منصة إيفيكس ERP للوجستيات",
    "desc_ar": "منصة ERP سحابية حديثة لشركات الخدمات اللوجستية والنقل والأساطيل والمستودعات تجمع المحاسبة، المخزون، الموارد البشرية والمركبات.",
    "features_ar": [
      "إدارة العمليات اللوجستية والأسطول والمستودعات لأكثر من 500 شركة متخصصة.",
      "ربط المحاسبة، المخزون، إدارة السائقين، والأسطول في نظام سحابي موحد.",
      "تحسين أداء الواجهات البرمجية بنسبة 40% باستخدام Redis وقواعد البيانات.",
      "توفير عزل كامل لبيانات تعدد المستأجرين (Multi-Tenancy) وأمان الصلاحيات."
    ],
    "features": [
      "Architected cloud ERP for 500+ enterprise clients across Saudi Arabia.",
      "Unified accounting, inventory, fleet dispatch, and HR in a single SaaS system.",
      "Boosted API throughput by 40%+ using Redis caching and database tuning.",
      "Enforced complete tenant data isolation and fine-grained RBAC security."
    ],
    "metrics": [
      { "val": "500+", "lbl": "Enterprise Clients" },
      { "val": "40%", "lbl": "API Speed Gain" },
      { "val": "99.99%", "lbl": "Uptime Rate" }
    ]
  },
  {
    "name": "Enterprise Integration Middleware Hub",
    "desc": "Centralized middleware integration hub decoupled from core ERP, providing connector architecture, asynchronous queue workers, and data payload transformation for e-commerce platforms (Amazon, Noon, Salla, Trendyol).",
    "image": "./projects/project/middleware-hub.png",
    "category": "Enterprise Solutions",
    "links": {
      "view": "#",
      "code": "#"
    },
    "name_ar": "منصة التكامل والربط الوسيط للمؤسسات (Enterprise Middleware Hub)",
    "desc_ar": "طبقة وسيطة مركزية (Middleware Hub) معزولة عن الـ ERP الأساسي، توفر معمارية موصلات قابلة للتوسع، معالجة غير متزامنة للرسائل، ومناقلة طلبيات المتاجر (Amazon، Noon، Salla، Trendyol).",
    "features_ar": [
      "طبقة وسيطة معزولة (Decoupled Middleware): بناء طبقة تكامل مستقلة تضمن الربط بين المنصات الخارجية و Evix ERP دون التعديل على المنطق المكتوبي للـ ERP.",
      "معمارية موصلات مرنة (Connector Framework): إطار عمل قابل للتمدد يدعم الموصلات مع Amazon و Noon و Salla و Trendyol.",
      "معالجة غير متزامنة (Asynchronous Queues): استخدام طوابير وشغّالات الرسائل لحماية الـ ERP من بطء أو انقطاع الخدمات الخارجية.",
      "منع التكرار (Idempotent Processing): ضوابط تضمن عدم تكرار الطلبات أو العمليات عند إعادة المحاولة أو انقطاع الاتصال.",
      "توحيد وتحويل البيانات (Payload Mapping): تحويل واستخراج البيانات المختلفة من الـ APIs الخارجية إلى نموذج بيانات مؤسسي موحد.",
      "سجلات رصد وتتبع مركزية (Centralized Logging & Retries): نظام تتبع دقيق لأداء وإعادة محاولة تنفيذ الطلبات مع تسجيل الأخطاء فورياً."
    ],
    "features": [
      "Decoupled Middleware Hub: Independent integration layer bridging external platforms with Evix ERP without touching core business logic.",
      "Connector-Based Architecture: Modular plugin framework supporting plug-and-play integrations with Amazon, Noon, Salla, and Trendyol.",
      "Asynchronous Queues & Worker Threads: Isolated queue processing protecting ERP from third-party service latency and outages.",
      "Idempotency & Duplicate Prevention: Guarantees zero duplicate transactions during network retries or webhooks resubmissions.",
      "Payload Mapping & Transformation: Normalizes diverse API schemas into unified enterprise data models.",
      "Centralized Audit Logging & Retries: End-to-end tracing with automated exponential backoff retries and execution monitoring."
    ],
    "metrics": [
      { "val": "Decoupled", "lbl": "Middleware Hub" },
      { "val": "Multi-Channel", "lbl": "Amazon, Noon, Salla" },
      { "val": "0%", "lbl": "Duplicate Trans" }
    ]
  },
  {
    "name": "Zmorod High Medical Center",
    "desc": "Integrated medical center platform providing online appointment scheduling, specialized clinics catalog (Dentistry, Dermatology, Laser), offer management, and WhatsApp booking integration.",
    "image": "./projects/project/zmorod-medical.png",
    "category": "Enterprise Solutions",
    "links": {
      "view": "https://zmorod.com/ar",
      "code": "#"
    },
    "name_ar": "مجمع الزمرد العالي الطبي (Zmorod Medical Center)",
    "desc_ar": "منصة إلكترونية متكاملة لمجمع الزمرد العالي الطبي تتيح حجز المواعيد أونلاين، استعراض الأقسام الطبية (الأسنان، الجلدية، والليزر)، العروض الخاصة، والتكامل المباشر مع الواتساب.",
    "features_ar": [
      "تصميم وبناء منصة طِبية سريعة وعصرية لمجمع الزمرد العالي الطبي.",
      "نظام حجز مواعيد وإدارة استفسارات المرضى أونلاين والمزامنة مع WhatsApp API.",
      "استعراض الأقسام الطبية المتخصصة (طب الأسنان، الجلدية، وجلسات الليزر) مع تفاصيل الخدمات.",
      "نظام إدارة العروض الموسمية والباقات العلاجية مع واجهات محسنة لتحسين محركات البحث (SEO)."
    ],
    "features": [
      "Engineered modern, high-speed digital web platform for Zmorod High Medical Center.",
      "Online patient appointment booking and inquiry portal with direct WhatsApp API integration.",
      "Specialized medical clinic showcases for Dentistry, Dermatology, and Laser treatment services.",
      "Seasonal medical offer management engine with SEO optimization and mobile responsiveness."
    ],
    "metrics": [
      { "val": "Medical", "lbl": "Center Platform" },
      { "val": "Online", "lbl": "Appointment Sync" },
      { "val": "WhatsApp", "lbl": "API Booking" }
    ]
  },
  {
    "name": "Evix ERP & E-Invoicing",
    "desc": "Architectural design, ZATCA Phase 2 E-Invoicing compliance, and API integration of Evix ERP for enterprise clients.",
    "image": "./projects/project/evix-erp-e-invoicing.png",
    "category": "Enterprise Solutions",
    "links": {
      "view": "https://evix.com.sa/ar",
      "code": "#"
    },
    "name_ar": "تكامل نظام Evix ERP والفوترة",
    "desc_ar": "التصميم المعماري وربط واجهات Evix ERP بالفوترة الإلكترونية ZATCA المرحلة الثانية والأنظمة المؤسسية.",
    "features_ar": [
      "التوافق التام 100% مع متطلبات هيئة الزكاة والضريبة والجمارك (ZATCA Phase-2).",
      "توليد التوقيع الرقمي (ECDSA Cryptographic Stamp) وشهادات CSID للشركات.",
      "إنشاء كود الـ QR المشفر وتوليد فواتير UBL 2.1 XML المعتمدة.",
      "ربط تلقائي بالـ Webhooks وإرسال الفواتير فورياً للاعتماد الحكومي."
    ],
    "features": [
      "100% compliant with ZATCA Phase-2 E-Invoicing clearance & reporting.",
      "Automated ECDSA cryptographic signing & CSID certificate generation.",
      "Generated ZATCA-compliant TLV QR codes and UBL 2.1 XML invoices.",
      "Real-time automated Webhooks integration with government ZATCA portal."
    ],
    "metrics": [
      { "val": "ZATCA", "lbl": "Phase-2 Compliant" },
      { "val": "100%", "lbl": "Audit Accuracy" },
      { "val": "<50ms", "lbl": "Signing Latency" }
    ]
  },
  {
    "name": "Evix HR Mobile App (Flutter)",
    "desc": "Cross-platform Flutter mobile application on Google Play for employee self-service, biometric attendance, WPS payroll, and leave management.",
    "image": "./projects/project/evix-hr-app.png",
    "category": "Mobile App",
    "links": {
      "view": "https://play.google.com/store/apps/details?id=evix.hr.app",
      "code": "#"
    },
    "name_ar": "تطبيق إيفيكس للموارد البشرية (Evix HR App)",
    "desc_ar": "تطبيق جوال احترافي بـ Flutter & Dart متاح على جوجل بلاي لخدمات الموظفين الذاتية، البصمة، الإجازات ومسيرات الرواتب.",
    "features_ar": [
      "تطبيق جوال متطور Cross-Platform مبني بـ Flutter & Dart ومتاح على Google Play.",
      "تسجيل وتصحيح الحضور والانصراف بالبصمة الحيوية وتحديد الموقع (GPS).",
      "إدارة طلبات الموظفين: الإجازات، السلف، الساعات الإضافية، وإذونات الخروج.",
      "متابعة مسيرات الرواتب والتكامل المباشر مع نظام حماية الأجور (WPS).",
      "إشعارات فورية عبر Firebase FCM ومزامنة البيانات في الوقت الفعلي."
    ],
    "features": [
      "Cross-platform mobile app engineered with Flutter & Dart published on Google Play.",
      "Biometric attendance tracking and GPS geo-fencing check-in system.",
      "Self-service requests for leaves, salary advances, overtime, and exit permits.",
      "Payslip view and direct integration with Saudi Wage Protection System (WPS).",
      "Real-time push notifications via Firebase FCM and offline state sync."
    ],
    "metrics": [
      { "val": "Flutter", "lbl": "Dart Architecture" },
      { "val": "Google Play", "lbl": "Live Production App" },
      { "val": "Real-Time", "lbl": "Push Notifications" }
    ]
  },
  {
    "name": "Miran Educational Platform",
    "desc": "Integrated e-learning platform specialized in operational training for assessment and empowerment in business organizations.",
    "image": "./projects/project/miran-educational-platform.webp",
    "category": "Enterprise Solutions",
    "links": {
      "view": "https://www.miranedu.com/",
      "code": "#"
    },
    "name_ar": "منصة مِران التعليمية",
    "desc_ar": "منصة تعليم إلكتروني متكاملة متخصصة في التدريب المقرون بالتشغيل للعاملين في مجالات التقييم والتمكين لمنظمات الأعمال.",
    "features_ar": [
      "منصة تعليم وتأهيل إلكتروني متكاملة متخصصة في التدريب المقرون بالتشغيل.",
      "بناء مسارات دورات تفاعلية واختبارات قياس قدرات تلقائية للمتدربين.",
      "لوحات تحكم تحليلية لمتابعة نسبة الإنجاز وتوليد شهادات التخرج الرقمية."
    ],
    "features": [
      "Enterprise Learning Management System (LMS) for operational training.",
      "Interactive course pathways, automated quizzes, and skill assessment engines.",
      "Real-time analytics dashboard tracking learner progress and digital certs."
    ],
    "metrics": [
      { "val": "LMS", "lbl": "E-Learning Platform" },
      { "val": "Digital", "lbl": "Certifications" },
      { "val": "Interactive", "lbl": "Course Pathways" }
    ]
  },
  {
    "name": "Rifd Business Company",
    "desc": "Corporate platform providing business consultation, governance, strategy, human capacity building, and sustainability.",
    "image": "./projects/project/rifd-business-company.webp",
    "category": "Enterprise Solutions",
    "links": {
      "view": "https://www.rifd.com/",
      "code": "#"
    },
    "name_ar": "شركة رِفد الأعمال",
    "desc_ar": "منصة مؤسسية تقدم الاستشارات الإدارية، الحوكمة والاستراتيجية، تنمية القدرات البشرية، والتسويق والاستدامة المالية.",
    "features_ar": [
      "بوابة مؤسسية متكاملة لتقديم الاستشارات الإدارية وتنمية القدرات البشرية.",
      "نظام حجز جلسات استشارية مع ربط بوابات الدفع الإلكتروني.",
      "تصميم واجهات فائقة السرعة ومتوافقة 100% مع تحسين محركات البحث SEO."
    ],
    "features": [
      "Corporate consultation portal for strategy, governance, and capacity building.",
      "Automated appointment scheduling system with online payment gateways.",
      "Ultra-fast responsive design optimized for SEO and executive user experience."
    ],
    "metrics": [
      { "val": "B2B", "lbl": "Corporate Portal" },
      { "val": "SEO", "lbl": "Top Speed & Indexing" },
      { "val": "Booking", "lbl": "Consultation Engine" }
    ]
  },
  {
    "name": "Khibrah Platform",
    "desc": "Expertise investment platform for retirees providing flexible job opportunities, continuous learning, and consulting services.",
    "image": "./projects/project/khibrah-platform.webp",
    "category": "Enterprise Solutions",
    "links": {
      "view": "https://www.khibra.com/",
      "code": "#"
    },
    "name_ar": "منصة خِبرة للمتقاعدين",
    "desc_ar": "منصة وطنية للاستثمار في خبرات المتقاعدين وتوفير فرص عمل مرنة وتدريب إلكتروني وإثراء جودة الحياة والتعلم مدى الحياة.",
    "features_ar": [
      "منصة وطنية للاستثمار في خبرات المتقاعدين وتوفير فرص عمل مرنة.",
      "نظام تقديم استشارات وإدارة عروض خدمات الخبرات المهنية.",
      "استعلامات سريعة قوية مع عزل البيانات وأمان الوصول."
    ],
    "features": [
      "National expert-matching platform for retirees and flexible consulting jobs.",
      "Service offer management, expert profile directory, and client reviews.",
      "High-performance database queries with secure role-based access."
    ],
    "metrics": [
      { "val": "National", "lbl": "Expert Directory" },
      { "val": "Flexible", "lbl": "Jobs & Consulting" },
      { "val": "Secure", "lbl": "Role Access" }
    ]
  },
  {
    "name": "Eyein Store Platform",
    "desc": "E-commerce store specializing in contact lenses, optical frames, sunglasses, and eyewear accessories.",
    "image": "./projects/project/eyein-store-platform.png",
    "category": "Full Stack",
    "links": {
      "view": "https://www.eyein.com.sa/home",
      "code": "#"
    },
    "name_ar": "متجر عين الإلكتروني",
    "desc_ar": "متجر إلكتروني متكامل للعدسات اللاصقة والنظارات الشمسية والطبية والإكسسوارات من كبرى الشركات العالمية.",
    "features_ar": [
      "متجر إلكتروني شامل للعدسات والنظارات الطبية والشمسية والإكسسوارات.",
      "ربط متعدد لبوابات الدفع (Tabby، HyperPay، Mada، Apple Pay).",
      "إدارة المخزون والطلبات والتوصيل مع تتبع حالة الشحنات تلقائياً."
    ],
    "features": [
      "Full-featured e-commerce store for optical eyewear, lenses, and accessories.",
      "Multi-payment integration (Tabby buy-now-pay-later, Mada, Apple Pay).",
      "Automated inventory management, order fulfillment, and shipment tracking."
    ],
    "metrics": [
      { "val": "Tabby", "lbl": "BNPL Integrated" },
      { "val": "Multi-Pay", "lbl": "Gateways" },
      { "val": "E-Commerce", "lbl": "Full Inventory Sync" }
    ]
  },
  {
    "name": "EyeinTech Solutions",
    "desc": "Corporate web platform for security solutions, surveillance systems, smart electronics, and intercom installations.",
    "image": "./projects/project/eyeintech-solutions.png",
    "category": "Full Stack",
    "links": {
      "view": "https://eyeintec.com/home",
      "code": "#"
    },
    "name_ar": "عين تك للحلول الأمنية",
    "desc_ar": "موقع شركة عين تك المتخصصة في أنظمة المراقبة والحلول الأمنية والإنتركوم والأجهزة الإلكترونية الحديثة.",
    "features_ar": [
      "موقع رسمي متكامل لتقديم الحلول الأمنية وأنظمة المراقبة والإنتركوم.",
      "نظام استقبال طلبيات التسعير والمواصفات الفنية للشركات والمؤسسات.",
      "تصميم تفاعلي عالي الأداء مبني بـ Node.js و TypeScript لعرض المنتجات."
    ],
    "features": [
      "Enterprise showcase for surveillance, smart electronics, and intercom installations.",
      "B2B quote intake system and technical specification request engine.",
      "Engineered with Node.js & TypeScript for high scalability."
    ],
    "metrics": [
      { "val": "Node.js", "lbl": "TypeScript Backend" },
      { "val": "B2B", "lbl": "Quote Intake Engine" },
      { "val": "Security", "lbl": "Solutions Catalog" }
    ]
  },
  {
    "name": "Evix Beauty Salon Management Platform",
    "desc": "Comprehensive SaaS management platform tailored for beauty salons, spa centers, appointment booking, inventory, and point-of-sale (POS).",
    "image": "./projects/project/beauty.png",
    "category": "Enterprise Solutions",
    "links": {
      "view": "https://beauty.evixdev.com/",
      "code": "#"
    },
    "name_ar": "منصة إيفكس لإدارة صوالين التجميل",
    "desc_ar": "منصة سحابية متكاملة (SaaS) لإدارة صوالين ومراكز التجميل والسبا، الحجوزات، الكاشير، الفواتير وإدارة الموظفين والخدمات.",
    "features_ar": [
      "منصة سحابية SaaS متخصصة لإدارة مراكز وصوالين التجميل والسبا.",
      "نظام كاشير ونقاط بيع (POS) متكامل مع طباعة الفواتير الفورية.",
      "إدارة جدول الحجوزات والمواعيد والخدمات ومسؤولات التجميل والمخزون."
    ],
    "features": [
      "Cloud SaaS platform tailored for beauty salons, spa centers, and POS.",
      "Integrated Point-of-Sale (POS) cashier with instant thermal receipt printing.",
      "Real-time appointment scheduling, service catalog, and staff management."
    ],
    "metrics": [
      { "val": "SaaS", "lbl": "Salon Cloud ERP" },
      { "val": "POS", "lbl": "Point of Sale Cashier" },
      { "val": "Booking", "lbl": "Real-Time Schedule" }
    ]
  },
  {
    "name": "ACTES Group",
    "desc": "Corporate website and platform for ACTES Group specialized in energy systems, solar power, and technical solutions.",
    "image": "./projects/project/actes-group.webp",
    "category": "Enterprise Solutions",
    "links": {
      "view": "https://www.actesgroup.com/",
      "code": "#"
    },
    "name_ar": "مجموعة أكتس لحلول الطاقة",
    "desc_ar": "الموقع الرسمي والمنصة الخاصة بمجموعة أكتس الرائدة في حلول الطاقة المتجددة وأنظمة الطاقة.",
    "features_ar": [
      "منصة مؤسسية لمجموعة أكتس المتخصصة في أنظمة الطاقة الشمسية والمتجددة.",
      "استعراض الحلول الهندسية والمشاريع المنجزة في قطاع الطاقة والكهرباء."
    ],
    "features": [
      "Corporate platform for solar power engineering and renewable energy systems.",
      "Project portfolio showcase and technical infrastructure intake."
    ],
    "metrics": [
      { "val": "Energy", "lbl": "Solar Systems Portal" },
      { "val": "Corporate", "lbl": "Official Platform" }
    ]
  },
  {
    "name": "Watan Tumuh Foundation",
    "desc": "Digital presence and social development platform for Watan Tumuh Foundation.",
    "image": "./projects/project/watan-tumuh-foundation.png",
    "category": "Full Stack",
    "links": {
      "view": "https://watantumuh.org.sa/",
      "code": "#"
    },
    "name_ar": "مؤسسة وطن طموح",
    "desc_ar": "التواجد الرقمي والمنصة الخاصة بمؤسسة وطن طموح للتنمية والخدمات.",
    "features_ar": [
      "منصة التواجد الرقمي لمؤسسة وطن طموح للتنمية والخدمات الاجتماعية.",
      "بوابة استقبال مبادرات الدعم التنموي وإدارة البرامج."
    ],
    "features": [
      "Digital presence and social development platform for Watan Tumuh Foundation.",
      "Community initiative intake engine and program management portal."
    ],
    "metrics": [
      { "val": "Nonprofit", "lbl": "Social Platform" },
      { "val": "Programs", "lbl": "Initiative Intake" }
    ]
  },
  {
    "name": "HASTI National Research Map",
    "desc": "National research priorities map platform linking academic institutions, researchers, and sustainable development goals.",
    "image": "./projects/project/hasti-national-research-map.webp",
    "category": "Enterprise Solutions",
    "links": {
      "view": "https://research-priorities.hasti.gov.ye/",
      "code": "#"
    },
    "name_ar": "منصة الخارطة البحثية الوطنية (HASTI)",
    "desc_ar": "منصة وطنية لربط الأبحاث بالأولويات التنموية والمؤسسات التعليمية والبحثية.",
    "features_ar": [
      "منصة حكومية وطنية لربط الأبحاث بالأولويات التنموية والمؤسسات التعليمية.",
      "محرك بحث متقدم وتصنيف الأبحاث العلمية حسب مجالات التنمية المستدامة."
    ],
    "features": [
      "National research priorities map platform linking universities & researchers.",
      "Advanced research filter and sustainable development goal mapping engine."
    ],
    "metrics": [
      { "val": "Gov Map", "lbl": "National Research Map" },
      { "val": "SDGs", "lbl": "Development Alignment" }
    ]
  },
  {
    "name": "Eyein Code Agency",
    "desc": "Digital agency platform specializing in custom software development, web architecture, and mobile applications.",
    "image": "./projects/project/eyein-code-agency.png",
    "category": "Full Stack",
    "links": {
      "view": "https://eyeincode.com/",
      "code": "#"
    },
    "name_ar": "عين كود للبرمجيات",
    "desc_ar": "المنصة الرقمية لشركة عين كود المتخصصة في تصميم وبرمجة المواقع الإلكترونية والتطبيقات.",
    "features_ar": [
      "المنصة الرقمية لشركة عين كود المتخصصة في برمجة وتطوير الأنظمة.",
      "استعراض خدمات تطوير البرمجيات واستقبال طلبات المشاريع الرقمية."
    ],
    "features": [
      "Digital agency showcase for web architecture, custom software, and mobile apps.",
      "Interactive project request system and client intake portal."
    ],
    "metrics": [
      { "val": "Agency", "lbl": "Software Solutions" },
      { "val": "Full-Stack", "lbl": "Web & Mobile" }
    ]
  },
  {
    "name": "Musaned United Platform",
    "desc": "Musaned United platform using NestJS and Next.js, delivering scalable microservices and real-time operations.",
    "image": "./projects/project/musaned-united-platform.png",
    "category": "Full Stack",
    "links": {
      "view": "#",
      "code": "#"
    },
    "name_ar": "منصة مساند المتطورة",
    "desc_ar": "منصة خدمات مساند المتطورة باستخدام NestJS و Next.js لمعالجة البيانات والتشغيل المتكامل.",
    "features_ar": [
      "منصة خدمات مساند المتطورة باستخدام NestJS و Next.js.",
      "معمارية مايكروسرفيسز سريعة مع ربط بوابات الدفع والمصادقة الأمنية (RBAC)."
    ],
    "features": [
      "Engineered with NestJS & Next.js for high-concurrency microservices.",
      "Multi-auth security, payment gateway sync, and containerized Docker setup."
    ],
    "metrics": [
      { "val": "NestJS", "lbl": "Next.js Microservices" },
      { "val": "Docker", "lbl": "Containerized Setup" }
    ]
  },
  {
    "name": "Emarl Jewelry & Beauty Brand",
    "desc": "E-commerce platform and luxury brand tailored for jewelry sales, cosmetics, and beauty accessories.",
    "image": "./projects/project/emarl.png",
    "category": "Full Stack",
    "links": {
      "view": "https://emarl.youcanbook.me/",
      "code": "#"
    },
    "name_ar": "علامة إيمارل للمجوهرات والتجميل (Emarl)",
    "desc_ar": "منصة وعلامة تجارية فاخرة متخصصة في بيع المجوهرات، الحلي، وأدوات التجميل والعناية بالمظهر.",
    "features_ar": [
      "منصة وعلامة تجارية فاخرة متخصصة في الحلي والمجوهرات وأدوات التجميل.",
      "نظام حجز وتخصيص استشارات العناية وتنسيق المنتجات."
    ],
    "features": [
      "Luxury brand e-commerce portal for fine jewelry and beauty products.",
      "Automated client consultation booking and product catalog."
    ],
    "metrics": [
      { "val": "Luxury", "lbl": "Beauty & Jewelry" },
      { "val": "Booking", "lbl": "Client Consultations" }
    ]
  },
  {
    "name": "HR & Automated Payroll System",
    "desc": "Enterprise HR management platform supporting automated payroll, WPS compliance, attendance, and leave management.",
    "image": "./projects/project/hr-automated-payroll-system.png",
    "category": "Enterprise Solutions",
    "links": {
      "view": "#",
      "code": "#"
    },
    "name_ar": "نظام إدارة الموارد البشرية والرواتب",
    "desc_ar": "نظام شامل لإدارة الموارد البشرية والأجور والتكامل مع حماية الأجور (WPS) وإدارة الإجازات.",
    "features_ar": [
      "نظام مؤسسي شامل لإدارة الموارد البشرية والرواتب لـ 7000+ موظف ومندوب.",
      "أتمتة حساب مسيرات الرواتب، البدلات، والخصميات والتوافق مع نظام حماية الأجور (WPS).",
      "نظام بصمة وتتبع الحضور وساعات العمل الإضافية والإجازات تلقائياً."
    ],
    "features": [
      "Enterprise HR system handling automated payroll for 7,000+ active staff & agents.",
      "Automated salary processing, allowances, deductions, and WPS compliance.",
      "Biometric attendance tracking, overtime calculations, and leave workflows."
    ],
    "metrics": [
      { "val": "7,000+", "lbl": "Staff & Drivers" },
      { "val": "WPS", "lbl": "Wage Protection Sync" },
      { "val": "Biometric", "lbl": "Attendance Engine" }
    ]
  }
];
