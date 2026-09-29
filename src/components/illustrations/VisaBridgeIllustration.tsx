import React from 'react';
import { 
  UserCheck, 
  Building2, 
  Ban, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Scale
} from 'lucide-react';

export const VisaBridgeIllustration: React.FC<{ className?: string }> = ({ className = "w-full" }) => {
  return (
    <div className={`w-full rounded-2xl bg-slate-50/70 border border-slate-200/90 p-4 sm:p-6 text-slate-800 shadow-xs ${className}`}>
      
      {/* Top Law Shield & Reform Badge */}
      <div className="text-center max-w-xl mx-auto mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-blue-900 text-xs font-bold mb-2 shadow-2xs">
          <Scale className="w-3.5 h-3.5 text-blue-700 flex-shrink-0" />
          <span>§ Fachkräfteeinwanderungsgesetz (2024 Yasa Reformu)</span>
        </div>
        <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900 tracking-tight">
          Aday ile Alman İşveren Arasındaki Doğrudan Yasal Bağ
        </h4>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          İşverenin hiçbir vize kefaleti yükü yoktur; süreç çalışan tarafından bağımsız yürütülür.
        </p>
      </div>

      {/* 3-Column Balanced Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
        
        {/* Left Column: Aday (Sen) */}
        <div className="md:col-span-5 bg-white border border-blue-200/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:border-blue-400 transition-colors">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-600 text-white shadow-2xs">
                ADAY (SEN)
              </span>
              <span className="text-[11px] text-blue-700 font-semibold">Kalifiye Uzman</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <div className="text-sm sm:text-base font-bold text-slate-900 truncate">
                  Kalifiye Aday
                </div>
                <div className="text-xs text-slate-500 truncate">
                  CV, Çeviriler & Belgeler Hazır
                </div>
              </div>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 pt-3 border-t border-slate-100">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">Vize sürecini şahsen ve bağımsız olarak yürütür</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">İşverenden hiçbir mali sponsorluk talep etmez</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">Konsolosluk randevusunu kendisi alır ve tamamlar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Column: Aracı Firma - GEREK YOK! (Bypassed) */}
        <div className="md:col-span-2 flex flex-col justify-center items-center p-4 rounded-2xl bg-rose-50/70 border border-rose-200 text-center relative shadow-xs">
          <div className="w-10 h-10 rounded-full bg-rose-100 border border-rose-300 text-rose-700 flex items-center justify-center mb-2 shadow-2xs">
            <Ban className="w-5 h-5" />
          </div>
          
          <div className="text-xs font-semibold text-slate-600">
            Aracı & Danışman
          </div>
          
          <div className="text-xs sm:text-sm font-extrabold text-rose-700 tracking-wide mt-0.5">
            GEREK YOK!
          </div>

          <div className="text-[10px] text-slate-500 mt-1 leading-tight font-medium">
            0 € Ek Masraf
          </div>

          <div className="mt-3 inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-50 border border-emerald-300 text-emerald-800 text-[10px] font-bold whitespace-nowrap shadow-2xs">
            <span>Doğrudan Bağ</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>

        {/* Right Column: Alman İşveren (Unternehmen) */}
        <div className="md:col-span-5 bg-white border border-emerald-200/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:border-emerald-400 transition-colors">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-600 text-white shadow-2xs">
                ALMAN İŞVEREN
              </span>
              <span className="text-[11px] text-emerald-700 font-semibold">Unternehmen</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <div className="text-sm sm:text-base font-bold text-slate-900 truncate">
                  Alman Şirket (Arbeitgeber)
                </div>
                <div className="text-xs text-slate-500 truncate">
                  München, Berlin, Köln, Stuttgart...
                </div>
              </div>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 pt-3 border-t border-slate-100">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">Sıfır vize sponsorluğu veya bürokratik kefalet yükü</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">Yalnızca geçerli standart iş sözleşmesini imzalar</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">Konsolosluk yazışmalarıyla vakit kaybetmez</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Guarantee Banner */}
      <div className="mt-5 p-3.5 sm:p-4 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center gap-2.5 text-center">
        <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0" />
        <p className="text-xs sm:text-sm text-blue-950 font-medium leading-relaxed">
          “Senin işverene yük olmadığını, vize sürecini bağımsız yönetebildiğini anlayan Alman şirketler, seni takımına dahil etmekten mutluluk duyar.”
        </p>
      </div>

    </div>
  );
};
