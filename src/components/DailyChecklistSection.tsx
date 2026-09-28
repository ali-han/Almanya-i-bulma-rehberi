import React, { useState, useEffect } from 'react';
import { 
  CheckSquare, 
  Square, 
  RotateCcw, 
  Trophy, 
  Sparkles, 
  Calendar, 
  ArrowRight,
  Printer
} from 'lucide-react';

interface ChecklistItem {
  id: string;
  label: string;
  description: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'step_1',
    label: '3 ilana başvurdum',
    description: 'Profilime tam uyan, güvenilir platformlardan seçilmiş 3 ilana eksiksiz dosya ile başvuru yaptım.'
  },
  {
    id: 'step_2',
    label: '1 motivasyon mektubunu ilana göre düzenledim',
    description: 'En çok istediğim ilana şirketin adını, sektörünü ve vize bağımsızlığı beyanını içeren özel mektup yazdım.'
  },
  {
    id: 'step_3',
    label: 'Belgelerimi kontrol ettim',
    description: 'PDF formatı, dosya isimleri ve çevirilerin eksiksiz olduğunu son bir kez gözden geçirdim.'
  },
  {
    id: 'step_4',
    label: 'Yeni ilanları araştırdım',
    description: 'Make it in Germany, StepStone, LinkedIn ve Jobbörse filtrelerimi tazeleyerek yeni açılan pozisyonları kaydettim.'
  },
  {
    id: 'step_5',
    label: 'En az 1 mülakat sorusu çalıştım',
    description: 'Almanca bir mülakat sorusuna (örneğin: "Erzählen Sie etwas über sich") sesli pratik yaparak hazırlandım.'
  }
];

export const DailyChecklistSection: React.FC = () => {
  const [checkedState, setCheckedState] = useState<{ [key: string]: boolean }>({});
  const [currentDateString, setCurrentDateString] = useState<string>('');

  useEffect(() => {
    // Format date in Turkish
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      weekday: 'long' 
    };
    setCurrentDateString(today.toLocaleDateString('tr-TR', options));

    // Load from localStorage
    try {
      const saved = localStorage.getItem('almanya_daily_checklist');
      if (saved) {
        setCheckedState(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const toggleItem = (id: string) => {
    const updated = { ...checkedState, [id]: !checkedState[id] };
    setCheckedState(updated);
    try {
      localStorage.setItem('almanya_daily_checklist', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleReset = () => {
    setCheckedState({});
    try {
      localStorage.removeItem('almanya_daily_checklist');
    } catch (e) {
      console.error(e);
    }
  };

  const completedCount = CHECKLIST_ITEMS.filter(item => checkedState[item.id]).length;
  const progressPercentage = Math.round((completedCount / CHECKLIST_ITEMS.length) * 100);
  const isAllCompleted = completedCount === CHECKLIST_ITEMS.length;

  return (
    <section id="bolum-checklist" className="py-16 md:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            Bölüm 05
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Günlük Başvuru & İlerleme Checklist’i
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            “Almanya’da iş bulmak bir şans değil, günlük disiplin işidir.” Her gün bu 5 hedefi tamamlayarak istikrarınızı koruyun.
          </p>
        </div>

        {/* Interactive Checklist Card */}
        <div className="mt-10 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10">
          
          {/* Card Top Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-2.5 text-slate-700">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold">{currentDateString || 'Bugünün Tarihi'}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleReset}
                title="Günü sıfırla"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Günü Sıfırla</span>
              </button>

              <button
                onClick={() => window.print()}
                title="Listeyi yazdır"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Yazdır</span>
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 mb-8">
            <div className="flex items-center justify-between text-xs font-bold mb-2">
              <span className="text-slate-700">Bugünkü Hedef Tamamlanma Oranı</span>
              <span className="text-blue-700">{progressPercentage}% ({completedCount}/{CHECKLIST_ITEMS.length})</span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Checklist Items */}
          <div className="space-y-3.5">
            {CHECKLIST_ITEMS.map((item) => {
              const isChecked = !!checkedState[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer select-none ${
                    isChecked
                      ? 'bg-blue-50/60 border-blue-300 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <button
                      type="button"
                      className="mt-0.5 text-blue-600 focus:outline-none flex-shrink-0"
                    >
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-blue-600" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-300" />
                      )}
                    </button>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-sm sm:text-base font-bold ${isChecked ? 'text-blue-900 line-through decoration-slate-400' : 'text-slate-900'}`}>
                          {item.label}
                        </span>
                        {isChecked && (
                          <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            Tamamlandı ✓
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Celebration Banner when 100% completed */}
          {isAllCompleted && (
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg animate-in fade-in duration-300 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <h4 className="font-extrabold text-lg">
                  Harika İş! Bugünün Görevini Eksiksiz Tamamladın!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-100 mt-1">
                  Bu istikrarı sürdürdüğün her gün, Almanya'daki yeni hayatına ve iş sözleşmene bir adım daha yaklaşıyorsun. Yarın da aynı kararlılıkla devam!
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
