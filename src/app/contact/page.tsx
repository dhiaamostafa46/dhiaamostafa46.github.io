'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import GlassPanel from '@/components/shared/GlassPanel';
import GlowButton from '@/components/shared/GlowButton';
import { Mail, Send } from 'lucide-react';

export default function ContactPage() {
  const { lang } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    systemCore: 'ERP Integration Layer',
    userScale: '<1,000 active daily users',
    features: [] as string[],
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const systemCores = [
    'ERP Integration Layer',
    'Multi-Tenant SaaS Platform',
    'Automated Admin Dashboard',
    'Real-time Operations dispatcher',
    'Custom API & Database Backend',
  ];

  const userScales = [
    '<1,000 active daily users',
    '1,000 - 10,000 active daily users',
    '10,000+ active daily users',
  ];

  const featuresList = [
    'Real-time WebSockets',
    'Payment Gateway Integration',
    'ZATCA e-Invoicing Compliance',
    'Azure OpenAI Document Ingestion',
    'Complex Role-Based Access Control (RBAC)',
  ];

  const handleCheckboxChange = (feat: string) => {
    if (formData.features.includes(feat)) {
      setFormData({ ...formData, features: formData.features.filter((f) => f !== feat) });
    } else {
      setFormData({ ...formData, features: [...formData.features, feat] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('System Intake Deployed:', formData);
    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen bg-[#040816] cyber-grid overflow-hidden pt-32 pb-24">
      {/* Background ambient light */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: General Intake context */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
          <div className="space-y-4">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">[ DEPLOYMENT PORTAL ]</span>
            <h1 className="text-4xl font-bold tracking-tight text-white leading-tight">System Intake Engine</h1>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              If you require a custom backend architecture, integration pipelines, SaaS databases scaling, or operational automation, initialize a request spec. I review each log and follow up within 24 hours.
            </p>
          </div>

          <div className="space-y-4 border-t border-white/5 pt-6 font-mono text-xs text-slate-400">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <Mail size={16} className="text-cyan-400" />
              <a href="mailto:dhiaamostafa46@gmail.com" className="hover:text-white transition-colors">
                dhiaamostafa46@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="text-indigo-400 shrink-0">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <a href="https://linkedin.com/in/dhiaamostafa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                linkedin.com/in/dhiaamostafa
              </a>
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="text-purple-400 shrink-0">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
              <a href="https://github.com/dhiaamostafa46" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                github.com/dhiaamostafa46
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Intake Configurer Form */}
        <div className="lg:col-span-7">
          <GlassPanel className="p-8 border-white/10 bg-[#0a1223]/25 hover:border-white/10">
            {submitted ? (
              <div className="py-16 text-center space-y-6">
                <div className="inline-flex p-4 rounded bg-emerald-950/20 border border-emerald-500/20 text-[#10b981] font-mono text-sm">
                  [ INTAKE_TRANSMISSION: DEPLOYED_SUCCESSFULLY ]
                </div>
                <h3 className="text-xl font-bold text-white">Spec Logs Secured</h3>
                <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto font-light">
                  Thank you, Dhiaa has received your configuration specs and will analyze the database requirements shortly. We'll connect on email.
                </p>
                <div className="pt-4">
                  <GlowButton variant="cyan" onClick={() => setSubmitted(false)}>
                    [ Configure Another Spec ]
                  </GlowButton>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/5 pb-3 font-mono text-xs text-slate-500">
                  <span>[ INTAKE_ENGINE: CONFIG_STATE ]</span>
                  <span className="text-cyan-400">READY</span>
                </div>

                {/* Name / Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] text-slate-400 uppercase">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#07111f]/40 border border-white/10 rounded px-4 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                      placeholder="e.g. Dhiaa Mostafa"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] text-slate-400 uppercase">Corporate Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#07111f]/40 border border-white/10 rounded px-4 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                      placeholder="e.g. client@company.com"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] text-slate-400 uppercase">Organization / Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#07111f]/40 border border-white/10 rounded px-4 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                    placeholder="e.g. Enterprise Org Ltd."
                  />
                </div>

                {/* System Core type */}
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] text-slate-400 uppercase">System Core Architecture</label>
                  <select
                    value={formData.systemCore}
                    onChange={(e) => setFormData({ ...formData, systemCore: e.target.value })}
                    className="w-full bg-[#07111f]/80 border border-white/10 rounded px-4 py-2 text-xs text-slate-300 focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                  >
                    {systemCores.map((core) => (
                      <option key={core} value={core} className="bg-[#07111f] text-white">
                        {core}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Concurrency scale */}
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] text-slate-400 uppercase">Estimated Concurrency / Load Scale</label>
                  <div className="grid grid-cols-1 gap-2 font-mono">
                    {userScales.map((scale) => (
                      <label key={scale} className="flex items-center space-x-3 rtl:space-x-reverse text-xs text-slate-300 cursor-pointer p-2 border border-white/5 rounded bg-[#07111f]/20 hover:border-white/10 transition-colors">
                        <input
                          type="radio"
                          name="userScale"
                          value={scale}
                          checked={formData.userScale === scale}
                          onChange={(e) => setFormData({ ...formData, userScale: e.target.value })}
                          className="text-cyan-400 focus:ring-0 border-white/10 bg-[#07111f] focus:outline-none"
                        />
                        <span>{scale}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Required Features Checkboxes */}
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] text-slate-400 uppercase">Required Capabilities</label>
                  <div className="grid grid-cols-1 gap-2 font-mono">
                    {featuresList.map((feat) => (
                      <label key={feat} className="flex items-center space-x-3 rtl:space-x-reverse text-xs text-slate-300 cursor-pointer p-2 border border-white/5 rounded bg-[#07111f]/20 hover:border-white/10 transition-colors">
                        <input
                          type="checkbox"
                          checked={formData.features.includes(feat)}
                          onChange={() => handleCheckboxChange(feat)}
                          className="text-cyan-400 rounded focus:ring-0 border-white/10 bg-[#07111f] focus:outline-none"
                        />
                        <span>{feat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Detailed Spec log */}
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] text-slate-400 uppercase">System Specifications / Details</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-[#07111f]/40 border border-white/10 rounded px-4 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors font-mono font-sans"
                    placeholder="Briefly describe the operating logic, accounting workflows, database integrations, or automation goals."
                  />
                </div>

                {/* Submit */}
                <div className="pt-2 text-right">
                  <GlowButton variant="cyan" type="submit" className="w-full sm:w-auto">
                    <span className="inline-flex items-center space-x-2 rtl:space-x-reverse">
                      <span>[ Deploy Intake Spec ]</span>
                      <Send size={12} />
                    </span>
                  </GlowButton>
                </div>
              </form>
            )}
          </GlassPanel>
        </div>

      </div>
    </main>
  );
}
