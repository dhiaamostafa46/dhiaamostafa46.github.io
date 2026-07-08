'use client';

import { useI18n } from '@/lib/i18n';
import GlassPanel from '@/components/shared/GlassPanel';
import GlowButton from '@/components/shared/GlowButton';
import dynamic from 'next/dynamic';
import { Cpu, FileJson, Languages, MessageSquare, Terminal } from 'lucide-react';

const AIOrb = dynamic(() => import('@/components/three/AIOrb'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[350px] flex items-center justify-center font-mono text-xs text-slate-500">
      [ CONFIGURING NEURAL ENVIRONMENT... ]
    </div>
  ),
});

export default function AIPage() {
  const { t, lang } = useI18n();

  const useCases = [
    {
      icon: FileJson,
      titleEN: "Document Intelligence (OCR to JSON)",
      titleAR: "تحليل المستندات والفواتير تلقائياً",
      descEN: "Processing multi-page PDFs to extract line items, taxes, and vendor totals. Utilizing JSON schemas to guarantee safe, structured ERP ledger insertions.",
      descAR: "معالجة ملفات PDF للفواتير واستخراج الضرائب والبنود تلقائياً. نستخدم نماذج JSON المهيكلة لضمان مطابقة وإدخال البيانات بأمان بنظام الـ ERP.",
    },
    {
      icon: Terminal,
      titleEN: "Intent-to-Action Workflows",
      titleAR: "تحليل نصوص الإجراءات التشغيلية",
      descEN: "Mapping free-text customer emails and WhatsApp alerts into transactional events: generating returns tickets, changing flight check-ins, or issuing instant wallet refunds.",
      descAR: "تحويل الطلبات المكتوبة باللغة الطبيعية (عبر البريد الإلكتروني أو الواتساب) إلى حركات برمجية: كإصدار تذاكر الدعم أو استرجاع المستحقات المالية بالمحفظة.",
    },
    {
      icon: MessageSquare,
      titleEN: "Natural Language Admin Ledger Queries",
      titleAR: "استعلامات الإدارة بلغة طبيعية",
      descEN: "Enabling operations managers to query PostgreSQL tables using conversational sentences. E.g., 'Return top 5 active drivers with wallet balances > 500 SAR'.",
      descAR: "تمكين مدراء العمليات من قراءة جداول البيانات والاستعلام عنها بصيغة أسئلة محادثة عادية. مثال: 'اعطني أعلى 5 سائقين نشطين لديهم رصيد محفظة أكبر من 500 ريال'.",
    },
    {
      icon: Languages,
      titleEN: "Arabic Business & Tax Terminology Parsing",
      titleAR: "نماذج لغوية متخصصة باللغة العربية",
      descEN: "Finetuning system prompt layouts to identify Arabic commercial records, regional accounting items, and e-invoicing totals (ZATCA compliance).",
      descAR: "تهيئة النماذج اللغوية لفهم واستخراج السجلات التجارية المحلية، الفواتير الضريبية، ومصطلحات المحاسبة العربية المعتمدة.",
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#040816] cyber-grid overflow-hidden pt-32 pb-24">
      {/* Background neon glows */}
      <div className="absolute top-[15%] left-[5%] w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* 1. Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left rtl:text-right">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">[ INTELLIGENT AGENT LAYER ]</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {t('ai_title')}
            </h1>
            <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed max-w-xl">
              {t('ai_sub')} I implement robust LLM pipelines using Azure OpenAI APIs that focus on structured parsing, operations assistance, and business process automation.
            </p>
            <div className="pt-2">
              <GlowButton variant="cyan" href="/contact">Integrate AI Workflow</GlowButton>
            </div>
          </div>

          <div className="lg:col-span-5 w-full h-[400px] flex items-center justify-center">
            <GlassPanel className="w-full h-full p-4 flex flex-col justify-between border-white/5 bg-[#0a1223]/25">
              <div className="flex justify-between items-center border-b border-white/10 pb-3 font-mono text-xs text-slate-500">
                <span>[ SHADER_NODE: RUNNING ]</span>
                <span className="text-purple-400">● ADDITIVE_SHADING</span>
              </div>
              <div className="flex-1 w-full h-full relative">
                <AIOrb />
              </div>
              <div className="border-t border-white/10 pt-3 font-mono text-xs text-slate-500">
                STATUS: ORB_MORPHING_SHAPE
              </div>
            </GlassPanel>
          </div>
        </div>

        {/* 2. Use Cases Grid */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-white tracking-wide text-center">Operational AI Pipelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((uc, i) => {
              const IconComp = uc.icon;
              return (
                <GlassPanel key={i} className="border-white/5 bg-[#0a1223]/20 hover:border-purple-500/20">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                    <div className="p-2 rounded bg-purple-950/20 border border-purple-500/20 text-purple-400">
                      <IconComp size={18} />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-wide">
                      {lang === 'ar' ? uc.titleAR : uc.titleEN}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light pl-1 rtl:pl-0 rtl:pr-1">
                    {lang === 'ar' ? uc.descAR : uc.descEN}
                  </p>
                </GlassPanel>
              );
            })}
          </div>
        </div>

      </div>
    </main>
  );
}
