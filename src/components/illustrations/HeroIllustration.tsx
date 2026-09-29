import React from 'react';

export const HeroIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-auto" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 600 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm select-none"
      >
        <defs>
          <linearGradient id="heroSkyGrad" x1="300" y1="0" x2="300" y2="400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f8fafc" />
            <stop offset="1" stopColor="#e2e8f0" stopOpacity="0.5" />
          </linearGradient>

          <linearGradient id="blueCardGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1e40af" />
            <stop offset="1" stopColor="#1e3a8a" />
          </linearGradient>

          <linearGradient id="gateGrad" x1="300" y1="50" x2="300" y2="280" gradientUnits="userSpaceOnUse">
            <stop stopColor="#cbd5e1" stopOpacity="0.45" />
            <stop offset="1" stopColor="#94a3b8" stopOpacity="0.25" />
          </linearGradient>

          <linearGradient id="beamGrad" x1="300" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" stopOpacity="0.12" />
            <stop offset="1" stopColor="#3b82f6" stopOpacity="0.0" />
          </linearGradient>

          <filter id="cardShadow" x="-10" y="-10" width="220" height="260" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#0f172a" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Ambient Soft Sun & Rays */}
        <circle cx="300" cy="190" r="140" fill="url(#beamGrad)" />

        {/* Distant Brandenburg Gate Silhouette (Almanya Simgesi) */}
        <g id="brandenburgGate" fill="url(#gateGrad)">
          {/* Main entablature & pediment top */}
          <path d="M 180 145 L 420 145 L 415 152 L 185 152 Z" />
          <rect x="175" y="152" width="250" height="10" rx="1" />
          <rect x="190" y="140" width="220" height="5" />
          {/* Quadriga / Victory motif subtle outline */}
          <path d="M 285 130 C 290 120, 310 120, 315 130 L 320 140 L 280 140 Z" />
          <circle cx="300" cy="115" r="5" />
          <path d="M 270 125 L 330 125 L 300 135 Z" />

          {/* 6 Doric Pillars */}
          <rect x="195" y="162" width="16" height="110" rx="1" />
          <rect x="235" y="162" width="16" height="110" rx="1" />
          <rect x="275" y="162" width="16" height="110" rx="1" />
          <rect x="309" y="162" width="16" height="110" rx="1" />
          <rect x="349" y="162" width="16" height="110" rx="1" />
          <rect x="389" y="162" width="16" height="110" rx="1" />
          {/* Base */}
          <rect x="170" y="272" width="260" height="12" rx="2" />
        </g>

        {/* Modern Highway / Road to Career (Yol) */}
        <path d="M 290 280 L 140 400 L 460 400 L 310 280 Z" fill="#f1f5f9" />
        <path d="M 300 285 L 298 305 L 302 305 Z" fill="#cbd5e1" />
        <path d="M 299 318 L 297 342 L 303 342 Z" fill="#94a3b8" />
        <path d="M 298 355 L 295 385 L 305 385 Z" fill="#64748b" />

        {/* Left Side: German Flag Subtle Bar Card */}
        <g transform="translate(40, 90)">
          <rect width="160" height="90" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
          {/* Mini German Tricolor Strip */}
          <rect x="16" y="18" width="24" height="4" rx="1" fill="#1e293b" />
          <rect x="16" y="22" width="24" height="4" rx="1" fill="#dc2626" />
          <rect x="16" y="26" width="24" height="4" rx="1" fill="#f59e0b" />
          
          <text x="48" y="26" fill="#0f172a" fontSize="12" fontWeight="700" fontFamily="sans-serif">2024 Yasa</text>
          <text x="16" y="52" fill="#475569" fontSize="10" fontWeight="500" fontFamily="sans-serif">Sponsorluk şartı yok,</text>
          <text x="16" y="66" fill="#2563eb" fontSize="10" fontWeight="700" fontFamily="sans-serif">Doğrudan İş Sözleşmesi</text>

          {/* Verification Badge */}
          <circle cx="136" cy="24" r="8" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
          <path d="M 133 24 L 135 26 L 140 21" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Center-Right Main Hero Document: Lebenslauf & Contract */}
        <g transform="translate(360, 110)">
          {/* Background Card */}
          <rect x="15" y="-10" width="170" height="230" rx="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <rect x="25" y="0" width="40" height="6" rx="2" fill="#94a3b8" />
          
          {/* Main Foreground Lebenslauf Card */}
          <rect x="0" y="10" width="170" height="230" rx="14" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" />
          
          {/* Candidate Profile Avatar Placeholder */}
          <rect x="16" y="26" width="34" height="38" rx="6" fill="#eff6ff" stroke="#bfdbfe" />
          <circle cx="33" cy="40" r="8" fill="#3b82f6" />
          <path d="M 22 58 C 22 50, 44 50, 44 58 Z" fill="#3b82f6" />

          {/* Header Lines */}
          <rect x="58" y="28" width="80" height="8" rx="2" fill="#0f172a" />
          <rect x="58" y="42" width="60" height="6" rx="2" fill="#64748b" />
          <rect x="58" y="52" width="70" height="5" rx="1.5" fill="#94a3b8" />

          {/* Section 1: Berufserfahrung */}
          <rect x="16" y="76" width="138" height="1" fill="#e2e8f0" />
          <rect x="16" y="86" width="75" height="6" rx="2" fill="#1e40af" />
          <rect x="16" y="98" width="138" height="4" rx="1.5" fill="#cbd5e1" />
          <rect x="16" y="106" width="120" height="4" rx="1.5" fill="#cbd5e1" />
          <rect x="16" y="114" width="95" height="4" rx="1.5" fill="#cbd5e1" />

          {/* Section 2: Sprachkenntnisse */}
          <rect x="16" y="130" width="138" height="1" fill="#e2e8f0" />
          <rect x="16" y="138" width="65" height="6" rx="2" fill="#1e40af" />
          
          {/* Language Pills */}
          <rect x="16" y="150" width="42" height="16" rx="4" fill="#f0fdf4" stroke="#86efac" />
          <text x="23" y="162" fill="#166534" fontSize="9" fontWeight="700" fontFamily="sans-serif">B1/B2</text>
          
          <rect x="64" y="150" width="46" height="16" rx="4" fill="#eff6ff" stroke="#bfdbfe" />
          <text x="70" y="162" fill="#1e40af" fontSize="9" fontWeight="700" fontFamily="sans-serif">Englisch</text>

          {/* Stamp: Anerkannt / Geprüft */}
          <g transform="translate(85, 175) rotate(-8)">
            <rect width="70" height="26" rx="4" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="9" y="17" fill="#059669" fontSize="9" fontWeight="800" letterSpacing="0.5" fontFamily="sans-serif">ANERKANNT</text>
          </g>
        </g>

        {/* Center Floating Candidate / Professional Figure */}
        <g id="candidateFigure" transform="translate(180, 160)">
          {/* Shadow */}
          <ellipse cx="60" cy="225" rx="40" ry="8" fill="#cbd5e1" opacity="0.6" />

          {/* Body / Suit */}
          {/* Legs */}
          <path d="M 46 220 L 46 170 L 58 170 L 58 220 Z" fill="#1e293b" />
          <path d="M 64 220 L 64 170 L 76 170 L 76 220 Z" fill="#1e293b" />
          {/* Shoes */}
          <rect x="42" y="218" width="16" height="8" rx="3" fill="#0f172a" />
          <rect x="64" y="218" width="16" height="8" rx="3" fill="#0f172a" />

          {/* Torso / Blazer */}
          <path d="M 38 100 L 84 100 L 80 172 L 42 172 Z" fill="#1e3a8a" />
          {/* White Shirt & Red/Navy Tie */}
          <path d="M 52 100 L 61 125 L 70 100 Z" fill="#ffffff" />
          <path d="M 59 106 L 63 106 L 64 135 L 61 142 L 58 135 Z" fill="#dc2626" />

          {/* Lapels */}
          <path d="M 38 100 L 53 145 L 43 145 Z" fill="#172554" />
          <path d="M 84 100 L 69 145 L 79 145 Z" fill="#172554" />

          {/* Head & Hair */}
          <circle cx="61" cy="72" r="16" fill="#fcd34d" />
          <path d="M 45 68 C 45 52, 77 52, 77 68 C 72 62, 50 62, 45 68 Z" fill="#334155" />
          <circle cx="61" cy="76" r="2" fill="#0f172a" opacity="0.2" />

          {/* Right Arm holding Briefcase / Portfolio */}
          <path d="M 38 105 L 26 145 L 34 150 L 44 112 Z" fill="#1e3a8a" />
          {/* Portfolio bag */}
          <g transform="translate(18, 142)">
            <rect width="22" height="26" rx="3" fill="#78350f" />
            <path d="M 23 148 L 35 148" stroke="#fef08a" strokeWidth="1" />
            <path d="M 25 142 L 25 138 C 25 136, 33 136, 33 138 L 33 142" fill="none" stroke="#78350f" strokeWidth="2" />
          </g>

          {/* Left Arm raised holding Checklist / Pen */}
          <path d="M 84 105 L 102 125 L 96 132 L 80 115 Z" fill="#1e3a8a" />
          {/* White document held */}
          <g transform="translate(95, 118) rotate(12)">
            <rect width="18" height="24" rx="2" fill="#ffffff" stroke="#94a3b8" strokeWidth="1" />
            <path d="M 3 6 L 8 6 M 3 10 L 14 10 M 3 14 L 12 14" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="12" cy="18" r="3" fill="#10b981" />
            <path d="M 11 18 L 12 19 L 14 17" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
          </g>
        </g>

        {/* Floating Success Notification Badge (Bottom Left) */}
        <g transform="translate(60, 290)">
          <rect width="165" height="62" rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
          <circle cx="28" cy="31" r="14" fill="#ecfdf5" />
          <path d="M 22 31 L 26 35 L 34 27" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          
          <text x="50" y="27" fill="#0f172a" fontSize="11" fontWeight="700" fontFamily="sans-serif">İş Sözleşmesi Alındı</text>
          <text x="50" y="42" fill="#64748b" fontSize="9.5" fontFamily="sans-serif">München • Vollzeit (40h)</text>
        </g>

        {/* Floating Stars and Geometric Motifs */}
        <circle cx="80" cy="60" r="4" fill="#3b82f6" opacity="0.3" />
        <circle cx="500" cy="70" r="5" fill="#f59e0b" opacity="0.4" />
        <path d="M 520 280 L 526 295 L 542 295 L 530 304 L 534 320 L 520 310 L 506 320 L 510 304 L 498 295 L 514 295 Z" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
      </svg>
    </div>
  );
};
