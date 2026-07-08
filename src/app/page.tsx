'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import HeroSystemCore from '@/components/three/HeroSystemCore';
import GlassPanel from '@/components/shared/GlassPanel';
import GlowButton from '@/components/shared/GlowButton';

export default function HomePage() {
  const { t, lang, isRTL } = useI18n();
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  return (
    <main className="relative min-h-screen bg-[#040816] cyber-grid overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Grid Interface */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Technical Messaging */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left rtl:text-right">
          <span className="text-xs uppercase tracking-widest text-[#22d3ee] font-mono">
            {t('hero_status')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-tight">
            {t('hero_title')}
          </h1>
          <p className="text-base md:text-lg text-[#94a3b8] max-w-xl font-light">
            {t('hero_sub')}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <GlowButton variant="cyan" onClick={() => window.location.href = '/contact'}>
              {t('cta_primary')}
            </GlowButton>
            <GlowButton variant="indigo" onClick={() => window.location.href = '/projects'}>
              {t('cta_secondary')}
            </GlowButton>
          </div>
        </div>

        {/* Right Side: Interactive WebGL Command Center */}
        <div className="lg:col-span-5 relative w-full h-[500px]">
          <GlassPanel className="w-full h-full p-4 flex flex-col justify-between border-white/5 bg-[#0a1223]/30">
            {/* Terminal HUD Title */}
            <div className="flex justify-between items-center border-b border-white/10 pb-3 font-mono text-xs text-[#64748b]">
              <span>[ GL_CORE: ACTIVE ]</span>
              <span className="animate-pulse text-[#10b981]">● ONLINE</span>
            </div>

            {/* Canvas Scene */}
            <div className="flex-1 w-full h-full relative">
              <HeroSystemCore onSelectNode={(label: string) => setSelectedNode(label)} />
            </div>

            {/* Real-time interactive display state */}
            <div className="border-t border-white/10 pt-3 font-mono text-xs flex justify-between text-[#94a3b8]">
              <span>NODE_SELECTED:</span>
              <span className="text-[#22d3ee] font-bold">
                {selectedNode ? `${selectedNode}.SYS // ACTIVE` : "N/A"}
              </span>
            </div>
          </GlassPanel>
        </div>
      </div>
    </main>
  );
}
