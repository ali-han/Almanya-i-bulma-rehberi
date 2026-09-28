import React from 'react';
import { ArrowUp, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-lg">
                DE
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                Almanya'da İş Bulma Rehberi
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Almanya’da çalışan binlerce Türk vatandaşının kendi emeğiyle ulaştığı başarıdan ilham alan; 2024 Nitelikli Göç Yasası uyumlu, aracı firmalara gerek kalmadan kendi başınıza başvurmanızı sağlayan kapsamlı kılavuz.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Resmi portallar ve yasal düzenlemeler referans alınmıştır.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4">
              Rehber Bölümleri
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button 
                  onClick={() => onScrollTo('bolum-1-hazirlik')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  01. Hazırlık & Belgeler
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('bolum-2-siteler')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  02. Güvenilir 6 İş Sitesi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('bolum-3-kurallar')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  03. Başvuru Hataları & Kurallar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('bolum-denklik-yasa')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  04. 2024 Nitelikli Göç Yasası
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('bolum-mektup')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  05. Motivasyon Mektubu Şablonu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('bolum-checklist')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  06. Günlük Checklist
                </button>
              </li>
            </ul>
          </div>

          {/* Official German Portals */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4">
              Resmi Alman Kaynakları
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a 
                  href="https://www.make-it-in-germany.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Make it in Germany</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.arbeitsagentur.de" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Bundesagentur für Arbeit</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.anerkennung-in-deutschland.de" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Anerkennung in Deutschland</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a 
                  href="https://anabin.kmk.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Anabin Veritabanı (Diploma)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a 
                  href="https://tuerkei.diplo.de" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Almanya Dış Temsilcilikleri</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Almanya'da İş Bulma Rehberi. Bilgilendirme ve bağımsız başvuru rehberi.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <span>Sayfa Başına Dön</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
