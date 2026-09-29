import React from 'react';
import { 
  UserCheck, 
  Building2, 
  Ban, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  FileCheck2, 
  Sparkles,
  Scale
} from 'lucide-react';

export const VisaBridgeIllustration: React.FC<{ className?: string }> = ({ className = "w-full" }) => {
  return (
    <div className={`w-full rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-700/80 p-4 sm:p-6 md:p-8 text-white shadow-xl ${className}`}>
      
      {/* Top Law Shield & Reform Badge */}
      <div className="text-center max-w-xl mx-auto mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/60 border border-blue-600/50 text-blue-200 text-xs font-bold mb-2.5 shadow-xs">
          <Scale className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
          <span>§ Fachkräfteeinwanderungsgesetz (2024 Yasa Reformu)</span>
        </div>
        <h4 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight">
          Aday ile Alman İşveren Arasındaki Doğrudan Yasal Bağ
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          İşverenin hiçbir vize kefaleti yükü yoktur; süreç çalışan tarafından bağımsız yürütülür.
        </p>
      </div>

      {/* 3-Column Diagram (Mobile: Stacked, Desktop: 3 Pillars with Direct Bridge) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
        
        {/* Left Column: Aday (Sen) */}
        <div className="md:col-span-5 bg-slate-800/80 border border-slate-700 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-blue-500/60 transition-colors">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-600 text-white">
                ADAY (SEN)
              </span>
              <span className="text-[11px] text-blue-300 font-medium">Kalifiye Uzman</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-blue-950 border border-blue-600/40 text-blue-400 flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <div className="text-sm sm:text-base font-bold text-white truncate">
                  Kalifiye Aday
                </div>
                <div className="text-xs text-slate-400 truncate">
                  CV, Çeviriler & Belgeler Hazır
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-slate-200 pt-2 border-t border-slate-700/60">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">Vize sürecini şahsen ve bağımsız olarak yürütür</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">İşverenden hiçbir mali sponsorluk talep etmez</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">Konsolosluk randevusunu kendisi alır ve tamamlar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Column: Aracı Firma - GEREK YOK! (Bypassed) */}
        <div className="md:col-span-2 flex flex-col justify-center items-center p-4 rounded-2xl bg-rose-950/30 border border-rose-900/50 text-center relative">
          <div className="w-10 h-10 rounded-full bg-rose-900/60 border border-rose-600 text-rose-300 flex items-center justify-center mb-2 shadow-xs">
            <Ban className="w-5 h-5" />
          </div>
          
          <div className="text-xs font-semibold text-slate-300">
            Aracı & Danışman
          </div>
          
          <div className="text-xs sm:text-sm font-extrabold text-rose-400 tracking-wide mt-0.5">
            GEREK YOK!
          </div>

          <div className="text-[10px] text-slate-400 mt-1 leading-tight">
            0 € Ek Masraf
          </div>

          <div className="mt-3 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950 border border-emerald-600/50 text-emerald-300 text-[10px] font-bold whitespace-nowrap">
            <span>Doğrudan Bağ</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>

        {/* Right Column: Alman İşveren (Unternehmen) */}
        <div className="md:col-span-5 bg-slate-800/80 border border-slate-700 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-emerald-500/60 transition-colors">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-600 text-white">
                ALMAN İŞVEREN
              </span>
              <span className="text-[11px] text-emerald-300 font-medium">Unternehmen</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-950 border border-emerald-600/40 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <div className="text-sm sm:text-base font-bold text-white truncate">
                  Alman Şirket (Arbeitgeber)
                </div>
                <div className="text-xs text-slate-400 truncate">
                  München, Berlin, Köln, Stuttgart...
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-slate-200 pt-2 border-t border-slate-700/60">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">Sıfır vize sponsorluğu veya bürokratik kefalet yükü</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">Yalnızca geçerli standart iş sözleşmesini imzalar</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">Konsolosluk yazışmalarıyla vakit kaybetmez</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Guarantee Banner */}
      <div className="mt-5 p-3.5 sm:p-4 rounded-xl bg-blue-950/60 border border-blue-800/60 flex items-center justify-center gap-2.5 text-center">
        <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
        <p className="text-xs sm:text-sm text-blue-100 font-medium leading-relaxed">
          “Senin işverene yük olmadığını, vize sürecini bağımsız yönetebildiğini anlayan Alman şirketler, seni takımına dahil etmekten mutluluk duyar.”
        </p>
      </div>

    </div>
  );
};
