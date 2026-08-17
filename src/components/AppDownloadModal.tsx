import { useEffect } from 'react';
import { X, ShieldCheck, Apple, Play } from 'lucide-react';
import logoSvg from '../assets/logo.svg';

interface AppDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppDownloadModal: React.FC<AppDownloadModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      try {
        // Dynamic confetti import
        import('canvas-confetti').then(({ default: confetti }) => {
          if (typeof confetti === 'function') {
            confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 }, colors: ['#0B65ED', '#38BDF8', '#FFFFFF'] });
          }
        }).catch(() => {});
      } catch (e) { /* safe */ }
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
        background: 'rgba(15,23,42,0.72)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        animation: 'fadeIn 0.25s ease',
      }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Download ParkPing App"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '540px',
          background: '#0A1628',
          border: '1px solid rgba(11,101,237,0.3)',
          borderRadius: '28px',
          padding: '32px',
          boxShadow: '0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
          overflow: 'hidden',
          animation: 'fadeInUp 0.3s cubic-bezier(0.16,1,0.3,1)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Ambient glows */}
        <div style={{ position: 'absolute', top: -60, right: -40, width: 240, height: 240, background: 'radial-gradient(circle, rgba(11,101,237,0.25) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: 16, right: 16,
            width: 36, height: 36,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#94A3B8',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.14)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.07)'; }}
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
          <img src={logoSvg} alt="ParkPing" style={{ width: 36, height: 36, objectFit: 'contain' }} />
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.375rem', color: '#FFFFFF', lineHeight: 1.2 }}>
              Get ParkPing Mobile
            </h3>
            <p style={{ fontSize: '0.8125rem', color: '#64748B', marginTop: '2px' }}>
              Contactless Vehicle Parking Notification App
            </p>
          </div>
        </div>

        {/* Content grid */}
        <div className="modal-content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          {/* QR */}
          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(11,101,237,0.2)',
              borderRadius: '16px',
              padding: '20px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
            }}
          >
            <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '10px', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https://parkping.app/download"
                alt="ParkPing App Download QR Code"
                style={{ width: 120, height: 120, display: 'block' }}
              />
            </div>
            <p style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600, textAlign: 'center' }}>
              Scan with camera
            </p>
            <span style={{ fontSize: '0.6875rem', color: '#475569' }}>Instant app link</span>
          </div>

          {/* Platform buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { icon: <Apple size={22} color="#FFFFFF" />, label: 'Apple App Store', sublabel: 'iOS 14+', color: '#1D2847' },
              { icon: <Play size={22} color="#34D399" />, label: 'Google Play Store', sublabel: 'Android 8+', color: '#1D2847' },
            ].map((btn, i) => (
              <a
                key={i}
                href="#"
                onClick={e => {
                  e.preventDefault();
                  alert(`ParkPing ${i === 0 ? 'iOS' : 'Android'} App — built with React Native Expo SDK 54.`);
                }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '14px 16px',
                  background: btn.color,
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '14px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  flex: 1,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(11,101,237,0.5)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.07)'; }}
              >
                <div style={{ width: 36, height: 36, borderRadius: '10px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {btn.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.6875rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.04em' }}>
                    {btn.sublabel}
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.875rem', color: '#FFFFFF' }}>
                    {btn.label}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Privacy note */}
        <div
          style={{
            padding: '14px 16px',
            background: 'rgba(11,101,237,0.08)',
            border: '1px solid rgba(11,101,237,0.2)',
            borderRadius: '14px',
            display: 'flex', alignItems: 'flex-start', gap: '10px',
          }}
        >
          <ShieldCheck size={18} color="#38BDF8" style={{ flexShrink: 0, marginTop: '1px' }} />
          <p style={{ fontSize: '0.8125rem', color: '#94A3B8', lineHeight: 1.5 }}>
            <strong style={{ color: '#FFFFFF' }}>100% Privacy Preserved:</strong>{' '}
            ParkPing never discloses your phone number or email. All alerts, Socket.IO messaging, and Agora voice calls remain masked and encrypted.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 540px) {
          .modal-content-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
