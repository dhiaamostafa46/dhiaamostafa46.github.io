'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'cyan' | 'indigo';
  href?: string;
  className?: string;
}

export default function GlowButton({
  children,
  variant = 'indigo',
  href,
  className,
  ...props
}: GlowButtonProps) {
  // Synthesize soft click sound
  const playSound = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const audioCtx = new AudioContextClass();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(520, audioCtx.currentTime); // High pitch click
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      gainNode.gain.setValueAtTime(0.02, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.08);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.08);
    } catch (e) {
      // AudioContext is blocked by autoplay policy
    }
  };

  const baseStyles = 'relative px-6 py-2.5 rounded font-mono text-xs tracking-wider transition-all duration-300 border backdrop-blur-sm cursor-pointer select-none inline-flex items-center justify-center';
  
  const variants = {
    cyan: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/20 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]',
    indigo: 'border-indigo-500/30 text-indigo-400 bg-indigo-950/20 hover:border-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.35)]',
  };

  const content = (
    <>
      <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-current opacity-70" />
      <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-current opacity-70" />
      <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-current opacity-70" />
      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-current opacity-70" />
      {children}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseStyles, variants[variant], className)}
        onClick={playSound}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      onClick={(e) => {
        playSound();
        if (props.onClick) props.onClick(e);
      }}
      {...props}
    >
      {content}
    </button>
  );
}
