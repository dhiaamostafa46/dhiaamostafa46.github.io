'use client';

import React from 'react';
import { cn } from '@/lib/cn';

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: 'cyan' | 'violet' | 'green' | 'none';
}

export default function GlassPanel({
  children,
  className,
  glowColor = 'violet',
  ...props
}: GlassPanelProps) {
  const glowStyles = {
    cyan: 'hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]',
    violet: 'hover:border-indigo-400 hover:shadow-[0_0_25px_rgba(99,102,241,0.18)]',
    green: 'hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]',
    none: '',
  };

  return (
    <div
      className={cn(
        'glass-panel p-6 rounded-xl border border-white/5 bg-[#0a1223]/30 backdrop-blur-md transition-all duration-300',
        glowStyles[glowColor],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
