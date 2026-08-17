import { Smartphone, ArrowRight, ShieldCheck, QrCode } from 'lucide-react';

interface CtaSectionProps {
  onOpenDownloadModal: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenDownloadModal }) => {
  return (
    <section
      id="cta"
      style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #0F172A 50%, #0369A1 100%)',
        paddingTop: '108px',
        paddingBottom: '108px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background texture dots */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}
      />

      {/* Ambient glowing lighting */}
      <div style={{ position: 'absolute', top: '-30%', left: '20%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(11,101,237,0.2) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-30%', right: '20%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div className="container-pad" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            textAlign: 'center',
            maxWidth: '720px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          {/* Eyebrow badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 18px',
              borderRadius: 99,
              background: 'rgba(11,101,237,0.25)',
              border: '1px solid rgba(56,189,248,0.3)',
            }}
          >
            <ShieldCheck size={16} color="#38BDF8" />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.75rem',
                color: '#38BDF8',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              FINAL CONVERSION
            </span>
          </div>

          {/* Headline direction */}
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              lineHeight: 1.1,
              color: '#FFFFFF',
              letterSpacing: '-0.025em',
            }}
          >
            Parking problems shouldn't be complicated.
          </h2>

          {/* Subtitle direction */}
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
              lineHeight: 1.4,
              color: '#38BDF8',
              maxWidth: '600px',
            }}
          >
            Stay connected to your vehicle with ParkPing.
          </p>

          <p
            style={{
              fontSize: '1rem',
              color: '#94A3B8',
              lineHeight: 1.7,
              maxWidth: '540px',
            }}
          >
            Protect your car, resolve driveway blockages in minutes, and maintain 100% phone number privacy on iOS & Android.
          </p>

          {/* Primary & Secondary CTA Buttons */}
          <div className="mobile-btn-stack" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center', marginTop: '12px' }}>
            <button
              type="button"
              onClick={onOpenDownloadModal}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 36px',
                borderRadius: '16px',
                background: '#0B65ED',
                color: '#FFFFFF',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 12px 36px rgba(11,101,237,0.4)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 16px 44px rgba(11,101,237,0.5)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'none';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 12px 36px rgba(11,101,237,0.4)';
              }}
            >
              <Smartphone size={18} color="#FFFFFF" />
              Get the ParkPing App
            </button>

            <a
              href="#how-it-works"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 32px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.06)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '1rem',
                border: '1.5px solid rgba(255,255,255,0.2)',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.12)';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.4)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.2)';
              }}
            >
              See How It Works
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Proof Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: 6 }}>
              <QrCode size={14} color="#38BDF8" /> Sub-50ms QR Scanner
            </span>
            <span style={{ fontSize: '0.75rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: 6 }}>
              <ShieldCheck size={14} color="#34D399" /> 100% Masked Identity
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
