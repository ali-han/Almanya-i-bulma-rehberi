import React, { useState } from 'react';
import { 
  FileText, 
  CheckSquare, 
  Globe, 
  ShieldCheck, 
  Menu, 
  X, 
  Printer, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  onScrollTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Hazırlık', id: 'bolum-1-hazirlik' },
    { label: 'İş Siteleri', id: 'bolum-2-siteler' },
    { label: 'Başvuru Kuralları', id: 'bolum-3-kurallar' },
    { label: 'Denklik & Yasa', id: 'bolum-denklik-yasa' },
    { label: 'Mektup Şablonu', id: 'bolum-mektup' },
    { label: 'Günlük Checklist', id: 'bolum-checklist' },
    { label: 'SSS', id: 'bolum-sss' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      {/* Top Corporate Ribbon */}
      <div className="bg-slate-900 text-white text-xs py-1.5 px-4 text-center font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
            <Sparkles className="w-3 h-3 text-amber-400" />
            2024 Nitelikli Göç Yasası Uyumlu
          </span>
          <span className="hidden sm:inline text-slate-300">
            Aracı firmaya gerek olmadan, kendi emeğinizle Almanya'da iş ve vize sürecinizi yönetin.
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo Brand */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            {/* German subtle tricolor badge + Eagle / Document symbol */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-slate-900 flex items-center justify-center text-white shadow-sm border border-slate-800 group-hover:bg-blue-900 transition-colors">
              <span className="font-bold text-lg tracking-wider text-amber-400">DE</span>
              <div className="absolute -bottom-1 -right-1 flex gap-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-black border border-white"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 border border-white"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 border border-white"></span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight font-serif">
                  Almanya'da İş Bulma
                </span>
                <span className="text-xs font-semibold px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded border border-blue-200">
                  Rehberi
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                Kendi Başına İş Bulanların Resmi Başvuru Kılavuzu
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="px-3 py-1.5 rounded-md hover:text-blue-700 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => window.print()}
              title="Rehberi ve mektup şablonunu yazdırın"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer border border-slate-200"
            >
              <Printer className="w-3.5 h-3.5 text-slate-600" />
              <span>Yazdır / PDF</span>
            </button>

            <button
              onClick={() => handleNavClick('bolum-checklist')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <CheckSquare className="w-3.5 h-3.5" />
              <span>Günlük Checklist</span>
              <ArrowRight className="w-3 h-3 ml-0.5 opacity-80" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleNavClick('bolum-checklist')}
              className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold text-white bg-blue-600 rounded-lg"
            >
              <CheckSquare className="w-3 h-3" />
              <span>Checklist</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Menüyü aç"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                handleNavClick('bolum-mektup');
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-blue-700 bg-blue-50 rounded-lg border border-blue-200"
            >
              <FileText className="w-4 h-4" />
              <span>Örnek Anschreiben Şablonu</span>
            </button>
            <button
              onClick={() => {
                window.print();
                setMobileMenuOpen(false);
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 rounded-lg border border-slate-200"
            >
              <Printer className="w-4 h-4" />
              <span>Sayfayı Yazdır / PDF Al</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
