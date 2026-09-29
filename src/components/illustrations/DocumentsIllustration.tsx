import React from 'react';

export const DocumentsIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-auto" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 540 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm select-none"
      >
        <defs>
          <linearGradient id="deskGrad" x1="270" y1="200" x2="270" y2="360" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f8fafc" />
            <stop offset="1" stopColor="#e2e8f0" />
          </linearGradient>

          <linearGradient id="diplomaSealGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f59e0b" />
            <stop offset="1" stopColor="#b45309" />
          </linearGradient>

          <filter id="docShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.06" />
          </filter>
        </defs>

        {/* Modern Clean Desk Mat / Work Surface */}
        <rect x="20" y="40" width="500" height="290" rx="20" fill="url(#deskGrad)" stroke="#e2e8f0" strokeWidth="1.5" />
        <line x1="20" y1="310" x2="520" y2="310" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" opacity="0.4" />

        {/* Laptop / Tablet in background */}
        <g transform="translate(180, 50)" opacity="0.85">
          <rect x="0" y="0" width="180" height="110" rx="8" fill="#1e293b" />
          <rect x="6" y="6" width="168" height="98" rx="4" fill="#0f172a" />
          {/* Code/Job portal preview on screen */}
          <rect x="16" y="16" width="60" height="8" rx="2" fill="#3b82f6" />
          <rect x="16" y="30" width="148" height="4" rx="1.5" fill="#475569" />
          <rect x="16" y="38" width="130" height="4" rx="1.5" fill="#475569" />
          <rect x="16" y="46" width="90" height="4" rx="1.5" fill="#475569" />
          {/* Portal Job card on screen */}
          <rect x="16" y="60" width="70" height="34" rx="4" fill="#1e293b" stroke="#334155" />
          <rect x="22" y="66" width="40" height="4" rx="1" fill="#10b981" />
          <rect x="22" y="74" width="55" height="3" rx="1" fill="#64748b" />
          <rect x="94" y="60" width="70" height="34" rx="4" fill="#1e293b" stroke="#334155" />
          <rect x="100" y="66" width="40" height="4" rx="1" fill="#3b82f6" />
          <rect x="100" y="74" width="55" height="3" rx="1" fill="#64748b" />
          {/* Laptop Base */}
          <path d="M -15 110 L 195 110 L 180 114 L 0 114 Z" fill="#94a3b8" />
        </g>

        {/* Document 1: Diploma Tercümesi (Almanca Yeminli Çeviri & Apostil) */}
        <g transform="translate(45, 110) rotate(-6)" filter="url(#docShadow)">
          <rect width="145" height="195" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Header */}
          <rect x="16" y="16" width="60" height="6" rx="2" fill="#94a3b8" />
          <rect x="16" y="26" width="112" height="3" rx="1" fill="#e2e8f0" />
          <rect x="16" y="33" width="90" height="3" rx="1" fill="#e2e8f0" />
          
          {/* German Translation Banner */}
          <rect x="16" y="46" width="112" height="18" rx="4" fill="#eff6ff" stroke="#bfdbfe" />
          <text x="24" y="58" fill="#1e40af" fontSize="8" fontWeight="700" fontFamily="sans-serif">BEGLAUBIGTE ÜBERSETZUNG</text>

          {/* Body Lines */}
          <rect x="16" y="74" width="112" height="3" rx="1" fill="#cbd5e1" />
          <rect x="16" y="82" width="112" height="3" rx="1" fill="#cbd5e1" />
          <rect x="16" y="90" width="80" height="3" rx="1" fill="#cbd5e1" />
          <rect x="16" y="98" width="100" height="3" rx="1" fill="#cbd5e1" />

          {/* Noter / Apostil Gold Seal Ribbon */}
          <g transform="translate(85, 130)">
            {/* Ribbons */}
            <path d="M 12 18 L 6 36 L 16 32 L 24 36 L 20 18 Z" fill="#dc2626" />
            {/* Seal Circle */}
            <circle cx="16" cy="16" r="14" fill="url(#diplomaSealGrad)" stroke="#fef3c7" strokeWidth="1.5" />
            <circle cx="16" cy="16" r="10" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 1.5" />
            <text x="11" y="19" fill="#ffffff" fontSize="9" fontWeight="800">★</text>
          </g>

          <text x="16" y="160" fill="#64748b" fontSize="7" fontWeight="600" fontFamily="sans-serif">Anerkennung: H+</text>
        </g>

        {/* Document 2: Alman Lebenslauf (Center Main Document) */}
        <g transform="translate(180, 105)" filter="url(#docShadow)">
          <rect width="180" height="225" rx="10" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" />
          
          {/* Blue accent top bar */}
          <path d="M 0 10 C 0 4.477, 4.477 0, 10 0 L 170 0 C 175.523 0, 180 4.477, 180 10 L 180 16 L 0 16 Z" fill="#1e3a8a" />
          
          {/* Professional Photo Placeholder */}
          <rect x="16" y="26" width="36" height="42" rx="4" fill="#f1f5f9" stroke="#cbd5e1" />
          <circle cx="34" cy="42" r="9" fill="#64748b" />
          <path d="M 22 62 C 22 53, 46 53, 46 62 Z" fill="#64748b" />

          {/* Name & Title */}
          <rect x="60" y="30" width="85" height="8" rx="2" fill="#0f172a" />
          <rect x="60" y="44" width="65" height="5" rx="1.5" fill="#2563eb" />
          <rect x="60" y="54" width="95" height="4" rx="1.5" fill="#94a3b8" />

          {/* Section: Berufserfahrung */}
          <rect x="16" y="78" width="148" height="1" fill="#e2e8f0" />
          <text x="16" y="90" fill="#1e3a8a" fontSize="8" fontWeight="800" fontFamily="sans-serif">BERUFSERFAHRUNG</text>
          
          {/* Timeline dots & items */}
          <circle cx="20" cy="103" r="2.5" fill="#2563eb" />
          <line x1="20" y1="105" x2="20" y2="135" stroke="#cbd5e1" strokeWidth="1" />
          <rect x="28" y="100" width="130" height="5" rx="1.5" fill="#334155" />
          <rect x="28" y="108" width="115" height="3.5" rx="1" fill="#94a3b8" />

          <circle cx="20" cy="130" r="2.5" fill="#2563eb" />
          <rect x="28" y="127" width="125" height="5" rx="1.5" fill="#334155" />
          <rect x="28" y="135" width="90" height="3.5" rx="1" fill="#94a3b8" />

          {/* Section: Kenntnisse */}
          <rect x="16" y="152" width="148" height="1" fill="#e2e8f0" />
          <text x="16" y="164" fill="#1e3a8a" fontSize="8" fontWeight="800" fontFamily="sans-serif">SPRACHKENNTNISSE</text>
          
          {/* German Badge */}
          <rect x="16" y="172" width="55" height="16" rx="4" fill="#ecfdf5" stroke="#a7f3d0" />
          <text x="22" y="183" fill="#065f46" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">Deutsch: B1</text>

          {/* English Badge */}
          <rect x="76" y="172" width="55" height="16" rx="4" fill="#eff6ff" stroke="#bfdbfe" />
          <text x="82" y="183" fill="#1e40af" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">Englisch: B2</text>

          {/* Max 1 Sayfa Badge */}
          <g transform="translate(100, 198)">
            <rect width="66" height="18" rx="4" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
            <text x="6" y="12" fill="#475569" fontSize="7.5" fontWeight="600" fontFamily="sans-serif">Max 1-2 Seite</text>
          </g>
        </g>

        {/* Document 3: Dil Sertifikası (Goethe/Telc A2-B1 Zertifikat) */}
        <g transform="translate(365, 125) rotate(7)" filter="url(#docShadow)">
          <rect width="135" height="180" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          
          {/* Certificate Header Banner */}
          <rect x="14" y="14" width="107" height="12" rx="2" fill="#0f172a" />
          <text x="24" y="23" fill="#f8fafc" fontSize="7" fontWeight="700" fontFamily="sans-serif">ZERTIFIKAT DEUTSCH</text>
          
          <circle cx="67" cy="46" r="14" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1" />
          <text x="60" y="50" fill="#1e40af" fontSize="12" fontWeight="800">B1</text>

          <rect x="25" y="70" width="85" height="4" rx="1.5" fill="#64748b" />
          <rect x="35" y="78" width="65" height="3" rx="1" fill="#94a3b8" />

          {/* Scores Table */}
          <rect x="14" y="90" width="107" height="45" rx="4" fill="#f8fafc" stroke="#e2e8f0" />
          <text x="20" y="102" fill="#334155" fontSize="6.5" fontWeight="600">Hören: Gut</text>
          <text x="20" y="112" fill="#334155" fontSize="6.5" fontWeight="600">Lesen: Sehr Gut</text>
          <text x="20" y="122" fill="#334155" fontSize="6.5" fontWeight="600">Sprechen: Gut</text>
          <text x="70" y="112" fill="#059669" fontSize="9" fontWeight="800">BESTANDEN</text>

          {/* Stamp */}
          <circle cx="100" cy="155" r="11" fill="#fee2e2" stroke="#dc2626" strokeWidth="1" strokeDasharray="2 1.5" />
          <text x="94" y="158" fill="#dc2626" fontSize="7" fontWeight="800">GÜLTIG</text>
        </g>

        {/* Fountain Pen & Coffee Cup on Desk */}
        {/* Coffee Mug */}
        <g transform="translate(450, 48)">
          <ellipse cx="25" cy="25" rx="18" ry="18" fill="#e2e8f0" />
          <circle cx="25" cy="25" r="15" fill="#1e293b" />
          <circle cx="25" cy="25" r="12" fill="#78350f" />
          {/* Coffee froth heart */}
          <path d="M 23 23 C 21 21, 23 18, 25 20 C 27 18, 29 21, 27 23 L 25 25 Z" fill="#fef3c7" opacity="0.8" />
          {/* Mug handle */}
          <path d="M 40 18 C 48 18, 48 32, 40 32" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        </g>

        {/* Elegant Fountain Pen */}
        <g transform="translate(130, 290) rotate(-45)">
          <rect x="0" y="0" width="12" height="90" rx="3" fill="#0f172a" />
          <rect x="0" y="30" width="12" height="6" fill="#f59e0b" />
          {/* Nib */}
          <path d="M 0 90 L 6 108 L 12 90 Z" fill="#f59e0b" />
          <line x1="6" y1="90" x2="6" y2="104" stroke="#78350f" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
};
