import React, { useState } from 'react';
import { 
  GraduationCap, 
  Languages, 
  ShieldCheck, 
  Copy, 
  Check, 
  Sparkles, 
  Info, 
  FileCheck, 
  ArrowRight,
  Award
} from 'lucide-react';
import { VisaBridgeIllustration } from './illustrations/VisaBridgeIllustration';

export const RecognitionLanguageSection: React.FC = () => {
  const [copiedGerman, setCopiedGerman] = useState(false);
  const [copiedTurkish, setCopiedTurkish] = useState(false);

  const germanDeclaration = "Ich möchte Sie darauf hinweisen, dass Sie als Arbeitgeber keine Verpflichtung zur Visumsunterstützung haben. Dank des Fachkräfteeinwanderungsgesetzes kann ich das Visumverfahren eigenständig durchführen.";
  
  const turkishDeclaration = "İşveren olarak sizden herhangi bir vize sponsorluğu talebim yoktur. Mevcut nitelikli göç yasası sayesinde, gerekli tüm vize sürecini şahsen ve bağımsız olarak yürütebilirim.";

  const handleCopy = (text: string, type: 'de' | 'tr') => {
    navigator.clipboard.writeText(text);
    if (type === 'de') {
      setCopiedGerman(true);
      setTimeout(() => setCopiedGerman(false), 2500);
    } else {
      setCopiedTurkish(true);
      setTimeout(() => setCopiedTurkish(false), 2500);
    }
  };

  return (
    <section id="bolum-denklik-yasa" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            Ek Bölüm & Yasal Çerçeve
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Denklik ve Dil: Görünmeyen Ama En Güçlü Silahların
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Pek çok adayın çekindiği denklik ve dil engeli, doğru ifade edildiğinde Alman işverenlerin gözünde en büyük güven ve kararlılık ispatına dönüşür.
          </p>
        </div>

        {/* 2 Big Cards: Denklik & Dil */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* 1. Denklik (Anerkennung) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Anerkennung</span>
                  <h3 className="text-xl font-bold text-slate-900">
                    Denklik Neden Hayati Önemdedir?
                  </h3>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm text-slate-700 italic mb-5">
                “Almanya, yurt dışından gelen çalışanlarda aradığı ilk şeylerden biri: <strong>‘Bu kişi bizim sistemimize göre yeterli mi?’</strong> sorusudur.”
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Eğer sağlıkçı, öğretmen, usta, tekniker ya da meslek sahibiysen:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <Award className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    Mesleki denkliğini belgelemek iş başvurularında seni rakiplerinin en az <strong>10 adım önüne taşır</strong>.
                  </span>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <FileCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    Bu denkliğe sahip olduğunu başvuru dosyasında ve ön yazında açıkça belirtmelisin.
                  </span>
                </div>
              </div>
            </div>

            {/* Pro Tip */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="flex items-start gap-2.5 text-xs text-amber-900 bg-amber-50 p-3.5 rounded-xl border border-amber-200">
                <Sparkles className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Altın Taktik:</strong> Henüz tamamlanmış denkliğin yoksa bile motivasyon mektubunda <code className="bg-amber-100 px-1 py-0.5 rounded font-mono text-amber-950 font-bold">"Denklik başvuru sürecindeyim" (Ich befinde mich im Anerkennungsverfahren)</code> demek dahi işveren için çok güçlü bir güvencedir.
                </div>
              </div>
            </div>
          </div>

          {/* 2. Dil (Almanca Almancadır!) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
                  <Languages className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Sprachniveau</span>
                  <h3 className="text-xl font-bold text-slate-900">
                    Dil Seviyen Ne Olursa Olsun – Almanca Almancadır!
                  </h3>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/40 border border-indigo-100 text-sm text-slate-700 mb-5 leading-relaxed">
                Bazı adaylar A1 seviyesinde olduğu için çekinir veya Almancayı hiç yazmaz. Bu çok büyük bir hatadır!
              </div>

              <div className="space-y-3.5 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-slate-900">A1 seviyesinde olmak</strong>, öğrenmeye başladığını ve Almanya'yı ciddiye aldığını gösterir.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    Bu, işveren için senin <strong className="text-slate-900">kararlı, planlı ve azimli biri</strong> olduğunu ispatlar.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-slate-900">A2 ya da B1 için çalıştığını</strong>, kursa devam ettiğini belirtmek başvurundaki en güçlü sinyallerden biridir.
                  </div>
                </div>
              </div>
            </div>

            {/* Language Tip */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="flex items-start gap-2.5 text-xs text-blue-900 bg-blue-50 p-3.5 rounded-xl border border-blue-200">
                <Info className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Asla Yapma:</strong> Almancayı gizleyip yalnızca İngilizce göndermek işvereni "bu kişi entegre olmak istemiyor" şüphesine iter. A1 olsa dahi belirtin!
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3. 2024 YENİ GÖÇ YASASI & VİZE SPONSORLUĞU BEYANI (THE MAGIC COPY CARD) */}
        <div className="mt-14 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Vize Sponsorluğu Gerekmez – İşverenin Sıfır Bürokratik Yükü</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Yeni Nitelikli Göç Yasası (2024) Ne Diyor?
            </h3>
            
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              Almanya'daki <strong className="text-white">Fachkräfteeinwanderungsgesetz</strong> (Nitelikli İş Gücü Göç Yasası) sayesinde:
            </p>

            {/* 3 Highlights */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/10">
                <div className="text-amber-400 font-bold text-sm mb-1">01. Sponsorluk Yok</div>
                <div className="text-xs text-slate-300 leading-normal">
                  Yurt dışındaki kalifiye çalışanlar, işveren sponsorluğu olmadan vize alabilir.
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/10">
                <div className="text-blue-400 font-bold text-sm mb-1">02. Sadece Sözleşme</div>
                <div className="text-xs text-slate-300 leading-normal">
                  İşveren sadece standart bir iş sözleşmesi sunar; konsolosluk süreci tamamen çalışana aittir.
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/10">
                <div className="text-emerald-400 font-bold text-sm mb-1">03. Sıfır Bürokratik Risk</div>
                <div className="text-xs text-slate-300 leading-normal">
                  Bu durum, Alman işvereni ekstra harçlardan ve karmaşık bürokratik işlemlerden kurtarır.
                </div>
              </div>
            </div>

            {/* Direct Employee-Employer Bridge Diagram */}
            <div className="mt-8 w-full">
              <VisaBridgeIllustration />
            </div>

            {/* The Magic Sentences Box */}
            <div className="mt-8 bg-slate-950/80 border border-slate-700 rounded-2xl p-4 sm:p-7 w-full overflow-hidden">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  📌 Başvurularda Mutlaka Eklenmesi Gereken Sihirli Cümle:
                </span>
                <span className="text-[11px] text-slate-400 hidden sm:inline">
                  İşverenin korkusunu anında yok eder
                </span>
              </div>

              {/* German Text Box */}
              <div className="bg-slate-900 p-4 sm:p-5 rounded-xl border border-slate-700/80 relative w-full overflow-hidden">
                <div className="text-xs font-mono text-blue-300 uppercase mb-2">
                  Almanca Versiyon (Motivasyon Mektubuna Ekleyin):
                </div>
                <p className="text-sm sm:text-base font-serif italic text-white leading-relaxed select-all break-words [overflow-wrap:anywhere]">
                  “{germanDeclaration}”
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800">
                  <span className="text-xs text-slate-400 break-words">
                    Fachkräfteeinwanderungsgesetz resmi maddesi
                  </span>
                  <button
                    onClick={() => handleCopy(germanDeclaration, 'de')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all cursor-pointer shadow-sm whitespace-nowrap"
                  >
                    {copiedGerman ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Kopyalandı!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Almanca Metni Kopyala</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Turkish Meaning Box */}
              <div className="mt-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300 w-full overflow-hidden">
                <div className="text-xs font-semibold text-slate-400 mb-1">
                  Türkçe Açıklaması:
                </div>
                <p className="italic text-slate-300 break-words [overflow-wrap:anywhere]">
                  “{turkishDeclaration}”
                </p>
                <div className="mt-3 text-right">
                  <button
                    onClick={() => handleCopy(turkishDeclaration, 'tr')}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {copiedTurkish ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedTurkish ? 'Türkçe Kopyalandı' : 'Türkçe Metni Kopyala'}</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
