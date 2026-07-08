'use client';

import { useI18n } from '@/lib/i18n';
import GlassPanel from '@/components/shared/GlassPanel';
import GlowButton from '@/components/shared/GlowButton';
import { Database, Server, Link2, Cpu, BarChart3, Settings } from 'lucide-react';

export default function ServicesPage() {
  const { lang } = useI18n();

  const services = [
    {
      icon: Database,
      titleEN: "Custom ERP & Business Systems",
      titleAR: "أنظمة ERP المخصصة وإدارة العمليات",
      descEN: "Architecting custom backoffice applications including automated double-entry ledger bookkeeping, cash register reconciliation, payroll calculators, inventory adjustments, and structured reporting pipelines.",
      descAR: "بناء وتصميم أنظمة أعمال داخلية مخصصة تشمل: القيود المحاسبية الآلية مزدوجة القيد، تسويات الخزائن والمبيعات لنقاط البيع، حاسبات الرواتب، وإدارة المخزون والتقارير المالية.",
      tags: ["Ledgers", "Accounting", "HR Payroll", "POS"]
    },
    {
      icon: Link2,
      titleEN: "ERP Integrations & Data Syncing",
      titleAR: "تكاملات أنظمة الـ ERP ومزامنة البيانات",
      descEN: "Syncing corporate merchant platforms (Odoo, SAP, Oracle, custom engines) with checkout portals, logistic shipping providers, and e-invoicing taxation frameworks (ZATCA compliance).",
      descAR: "ربط ومزامنة منصات المبيعات الإلكترونية مع أنظمة الـ ERP المختلفة ومزامنة المخزون والطلبات والبيانات المالية مع بوابات الشحن والفوترة الضريبية.",
      tags: ["REST/GraphQL", "ZATCA", "Webhooks Sync", "Retry Handlers"]
    },
    {
      icon: Server,
      titleEN: "SaaS Multi-Tenant Architecture",
      titleAR: "معمارية منصات SaaS متعددة المشتركين",
      descEN: "Building secure cloud architectures featuring strict data isolation rules, tenant-specific subdomains, global subscription managers, and centralized RBAC controls.",
      descAR: "تصميم بنية سحابية آمنة تضمن عزل قواعد البيانات للمشتركين بصرامة، وإدارة الفواتير والاشتراكات، والتحكم بالصلاحيات والميزات لكل مستأجر.",
      tags: ["Data Isolation", "Dynamic Subdomains", "RBAC", "Subscriptions"]
    },
    {
      icon: Cpu,
      titleEN: "Operational AI & Process Automation",
      titleAR: "أتمتة العمليات والذكاء الاصطناعي التشغيلي",
      descEN: "Implementing Azure OpenAI LLM pipelines to extract key invoice variables from PDFs into ledgers, parse operator requests, and automatically classify and route support tasks.",
      descAR: "دمج الذكاء الاصطناعي مع منطق العمل: قراءة الفواتير وتفريغها تلقائياً، إتاحة استعلام التقارير بلغة محادثة طبيعية، وأتمتة الردود على الرسائل التشغيلية.",
      tags: ["Azure OpenAI", "OCR PDF Extraction", "Intent Routing", "Automation"]
    },
    {
      icon: BarChart3,
      titleEN: "Real-time Operations Dashboards",
      titleAR: "لوحات التحكم ومتابعة العمليات اللحظية",
      descEN: "Developing high-concurrency dashboards featuring real-time WebSocket vehicle mapping, dispatcher panels, inventory updates, and live performance metrics.",
      descAR: "تطوير لوحات تحكم لمتابعة العمليات لحظة بلحظة: كخرائط تتبع السائقين المتزامنة عبر WebSockets، وتحديثات المخزون الفورية، ولوحات إحصائيات الأداء.",
      tags: ["WebSockets", "Data Visualization", "Real-time Events", "HUD Dashboards"]
    },
    {
      icon: Settings,
      titleEN: "Database Optimization & Code Refactoring",
      titleAR: "تحسين قواعد البيانات وإعادة هندسة الكود",
      descEN: "Auditing slow database queries, restructure SQL indexes, design Redis caching schemes, and convert legacy monolith logic into organized modular services.",
      descAR: "مراجعة قواعد البيانات البطيئة وإعادة فهرسة البيانات، وتصميم طبقات الكاش بقنوات Redis، وتفكيك الكود القديم لوحدات برمجية قابلة للصيانة والتوسع.",
      tags: ["Index Tuning", "Redis Caching", "API Optimization", "Refactoring"]
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#040816] cyber-grid overflow-hidden pt-32 pb-24">
      {/* Background glow */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="space-y-4 text-center lg:text-left rtl:lg:text-right">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">[ WHAT I DELIVER ]</span>
          <h1 className="text-4xl font-bold tracking-tight text-white">Systems Engineering Services</h1>
          <p className="text-sm text-slate-400 max-w-lg font-light leading-relaxed">
            I offer technical architecture design and implementation services to connect operations, bookkeeping, and databases into a unified structure.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => {
            const IconComp = svc.icon;
            return (
              <GlassPanel key={i} glowColor="violet" className="flex flex-col justify-between p-6">
                <div className="space-y-4">
                  <div className="p-3 w-12 h-12 rounded bg-indigo-950/20 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                    <IconComp size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {lang === 'ar' ? svc.titleAR : svc.titleEN}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light font-sans">
                    {lang === 'ar' ? svc.descAR : svc.descEN}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 mt-6 border-t border-white/5">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-mono text-slate-400 px-2 py-0.5 border border-white/5 bg-slate-900/30 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassPanel>
            );
          })}
        </div>

        {/* Contact intake CTA */}
        <GlassPanel glowColor="cyan" className="p-8 text-center bg-[#07111f]/20 max-w-2xl mx-auto">
          <h3 className="text-lg font-bold text-white font-mono mb-2">[ COLLABORATION_PIPELINE ]</h3>
          <p className="text-xs text-slate-400 leading-relaxed max-w-lg mx-auto font-light mb-6">
            Looking to establish long-term technical lead support, implement dedicated ERP connectors, or restructure database loads? Let's deploy an intake specification.
          </p>
          <GlowButton variant="cyan" href="/contact">Configure Project Intake</GlowButton>
        </GlassPanel>

      </div>
    </main>
  );
}
