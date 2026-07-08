'use client';

import { useI18n } from '@/lib/i18n';
import { projects } from '@/data/projects';
import GlassPanel from '@/components/shared/GlassPanel';
import GlowButton from '@/components/shared/GlowButton';
import { notFound, useParams } from 'next/navigation';
import React from 'react';
import { ArrowLeft, Server, Cpu, Database, Webhook, ShieldAlert, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ProjectDetailPage() {
  const { slug } = useParams() as { slug: string };
  const { lang } = useI18n();

  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    notFound();
  }

  // Flowchart Nodes for Architecture Diagram
  const flowNodes = [
    { id: 'client', label: 'Client Apps (Next/Flutter)', icon: Cpu, color: 'text-cyan-400 border-cyan-500/30' },
    { id: 'gateway', label: 'API Gateway (Router)', icon: Server, color: 'text-blue-400 border-blue-500/30' },
    { id: 'queue', label: 'Redis Queue (Job Worker)', icon: ShieldAlert, color: 'text-indigo-400 border-indigo-500/30' },
    { id: 'db', label: 'Relational DB (Postgres/MySQL)', icon: Database, color: 'text-[#10b981] border-[#10b981]/30' },
    { id: 'hooks', label: 'Webhook Engine (ZATCA/Sync)', icon: Webhook, color: 'text-purple-400 border-purple-500/30' },
  ];

  return (
    <main className="relative min-h-screen bg-[#040816] cyber-grid overflow-hidden pt-32 pb-24">
      {/* Ambient background glows */}
      <div className="absolute top-[30%] left-[10%] w-80 h-80 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-12">
        {/* Back Link */}
        <Link href="/projects" className="inline-flex items-center space-x-2 rtl:space-x-reverse font-mono text-xs text-slate-500 hover:text-cyan-400 transition-colors">
          <ArrowLeft size={14} />
          <span>[ Back to Catalog ]</span>
        </Link>

        {/* 1. Header */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">[ CASE STUDY // {project.category} ]</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {lang === 'ar' ? project.titleAR : project.titleEN}
          </h1>
          
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-[9px] font-mono text-slate-400 px-2.5 py-0.5 border border-white/10 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 2. Operational Metrics Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {(lang === 'ar' ? project.metricsAR : project.metricsEN).map((metric, i) => (
            <GlassPanel key={i} glowColor="cyan" className="p-6 text-center border-white/5 bg-[#0a1223]/10">
              <span className="text-2xl font-bold font-mono text-white block">{metric.split(" ")[0]}</span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mt-1">
                {metric.split(" ").slice(1).join(" ")}
              </span>
            </GlassPanel>
          ))}
        </div>

        {/* 3. The Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassPanel className="space-y-4">
            <h2 className="text-lg font-bold text-white tracking-wide border-b border-white/5 pb-2">
              {lang === 'ar' ? 'المشكلة التشغيلية' : 'The Business Challenge'}
            </h2>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-light font-sans">
              {lang === 'ar' ? project.problemAR : project.problemEN}
            </p>
          </GlassPanel>

          <GlassPanel className="space-y-4">
            <h2 className="text-lg font-bold text-cyan-400 tracking-wide border-b border-white/5 pb-2">
              {lang === 'ar' ? 'الحل الهندسي' : 'The Engineering Solution'}
            </h2>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light font-sans">
              {lang === 'ar' ? project.solutionAR : project.solutionEN}
            </p>
          </GlassPanel>
        </div>

        {/* 4. Interactive Request Flow Diagram (Architecture HUD) */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white tracking-wide text-center">System Integration Flow</h2>
          <GlassPanel className="p-8 border-white/5 bg-[#0a1223]/25 flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-4 relative">
              {flowNodes.map((node, index) => {
                const IconComponent = node.icon;
                return (
                  <React.Fragment key={node.id}>
                    {/* Node panel */}
                    <div className={`flex flex-col items-center p-4 border rounded-lg bg-[#07111f]/60 w-44 text-center font-mono ${node.color}`}>
                      <IconComponent size={24} className="mb-2" />
                      <span className="text-[10px] text-white font-bold">{node.id.toUpperCase()}</span>
                      <span className="text-[8px] text-slate-400 mt-1">{node.label}</span>
                    </div>

                    {/* Connector line (skip for last) */}
                    {index < flowNodes.length - 1 && (
                      <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-right from-cyan-500 to-indigo-500 relative min-w-[20px]">
                        <span className="absolute top-1/2 left-0 w-1.5 h-1.5 rounded-full bg-cyan-400 -translate-y-1/2 animate-ping" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </GlassPanel>
        </div>

        {/* 5. Modules & Coding Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassPanel className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wide">
              {lang === 'ar' ? 'الوحدات البرمجية الأساسية' : 'Core System Modules'}
            </h3>
            <ul className="space-y-2 list-none font-mono text-xs text-slate-400">
              {(lang === 'ar' ? project.modulesAR : project.modulesEN).map((mod, idx) => (
                <li key={idx} className="flex items-center space-x-2.5 rtl:space-x-reverse">
                  <CheckCircle2 size={12} className="text-[#10b981]" />
                  <span>{mod}</span>
                </li>
              ))}
            </ul>
          </GlassPanel>

          <GlassPanel glowColor="green" className="space-y-4 border-emerald-500/10">
            <h3 className="text-base font-bold text-emerald-400 tracking-wide">
              {lang === 'ar' ? 'تحديات التوسع والأداء' : 'Scaling & Data Bottlenecks'}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light font-sans">
              {lang === 'ar' ? project.challengesAR : project.challengesEN}
            </p>
          </GlassPanel>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <GlowButton variant="cyan" href="/contact">
            Request Similar System Integration
          </GlowButton>
        </div>

      </div>
    </main>
  );
}
