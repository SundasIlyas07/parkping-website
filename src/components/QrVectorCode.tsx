import React from 'react';

interface QrVectorCodeProps {
  style?: React.CSSProperties;
  className?: string;
}

export const QrVectorCode: React.FC<QrVectorCodeProps> = ({ style, className }) => {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6px',
        background: '#FFFFFF',
        borderRadius: '10px',
        border: '1px solid #E2E8F0',
        ...style,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        style={{ width: '100%', height: '100%', display: 'block' }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer background */}
        <rect width="100" height="100" rx="6" fill="white" />

        {/* Top Left Position Detection Pattern */}
        <rect x="8" y="8" width="28" height="28" rx="4" fill="#0B132B" />
        <rect x="14" y="14" width="16" height="16" rx="2" fill="white" />
        <rect x="18" y="18" width="8" height="8" rx="1" fill="#0B65ED" />

        {/* Top Right Position Detection Pattern */}
        <rect x="64" y="8" width="28" height="28" rx="4" fill="#0B132B" />
        <rect x="70" y="14" width="16" height="16" rx="2" fill="white" />
        <rect x="74" y="18" width="8" height="8" rx="1" fill="#0B65ED" />

        {/* Bottom Left Position Detection Pattern */}
        <rect x="8" y="64" width="28" height="28" rx="4" fill="#0B132B" />
        <rect x="14" y="70" width="16" height="16" rx="2" fill="white" />
        <rect x="18" y="74" width="8" height="8" rx="1" fill="#0B65ED" />

        {/* Small Bottom Right Alignment Pattern */}
        <rect x="66" y="66" width="16" height="16" rx="2" fill="#0B132B" />
        <rect x="70" y="70" width="8" height="8" rx="1" fill="white" />
        <rect x="72" y="72" width="4" height="4" fill="#0B65ED" />

        {/* Data Pattern Matrix Blocks */}
        <rect x="42" y="10" width="6" height="6" rx="1" fill="#0B132B" />
        <rect x="52" y="10" width="6" height="6" rx="1" fill="#0B65ED" />
        <rect x="42" y="20" width="6" height="6" rx="1" fill="#0B132B" />
        <rect x="48" y="26" width="6" height="6" rx="1" fill="#0B132B" />

        <rect x="10" y="42" width="6" height="6" rx="1" fill="#0B65ED" />
        <rect x="20" y="42" width="6" height="6" rx="1" fill="#0B132B" />
        <rect x="26" y="48" width="6" height="6" rx="1" fill="#0B132B" />

        <rect x="42" y="42" width="6" height="6" rx="1" fill="#0B65ED" />
        <rect x="52" y="42" width="6" height="6" rx="1" fill="#0B132B" />
        <rect x="48" y="52" width="6" height="6" rx="1" fill="#0B65ED" />
        <rect x="58" y="52" width="6" height="6" rx="1" fill="#0B132B" />

        <rect x="64" y="42" width="6" height="6" rx="1" fill="#0B132B" />
        <rect x="74" y="42" width="6" height="6" rx="1" fill="#0B65ED" />
        <rect x="84" y="42" width="6" height="6" rx="1" fill="#0B132B" />
        <rect x="70" y="52" width="6" height="6" rx="1" fill="#0B132B" />

        <rect x="42" y="64" width="6" height="6" rx="1" fill="#0B132B" />
        <rect x="52" y="64" width="6" height="6" rx="1" fill="#0B65ED" />
        <rect x="42" y="74" width="6" height="6" rx="1" fill="#0B132B" />
        <rect x="48" y="80" width="6" height="6" rx="1" fill="#0B132B" />

        <rect x="64" y="84" width="6" height="6" rx="1" fill="#0B65ED" />
        <rect x="74" y="84" width="6" height="6" rx="1" fill="#0B132B" />
        <rect x="84" y="84" width="6" height="6" rx="1" fill="#0B65ED" />
      </svg>
    </div>
  );
};
