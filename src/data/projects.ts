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
    solutionAR: "تنفيذ بنية تعتمد على الأحداث باستخدام RabbitMQ."
  },
  {
    slug: "fleet-dispatch-saas",
    titleEN: "Multi-Tenant Fleet Dispatch & Finance System",
    titleAR: "منصة إدارة الأساطيل والمدفوعات اللوجستية",
    category: "SaaS",
    summaryEN: "A multi-tenant dispatch operations platform scaling to 7,000+ drivers with real-time WebSocket location tracking and auto payouts.",
    summaryAR: "منصة لوجستية متعددة المستأجرين تخدم 7000+ سائق نشط بتتبع جغرافي لحظي واحتساب مستحقات السائقين آلياً.",
    problemEN: "Dispatches were assigned manually, causing delays, route inefficiencies, and discrepancies in driver wallet ledgers.",
    problemAR: "كان يتم توزيع المهام يدوياً، مما أدى إلى تأخير التوصيل وعدم دقة كشوف الحسابات المالية ومحافظ السائقين.",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "WebSockets", "Redis / BullMQ", "Docker"],
    metricsEN: ["7,000+ Active Drivers", "WebSocket Latency < 50ms", "99.99% Uptime under high concurrency"],
    metricsAR: ["7,000+ سائق نشط", "زمن استجابة Sockets أقل من 50 ملي ثانية", "99.99% استقرار تحت الضغط العالي"],
    modulesEN: ["Real-time Driver Locator", "Driver Financial Wallet Ledger", "Payout Batch Processor", "Automatic Violation & Penalty system"],
    modulesAR: ["نظام تحديد مواقع السائقين الفوري", "دفتر أستاذ المحفظة المالية للسائق", "معالج دفعات المستحقات الجماعي", "نظام احتساب المخالفات والجزاءات التشغيلية آلياً"],
    challengesEN: "Race conditions during concurrent delivery completions causing duplicate payments. Resolved using PostgreSQL transactional locks and Redis distributed locks.",
    challengesAR: "حدوث معالجات متزامنة للمدفوعات في نفس الوقت مما يؤدي إلى تكرار صرف المستحقات للسائق. تم حلها بقفل الحركات على مستوى قاعدة البيانات PostgreSQL وأقفال Redis الموزعة.",
    solutionEN: "Introduced strict DB row-level locking.",
    solutionAR: "إدخال قفل صارم على مستوى الصف في قاعدة البيانات."
  }
];
