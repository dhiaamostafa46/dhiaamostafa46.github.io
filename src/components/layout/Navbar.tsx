'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/lib/i18n';

export default function Navbar() {
  const { t, lang, toggleLang } = useI18n();
  const pathname = usePathname();

  const navLinks = [
    { name: t('nav_home'), href: '/' },
    { name: t('nav_about'), href: '/about' },
    { name: t('nav_projects'), href: '/projects' },
    { name: t('nav_services'), href: '/services' },
    { name: t('nav_stack'), href: '/stack' },
    { name: t('nav_ai'), href: '/ai' },
    { name: t('nav_contact'), href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#040816]/70 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left Side: Logo & Status */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Link href="/" className="font-bold text-lg text-white tracking-wide hover:text-cyan-400 transition-colors">
            Dhiaa Mostafa
          </Link>
          <div className="hidden sm:flex items-center space-x-2 rtl:space-x-reverse px-2 py-1 bg-emerald-900/20 border border-emerald-500/20 rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-mono text-emerald-500 tracking-wider">SYS: OPERATIONAL</span>
          </div>
        </div>

        {/* Right Side: Navigation & Tools */}
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          
          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Tools: Latency & Language */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse border-l border-white/10 pl-4 rtl:pl-0 rtl:border-l-0 rtl:border-r rtl:pr-4">
            <div className="hidden md:block font-mono text-[10px] text-slate-500">
              PING: <span className="text-cyan-400">24ms</span>
            </div>
            <button
              onClick={toggleLang}
              className="text-xs font-medium text-slate-300 hover:text-white transition-colors px-2 py-1 border border-white/10 rounded bg-white/5"
            >
              {lang === 'en' ? 'العربية' : 'English'}
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
