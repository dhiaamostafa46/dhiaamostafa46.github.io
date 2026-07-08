'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import Link from 'next/link';
import { ArrowRight, Server, Database, Code2, Bot, Layers, CheckCircle2, ChevronRight, Briefcase, GraduationCap, Mail, Send } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import DataCore3D from '@/components/three/DataCore3D';
import { projects } from '@/data/projects';
import { experienceData, educationData } from '@/data/resume';
import { motion, type Variants } from 'framer-motion';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function HomePage() {
  const { t, lang, isRTL } = useI18n();

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    systemCore: 'ERP Integration Layer',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const systemCores = [
    'ERP Integration Layer',
    'Multi-Tenant SaaS Platform',
    'AI-Driven Automation Workflow',
    'Custom Database Backend',
    'Architecture Audit & Consulting',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('System Intake Deployed:', formData);
    setSubmitted(true);
  };

  return (
    <main className={`w-full bg-[#020202] text-slate-100 ${isRTL ? 'rtl font-cairo' : 'ltr font-outfit'} overflow-hidden`}>
      
      {/* =========================================
          SECTION 1: HERO
          ========================================= */}
      <section id="home" className="relative w-full min-h-screen flex items-center pt-24 pb-12">
        <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left: Content */}
          <div className="flex flex-col items-start text-left rtl:text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium text-xs mb-8 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {t('nav_status')}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 text-white">
              {t('hero_title')}
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-400 font-light mb-10 leading-relaxed max-w-lg">
              {t('hero_sub')}
            </p>
            
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <Link href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-slate-200 transition-all hover:scale-[1.02]">
                {t('cta_primary')}
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
              <Link href="/#projects" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-medium rounded-xl border border-white/20 hover:bg-white/5 transition-all">
                {t('cta_secondary')}
              </Link>
            </div>

            {/* Real Stats Row */}
            <div className="flex items-center gap-8 mt-16 pt-8 border-t border-white/10 w-full max-w-lg">
              <div>
                <span className="block text-2xl font-bold text-white mb-1">{t('metric_erp_title')}</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">{t('metric_erp_desc')}</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white mb-1">{t('metric_fleet_title')}</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">{t('metric_fleet_desc')}</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white mb-1">{t('metric_latency_title')}</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">{t('metric_latency_desc')}</span>
              </div>
            </div>
          </div>

          {/* Right: The Data Core 3D */}
          <div className="h-[600px] w-full hidden lg:block relative">
             <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-transparent to-transparent z-10 pointer-events-none" />
             <Canvas 
                camera={{ position: [0, 0, 8], fov: 45 }} 
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
             >
                <DataCore3D />
             </Canvas>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 2: ABOUT ME (Philosophy)
          ========================================= */}
      <motion.section 
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="w-full py-24 bg-[#050505] border-y border-white/5"
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-4">
            {lang === 'ar' ? 'نبذة عني والفلسفة الهندسية' : 'About Me & Engineering Philosophy'}
          </span>
          <p className="text-2xl md:text-3xl text-slate-300 font-light leading-relaxed">
            {lang === 'ar' ? (
              "أنا مهندس أنظمة أول لا أكتفي بكتابة الأكواد البرمجية فقط، بل أبني أنظمة مستقرة قادرة على التعافي ذاتياً. هندسة المعماريات تبدأ من طبقة قاعدة البيانات، مروراً بعزل المشتركين بدقة، وانتهاءً بمعالجة المهام الثقيلة خلف الكواليس لضمان استمرارية التشغيل."
            ) : (
              "I am a Senior Systems Architect who doesn't just write code; I architect stable, self-recovering systems. True engineering starts at the database layer, enforcing strict multi-tenancy, and processing heavy workloads asynchronously."
            )}
          </p>
        </div>
      </motion.section>

      {/* =========================================
          SECTION 3: SERVICES & EXPERTISE
          ========================================= */}
      <motion.section 
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="w-full py-32 max-w-7xl mx-auto px-6"
      >
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-4">
            {lang === 'ar' ? 'الخدمات التقنية' : 'Technical Services'}
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">{t('dom_title')}</h2>
          <p className="text-lg text-slate-400 font-light">{t('dom_sub')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
            <Database className="w-8 h-8 text-cyan-400 mb-6" />
            <h3 className="text-xl font-bold mb-4 text-white">{t('dom_erp_title')}</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">{t('dom_erp_desc')}</p>
          </div>
          
          <div className="p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
            <Server className="w-8 h-8 text-indigo-400 mb-6" />
            <h3 className="text-xl font-bold mb-4 text-white">{t('dom_saas_title')}</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">{t('dom_saas_desc')}</p>
          </div>
          
          <div className="p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
            <Layers className="w-8 h-8 text-purple-400 mb-6" />
            <h3 className="text-xl font-bold mb-4 text-white">{t('dom_api_title')}</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">{t('dom_api_desc')}</p>
          </div>
        </div>
      </motion.section>

      {/* =========================================
          SECTION 4: EXPERIENCE & EDUCATION TIMELINE
          ========================================= */}
      <motion.section 
        id="resume"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="w-full py-32 bg-[#050505] border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 border-b border-white/10 pb-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                <Briefcase className="w-6 h-6 text-cyan-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                {lang === 'ar' ? 'الخبرات المهنية' : 'Experience'}
              </h2>
            </div>
            
            <div className="space-y-10 relative">
               <div className="absolute top-0 bottom-0 left-6 w-px bg-white/10 rtl:left-auto rtl:right-6" />
               {experienceData.map((exp, i) => (
                 <div key={exp.id} className="relative pl-16 rtl:pl-0 rtl:pr-16">
                   <div className="absolute left-[21px] top-2 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-[#050505] rtl:left-auto rtl:right-[21px]" />
                   <span className="text-xs font-mono text-cyan-400 mb-2 block tracking-widest">{lang === 'ar' ? exp.yearAR : exp.yearEN}</span>
                   <h3 className="text-xl font-bold text-white mb-1">{lang === 'ar' ? exp.titleAR : exp.titleEN}</h3>
                   <span className="text-sm font-medium text-slate-300 block mb-3">{lang === 'ar' ? exp.companyAR : exp.companyEN}</span>
                   <p className="text-sm text-slate-400 leading-relaxed font-light">{lang === 'ar' ? exp.descriptionAR : exp.descriptionEN}</p>
                 </div>
               ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 border-b border-white/10 pb-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                {lang === 'ar' ? 'الدراسات والشهادات' : 'Education'}
              </h2>
            </div>
            
            <div className="space-y-10 relative">
               <div className="absolute top-0 bottom-0 left-6 w-px bg-white/10 rtl:left-auto rtl:right-6" />
               {educationData.map((edu, i) => (
                 <div key={edu.id} className="relative pl-16 rtl:pl-0 rtl:pr-16">
                   <div className="absolute left-[21px] top-2 w-3 h-3 rounded-full bg-purple-400 ring-4 ring-[#050505] rtl:left-auto rtl:right-[21px]" />
                   <span className="text-xs font-mono text-purple-400 mb-2 block tracking-widest">{lang === 'ar' ? edu.yearAR : edu.yearEN}</span>
                   <h3 className="text-xl font-bold text-white mb-1">{lang === 'ar' ? edu.titleAR : edu.titleEN}</h3>
                   <span className="text-sm font-medium text-slate-300 block mb-3">{lang === 'ar' ? edu.companyAR : edu.companyEN}</span>
                   <p className="text-sm text-slate-400 leading-relaxed font-light">{lang === 'ar' ? edu.descriptionAR : edu.descriptionEN}</p>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </motion.section>

      {/* =========================================
          SECTION 5: FEATURED SYSTEMS (Projects)
          ========================================= */}
      <motion.section 
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="w-full py-32"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-4">
                {lang === 'ar' ? 'جميع المشاريع' : 'All Projects'}
              </span>
              <h2 className="text-4xl font-bold text-white mb-4">
                {lang === 'ar' ? 'معرض الأنظمة' : 'Systems Showcase'}
              </h2>
              <p className="text-lg text-slate-400 font-light max-w-xl">
                {lang === 'ar' 
                  ? 'منصات بُنيت لتحل اختناقات تشغيلية فعلية وقادرة على التوسع اللامحدود.' 
                  : 'Production-grade platforms built to solve severe operational bottlenecks and scale seamlessly.'}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj) => (
              <div key={proj.slug} className="group rounded-3xl bg-[#050505] border border-white/5 hover:border-white/10 transition-all overflow-hidden flex flex-col">
                
                {/* Thumbnail */}
                <div className="w-full h-56 overflow-hidden relative bg-[#020202]">
                  {proj.gallery && proj.gallery.length > 0 ? (
                    <img src={proj.gallery[0]} alt={proj.slug} className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center opacity-30 text-white">No Image</div>
                  )}
                  <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 inline-flex px-3 py-1 bg-black/60 backdrop-blur-md text-[10px] font-mono rounded-full text-cyan-400 border border-white/10 z-10">
                    {proj.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4 mb-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {lang === 'ar' ? proj.titleAR : proj.titleEN}
                    </h3>
                    <p className="text-slate-400 font-light text-xs leading-relaxed line-clamp-3">
                      {lang === 'ar' ? proj.summaryAR : proj.summaryEN}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                     <div className="flex gap-2 overflow-hidden max-w-[75%] flex-wrap">
                       {proj.techStack.slice(0, 2).map(tech => (
                         <span key={tech} className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-slate-400 whitespace-nowrap">
                           {tech}
                         </span>
                       ))}
                       {proj.techStack.length > 2 && <span className="px-2 py-1 text-[10px] text-slate-500">+{proj.techStack.length - 2}</span>}
                     </div>
                     <Link href={`/projects/${proj.slug}`} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-colors shrink-0">
                        <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                     </Link>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* =========================================
          SECTION 6: AI OPERATIONS
          ========================================= */}
      <motion.section 
        id="ai-ops"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="w-full py-32 bg-[#050505] border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-xs font-medium mb-8 border border-purple-500/20">
                <Bot className="w-4 h-4" /> AI Operations
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">{t('ai_title')}</h2>
              <p className="text-lg text-slate-400 font-light leading-relaxed mb-8 max-w-lg">
                {t('ai_sub')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              <div className="bg-[#020202] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors shadow-2xl">
                <h3 className="text-lg font-bold text-white mb-3">{t('ai_invoice_title')}</h3>
                <p className="text-slate-400 font-light text-sm leading-relaxed">{t('ai_invoice_desc')}</p>
              </div>
              <div className="bg-[#020202] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors shadow-2xl sm:translate-y-8">
                <h3 className="text-lg font-bold text-white mb-3">{t('ai_intent_title')}</h3>
                <p className="text-slate-400 font-light text-sm leading-relaxed">{t('ai_intent_desc')}</p>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* =========================================
          SECTION 7: CONTACT INTAKE FORM
          ========================================= */}
      <motion.section 
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="w-full py-32 bg-[#020202]"
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: General Intake context */}
          <div className="lg:col-span-5 space-y-12 lg:sticky top-32">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                {lang === 'ar' ? 'دعنا نبني نظامك القادم' : 'Initiate a System Build'}
              </h2>
              <p className="text-base text-slate-400 font-light leading-relaxed">
                {lang === 'ar' 
                  ? 'إذا كنت تبحث عن معمارية برمجية مستقرة، تكامل مع أنظمة ERP، أو تحجيم (Scaling) لمنصتك، املأ المواصفات وسأتواصل معك خلال 24 ساعة لمناقشة التفاصيل التقنية.'
                  : 'If you require a scalable backend architecture, ERP integrations, or high-concurrency SaaS platforms, submit your requirements below.'}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                 <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                 </div>
                 <div>
                    <span className="block text-sm font-bold text-emerald-400">
                      {lang === 'ar' ? 'متاح لمشاريع جديدة' : 'Available for New Projects'}
                    </span>
                    <span className="text-xs text-slate-500">
                      {lang === 'ar' ? 'تجاوب سريع خلال أيام العمل' : 'Fast response during business days'}
                    </span>
                 </div>
              </div>

              <div className="flex flex-col space-y-4 border-t border-white/5 pt-8">
                <a href="mailto:dhiaamostafa46@gmail.com" className="group flex items-center gap-4 hover:bg-white/5 p-3 -mx-3 rounded-xl transition-colors">
                   <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                      <Mail className="w-4 h-4 text-white" />
                   </div>
                   <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">dhiaamostafa46@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/dhiaamostafa" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 hover:bg-white/5 p-3 -mx-3 rounded-xl transition-colors">
                   <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                      <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                   </div>
                   <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Intake Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 rounded-3xl bg-[#050505] border border-white/5 shadow-2xl">
              {submitted ? (
                <div className="py-16 text-center space-y-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {lang === 'ar' ? 'تم استلام المواصفات' : 'System Spec Received'}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto font-light">
                    {lang === 'ar' 
                      ? 'شكراً لك. سأقوم بمراجعة التفاصيل المعمارية وأرد عليك بأقرب فرصة ممكنة.'
                      : 'Thank you. I will review your architectural requirements and get back to you shortly via email.'}
                  </p>
                  <div className="pt-6 border-t border-white/5 mt-8">
                    <button onClick={() => setSubmitted(false)} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                      {lang === 'ar' ? 'إرسال طلب آخر' : 'Submit Another Request'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Name / Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">{lang === 'ar' ? 'الاسم' : 'Your Name'}</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                        placeholder="e.g. John Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">{lang === 'ar' ? 'البريد الإلكتروني' : 'Corporate Email'}</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                        placeholder="client@company.com"
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">{lang === 'ar' ? 'الشركة / المؤسسة' : 'Organization / Company'}</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                      placeholder="e.g. TechCorp Ltd."
                    />
                  </div>

                  {/* System Core type */}
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">{lang === 'ar' ? 'نوع النظام الأساسي' : 'System Architecture Target'}</label>
                    <select
                      value={formData.systemCore}
                      onChange={(e) => setFormData({ ...formData, systemCore: e.target.value })}
                      className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-white/30 transition-all cursor-pointer appearance-none"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center", backgroundSize: "1em" }}
                    >
                      {systemCores.map((core) => (
                        <option key={core} value={core} className="bg-[#050505] text-white">
                          {core}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Detailed Spec log */}
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">{lang === 'ar' ? 'تفاصيل المشروع' : 'Project Specifications'}</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-y"
                      placeholder={lang === 'ar' ? "صف باختصار أهداف النظام، التحديات الحالية، والمطلوب إنجازه هندسياً..." : "Briefly describe the operating logic, challenges, or architectural goals..."}
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-6">
                    <button type="submit" className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-all active:scale-95">
                      <span>{lang === 'ar' ? 'إرسال المواصفات' : 'Deploy Specifications'}</span>
                      <Send className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </motion.section>

    </main>
  );
}
