'use client';

import { useI18n } from '@/lib/i18n';
import GlassPanel from '@/components/shared/GlassPanel';
import GlowButton from '@/components/shared/GlowButton';
import { Server, Monitor, Database, Activity, Cloud, Share2 } from 'lucide-react';

export default function StackPage() {
  const { lang } = useI18n();

  const stackGroups = [
    {
      icon: Server,
      titleEN: "Core Backend Engines",
      titleAR: "محركات الأنظمة الخلفية",
      techs: ["PHP / Laravel", "Node.js / NestJS", "Express.js", "RESTful APIs", "GraphQL APIs", "Microservices"]
    },
    {
      icon: Monitor,
      titleEN: "Frontend & UI Layers",
      titleAR: "أنظمة الواجهات وتجربة المستخدم",
      techs: ["Next.js (App Router)", "React.js", "TypeScript (Strict)", "Tailwind CSS", "Zustand / Redux", "Arabic RTL UX"]
    },
    {
      icon: Database,
      titleEN: "Databases & Performance Caching",
      titleAR: "قواعد البيانات وإدارة التخزين المؤقت",
      techs: ["PostgreSQL", "MySQL", "Redis (Cache & Queues)", "DB Index Optimization", "Sequelize ORM", "JSON Schema validation"]
    },
    {
      icon: Activity,
      titleEN: "Real-time Sync & Queues",
      titleAR: "قنوات الاتصال الفوري وقوائم المعالجة",
      techs: ["WebSockets (Live Mapping)", "BullMQ", "Horizon Workers", "CRON Scheduling", "Webhook Event Brokers"]
    },
    {
      icon: Cloud,
      titleEN: "Cloud & DevOps Pipelines",
      titleAR: "السحابة الإلكترونية وعمليات الـ DevOps",
      techs: ["Docker Containers", "GitHub Actions CI/CD", "AWS (EC2 / S3 / RDS)", "Azure Container Apps", "Linux Server Admin"]
    },
    {
      icon: Share2,
      titleEN: "Integrations & Cognitive AI",
      titleAR: "ربط الخدمات وأنظمة الذكاء الاصطناعي",
      techs: ["Payment Gateways (Tap / Tap Pay / HyperPay)", "WhatsApp API Integration", "ZATCA e-Invoicing Compliance", "Azure OpenAI API (LLMs)"]
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#040816] cyber-grid overflow-hidden pt-32 pb-24">
      {/* Ambient background glow */}
      <div className="absolute top-[30%] right-[-10%] w-[450px] h-[450px] bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="space-y-4 text-center lg:text-left rtl:lg:text-right">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">[ SYSTEM ECOSYSTEM ]</span>
          <h1 className="text-4xl font-bold tracking-tight text-white">Technological Matrix</h1>
          <p className="text-sm text-slate-400 max-w-lg font-light leading-relaxed">
            The programming languages, frameworks, hosting services, caching layers, and integrations that I deploy to ensure system performance, data integrity, and operational consistency.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stackGroups.map((group, i) => {
            const IconComp = group.icon;
            return (
              <GlassPanel key={i} className="border-white/5 bg-[#0a1223]/15 hover:border-cyan-500/20">
                <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6 border-b border-white/5 pb-4">
                  <div className="p-2 rounded bg-cyan-950/20 border border-cyan-500/20 text-cyan-400">
                    <IconComp size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-wide font-mono uppercase">
                    {lang === 'ar' ? group.titleAR : group.titleEN}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.techs.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#07111f]/60 text-slate-300 border border-white/5 hover:text-white hover:border-white/10 transition-colors duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassPanel>
            );
          })}
        </div>

        {/* Dynamic Architectural Note */}
        <GlassPanel glowColor="cyan" className="p-8 border-white/5 bg-[#0a1223]/20 max-w-3xl mx-auto flex flex-col md:flex-row gap-6 items-center">
          <div className="space-y-2">
            <h3 className="text-base font-bold text-white font-mono">[ ARCHITECTURAL_PILLARS ]</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light font-sans">
              I deploy containerized services (Docker) backed by automated integration pipelines (GitHub Actions) to guarantee 99%+ production environment stability. Data integrity is guaranteed via transactional SQL isolation levels, and latency is minimized using tailored Redis structures.
            </p>
          </div>
          <GlowButton variant="cyan" href="/contact" className="whitespace-nowrap shrink-0">Configure System Spec</GlowButton>
        </GlassPanel>

      </div>
    </main>
  );
}
