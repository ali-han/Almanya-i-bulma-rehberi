import React from 'react';
import { 
  ArrowUp, 
  ExternalLink, 
  ShieldCheck, 
  Heart, 
  Github, 
  Linkedin, 
  Tag, 
  Code2, 
  Sparkles,
  Mail
} from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projectVersion = "v1.2.0";
  const releaseDate = "2026.09";

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="mb-4 inline-block">
              <Logo variant="dark" isScrolled={false} showSubtitle={false} />
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

        {/* Teşekkür ve Geliştirici Bilgisi (Ali Han) */}
        <div className="py-8 border-b border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Teşekkür Mesajı */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
              <span>Gönülden Bir Teşekkür</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Bu rehberi; aracı firmalara binlerce Euro kaptırmadan, yalnızca kendi emeği, disiplini ve azmiyle Almanya'da yeni bir gelecek inşa etmeye cesaret eden herkes için hazırladık. Zaman ayırıp okuduğunuz, umudunuzu koruduğunuz ve bu yolda ilk adımı attığınız için yürekten teşekkür ederiz. Yolunuz açık olsun!
            </p>
          </div>

          {/* Developer Card: Ali Han */}
          <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between gap-3 w-full">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0"></span>
                <span className="font-extrabold text-white text-base whitespace-nowrap">Ali Han</span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50 whitespace-nowrap">
                  Full Stack Developer
                </span>
              </div>
              
              <div className="mt-2 text-xs text-slate-400 flex items-center gap-1.5">
                <span>📫 You can contact me on LinkedIn</span>
              </div>

              {/* Social Links */}
              <div className="mt-3.5 flex flex-wrap items-center gap-2">
                <a
                  href="https://github.com/ali-han"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-950 text-slate-200 hover:text-white text-xs font-medium border border-slate-700 transition-colors whitespace-nowrap"
                >
                  <Github className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>github/ali-han</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ali-han"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-xs transition-colors whitespace-nowrap"
                >
                  <Linkedin className="w-3.5 h-3.5 fill-current flex-shrink-0" />
                  <span>linkedin/ali-han</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Telif & Sürüm / Versiyon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-3">
            <span>
              © {new Date().getFullYear()} Almanya'da İş Bulma Rehberi. Bilgilendirme ve bağımsız başvuru kılavuzu.
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            {/* Sürüm / Versiyon Rozeti */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-mono text-[11px]">
              <Tag className="w-3 h-3 text-blue-400" />
              <span className="font-semibold text-white">{projectVersion}</span>
              <span className="text-slate-500">({releaseDate})</span>
            </div>
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
