import React from 'react';
import { Heart, Sparkles, Compass, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { CareerSuccessIllustration } from './illustrations/CareerSuccessIllustration';

interface MoralClosingSectionProps {
  onScrollTo: (id: string) => void;
}

export const MoralClosingSection: React.FC<MoralClosingSectionProps> = ({ onScrollTo }) => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Heart Icon / Badge */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-blue-50 text-blue-700 shadow-xs mb-6">
          <Sparkles className="w-8 h-8 text-amber-500" />
        </div>

        <div className="inline-block px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
          Kapanış & Moral Notu
        </div>

        {/* Inspirational Core Statement */}
        <blockquote className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
          “Almanya’da iş bulmak bir umut değil, <br className="hidden sm:inline" />
          <span className="text-blue-700">bir sistem işidir.</span> <br />
          Bu sistemi çözersen, yol kendiliğinden açılır.”
        </blockquote>

        <p className="mt-6 text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
          “Senin yük olmadığını, vize sürecini bağımsız yürütebildiğini anlayan Alman işverenler, seni takımına dahil etmekten mutluluk duyacak.”
        </p>

        {/* Large SVG Illustration: Career Horizon in Germany */}
        <div className="mt-10 max-w-3xl mx-auto rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
          <CareerSuccessIllustration className="hover:scale-[1.008] transition-transform duration-300" />
        </div>

        {/* Summary Card */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 text-left">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h4 className="text-base font-bold text-slate-900">
              Yola Çıkarken Unutmaman Gereken 3 Temel Gerçek:
            </h4>
          </div>

          <div className="space-y-3 text-sm text-slate-700">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Aracıya İhtiyacın Yok:</strong> İş kanalları da vize kanunları da şeffaf ve açıktır.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Her Ret Bir Düzeltme Fırsatıdır:</strong> CV'ni ve mektubunu her geri bildirime göre cilala.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>İlk Adımı Atan Yolu Yarılamıştır:</strong> Bugün 3 başvuru yaparak sürecini hemen başlat.
              </span>
            </div>
          </div>
        </div>

        {/* Quick Action Button */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => onScrollTo('bolum-checklist')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            <span>Bugünkü Günlük Checklist’i Başlat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
