import React from 'react';

export const CareerSuccessIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-auto" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 580 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm select-none"
      >
        <defs>
          <linearGradient id="sunriseSky" x1="290" y1="0" x2="290" y2="320" gradientUnits="userSpaceOnUse">
            <stop stopColor="#eff6ff" />
            <stop offset="0.6" stopColor="#fef3c7" />
            <stop offset="1" stopColor="#ffffff" />
          </linearGradient>

          <linearGradient id="sunGlow" x1="290" y1="70" x2="290" y2="230" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f59e0b" stopOpacity="0.35" />
            <stop offset="1" stopColor="#f59e0b" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="skylineGrad" x1="290" y1="120" x2="290" y2="280" gradientUnits="userSpaceOnUse">
            <stop stopColor="#94a3b8" stopOpacity="0.4" />
            <stop offset="1" stopColor="#cbd5e1" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Backdrop Base */}
        <rect width="580" height="320" rx="20" fill="url(#sunriseSky)" />

        {/* Sunrise Aura */}
        <circle cx="290" cy="180" r="110" fill="url(#sunGlow)" />
        <circle cx="290" cy="180" r="45" fill="#fef3c7" stroke="#fde68a" strokeWidth="2" />

        {/* Distant German City Skyline (Fernsehturm Berlin + Frankfurt Skyscrapers) */}
        <g fill="url(#skylineGrad)">
          {/* Frankfurt-like financial towers */}
          <rect x="60" y="150" width="35" height="120" rx="2" />
          <rect x="105" y="130" width="45" height="140" rx="3" />
          <polygon points="105,130 127,105 150,130" />
          <rect x="160" y="160" width="40" height="110" rx="2" />
          
          {/* Center TV Tower (Fernsehturm) needle */}
          <line x1="290" y1="75" x2="290" y2="180" stroke="#94a3b8" strokeWidth="3" opacity="0.6" />
          <circle cx="290" cy="115" r="9" />

          {/* Right side skyline */}
          <rect x="380" y="155" width="40" height="115" rx="2" />
          <rect x="430" y="135" width="50" height="135" rx="3" />
          <polygon points="430,135 455,115 480,135" />
          <rect x="490" y="165" width="35" height="105" rx="2" />
        </g>

        {/* Architectural Terrace / Balcony Grid Floor */}
        <path d="M 0 250 L 580 250 L 580 320 L 0 320 Z" fill="#ffffff" />
        <line x1="0" y1="250" x2="580" y2="250" stroke="#cbd5e1" strokeWidth="2" />
        {/* Tiles */}
        <line x1="120" y1="250" x2="80" y2="320" stroke="#f1f5f9" strokeWidth="2" />
        <line x1="220" y1="250" x2="200" y2="320" stroke="#f1f5f9" strokeWidth="2" />
        <line x1="360" y1="250" x2="380" y2="320" stroke="#f1f5f9" strokeWidth="2" />
        <line x1="460" y1="250" x2="500" y2="320" stroke="#f1f5f9" strokeWidth="2" />

        {/* Paper Airplanes Flying towards Germany (Simulating Successful Applications) */}
        <g transform="translate(140, 70) rotate(-15)">
          <path d="M 0 10 L 32 0 L 22 18 L 12 14 Z" fill="#2563eb" />
          <path d="M 0 10 L 32 0 L 14 12 Z" fill="#60a5fa" />
          {/* Flight dotted trail */}
          <path d="M -40 30 Q -15 20 0 10" fill="none" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 3" />
        </g>

        <g transform="translate(420, 50) rotate(12)">
          <path d="M 0 10 L 26 0 L 18 15 L 10 12 Z" fill="#10b981" />
          <path d="M 0 10 L 26 0 L 11 10 Z" fill="#34d399" />
          <path d="M -30 20 Q -10 15 0 10" fill="none" stroke="#a7f3d0" strokeWidth="1.5" strokeDasharray="3 3" />
        </g>

        {/* Main Character standing on terrace looking ahead with confidence */}
        <g transform="translate(255, 175)">
          {/* Soft shadow */}
          <ellipse cx="35" cy="74" rx="28" ry="6" fill="#cbd5e1" opacity="0.6" />

          {/* Legs */}
          <rect x="25" y="38" width="8" height="35" rx="3" fill="#1e293b" />
          <rect x="37" y="38" width="8" height="35" rx="3" fill="#1e293b" />
          {/* Shoes */}
          <rect x="22" y="70" width="12" height="6" rx="2" fill="#0f172a" />
          <rect x="37" y="70" width="12" height="6" rx="2" fill="#0f172a" />

          {/* Body Coat / Blazer */}
          <path d="M 20 5 L 50 5 L 47 42 L 23 42 Z" fill="#1e3a8a" />
          {/* Head & Confident Hair */}
          <circle cx="35" cy="-8" r="11" fill="#fcd34d" />
          <path d="M 24 -12 C 24 -22, 46 -22, 46 -12 C 40 -16, 30 -16, 24 -12 Z" fill="#334155" />

          {/* Briefcase by the side */}
          <g transform="translate(52, 48)">
            <rect width="18" height="22" rx="3" fill="#92400e" />
            <path d="M 4 0 C 4 -3, 14 -3, 14 0" fill="none" stroke="#92400e" strokeWidth="2" />
            <circle cx="9" cy="8" r="2" fill="#fef08a" />
          </g>
        </g>

        {/* Compass of Guidance Motif (Left Bottom) */}
        <g transform="translate(60, 195)">
          <circle cx="28" cy="28" r="24" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
          <circle cx="28" cy="28" r="19" fill="#f8fafc" />
          {/* Needle pointing to North */}
          <polygon points="28,14 32,28 24,28" fill="#dc2626" />
          <polygon points="28,42 32,28 24,28" fill="#94a3b8" />
          <circle cx="28" cy="28" r="3" fill="#0f172a" />
          <text x="25" y="11" fill="#dc2626" fontSize="7" fontWeight="800">N</text>
        </g>

        {/* Motivational Banner on Terrace */}
        <g transform="translate(340, 268)">
          <rect width="210" height="34" rx="8" fill="#eff6ff" stroke="#bfdbfe" />
          <text x="14" y="16" fill="#1e40af" fontSize="9" fontWeight="700" fontFamily="sans-serif">
            “Almanya'da yeni bir düzende yaşamak”
          </text>
          <text x="14" y="27" fill="#059669" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">
            ✓ Senin için de mümkün. Adım adım ilerle.
          </text>
        </g>
      </svg>
    </div>
  );
};
