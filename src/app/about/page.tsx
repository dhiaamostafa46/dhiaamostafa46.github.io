'use client';

import { useI18n } from '@/lib/i18n';
import GlassPanel from '@/components/shared/GlassPanel';
import GlowButton from '@/components/shared/GlowButton';
import { experiences } from '@/data/experience';

export default function AboutPage() {
  const { t, lang } = useI18n();

  const manifestoEN = (
    <>
      Software engineering is not about writing code; it is about building stable, self-recovering systems that run businesses. When an integration endpoint fails under load, or a financial ledger entry misses a decimal, real transactions fail.
      <br /><br />
      I construct systems from the database layer upward. Reliable database schema design, index tuning, strict API validation, and robust background queue workers are the foundation of any application. I build architectures that ensure data consistency, security, and continuous operations.
    </>
  );

  const manifestoAR = (
    <>
      هندسة البرمجيات لا تعني مجرد كتابة كود، بل تعني بناء أنظمة مستقرة، قادرة على معالجة أخطائها ذاتياً لإدارة أعمال الشركات. عندما يتعطل خط ربط برمجية تحت الضغط، أو يُسجل قيد مالي بشكل غير دقيق، تتوقف التجارة الفعلية.
      <br /><br />
      أقوم ببناء الأنظمة بدءاً من طبقة قاعدة البيانات صعوداً. إن التصميم السليم للجداول، وضبط الفهارس، والتحقق الصارم من الـ APIs، والتشغيل الموثوق للمهام الخلفية هو أساس كل نظام ناجح. أهتم بالتفاصيل البرمجية التي تضمن سلامة البيانات واستمرارية التشغيل.
    </>
  );

  const principles = [
    {
      titleEN: "Database Integrity First",
      titleAR: "سلامة قواعد البيانات أولاً",
      descEN: "Constructing strict relational schemas and transaction logs before writing any interface files.",
      descAR: "تصميم جداول العلاقات والقيود الصارمة وحفظ السجلات قبل برمجة أي واجهات مستخدم.",
    },
    {
      titleEN: "Isolated Tenancy",
      titleAR: "عزل كامل للمشتركين",
      descEN: "Enforcing robust data isolation rules at the database query level to protect customer privacy in SaaS layouts.",
      descAR: "تطبيق قواعد حماية صارمة لعزل البيانات للمستأجرين لحماية خصوصية بيانات عملاء الـ SaaS.",
    },
    {
      titleEN: "Queue-Based Async Workflows",
      titleAR: "معالجة خلفية غير متزامنة",
      descEN: "Decoupling heavy tasks (PDF generation, third-party syncing) via Redis queues to preserve response speed.",
      descAR: "فصل المهام الثقيلة (توليد المستندات، مزامنة البيانات) عبر قوائم Redis للحفاظ على سرعة الاستجابة.",
    },
    {
      titleEN: "API Contract Enforcement",
      titleAR: "عقود APIs صارمة",
      descEN: "Validating every incoming payload explicitly and tracking outgoing webhook logs with automatic error-retries.",
      descAR: "التحقق الصارم من كل المدخلات وتوثيق وحفظ سجلات الـ webhooks مع تفعيل إعادة المحاولة التلقائية عند الفشل.",
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#040816] cyber-grid overflow-hidden pt-32 pb-24">
      {/* Background ambient light */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-20">
        
        {/* 1. Page Header */}
        <div className="space-y-4 text-center lg:text-left rtl:lg:text-right">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">[ SYSTEM MANIFESTO ]</span>
          <h1 className="text-4xl font-bold tracking-tight text-white">Engineering Philosophy</h1>
        </div>

        {/* 2. Manifesto Content */}
        <GlassPanel glowColor="cyan" className="p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light font-sans">
                {lang === 'ar' ? manifestoAR : manifestoEN}
              </p>
              <div className="pt-4">
                <GlowButton variant="cyan" href="/contact">Configure a System Intake</GlowButton>
              </div>
            </div>
            <div className="lg:col-span-4 border-l lg:border-l border-white/10 pl-8 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-8 space-y-4 font-mono text-xs text-slate-500">
              <div>
                <span className="text-white block font-bold">IDENTITY:</span>
                <span>Dhiaa Mostafa</span>
              </div>
              <div>
                <span className="text-white block font-bold">CORE VALUE:</span>
                <span>Data Integrity & Scaling</span>
              </div>
              <div>
                <span className="text-white block font-bold">LOC:</span>
                <span>Riyadh, Saudi Arabia</span>
              </div>
            </div>
          </div>
        </GlassPanel>

        {/* 3. Core Principles */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-white tracking-wide text-center">Architecture Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((pr, i) => (
              <GlassPanel key={i} className="border-white/5 bg-[#0a1223]/20 hover:border-cyan-500/20">
                <h3 className="text-base font-bold text-cyan-400 font-mono mb-2">
                  [{String(i+1).padStart(2, '0')}] {lang === 'ar' ? pr.titleAR : pr.titleEN}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {lang === 'ar' ? pr.descAR : pr.descEN}
                </p>
              </GlassPanel>
            ))}
          </div>
        </div>

        {/* 4. Experience Timeline */}
        <div className="space-y-12">
          <h2 className="text-2xl font-bold text-white tracking-wide text-center">Career Chronology</h2>
          
          <div className="space-y-8 relative before:absolute before:top-2 before:bottom-2 before:left-[15px] rtl:before:left-auto rtl:before:right-[15px] before:w-[1px] before:bg-white/10">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-10 rtl:pl-0 rtl:pr-10">
                {/* Timeline node dot */}
                <span className="absolute left-[11px] rtl:left-auto rtl:right-[11px] top-1.5 w-[9px] h-[9px] rounded-full bg-cyan-400 ring-4 ring-[#040816]" />

                <GlassPanel glowColor="none" className="border-white/5 bg-[#0a1223]/10 hover:border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {lang === 'ar' ? exp.roleAR : exp.roleEN}
                      </h3>
                      <span className="text-xs font-mono text-cyan-400">{exp.company}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 border border-white/10 px-2 py-0.5 rounded self-start">
                      {lang === 'ar' ? exp.periodAR : exp.periodEN}
                    </span>
                  </div>

                  <ul className="space-y-2 list-disc list-inside text-xs text-slate-400 font-light leading-relaxed">
                    {(lang === 'ar' ? exp.achievementsAR : exp.achievementsEN).map((ach, idx) => (
                      <li key={idx} className="marker:text-cyan-400">
                        {ach}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/5">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="text-[9px] font-mono text-slate-500 px-2 py-0.5 bg-slate-900/50 rounded border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassPanel>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
