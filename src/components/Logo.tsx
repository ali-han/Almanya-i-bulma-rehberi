import React from 'react';

interface LogoProps {
  isScrolled?: boolean;
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  isScrolled = false, 
  variant = 'light',
  showSubtitle = true 
}) => {
  const isDark = variant === 'dark';

  return (
    <div 
      className="flex items-center gap-2.5 sm:gap-3.5 select-none group"
      itemScope 
      itemType="https://schema.org/Brand"
    >
      <meta itemProp="name" content="Almanya'da İş Bulma Rehberi" />
      <meta itemProp="description" content="Aracı firma olmadan Almanya'da iş bulma ve 2024 nitelikli göç yasası kılavuzu" />

      {/* Alman Bayrağı + Federal Kartal (Bundesadler) Kalkan Amblemi */}
      <div 
        className={`relative flex items-center justify-center transition-all duration-300 flex-shrink-0 drop-shadow-sm ${
          isScrolled ? 'w-8 h-10 sm:w-9 sm:h-11' : 'w-9 h-11 sm:w-11 sm:h-13'
        }`}
      >
        <svg 
          viewBox="0 0 44 54" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full filter drop-shadow-xs"
          aria-hidden="true"
        >
          <defs>
            {/* Shield Clip Path */}
            <clipPath id="germanShieldClip">
              <path d="M 4 4 L 40 4 C 40 4 42 4 42 6 L 42 28 C 42 41 22 50 22 50 C 22 50 2 41 2 28 L 2 6 C 2 4 4 4 4 4 Z" />
            </clipPath>

            {/* Eagle Gold Gradient */}
            <linearGradient id="eagleGold" x1="22" y1="12" x2="22" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" />
              <stop offset="0.3" stopColor="#fef08a" />
              <stop offset="1" stopColor="#f59e0b" />
            </linearGradient>

            {/* Subtle Inner Glow */}
            <radialGradient id="shieldShine" cx="22" cy="18" r="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" stopOpacity="0.25" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Group with Shield Clip */}
          <g clipPath="url(#germanShieldClip)">
            {/* Top Stripe: Schwarz (Black) */}
            <rect x="0" y="0" width="44" height="18" fill="#18181b" />
            
            {/* Middle Stripe: Rot (German Red) */}
            <rect x="0" y="18" width="44" height="16" fill="#dc2626" />
            
            {/* Bottom Stripe: Gold (Bundesgold) */}
            <rect x="0" y="34" width="44" height="20" fill="#f59e0b" />

            {/* Subtle Inner Highlight */}
            <rect x="0" y="0" width="44" height="54" fill="url(#shieldShine)" />

            {/* ALMAN FEDERAL KARTALI (BUNDESADLER) - Stylized Vector */}
            <g id="bundesadler" transform="translate(0, 2)">
              {/* Eagle Silhouette Shadow for 3D Contrast across all 3 flag colors */}
              <path
                d="M 22 13 
                   C 20.5 13, 19 14, 18 15.5 
                   C 16.5 14.5, 15 15, 15 16 
                   C 16 16.5, 17 16.5, 18 17
                   C 16 18, 13 19, 10 23
                   C 12 23, 14 22, 16 21.5
                   C 14 23.5, 11 26, 8 30
                   C 11 29.5, 13 28.5, 15 27.5
                   C 13 30, 11 33, 9 37
                   C 12 35.5, 15 34, 17 32
                   C 16 35, 17 38, 19 40
                   C 20 40, 20.5 38, 20.5 36
                   L 21 42 L 23 42 L 23.5 36
                   C 23.5 38, 24 40, 25 40
                   C 27 38, 28 35, 27 32
                   C 29 34, 32 35.5, 35 37
                   C 33 33, 31 30, 29 27.5
                   C 31 28.5, 33 29.5, 36 30
                   C 33 26, 30 23.5, 28 21.5
                   C 30 22, 32 23, 34 23
                   C 31 19, 28 18, 26 17
                   C 27 16.5, 28 16.5, 29 16
                   C 29 15, 27.5 14.5, 26 15.5
                   C 25 14, 23.5 13, 22 13 Z"
                fill="#0f172a"
                opacity="0.4"
                transform="translate(0, 1)"
              />

              {/* Eagle Main Body & Wings (Shining Gold with crisp details) */}
              <path
                d="M 22 12.5 
                   C 20.5 12.5, 19 13.5, 18 15 
                   C 16.5 14, 15 14.5, 15 15.5 
                   C 16 16, 17 16, 18 16.5
                   C 16 17.5, 13 18.5, 10 22.5
                   C 12 22.5, 14 21.5, 16 21
                   C 14 23, 11 25.5, 8 29.5
                   C 11 29, 13 28, 15 27
                   C 13 29.5, 11 32.5, 9 36.5
                   C 12 35, 15 33.5, 17 31.5
                   C 16 34.5, 17 37.5, 19 39.5
                   C 20 39.5, 20.5 37.5, 20.5 35.5
                   L 21 41.5 L 23 41.5 L 23.5 35.5
                   C 23.5 37.5, 24 39.5, 25 39.5
                   C 27 37.5, 28 34.5, 27 31.5
                   C 29 33.5, 32 35, 35 36.5
                   C 33 32.5, 31 29.5, 29 27
                   C 31 28, 33 29, 36 29.5
                   C 33 25.5, 30 23, 28 21
                   C 30 21.5, 32 22.5, 34 22.5
                   C 31 18.5, 28 17.5, 26 16.5
                   C 27 16, 28 16, 29 15.5
                   C 29 14.5, 27.5 14, 26 15
                   C 25 13.5, 23.5 12.5, 22 12.5 Z"
                fill="url(#eagleGold)"
                stroke="#78350f"
                strokeWidth="0.6"
              />

              {/* Eagle Head & Beak Detail (Facing Left) */}
              <circle cx="21" cy="15.5" r="1.2" fill="#78350f" />
              <path d="M 17 15.5 L 14 16 L 16.5 17 Z" fill="#fef08a" stroke="#78350f" strokeWidth="0.4" />

              {/* Chest & Wing Rib Details */}
              <line x1="22" y1="18" x2="22" y2="32" stroke="#b45309" strokeWidth="0.8" opacity="0.7" />
              <path d="M 19 23 Q 22 26 25 23" fill="none" stroke="#b45309" strokeWidth="0.8" opacity="0.7" />
              <path d="M 18 27 Q 22 30 26 27" fill="none" stroke="#b45309" strokeWidth="0.8" opacity="0.7" />
            </g>
          </g>

          {/* Shield Metallic Border */}
          <path 
            d="M 4 4 L 40 4 C 40 4 42 4 42 6 L 42 28 C 42 41 22 50 22 50 C 22 50 2 41 2 28 L 2 6 C 2 4 4 4 4 4 Z" 
            fill="none" 
            stroke="#fbbf24" 
            strokeWidth="1.8" 
          />
          <path 
            d="M 5 5 L 39 5 C 39 5 41 5 41 7 L 41 28 C 41 40 22 48.5 22 48.5 C 22 48.5 3 40 3 28 L 3 7 C 3 5 5 5 5 5 Z" 
            fill="none" 
            stroke="#1e293b" 
            strokeWidth="0.8" 
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Brand Text Hierarchy */}
      <div className="flex flex-col justify-center">
        
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <span 
            className={`font-black tracking-tight transition-colors duration-200 font-sans ${
              isDark ? 'text-white' : 'text-slate-900 group-hover:text-blue-900'
            } ${
              isScrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
            }`}
          >
            ALMANYA<span className="text-blue-600 font-extrabold ml-1">İŞ</span>
          </span>

          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200/80 shadow-2xs">
            Rehberi
          </span>
        </div>

        {/* Subtitle / SEO Tagline */}
        {showSubtitle && (
          <p className={`text-[11px] text-slate-500 font-medium tracking-tight whitespace-nowrap hidden sm:block transition-all duration-200 ${
            isScrolled ? 'opacity-80 text-[10px]' : 'opacity-100'
          }`}>
            Kendi Başına İş Bulanların Resmi Başvuru Kılavuzu
          </p>
        )}

      </div>

    </div>
  );
};
