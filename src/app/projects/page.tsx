'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { projects, Project } from '@/data/projects';
import GlassPanel from '@/components/shared/GlassPanel';

type FilterCategory = 'All' | 'ERP' | 'SaaS' | 'Integrations' | 'AI';

export default function ProjectsPage() {
  const { lang } = useI18n();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  const filters: { label: string; value: FilterCategory }[] = [
    { label: 'All', value: 'All' },
    { label: 'ERP & Finance', value: 'ERP' },
    { label: 'Multi-Tenant SaaS', value: 'SaaS' },
    { label: 'API Integrations', value: 'Integrations' },
    { label: 'Operational AI', value: 'AI' },
  ];

  const filteredProjects = projects.filter((project) => 
    activeFilter === 'All' ? true : project.category === activeFilter
  );

  return (
    <main className="min-h-screen bg-[#040816] cyber-grid pt-32 pb-24 relative overflow-hidden text-white">
      {/* Background Ambience */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header section */}
        <div className="mb-12">
          <GlassPanel className="p-8 border-white/5 bg-[#0a1223]/50">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Systems Catalog
            </h1>
            <p className="text-slate-400 font-light text-sm md:text-base max-w-2xl">
              Production installations & architectural breakdowns. Review the logic, scale, and integrations behind enterprise systems.
            </p>
          </GlassPanel>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-sm text-xs font-mono transition-all duration-300 border ${
                activeFilter === filter.value
                  ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.2)]'
                  : 'bg-[#0a1223]/40 border-white/5 text-slate-400 hover:border-white/20 hover:text-white'
              }`}
            >
              [{filter.label}]
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={`/projects/${project.slug}`} className="block h-full group">
                  <GlassPanel className="h-full p-6 sm:p-8 border-white/5 bg-[#0a1223]/30 hover:bg-[#0a1223]/50 hover:border-indigo-500/30 transition-all flex flex-col relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]">
                    
                    {/* Blueprint grid effect inside card */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:16px_16px] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity" />

                    <div className="relative z-10 flex-1 flex flex-col">
                      {/* Top Bar */}
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-[10px] font-mono text-cyan-400 border border-cyan-500/30 bg-cyan-950/30 px-2 py-1 rounded">
                          {project.category}
                        </span>
                      </div>

                      {/* Title & Summary */}
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors">
                        {lang === 'ar' ? project.titleAR : project.titleEN}
                      </h3>
                      <p className="text-sm text-slate-400 font-light leading-relaxed mb-6 flex-1">
                        {lang === 'ar' ? project.summaryAR : project.summaryEN}
                      </p>

                      {/* Tech Stack Glowing Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span key={tech} className="text-[10px] font-mono text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/5">
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="text-[10px] font-mono text-slate-500 bg-transparent px-2 py-1">
                            +{project.techStack.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Core Metrics Highlight */}
                      <div className="border-t border-white/10 pt-4 mt-auto">
                        <div className="grid grid-cols-2 gap-4">
                          {(lang === 'ar' ? project.metricsAR : project.metricsEN).slice(0, 2).map((metric, i) => (
                            <div key={i} className="flex flex-col">
                              <span className="text-xs font-semibold text-white/90">
                                {metric.split(' ')[0]}
                              </span>
                              <span className="text-[10px] text-slate-500 mt-1">
                                {metric.split(' ').slice(1).join(' ')}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </GlassPanel>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 font-mono text-slate-500 text-sm">
            [ NO_SYSTEMS_FOUND_IN_CATEGORY ]
          </div>
        )}
      </div>
    </main>
  );
}
