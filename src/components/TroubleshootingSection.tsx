import React from 'react';
import { 
  TrendingDown, 
  Lightbulb, 
  Target, 
  Brain, 
  RotateCcw, 
  BarChart2, 
  CheckCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export const TroubleshootingSection: React.FC = () => {
  const diagnosticReasons = [
    {
      title: "CV'nin okunabilirliği düşük",
      detail: "Karmaşık yazı tipleri, çok renkli grafikler ve ATS (Aday Takip Sistemi) yazılımlarının okuyamadığı şablonlar kullanılıyor olabilir."
    },
    {
      title: "Almanca seviyen pozisyonla örtüşmüyor",
      detail: "İlanda B2 veya C1 seviyesi şart koşulduğu halde başvurulmuş ya da dil seviyesi belirtilmediği için İK tarafından elenmiş olabilir."
    },
    {
      title: "Yanlış veya profilinize uymayan işlere başvuruyorsun",
      detail: "Yetkinliklerinizin çok üzerinde veya denkliğinizin bulunmadığı düzenlemeye tabi (reglementiert) mesleklere yönelmiş olabilirsiniz."
    },
    {
      title: "Çok başvuru yapılıyor ama takip edilmiyor",
      detail: "Günde 50 yere tek tıkla başvuru yapıp hangi şirkete ne yazdığını unutan adaylar mülakat davetlerini kaçırır."
    },
    {
      title: "Moral bozukluğu istikrarsızlaştırıyor",
      detail: "Gelen ilk 10 ret cevabından sonra başvuru yapmayı bırakmak en sık yapılan psikolojik hatadır. Almanya'da süreç sabır gerektirir."
    }
  ];

  const actionSolutions = [
    {
      action: "Günde Maksimum 5 Kaliteli Başvuru Yap",
      desc: "Toplu spam başvuruları bırakın. Her gün özenle seçilmiş 3 ile 5 firmaya özel motivasyon mektubuyla başvurun."
    },
    {
      action: "Geri Dönüş Olmayan Firmaları Analiz Et",
      desc: "Hangi eyaletlerden veya pozisyonlardan ret aldığınızı inceleyin; CV'nizdeki anahtar kelimeleri güncelleyin."
    },
    {
      action: "Almanca Mülakat Pratiği Yap",
      desc: "Kendini tanıtma (Selbstpräsentation), neden Almanya ve güçlü yönler sorularına Almanca kısa yanıtlar hazırlayın."
    },
    {
      action: "Motivasyon Mektubunu Sektöre Özel Düzenle",
      desc: "Üretim için disiplin ve fiziksel dayanıklılık; mühendislik için analitik problem çözme yeteneğinizi öne çıkarın."
    },
    {
      action: "Almanca Öğrenmeye Her Gün Devam Et",
      desc: "Günde en az 30-45 dakikanızı kelime ezberine ve dinleme pratiğine ayırın. Diliniz geliştikçe şansınız katlanır."
    }
  ];

  return (
    <section id="bolum-4-tavsiyeler" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            Bölüm 04
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            İş Bulamayanlar ve Ret Alanlar İçin Teşhis & Eylem Rehberi
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Almanya'da ret cevabı almak sürecin doğal bir parçasıdır. Önemli olan nerede tıkanma yaşandığını tespit etmek ve stratejiyi revize etmektir.
          </p>
        </div>

        {/* 2 Column Comparison: Why vs What to do */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left: Neden Olabilir? */}
          <div className="bg-rose-50/40 rounded-3xl border border-rose-200/80 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                <TrendingDown className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Teşhis</span>
                <h3 className="text-xl font-bold text-slate-900">Neden Geri Dönüş Alamıyor Olabilirsin?</h3>
              </div>
            </div>

            <div className="space-y-4">
              {diagnosticReasons.map((item, index) => (
                <div key={index} className="p-4 rounded-xl bg-white border border-rose-100 shadow-xs">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Ne Yapmalısın? */}
          <div className="bg-emerald-50/40 rounded-3xl border border-emerald-200/80 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Eylem Planı</span>
                <h3 className="text-xl font-bold text-slate-900">Ne Yapmalısın? (5 Çözüm Tavsiyesi)</h3>
              </div>
            </div>

            <div className="space-y-4">
              {actionSolutions.map((item, index) => (
                <div key={index} className="p-4 rounded-xl bg-white border border-emerald-100 shadow-xs">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {item.action}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
