import React, { useState } from 'react';
import { JOB_PORTALS, JobPortal } from '../data/guideData';
import { 
  ExternalLink, 
  Search, 
  CheckCircle2, 
  Globe, 
  Building2, 
  Sparkles,
  Bookmark
} from 'lucide-react';

export const JobPortalsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tüm Siteler (6)' },
    { id: 'official', label: 'Resmi & Devlet Destekli' },
    { id: 'tech_eng', label: 'IT, Mühendislik & Sağlık' },
    { id: 'general', label: 'Hızlı & Genel İlanlar' },
  ];

  const filteredPortals = JOB_PORTALS.filter((portal) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'official') return portal.id === 'make-it-in-germany' || portal.id === 'arbeitsagentur';
    if (selectedCategory === 'tech_eng') return portal.id === 'stepstone' || portal.id === 'linkedin';
    if (selectedCategory === 'general') return portal.id === 'indeed' || portal.id === 'xing';
    return true;
  });

  return (
    <section id="bolum-2-siteler" className="py-16 md:py-24 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            Bölüm 02
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            İş Nerede Aranır? Almanya’nın En Güvenilir 6 Portalı
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Sosyal medyada para karşılığı sahte ilan vaadinde bulunan aracılardan uzak durun. Alman işverenlerin %95'i açık pozisyonlarını aşağıdaki 6 resmi ve tanınmış platformda yayınlar.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portals Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPortals.map((portal) => (
            <div
              key={portal.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-lg transition-all group"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    {portal.category}
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    {portal.badge}
                  </span>
                </div>

                {/* Portal Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                  <span>{portal.name}</span>
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {portal.description}
                </p>

                {/* Recommended For Box */}
                <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                  <span className="font-bold text-slate-700 block mb-0.5">En Uygun Sektörler:</span>
                  <span className="text-slate-600">{portal.recommendedFor}</span>
                </div>

                {/* Pros List */}
                <div className="mt-4 space-y-1.5">
                  {portal.pros.map((pro, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{pro}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visit Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-blue-600 hover:text-white transition-all group-hover:border-blue-600"
                >
                  <span>İlanları İncele</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tip Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-blue-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                Arama Çubuğunda Kullanabileceğiniz Alman Anahtar Kelimeler:
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                <code className="text-blue-700 font-semibold">"Quereinsteiger"</code> (Meslek değiştirenler), <code className="text-blue-700 font-semibold">"Fachkraft"</code> (Nitelikli uzman), <code className="text-blue-700 font-semibold">"Englisch sprechend"</code> (İngilizce konuşulan ortam).
              </div>
            </div>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded bg-slate-100 text-slate-700 flex-shrink-0">
            Tavsiye Taktik
          </span>
        </div>

      </div>
    </section>
  );
};
