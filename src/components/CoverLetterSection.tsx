import React, { useState } from 'react';
import { 
  FileText, 
  Copy, 
  Check, 
  Printer, 
  Sparkles, 
  Edit3, 
  Eye, 
  CheckSquare, 
  Square,
  AlertCircle
} from 'lucide-react';

export const CoverLetterSection: React.FC = () => {
  // Customizable Form State
  const [formData, setFormData] = useState({
    fullName: 'Ali Han',
    contactInfo: 'Istanbul, Türkei – +90 532 000 00 00 – ali.han@email.com',
    date: new Date().toLocaleDateString('de-DE'),
    companyName: 'Muster GmbH & Co. KG',
    department: 'Personalabteilung',
    companyAddress: 'Industriestraße 12, 80331 München, Deutschland',
    position: 'Produktionsmitarbeiter',
    platform: 'Indeed.de',
    professionField: 'Produktion und Metallverarbeitung',
    germanLevel: 'A2 (ich besuche derzeit einen B1-Sprachkurs)'
  });

  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'edit'>('preview');

  // Mini Checklist state
  const [miniCheck, setMiniCheck] = useState({
    pageLength: true,
    customized: true,
    germanStated: true,
    pdfFormat: true,
  });

  const toggleMiniCheck = (key: keyof typeof miniCheck) => {
    setMiniCheck(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const generatedGermanLetter = `${formData.fullName}
${formData.contactInfo}

${formData.date}

${formData.companyName}
${formData.department}
${formData.companyAddress}

Bewerbung als ${formData.position}

Sehr geehrte Damen und Herren,

mit großem Interesse habe ich Ihre Stellenanzeige auf ${formData.platform} gelesen. Hiermit bewerbe ich mich um die Position als ${formData.position} in Ihrem Unternehmen.

Ich lebe derzeit in der Türkei und verfüge über fundierte Berufserfahrung im Bereich ${formData.professionField}. Ich arbeite zuverlässig, lerne schnell und bin hochmotiviert, mich in einem neuen Team engagiert einzubringen.

Meine Deutschkenntnisse liegen auf dem Niveau ${formData.germanLevel}.

Wichtig für Sie als Arbeitgeber: Sie müssen keinerlei Visumsunterstützung oder behördliche Bürgschaft übernehmen. Dank des Fachkräfteeinwanderungsgesetzes kann ich das gesamte Visumverfahren eigenständig und unabhängig durchführen.

Gerne überzeuge ich Sie in einem persönlichen Gespräch von meinen Qualifikationen und meiner Motivation. Ich freue mich sehr auf Ihre Rückmeldung.

Mit freundlichen Grüßen

${formData.fullName}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedGermanLetter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="bolum-mektup" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            Bölüm 06 & 07
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Motivasyon Mektubu (Anschreiben) Rehberi & Canlı Şablon
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Alman standartlarına göre yazılmış, vize bağımsızlığı garantisini içeren ve işverenin endişelerini ortadan kaldıran resmi motivasyon mektubu şablonu.
          </p>
        </div>

        {/* 1. Mektup Nasıl Yazılır? (3 Paragraf Formülü) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
              1. Paragraf: Giriş (Einleitung)
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">
              Nereden Gördün & Pozisyon
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              İlanı hangi platformda (Indeed, StepStone vb.) gördüğünüzü ve hangi açık pozisyona talip olduğunuzu net, dolaysız tek bir cümleyle belirtin.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-1">
              2. Paragraf: Gelişme (Hauptteil)
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">
              Deneyim, Dil & Vize Beyanı
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              İlgili mesleki geçmişiniz, Almanca seviyeniz ve en önemlisi <strong>işverenin hiçbir vize yükü olmadığını</strong> belirten yasal beyan.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
              3. Paragraf: Kapanış (Schluss)
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">
              Görüşme İsteği & Saygı
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Online veya yüz yüze bir mülakat yapma arzunuz, olumlu geri dönüş beklentiniz ve resmi saygı ifadesi (Mit freundlichen Grüßen).
            </p>
          </div>
        </div>

        {/* Mini Kontrol Listesi */}
        <div className="mt-8 p-5 rounded-2xl bg-blue-50/60 border border-blue-200/80">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-blue-700" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
              Göndermeden Önceki Mini Kontrol Listesi:
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-sm">
            <button
              onClick={() => toggleMiniCheck('pageLength')}
              className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-blue-200 text-slate-800 text-left cursor-pointer hover:bg-blue-50/50"
            >
              {miniCheck.pageLength ? <CheckSquare className="w-4 h-4 text-blue-600 flex-shrink-0" /> : <Square className="w-4 h-4 text-slate-300 flex-shrink-0" />}
              <span>1 sayfayı kesinlikle geçmiyor</span>
            </button>

            <button
              onClick={() => toggleMiniCheck('customized')}
              className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-blue-200 text-slate-800 text-left cursor-pointer hover:bg-blue-50/50"
            >
              {miniCheck.customized ? <CheckSquare className="w-4 h-4 text-blue-600 flex-shrink-0" /> : <Square className="w-4 h-4 text-slate-300 flex-shrink-0" />}
              <span>Şirkete ve pozisyona özel</span>
            </button>

            <button
              onClick={() => toggleMiniCheck('germanStated')}
              className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-blue-200 text-slate-800 text-left cursor-pointer hover:bg-blue-50/50"
            >
              {miniCheck.germanStated ? <CheckSquare className="w-4 h-4 text-blue-600 flex-shrink-0" /> : <Square className="w-4 h-4 text-slate-300 flex-shrink-0" />}
              <span>Almanca seviyesi dürüstçe yazıldı</span>
            </button>

            <button
              onClick={() => toggleMiniCheck('pdfFormat')}
              className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-blue-200 text-slate-800 text-left cursor-pointer hover:bg-blue-50/50"
            >
              {miniCheck.pdfFormat ? <CheckSquare className="w-4 h-4 text-blue-600 flex-shrink-0" /> : <Square className="w-4 h-4 text-slate-300 flex-shrink-0" />}
              <span>PDF olarak adlandırıldı</span>
            </button>
          </div>
        </div>

        {/* 2. Interactive Editor & German Preview */}
        <div className="mt-12 bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Almanca Mektup Editörü (Anschreiben Generator)
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Kendi Bilgilerinizle Düzenleyin & Tek Tıkla Kopyalayın
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex bg-slate-800 p-1 rounded-xl border border-slate-700">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'preview' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Önizleme</span>
                </button>
                <button
                  onClick={() => setActiveTab('edit')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'edit' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Bilgileri Düzenle</span>
                </button>
              </div>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all cursor-pointer shadow-sm whitespace-nowrap"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Kopyalandı!' : 'Mektubu Kopyala'}</span>
              </button>
            </div>
          </div>

          {/* Edit Form Mode */}
          {activeTab === 'edit' && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Adınız Soyadınız</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">İletişim Bilgileri (Şehir, Tel, E-posta)</label>
                <input
                  type="text"
                  value={formData.contactInfo}
                  onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Başvurulan Pozisyon</label>
                <input
                  type="text"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Şirket Adı</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Şirket Adresi / Şehir</label>
                <input
                  type="text"
                  value={formData.companyAddress}
                  onChange={(e) => setFormData({ ...formData, companyAddress: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">İlanın Görüldüğü Platform</label>
                <input
                  type="text"
                  value={formData.platform}
                  onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Meslek / Uzmanlık Alanı</label>
                <input
                  type="text"
                  value={formData.professionField}
                  onChange={(e) => setFormData({ ...formData, professionField: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-slate-300 font-semibold mb-1">Almanca Seviyesi & Kurs Durumu</label>
                <input
                  type="text"
                  value={formData.germanLevel}
                  onChange={(e) => setFormData({ ...formData, germanLevel: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          )}

          {/* Letter Document Preview (German DIN 5008 style) */}
          <div className="mt-6 bg-white text-slate-900 rounded-2xl p-4 sm:p-8 md:p-10 shadow-2xl font-sans border border-slate-300 select-all w-full overflow-hidden">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row justify-between text-xs text-slate-500 pb-4 border-b border-slate-200 gap-2">
              <div className="break-words">
                <div className="font-bold text-slate-900 text-sm">{formData.fullName}</div>
                <div className="break-words">{formData.contactInfo}</div>
              </div>
              <div className="font-medium text-slate-600 sm:text-right whitespace-nowrap">
                {formData.date}
              </div>
            </div>

            {/* Recipient */}
            <div className="mt-6 text-xs text-slate-700 space-y-0.5 break-words">
              <div className="font-bold text-slate-900">{formData.companyName}</div>
              <div>{formData.department}</div>
              <div>{formData.companyAddress}</div>
            </div>

            {/* Subject Line */}
            <div className="mt-6 text-sm sm:text-base font-bold text-slate-900 pb-2 break-words">
              Bewerbung als {formData.position}
            </div>

            {/* Salutation */}
            <div className="mt-4 text-xs sm:text-sm text-slate-800">
              Sehr geehrte Damen und Herren,
            </div>

            {/* Body */}
            <div className="mt-4 space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed text-left">
              <p className="break-words [overflow-wrap:anywhere]">
                mit großem Interesse habe ich Ihre Stellenanzeige auf <span className="font-semibold text-slate-900">{formData.platform}</span> gelesen. Hiermit bewerbe ich mich um die Position als <span className="font-semibold text-slate-900">{formData.position}</span> in Ihrem Unternehmen.
              </p>

              <p className="break-words [overflow-wrap:anywhere]">
                Ich lebe derzeit in der Türkei und verfüge über Berufserfahrung im Bereich <span className="font-semibold text-slate-900">{formData.professionField}</span>. Ich arbeite zuverlässig, lerne schnell und bin motiviert, mich in einem neuen Team einzubringen.
              </p>

              <p className="break-words [overflow-wrap:anywhere]">
                Meine Deutschkenntnisse liegen auf dem Niveau <span className="font-semibold text-slate-900">{formData.germanLevel}</span>.
              </p>

              {/* Crucial Magic Visa sentence highlighted */}
              <div className="p-3 sm:p-4 rounded-lg bg-blue-50/70 border border-blue-200 text-slate-900 font-medium break-words [overflow-wrap:anywhere]">
                <strong>Wichtig:</strong> Sie müssen als Arbeitgeber keine Visumsunterstützung übernehmen. Dank des Fachkräfteeinwanderungsgesetzes kann ich das gesamte Visumverfahren eigenständig durchführen.
              </div>

              <p className="break-words [overflow-wrap:anywhere]">
                Gerne überzeuge ich Sie in einem persönlichen Gespräch. Ich freue mich auf Ihre Rückmeldung.
              </p>
            </div>

            {/* Sign off */}
            <div className="mt-6 text-xs sm:text-sm text-slate-800">
              <div>Mit freundlichen Grüßen</div>
              <div className="mt-6 font-bold text-slate-900 break-words">{formData.fullName}</div>
            </div>

          </div>

          {/* Bottom Copy Actions */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <span>
              💡 İpucu: Bu metni kopyalayıp Word/Pages veya Google Docs'a yapıştırarak PDF olarak kaydedebilirsiniz.
            </span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Panoya Kopyalandı!' : 'Tüm Metni Kopyala'}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
