import React from 'react';
import { 
  CheckCircle2, 
  ArrowDown, 
  ShieldCheck, 
  Compass, 
  Sparkles, 
  Quote, 
  Award, 
  FileCheck2,
  ExternalLink
} from 'lucide-react';
import { HeroIllustration } from './illustrations/HeroIllustration';

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollTo }) => {
  return (
    <section id="hero" className="relative pt-6 pb-14 md:pt-10 md:pb-20 overflow-hidden bg-white border-b border-slate-100">
      
      {/* Background Subtle Corporate Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Hope Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-900 text-xs sm:text-sm font-semibold shadow-xs max-w-full text-center">
            <span className="text-amber-500 flex-shrink-0">🌟</span>
            <span className="truncate sm:whitespace-normal">BU DOSYA UMUTTUR – KENDİ BAŞINA GELENLERİN REHBERİDİR</span>
          </div>
        </div>

        {/* 2-Column Hero: Content Left, Large SVG Illustration Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column (Text & CTAs) */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-tight">
              Almanya’da İş Bulma Rehberi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900">
                & Kapsamlı Başvuru Checklist’i
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Almanya’da çalışan binlerce Türk vatandaşı, <strong className="text-slate-900 font-semibold">hiçbir aracı firma kullanmadan</strong>, hiçbir tanıdığı olmadan, yalnızca kendi emeğiyle iş buldu ve yeni bir hayat kurdu.
            </p>

            {/* Inspirational Quote Card */}
            <div className="mt-6 bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 text-left shadow-xs relative w-full">
              <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-blue-200 absolute top-4 right-4" />
              <div className="text-[11px] uppercase tracking-wider font-bold text-blue-700 mb-1">
                Temel Prensip
              </div>
              <p className="text-sm sm:text-base font-medium text-slate-800 italic pr-8">
                “İlk adımı atan, zaten yolun yarısını geçmiştir. Çünkü bu mümkün. Senin için de mümkün. Adım adım gidersen, yol seni bekliyor.”
              </p>
              <div className="mt-2.5 text-xs text-slate-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
                <span>Bilmen gereken her şey sade, net ve uygulanabilir tek bir dosyada!</span>
              </div>
            </div>

            {/* Quick CTA Actions */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={() => onScrollTo('bolum-1-hazirlik')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Rehbere Adım Adım Başla</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => onScrollTo('bolum-mektup')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-all cursor-pointer whitespace-nowrap"
              >
                <FileCheck2 className="w-4 h-4 text-blue-600" />
                <span>Anschreiben Şablonunu Gör</span>
              </button>
            </div>
          </div>

          {/* Right Column (SVG Hero Illustration) */}
          <div className="lg:col-span-5 flex justify-center items-center overflow-hidden">
            <div className="w-full max-w-md lg:max-w-none">
              <HeroIllustration className="w-full h-auto max-h-[380px] object-contain drop-shadow-xs" />
            </div>
          </div>

        </div>

        {/* "Onlar Ne Yaptı?" - 4 Pillars of Success */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-100">
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              Başaranlar Bunu Nasıl Yaptı?
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              4 Adımlı İstikrarlı Başarı Formülü
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Pillar 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between h-full group">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-lg mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  1
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">
                  İlanları Takip Etti
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                  Make it in Germany, Jobbörse ve StepStone gibi Almanya'nın resmi ve en güvenilir 6 sitesinde günlük arama yaptı.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between h-full group">
              <div>
                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-lg mb-3 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  2
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">
                  CV & Mektubunu Düzenledi
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                  Maksimum 1 sayfalık Alman formatında Lebenslauf ve her başvuruya özel yazılmış Anschreiben hazırladı.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between h-full group">
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-lg mb-3 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  3
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">
                  Almanca Öğrendi
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                  A1-A2 bile olsa öğrenmeye başladı, kursa gitti ve bunu başvurusunda işverene azim göstergesi olarak sundu.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between h-full group">
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-lg mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  4
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">
                  Sabırla & İstikrarla Başvurdu
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                  Günde 3-5 hedefe yönelik başvuru yaptı; moralini bozmadan süreci günlük kontrol listesiyle yönetti.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 pt-6 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div className="p-2.5 rounded-xl bg-slate-50/70 border border-slate-100">
            <div className="text-xl sm:text-2xl font-bold text-slate-900">0 €</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Aracı / Danışman Ücreti Yok</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50/70 border border-slate-100">
            <div className="text-xl sm:text-2xl font-bold text-slate-900">%100</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">2024 Nitelikli Göç Yasası Uyumlu</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50/70 border border-slate-100">
            <div className="text-xl sm:text-2xl font-bold text-slate-900">6 Güvenilir</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Resmi Alman İş Platformu</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50/70 border border-slate-100">
            <div className="text-xl sm:text-2xl font-bold text-slate-900">1 Sayfa</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Standart Alman Lebenslauf</div>
          </div>
        </div>

      </div>
    </section>
  );
};
