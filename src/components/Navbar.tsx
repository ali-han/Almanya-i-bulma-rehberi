import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  CheckSquare, 
  Menu, 
  X, 
  Printer, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onScrollTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Kararlı hysteresis ile scroll dinleyicisi (Zıplamayı ve kararsızlığı önler)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          // Hysteresis: > 50px olunca kompakt moda geç, < 15px olunca normale dön
          if (y > 50) {
            setIsScrolled(true);
          } else if (y < 15) {
            setIsScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Hazırlık', id: 'bolum-1-hazirlik' },
    { label: 'İş Siteleri', id: 'bolum-2-siteler' },
    { label: 'Kurallar', id: 'bolum-3-kurallar' },
    { label: 'Denklik & Yasa', id: 'bolum-denklik-yasa' },
    { label: 'Mektup Şablonu', id: 'bolum-mektup' },
    { label: 'Checklist', id: 'bolum-checklist' },
    { label: 'SSS', id: 'bolum-sss' },
  ];

  return (
    <>
      {/* 
        SABİT (FIXED) ÜST MENÜ:
        Kaybolmayı ve zıplamayı tamamen önleyen 'fixed top-0 left-0 right-0' yapısı
      */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 w-full ${
          isScrolled 
            ? 'shadow-md border-b border-slate-200/90' 
            : 'border-b border-slate-200'
        }`}
      >
        {/* Üst Bilgilendirme Şeridi (Aşağı kaydırınca yumuşakça gizlenir) */}
        <div 
          className={`bg-slate-900 text-white text-xs px-3 sm:px-4 text-center font-medium tracking-wide transition-all duration-300 overflow-hidden ${
            isScrolled ? 'max-h-0 py-0 opacity-0 pointer-events-none' : 'py-2 opacity-100 max-h-16'
          }`}
        >
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30 whitespace-nowrap text-[11px] sm:text-xs">
              <Sparkles className="w-3 h-3 text-amber-400 flex-shrink-0" />
              2024 Nitelikli Göç Yasası
            </span>
            <span className="text-slate-300 text-[11px] sm:text-xs text-center">
              Aracı firmaya gerek olmadan, kendi başınıza Almanya'da iş ve vize sürecinizi yönetin.
            </span>
          </div>
        </div>

        {/* Ana Menü Çubuğu */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div 
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? 'h-14 sm:h-15' : 'h-16 sm:h-20'
            }`}
          >
            
            {/* Logo: Alman Bayrağı + Bundesadler Kalkanı (Tek ve Net Marka) */}
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
              rel="home"
              title="Almanya'da İş Bulma Rehberi - Ana Sayfa"
              aria-label="Almanya'da İş Bulma Rehberi Ana Sayfa"
              className="flex items-center group focus:outline-none flex-shrink-0"
            >
              <Logo isScrolled={isScrolled} variant="light" showSubtitle={true} />
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden xl:flex items-center space-x-1 text-sm font-medium text-slate-600 flex-shrink-0">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`rounded-md hover:text-blue-700 hover:bg-slate-50 transition-all cursor-pointer whitespace-nowrap ${
                    isScrolled ? 'px-2.5 py-1 text-xs font-semibold' : 'px-3 py-1.5 text-sm'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => window.print()}
                title="Rehberi ve mektup şablonunu yazdırın"
                className={`inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all cursor-pointer border border-slate-200 whitespace-nowrap ${
                  isScrolled ? 'px-2.5 py-1.5' : 'px-3 py-2'
                }`}
              >
                <Printer className="w-3.5 h-3.5 text-slate-600" />
                <span>Yazdır</span>
              </button>

              <button
                onClick={() => handleNavClick('bolum-checklist')}
                className={`inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs hover:shadow transition-all cursor-pointer whitespace-nowrap ${
                  isScrolled ? 'px-3 py-1.5' : 'px-4 py-2'
                }`}
              >
                <CheckSquare className="w-3.5 h-3.5" />
                <span>Checklist</span>
                <ArrowRight className="w-3 h-3 ml-0.5 opacity-80" />
              </button>
            </div>

            {/* Mobile & Tablet Menü Düğmeleri */}
            <div className="flex items-center gap-1.5 xl:hidden flex-shrink-0">
              <button
                onClick={() => handleNavClick('bolum-checklist')}
                className="md:hidden inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold text-white bg-blue-600 rounded-lg whitespace-nowrap"
              >
                <CheckSquare className="w-3.5 h-3.5" />
                <span>Checklist</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Menüyü aç"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* 
          TEK VE NET ALMAN BAYRAĞI RENK ŞERİDİ (Schwarz - Rot - Gold):
          Tüm menünün tabanında sadece tek bir şık aksan çizgisi yer alır.
        */}
        <div className="w-full flex h-[3px] overflow-hidden" aria-hidden="true" title="Schwarz - Rot - Gold">
          <div className="flex-1 bg-slate-950" />
          <div className="flex-1 bg-red-600" />
          <div className="flex-1 bg-amber-400" />
        </div>

        {/* Mobil Drawer Menü */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
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

      {/* 
        SABİT SPACER (BOŞLUK DOLDURUCU):
        Sayfa içeriğinin fixed menünün altında kalmasını önler ve 
        scroll sırasında sayfa boyu değişmediği için zıplamayı %100 engeller.
      */}
      <div className="h-[95px] sm:h-[115px]" aria-hidden="true" />
    </>
  );
};
