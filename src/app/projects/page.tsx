'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { projects } from '@/data/projects';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

type FilterCategory = 'All' | 'ERP' | 'SaaS' | 'Integrations' | 'AI';

export default function ProjectsPage() {
  const { lang, isRTL } = useI18n();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  const filters: { label: string; value: FilterCategory }[] = [
    { label: 'All Systems', value: 'All' },
    { label: 'ERP & Finance', value: 'ERP' },
    { label: 'Multi-Tenant SaaS', value: 'SaaS' },
    { label: 'API Integrations', value: 'Integrations' },
    { label: 'Operational AI', value: 'AI' },
  ];

  const filteredProjects = projects.filter((project) => 
    activeFilter === 'All' ? true : project.category === activeFilter
  );

  return (
    <main className={`min-h-screen bg-[#020202] pt-32 pb-24 relative text-white ${isRTL ? 'rtl font-cairo' : 'ltr font-outfit'}`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Systems Catalog
          </h1>
          <p className="text-slate-400 font-light text-lg max-w-2xl leading-relaxed">
            Production installations & architectural breakdowns. Review the logic, scale, and integrations behind my enterprise systems.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-16 border-b border-white/5 pb-6">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-white text-black'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="group flex flex-col p-8 lg:p-12 rounded-3xl bg-[#050505] border border-white/5 hover:border-white/10 transition-all overflow-hidden relative">
                  
                  {/* Background Image / Thumbnail */}
                  {proj.gallery && proj.gallery.length > 0 && (
                    <div className="w-full h-64 lg:h-80 mb-8 rounded-2xl overflow-hidden relative border border-white/5">
                      <div className="absolute inset-0 bg-[#020202]/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                      <img 
                        src={proj.gallery[0]} 
                        alt={proj.slug} 
                        className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                    </div>
                  )}

                  <div className="flex flex-col lg:flex-row gap-12">
                    {/* Meta & Problem */}
                    <div className="flex-1 space-y-6">
                      <div className="inline-flex px-3 py-1 bg-white/5 text-xs font-mono rounded text-cyan-400">
                        {proj.category} System
                      </div>
                      <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {lang === 'ar' ? proj.titleAR : proj.titleEN}
                      </h3>
                      
                      <div className="space-y-2">
                        <span className="text-xs text-slate-500 uppercase tracking-widest block font-bold">The Problem</span>
                        <p className="text-slate-400 font-light text-sm leading-relaxed border-l-2 border-white/10 pl-4 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-4">
                          {lang === 'ar' ? proj.problemAR : proj.problemEN}
                        </p>
                      </div>
                    </div>

                    {/* Built Solution & Results */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <span className="text-xs text-slate-500 uppercase tracking-widest block font-bold">What was built</span>
                          <ul className="space-y-2">
                            {(lang === 'ar' ? proj.modulesAR : proj.modulesEN).map((mod, i) => (
                               <li key={i} className="flex items-start gap-2 text-sm text-slate-300 font-light">
                                 <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                                 {mod}
                               </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {proj.techStack.map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-slate-400">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                         <div className="flex gap-6">
                            {(lang === 'ar' ? proj.metricsAR : proj.metricsEN).slice(0, 2).map((metric, i) => (
                               <div key={i}>
                                 <span className="block text-white font-bold">{metric.split(' ')[0]}</span>
                                 <span className="text-[10px] text-slate-500 uppercase tracking-widest">{metric.split(' ').slice(1).join(' ')}</span>
                               </div>
                            ))}
                         </div>
                         <Link href={`/projects/${proj.slug}`} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                            <ChevronRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                         </Link>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-32 text-slate-500 font-light">
            No systems found in this category.
          </div>
        )}
      </div>
    </main>
  );
}
