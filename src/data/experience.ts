export interface Experience {
  id: string;
  roleEN: string;
  roleAR: string;
  company: string;
  periodEN: string;
  periodAR: string;
  achievementsEN: string[];
  achievementsAR: string[];
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    id: "bander-trading",
    roleEN: "Senior Technical Lead & Integration Architect",
    roleAR: "رئيس فريق تقني أول ومهندس تكاملات",
    company: "Bander Trading Company (Riyadh, SA)",
    periodEN: "2023 - Present",
    periodAR: "2023 - الحالي",
    achievementsEN: [
      "Sole technical architect owning backend, frontend, and mobile delivery across 10+ production environments.",
      "Shipped Evix ERP integration portal connecting 500+ corporate clients.",
      "Architected multi-tenant logistics SaaS scaling to 7,000+ drivers with real-time WebSockets.",
      "Optimized postgres queries and Redis configs, reducing load latency by 40%."
    ],
    achievementsAR: [
      "رئيس فريق تقني أول ومسؤول المعمارية لـ 10+ أنظمة تشغيل نشطة في الإنتاج.",
      "تطوير وإطلاق بوابة ربط Evix ERP لـ 500+ عميل تجاري ومزامنة بياناتهم لحظياً.",
      "تطوير نظام تشغيل لوجستي متعدد المستأجرين يخدم 7,000+ سائق عبر WebSockets.",
      "تسريع استجابة النظام بنسبة 40% عبر تحسين استعلامات قواعد البيانات والـ caching."
    ],
    techStack: ["Node.js", "NestJS", "Laravel/PHP", "React", "Next.js", "PostgreSQL", "Redis", "Docker", "AWS", "WebSockets"]
  },
  {
    id: "smart-system",
    roleEN: "Full-Stack Developer",
    roleAR: "مطور تطبيقات متكاملة (Full-Stack)",
    company: "Smart System (Riyadh, SA)",
    periodEN: "2022 - 2023",
    periodAR: "2022 - 2023",
    achievementsEN: [
      "Developed Restaurant Management and Hotel Booking systems using Laravel and React.",
      "Built clean dashboard panels with localized Arabic RTL support and dynamic translations.",
      "Implemented payment gateways checkout layers and API contract tests."
    ],
    achievementsAR: [
      "تطوير أنظمة إدارة المطاعم وحجوزات الفنادق باستخدام Laravel و React.",
      "بناء لوحات تحكم متطورة مع دعم كامل للغة العربية والاتجاهات RTL.",
      "دمج بوابات الدفع الإلكتروني المتعددة وبناء اختبارات مطابقة الـ APIs."
    ],
    techStack: ["PHP", "Laravel", "React", "TypeScript", "Tailwind CSS", "MySQL", "Rest APIs"]
  },
  {
    id: "skysoft",
    roleEN: "Mobile & Full-Stack Developer",
    roleAR: "مطور تطبيقات جوال ومواقع",
    company: "SKYSOFT (Sanaa)",
    periodEN: "2020 - 2021",
    periodAR: "2020 - 2021",
    achievementsEN: [
      "Delivered Flutter cross-platform mobile apps for School Management and E-commerce.",
      "Maintained responsive UI/UX and API integrations with Laravel backends."
    ],
    achievementsAR: [
      "تطوير تطبيقات جوال متقاطعة المنصات (Flutter) لإدارة المدارس والتجارة الإلكترونية.",
      "ربط واجهات التطبيقات بالأنظمة الخلفية Laravel والتحقق من جودة تجربة المستخدم."
    ],
    techStack: ["Flutter", "Dart", "Laravel", "PHP", "MySQL", "REST APIs"]
  }
];
