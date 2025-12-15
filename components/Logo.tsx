import React from 'react';

export const Logo: React.FC<{ className?: string, variant?: 'dark' | 'light' }> = ({ className = "", variant = 'dark' }) => {
  // Logic for color adaptability
  // The provided logo has specific black paths and red paths.
  // When variant is 'light' (on dark background), the black paths become white.
  // The red remains constant as it's the brand color.
  
  const mainColor = variant === 'light' ? '#FFFFFF' : '#000000';
  const accentColor = '#940011'; // Fixed Red from SVG

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="48" height="49" viewBox="0 0 156 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
        <path d="M80.3801 89.8149C87.687 89.8151 88.6536 95.3543 88.6536 110.929L88.6545 131.715H62.3997C60.2626 131.715 57.6477 131.865 57.6477 136.075C57.6477 140.285 60.2626 139.574 62.3997 139.574H88.6545C88.6545 149.113 88.6115 150.53 80.3801 150.53H59.3528C54.6674 150.53 52.6793 149.098 52.7288 139.671C52.7288 139.618 52.7063 139.574 52.679 139.574L20.8831 139.476C19.4152 140.018 16.48 137.435 16.4797 134.504C16.4795 131.574 19.4153 131.142 20.8831 131.619L52.7288 131.715V111.027C52.7288 96.4464 53.1539 89.8149 62.3997 89.8149H80.3801ZM80.1702 98.8062C76.1719 98.6948 64.6897 98.5392 61.6965 98.8062C58.7041 99.0731 58.3859 106.706 58.6008 110.49V124.51L83.3948 124.007V110.49C83.3948 101.411 81.2455 98.9179 80.1702 98.8062Z" fill={mainColor}/>
        <path d="M23.9828 102.504C27.3346 102.277 40.1951 102.41 44.6732 102.504C45.8776 102.599 48.285 104.719 48.285 112.442V123.94L20.5155 124.368V112.442C20.2748 109.224 20.6312 102.731 23.9828 102.504Z" fill={mainColor}/>
        <path d="M74.05 25L6.05005 100V25H74.05Z" fill={accentColor}/>
        <path d="M6.54091 99.7612L86.55 5H5.05005L6.54091 154.733C6.54091 154.733 92.336 154.733 154.633 154.733" stroke={mainColor} strokeWidth="10"/>
        <path d="M92.0168 82.6875V153.328H98.1649V82.6876H116.285L116.609 155H121.786C121.894 133.769 121.786 93.6063 121.786 82.6875C121.786 71.7687 118.119 69.6457 116.285 69.9491C112.187 69.6458 102.824 70.6771 98.1649 69.9491C93.5053 69.2212 92.1247 77.5314 92.0168 82.6875Z" fill={mainColor}/>
        <path d="M131.201 42.8459C135.987 42.8459 145.357 42.4793 149.496 42.8459C151.347 42.4792 155.05 45.0455 155.051 58.2463C155.051 71.4474 154.832 126.086 154.723 151.754H149.496V118.407H131.201V153.775H124.994V58.2463C125.103 52.0126 124.994 42.846 131.201 42.8459ZM130.875 60.8088V99.2073H150.476V60.8088H130.875Z" fill={mainColor}/>
      </svg>
      <div className="flex flex-col justify-center">
        <span className={`font-serif text-[49px] leading-none tracking-wide font-bold ${variant === 'light' ? 'text-white' : 'text-peena-black'}`}>
          Peena
          <span style={{ color: accentColor }}>.</span>
          com
        </span>
      </div>
    </div>
  );
};