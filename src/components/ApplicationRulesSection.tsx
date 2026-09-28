import React from 'react';
import { MISTAKES_VS_SOLUTIONS, GOLDEN_RULES } from '../data/guideData';
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  FileCheck, 
  Sparkles, 
  FileSpreadsheet, 
  Mail, 
  FileCode,
  Check
} from 'lucide-react';

export const ApplicationRulesSection: React.FC = () => {
  return (
    <section id="bolum-3-kurallar" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            Bölüm 03
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Başvuru Sürecinde Dikkat Edilmesi Gerekenler
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Almanya'da başvuru dosyası (Bewerbungsmappe) kendine has katı kurallara sahiptir. Türk iş arama alışkanlıkları ile Alman İK standartları arasındaki farkları bilmek elenmenizi engeller.
          </p>
        </div>

        {/* 1. Başvuru Dosyan Ne İçermeli? (4 Temel Unsur) */}
        <div className="mt-12 bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Standart Başvuru Paketi (Bewerbungsmappe)
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold mt-1 text-white">
              Dosyanız Tam Olarak Ne İçermeli?
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Alman İK uzmanları başvuruları incelerken aşağıdaki sırayı ve bütünlüğü bekler:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5">
              <div className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">01. En Üstte</div>
              <h4 className="text-base font-bold text-white mb-2">Motivasyon Mektubu (Anschreiben)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                İlana ve şirkete özel yazılmış, en fazla 1 sayfa. Neden o şirket ve vize sponsorluğu gerekmediği bilgisi yer alır.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5">
              <div className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">02. Temel Belge</div>
              <h4 className="text-base font-bold text-white mb-2">Özgeçmiş (Lebenslauf)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Maksimum 1 sayfa (uzun kıdemli rollerde 2 sayfa). Sade, ters kronolojik ve maddeler halinde net sorumluluklar.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5">
              <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">03. Kanıtlar</div>
              <h4 className="text-base font-bold text-white mb-2">Sertifika & Diplomalar</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Yeminli Almanca çevirileri yapılmış lisans, önlisans, lise veya mesleki ustalık belgeleri ve varsa dil sertifikası.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5">
              <div className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">04. Destekleyici</div>
              <h4 className="text-base font-bold text-white mb-2">Referans Mektupları</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Önceki yöneticilerden alınmış iş deneyimini ve çalışma ahlakını doğrulayan referans mektupları (varsa).
              </p>
            </div>

          </div>
        </div>

        {/* 2. En Sık Yapılan 5 Hata vs Doğru Yaklaşım */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">❌</span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              En Sık Yapılan 5 Hata ve Çözüm Yolları
            </h3>
          </div>
          <p className="text-sm text-slate-600 mb-8 max-w-2xl">
            Adayların %90'ının elenmesine neden olan tipik hatalardan kaçınarak başvurunuzu öne geçirin.
          </p>

          <div className="space-y-4">
            {MISTAKES_VS_SOLUTIONS.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 transition-all bg-white shadow-xs"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                  
                  {/* Mistake Side */}
                  <div className="p-5 bg-rose-50/40 flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                          Hata #{idx + 1} • {item.tag}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-slate-900">
                        {item.mistake}
                      </p>
                    </div>
                  </div>

                  {/* Solution Side */}
                  <div className="p-5 bg-emerald-50/40 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          Doğru Çözüm
                        </span>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed font-medium">
                        {item.solution}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. 3 Altın Kural (Golden Rules) */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-md">
              Kritik İpuçları
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Başvuruda 3 Altın Kural
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Küçük detaylar Alman işverenlerin gözünde profesyonelliğinizi belirler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GOLDEN_RULES.map((rule) => (
              <div 
                key={rule.number}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 relative hover:shadow-md hover:border-blue-400 transition-all"
              >
                <div className="text-3xl font-black text-blue-200 font-mono mb-2">
                  {rule.number}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {rule.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
