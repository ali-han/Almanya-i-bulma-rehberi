import React, { useState } from 'react';
import { 
  HelpCircle, 
  CheckCircle, 
  FileText, 
  Languages, 
  Award, 
  CheckSquare, 
  Square, 
  AlertCircle,
  Sparkles,
  Info
} from 'lucide-react';
import { DocumentsIllustration } from './illustrations/DocumentsIllustration';

export const PreparationSection: React.FC = () => {
  // Interactive Self-Assessment Questions
  const [checkedQuestions, setCheckedQuestions] = useState<{ [key: string]: boolean }>({});
  
  // Interactive Document Checklist
  const [checkedDocs, setCheckedDocs] = useState<{ [key: string]: boolean }>({});

  const toggleQuestion = (id: string) => {
    setCheckedQuestions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleDoc = (id: string) => {
    setCheckedDocs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const questions = [
    {
      id: 'city_position',
      question: 'Hangi şehirde ve hangi pozisyonlarda çalışmak istiyorum?',
      hint: 'Münih, Berlin ve Frankfurt gibi metropollerde yaşam gideri yüksek ancak uluslararası iş imkanı boldur. NRW (Düsseldorf, Köln) ve Baden-Württemberg gibi sanayi eyaletlerinde ise teknik ve üretim işleri çok yaygındır.'
    },
    {
      id: 'german_level',
      question: 'Almanca seviyem ne? Başvurduğum pozisyon için yeterli mi?',
      hint: 'İngilizce çalışan IT hariç; üretim, montaj ve mutfak işleri için genelde A2-B1, sağlık ve hasta bakımı için B2, büro ve öğretmenlik için en az C1 seviyesi hedeflenmelidir.'
    },
    {
      id: 'anschreiben_ready',
      question: 'Motivasyon mektubum (Anschreiben) hazır mı?',
      hint: 'Almanya’da tek tip kopyala-yapıştır mektuplar doğrudan elenir. Şirketin faaliyet alanına ve ilandaki gereksinimlere değinen 1 sayfalık mektup şarttır.'
    },
    {
      id: 'translations',
      question: 'Diploma ve sertifika tercümelerim tamam mı?',
      hint: 'Tüm mezuniyet ve ustalık belgeleri yeminli tercüman tarafından Almancaya çevrilmiş ve noter/apostil onayından geçmiş olmalıdır.'
    },
    {
      id: 'recognition',
      question: 'Mesleğim denkliğe tabi mi? Denklik gerekli mi?',
      hint: 'Doktor, hemşire ve öğretmenler için tam denklik yasal zorunluluktur. Mühendis ve teknikerler için ise anabin üzerinden H+ denklik veya başvuru süreci yeterli olabilmektedir.'
    }
  ];

  const basicDocs = [
    {
      id: 'lebenslauf',
      title: 'Alman Formatında CV (Lebenslauf)',
      format: 'Maksimum 1-2 sayfa, kronolojik, fotoğraf isteğe bağlı ancak profesyonel stüdyo çekimi önerilir.',
      badge: 'Zorunlu'
    },
    {
      id: 'anschreiben',
      title: 'Motivasyon Mektubu (Anschreiben)',
      format: 'İlana ve yetkili kişiye hitaben yazılmış, net 3 paragraftan oluşan 1 sayfalık Almanca metin.',
      badge: 'Zorunlu'
    },
    {
      id: 'translations_doc',
      title: 'Diploma ve Sertifikaların Almanca Tercümeleri',
      format: 'Üniversite/lise diplomaları, transkriptler ve mesleki uzmanlık sertifikaları.',
      badge: 'Zorunlu'
    },
    {
      id: 'references',
      title: 'Referans Mektupları (Varsa)',
      format: 'Önceki işverenlerden alınan İngilizce veya Almanca çalışma referansı (Arbeitszeugnis muadili).',
      badge: 'Avantaj Sağlar'
    },
    {
      id: 'language_cert',
      title: 'Almanca Dil Sertifikası (A1–C1)',
      format: 'Goethe-Institut, Telc, ÖSD veya TestDaF gibi resmi kurumlardan alınmış güncel seviye belgesi.',
      badge: 'Kritik Önemde'
    }
  ];

  const questionsCompletedCount = Object.values(checkedQuestions).filter(Boolean).length;
  const docsCompletedCount = Object.values(checkedDocs).filter(Boolean).length;

  return (
    <section id="bolum-1-hazirlik" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            Bölüm 01
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            İş Aramaya Başlamadan Önce: Hazırlık & Öz Değerlendirme
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Başarılı bir iş arama sürecinin %80'i doğru hazırlıktan geçer. İlanlara başvurmadan önce hedeflerinizi netleştirin ve evrak dosyanızı eksiksiz tamamlayın.
          </p>
        </div>

        {/* Part 1: Kendine Şu Soruları Sor */}
        <div className="mt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🎯</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Kendine Şu 5 Kritik Soruyu Sor
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Aşağıdaki soruları yanıtlayarak kendi yol haritanızı netleştirin.
              </p>
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
              <span>İlerleme:</span>
              <span className="text-blue-700 font-bold">{questionsCompletedCount} / {questions.length}</span>
            </div>
          </div>

          <div className="mt-6 space-y-3.5">
            {questions.map((q) => {
              const isChecked = !!checkedQuestions[q.id];
              return (
                <div
                  key={q.id}
                  onClick={() => toggleQuestion(q.id)}
                  className={`p-4 sm:p-5 rounded-xl border transition-all cursor-pointer select-none ${
                    isChecked 
                      ? 'bg-blue-50/50 border-blue-300 shadow-xs' 
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <button 
                      type="button" 
                      className="mt-0.5 text-blue-600 focus:outline-none flex-shrink-0"
                    >
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-blue-600" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400" />
                      )}
                    </button>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`font-semibold text-sm sm:text-base ${isChecked ? 'text-blue-900 line-through decoration-slate-400' : 'text-slate-900'}`}>
                          {q.question}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {q.hint}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Temel Belgelerin Hazır mı? */}
        <div className="mt-14 pt-10 border-t border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">📁</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Temel Belgelerin Hazır mı? (Bewerbungsunterlagen)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Almanya'da bir İK yöneticisi eksik evraklı başvuruları saniyeler içinde eler.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
              <span>Hazır Evrak:</span>
              <span className="text-emerald-700 font-bold">{docsCompletedCount} / {basicDocs.length}</span>
            </div>
          </div>

          {/* Large SVG Illustration Banner for Documents */}
          <div className="mt-6 mb-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 sm:p-8">
            <div className="lg:col-span-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
                Standart Dosya Anatomisi
              </span>
              <h4 className="text-xl font-extrabold text-slate-900 mt-2">
                Alman Başvuru Masası (Der Schreibtisch)
              </h4>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Almanya'daki işverenler, başvurunuzu incelerken <strong>1-2 sayfalık sade bir CV</strong>, noter/apostil onaylı <strong>diploma çevirisi</strong> ve resmi bir <strong>dil belgesini</strong> masasında derli toplu görmek ister.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-medium">
                  ✓ Fotoğraflı & Kronolojik CV
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-medium">
                  ✓ Beglaubigte Übersetzung (Yeminli Çeviri)
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-medium">
                  ✓ Goethe / Telc / ÖSD Belgesi
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md">
                <DocumentsIllustration className="hover:scale-[1.01] transition-transform duration-300" />
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {basicDocs.map((doc) => {
              const isChecked = !!checkedDocs[doc.id];
              return (
                <div
                  key={doc.id}
                  onClick={() => toggleDoc(doc.id)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer select-none flex flex-col justify-between ${
                    isChecked
                      ? 'bg-emerald-50/40 border-emerald-300 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                        doc.badge === 'Zorunlu' 
                          ? 'bg-rose-50 text-rose-700 border border-rose-200' 
                          : doc.badge === 'Kritik Önemde' 
                          ? 'bg-amber-50 text-amber-700 border border-amber-200' 
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {doc.badge}
                      </span>

                      <button type="button" className="text-emerald-600 focus:outline-none">
                        {isChecked ? (
                          <CheckCircle className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <Square className="w-5 h-5 text-slate-300" />
                        )}
                      </button>
                    </div>

                    <h4 className={`font-bold text-sm sm:text-base ${isChecked ? 'text-emerald-950 line-through decoration-slate-400' : 'text-slate-900'}`}>
                      {doc.title}
                    </h4>

                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {doc.format}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Durum:</span>
                    <span className={`font-semibold ${isChecked ? 'text-emerald-600' : 'text-slate-500'}`}>
                      {isChecked ? 'Hazır ✓' : 'Eksik / Bekliyor'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Tip Box */}
          <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200/80 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              <strong className="font-semibold">Önemli Hatırlatma:</strong> Tüm belgelerinizi mutlaka yüksek çözünürlüklü olarak taratın. Fotoğrafını telefonla çekip eğik veya gölgeli göndermek İK gözünde profesyonellikten uzak kabul edilir.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
