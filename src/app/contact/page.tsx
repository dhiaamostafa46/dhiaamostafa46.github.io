'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { Mail, Send, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ContactPage() {
  const { lang, isRTL } = useI18n();
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
    <main className={`relative min-h-screen bg-[#020202] pt-32 pb-32 text-slate-100 ${isRTL ? 'rtl font-cairo' : 'ltr font-outfit'}`}>
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: General Intake context */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="lg:col-span-5 space-y-12 lg:sticky top-32">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {lang === 'ar' ? 'دعنا نبني نظامك القادم' : 'Initiate a System Build'}
            </h1>
            <p className="text-base text-slate-400 font-light leading-relaxed">
              {lang === 'ar' 
                ? 'إذا كنت تبحث عن معمارية برمجية مستقرة، تكامل مع أنظمة ERP، أو تحجيم (Scaling) لمنصتك، املأ المواصفات وسأتواصل معك خلال 24 ساعة لمناقشة التفاصيل التقنية.'
                : 'If you require a scalable backend architecture, ERP integrations, or high-concurrency SaaS platforms, submit your requirements below. I review all specs and follow up within 24 hours.'}
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
        </motion.div>

        {/* Right Side: Intake Form */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="lg:col-span-7">
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
        </motion.div>

      </div>
    </main>
  );
}
