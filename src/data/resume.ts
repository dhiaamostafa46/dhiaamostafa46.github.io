export interface ResumeItem {
  id: string;
  yearEN: string;
  yearAR: string;
  titleEN: string;
  titleAR: string;
  companyEN: string;
  companyAR: string;
  descriptionEN: string;
  descriptionAR: string;
}

export const experienceData: ResumeItem[] = [
  {
    id: "exp-1",
    yearEN: "2023 - Present",
    yearAR: "2023 - الحاضر",
    titleEN: "Senior Technical Lead & Integration Architect",
    titleAR: "قائد تقني أول ومهندس تكاملات",
    companyEN: "Bander Trading Company",
    companyAR: "شركة بندر للتجارة",
    descriptionEN: "Leading cross-functional engineering for a shared microservices platform. Architected a multi-tenant SaaS logistics platform scaling to 7,000+ agents and led ERP integrations for 500+ enterprise clients with 99%+ uptime.",
    descriptionAR: "قيادة الهندسة التقنية متعددة الوظائف لمنصة خدمات مصغرة (Microservices). تصميم منصة لوجستية SaaS متعددة المستأجرين تخدم أكثر من 7000 وكيل، وقيادة تكاملات أنظمة ERP لأكثر من 500 عميل بنسبة استقرار تفوق 99%."
  },
  {
    id: "exp-2",
    yearEN: "2022 - 2023",
    yearAR: "2022 - 2023",
    titleEN: "Full-Stack Developer",
    titleAR: "مطور برمجيات متكامل (Full-Stack)",
    companyEN: "Smart System",
    companyAR: "الأنظمة الذكية (Smart System)",
    descriptionEN: "Contributed to architecture design and engineering quality in Agile squads. Developed Restaurant Management and Hotel Reservation Systems using Laravel and React.",
    descriptionAR: "المساهمة في تصميم البنية التحتية ومعايير الجودة الهندسية. تطوير أنظمة إدارة المطاعم وحجوزات الفنادق باستخدام تقنيات Laravel و React."
  },
  {
    id: "exp-3",
    yearEN: "2021 - 2022",
    yearAR: "2021 - 2022",
    titleEN: "Freelance Software Developer",
    titleAR: "مطور برمجيات مستقل",
    companyEN: "Self-Employed",
    companyAR: "عمل حر",
    descriptionEN: "Delivered custom web applications and API integrations independently. Maintained and upgraded legacy codebases to improve security and performance.",
    descriptionAR: "بناء تطبيقات ويب مخصصة وتكاملات واجهات برمجة التطبيقات (APIs) بشكل مستقل. صيانة وتحديث الأكواد القديمة لتحسين الأمان والأداء."
  },
  {
    id: "exp-4",
    yearEN: "2020 - 2021",
    yearAR: "2020 - 2021",
    titleEN: "Full-Stack Developer",
    titleAR: "مطور برمجيات متكامل",
    companyEN: "SKYSOFT",
    companyAR: "سكاي سوفت (SKYSOFT)",
    descriptionEN: "Developed cross-platform mobile apps (Flutter) for School Management and E-commerce, fully integrated with RESTful Laravel back-ends.",
    descriptionAR: "تطوير تطبيقات هواتف ذكية (Flutter) لأنظمة إدارة المدارس والمتاجر الإلكترونية، مع ربطها بواجهات خلفية (Backend) مبنية بـ Laravel."
  }
];

export const educationData: ResumeItem[] = [
  {
    id: "edu-1",
    yearEN: "2016 - 2020",
    yearAR: "2016 - 2020",
    titleEN: "Bachelor of Information Technology",
    titleAR: "بكالوريوس تقنية المعلومات",
    companyEN: "IBB University",
    companyAR: "جامعة إب (IBB University)",
    descriptionEN: "Graduated with a strong foundation in software engineering, database design, and web development technologies.",
    descriptionAR: "تخرجت بأساس قوي في هندسة البرمجيات، تصميم قواعد البيانات، وتقنيات تطوير الويب."
  }
];
