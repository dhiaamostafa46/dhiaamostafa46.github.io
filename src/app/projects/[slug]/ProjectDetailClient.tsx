'use client';

import { useI18n } from '@/lib/i18n';
import { projects } from '@/data/projects';
import { notFound, useParams } from 'next/navigation';
import React from 'react';
import { ArrowLeft, Server, Cpu, Database, Webhook, ShieldAlert, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function ProjectDetailClient() {
  const { slug } = useParams() as { slug: string };
  const { lang, isRTL } = useI18n();

  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    notFound();
  }

  // Flowchart Nodes for Architecture Diagram
  const flowNodes = [
    { id: 'client', label: 'Client Layer', icon: Cpu, color: 'text-cyan-400' },
    { id: 'gateway', label: 'API Gateway', icon: Server, color: 'text-blue-400' },
    { id: 'queue', label: 'Job Worker', icon: ShieldAlert, color: 'text-indigo-400' },
    { id: 'db', label: 'Relational DB', icon: Database, color: 'text-purple-400' },
    { id: 'hooks', label: 'Webhook Engine', icon: Webhook, color: 'text-pink-400' },
  ];

  return (
    <main className={`relative min-h-screen bg-[#020202] overflow-hidden pt-32 pb-32 text-slate-100 ${isRTL ? 'rtl font-cairo' : 'ltr font-outfit'}`}>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Back Link */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors font-medium">
            <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            {lang === 'ar' ? 'العودة إلى سجل المشاريع' : 'Back to Systems Catalog'}
          </Link>
        </motion.div>

        {/* 1. Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-6">
          <div className="inline-flex px-3 py-1 bg-white/5 text-xs font-mono rounded text-cyan-400">
             {project.category} System
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            {lang === 'ar' ? project.titleAR : project.titleEN}
          </h1>
          
          <div className="flex flex-wrap gap-2 pt-4">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-xs font-mono text-slate-300 px-3 py-1 bg-[#050505] border border-white/5 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Hero Image */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-[#050505]">
             <img src={project.gallery[0]} alt={project.titleEN} className="w-full h-auto max-h-[80vh] object-cover object-top opacity-90 hover:opacity-100 transition-opacity" />
          </motion.div>
        )}

        {/* 2. Operational Metrics Overview */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/5">
          {(lang === 'ar' ? project.metricsAR : project.metricsEN).map((metric, i) => (
            <div key={i} className="flex flex-col border-l-2 border-white/10 pl-6 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-6">
              <span className="text-3xl font-bold text-white block mb-2">{metric.split(" ")[0]}</span>
              <span className="text-xs text-slate-500 uppercase tracking-widest block font-medium">
                {metric.split(" ").slice(1).join(" ")}
              </span>
            </div>
          ))}
        </motion.div>

        {/* 3. The Challenge & Solution */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#050505] p-8 md:p-12 rounded-3xl border border-white/5">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-wide border-b border-white/5 pb-4 mb-6">
              {lang === 'ar' ? 'المشكلة التشغيلية' : 'The Business Challenge'}
            </h2>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light">
              {lang === 'ar' ? project.problemAR : project.problemEN}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-wide border-b border-white/5 pb-4 mb-6">
              {lang === 'ar' ? 'الحل الهندسي' : 'The Engineering Solution'}
            </h2>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light">
              {lang === 'ar' ? project.solutionAR : project.solutionEN}
            </p>
          </div>
        </motion.div>

        {/* 3.5 Remaining Gallery Screenshots */}
        {project.gallery && project.gallery.length > 1 && (
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-6 pt-8">
            <h2 className="text-2xl font-bold text-white text-center">{lang === 'ar' ? 'لقطات من واجهة النظام' : 'System Interfaces'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {project.gallery.slice(1).map((imgSrc, idx) => (
                 <div key={idx} className="rounded-2xl overflow-hidden border border-white/5 bg-[#050505] shadow-xl">
                   <img src={imgSrc} alt={`${project.slug} interface ${idx + 1}`} className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity hover:scale-105 duration-500" />
                 </div>
               ))}
            </div>
          </motion.div>
        )}

        {/* 4. Interactive Request Flow Diagram */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8 py-8">
          <h2 className="text-2xl font-bold text-white text-center">{lang === 'ar' ? 'مسار تكامل النظام' : 'System Integration Flow'}</h2>
          <div className="p-12 rounded-3xl bg-[#050505] border border-white/5 flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-4 relative">
              {flowNodes.map((node, index) => {
                const IconComponent = node.icon;
                return (
                  <React.Fragment key={node.id}>
                    {/* Node panel */}
                    <div className="flex flex-col items-center p-6 border border-white/5 rounded-2xl bg-black/40 w-44 text-center">
                      <IconComponent className={`w-8 h-8 mb-4 ${node.color}`} />
                      <span className="text-xs text-white font-bold tracking-wide uppercase">{node.id}</span>
                      <span className="text-[10px] text-slate-500 mt-2">{node.label}</span>
                    </div>

                    {/* Connector line (skip for last) */}
                    {index < flowNodes.length - 1 && (
                      <div className="hidden md:block flex-1 h-[2px] bg-white/5 relative min-w-[20px]">
                        <span className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-white/20 -translate-y-1/2 animate-ping" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* 5. Modules & Coding Challenges */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white border-b border-white/5 pb-4">
              {lang === 'ar' ? 'الوحدات البرمجية الأساسية' : 'Core System Modules'}
            </h3>
            <ul className="space-y-4">
              {(lang === 'ar' ? project.modulesAR : project.modulesEN).map((mod, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 font-light">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{mod}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 bg-cyan-950/10 p-8 rounded-3xl border border-cyan-500/10">
            <h3 className="text-xl font-bold text-cyan-400 border-b border-cyan-500/20 pb-4">
              {lang === 'ar' ? 'تحديات التوسع والأداء' : 'Scaling & Data Bottlenecks'}
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
              {lang === 'ar' ? project.challengesAR : project.challengesEN}
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center pt-16">
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-all hover:scale-105">
            {lang === 'ar' ? 'طلب استشارة لبناء نظام مماثل' : 'Discuss a Similar Integration'}
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
