import { QrCode, Search, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import { QrVectorCode } from './QrVectorCode';

const STEPS = [
  {
    num: '01',
    subtitle: 'For Vehicle Owners',
    title: 'Register Your Vehicle & Affix Your QR Sticker',
    desc: 'Download ParkPing, enter your vehicle details (make, model, color, plate), and upload registration documents for Admin Verification. You receive a unique ParkPing QR sticker to place on your windshield.',
    icon: <QrCode size={28} color="#0B65ED" />,
    features: [
      'Official Admin VERIFIED badge',
      'Upload plate & car photos',
      'Secure unique QR generation',
    ],
    visual: (
      <div
        style={{
          background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
          borderRadius: '20px',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          border: '1px solid rgba(11,101,237,0.15)',
          minHeight: '260px',
          justifyContent: 'center',
        }}
      >
        {/* Windshield representation */}
        <div
          style={{
            width: '100%',
            maxWidth: '240px',
            background: 'rgba(255,255,255,0.9)',
            borderRadius: '16px',
            padding: '20px',
            border: '2px solid #BFDBFE',
            boxShadow: '0 8px 24px rgba(11,101,237,0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Windshield Sticker
          </div>
          <div className="animate-qr-glow" style={{ borderRadius: '10px', border: '2px solid #DBEAFE', padding: '8px', background: 'white' }}>
            <QrVectorCode style={{ width: 80, height: 80, display: 'block' }} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8125rem', color: '#0F172A' }}>
              ParkPing Verified
            </div>
            <div style={{ fontSize: '0.6875rem', color: '#64748B' }}>Scan to contact owner</div>
          </div>
        </div>
        <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
          Admin Verified ✓
        </span>
      </div>
    ),
  },
  {
    num: '02',
    subtitle: 'For Blocked Drivers',
    title: 'Scan the QR Sticker or Search the License Plate',
    desc: 'When a vehicle blocks your driveway or exit, scan the ParkPing windshield sticker with any smartphone camera — or manually enter the license plate string (e.g. "ABC-1234") in the app to instantly find the vehicle profile.',
    icon: <Search size={28} color="#0369A1" />,
    features: [
      'Works with standard smartphone camera',
      'Global license plate string matching',
      'Instant vehicle profile retrieval',
    ],
    visual: (
      <div
        style={{
          background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)',
          borderRadius: '20px',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          border: '1px solid rgba(14,165,233,0.2)',
          minHeight: '260px',
          justifyContent: 'center',
        }}
      >
        {/* QR Scan viewfinder */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: '0 4px 16px rgba(14,165,233,0.1)',
            border: '1px solid #BAE6FD',
          }}
        >
          <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#0369A1', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Camera Viewfinder
          </div>
          <div style={{ position: 'relative', display: 'inline-block', margin: '0 auto' }}>
            {/* Corner brackets */}
            {[
              { top: -2, left: -2, borderTop: '3px solid #0EA5E9', borderLeft: '3px solid #0EA5E9' },
              { top: -2, right: -2, borderTop: '3px solid #0EA5E9', borderRight: '3px solid #0EA5E9' },
              { bottom: -2, left: -2, borderBottom: '3px solid #0EA5E9', borderLeft: '3px solid #0EA5E9' },
              { bottom: -2, right: -2, borderBottom: '3px solid #0EA5E9', borderRight: '3px solid #0EA5E9' },
            ].map((s, i) => (
              <div key={i} style={{ position: 'absolute', width: 14, height: 14, borderRadius: 2, ...s }} />
            ))}
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 6 }}>
              <QrVectorCode style={{ width: 64, height: 64, display: 'block' }} />
              <div className="animate-scan-line" />
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span className="badge badge-cyan" style={{ fontSize: '0.6875rem' }}>
              Match found in &lt;50ms
            </span>
          </div>
        </div>
        {/* OR separator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(14,165,233,0.2)' }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#0369A1' }}>OR</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(14,165,233,0.2)' }} />
        </div>
        {/* Plate search */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '12px 16px',
            border: '1px solid #BAE6FD',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Search size={14} color="#0369A1" />
          <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '0.9375rem', color: '#0F172A', letterSpacing: '0.1em' }}>
            ABC-1234
          </span>
          <span
            style={{
              marginLeft: 'auto',
              background: '#0B65ED',
              color: 'white',
              borderRadius: '8px',
              padding: '4px 10px',
              fontSize: '0.6875rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Search
          </span>
        </div>
      </div>
    ),
  },
  {
    num: '03',
    subtitle: '100% Phone Number Privacy',
    title: 'Connect Anonymously — Message or Voice Call',
    desc: 'Send a real-time Socket.IO chat alert or tap to initiate an in-app Agora WebRTC audio call. The car owner receives an FCM push notification even if their phone is locked — and responds without either party ever seeing the other\'s phone number.',
    icon: <MessageSquare size={28} color="#059669" />,
    features: [
      'Encrypted Socket.IO real-time messaging',
      'Agora WebRTC voice call token stream',
      '3-sec socket grace disconnect filter',
    ],
    visual: (
      <div
        style={{
          background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
          borderRadius: '20px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          border: '1px solid rgba(5,150,105,0.2)',
          minHeight: '260px',
          justifyContent: 'center',
        }}
      >
        {/* Mini chat interface */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(5,150,105,0.1)',
            border: '1px solid #A7F3D0',
          }}
        >
          <div
            style={{
              padding: '10px 14px',
              borderBottom: '1px solid #F1F5F9',
              background: '#FAFAFA',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', color: '#0F172A' }}>
              Anonymous Chat
            </span>
            <span className="badge badge-emerald" style={{ fontSize: '0.6rem', padding: '3px 8px' }}>
              Encrypted
            </span>
          </div>
          <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div>
              <div style={{ fontSize: '0.6rem', color: '#94A3B8', marginBottom: '3px' }}>Bystander</div>
              <div className="app-chat-bubble-in" style={{ fontSize: '0.75rem', padding: '8px 12px' }}>
                Hi! Your car is blocking my exit. Could you move it?
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.6rem', color: '#94A3B8', marginBottom: '3px', textAlign: 'right' }}>Owner</div>
              <div className="app-chat-bubble-out" style={{ fontSize: '0.75rem', padding: '8px 12px' }}>
                Coming down now! Sorry about that.
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            textAlign: 'center',
            padding: '12px',
            background: 'rgba(255,255,255,0.7)',
            borderRadius: '12px',
            border: '1px solid rgba(5,150,105,0.15)',
          }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#065F46' }}>
            🛡 Zero phone number exposure on both sides
          </span>
        </div>
      </div>
    ),
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section
      id="how-it-works"
      style={{
        background: '#F8FAFC',
        paddingTop: '96px',
        paddingBottom: '96px',
        borderTop: '1px solid rgba(15,23,42,0.06)',
        borderBottom: '1px solid rgba(15,23,42,0.06)',
      }}
    >
      <div className="container-pad">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 72px' }}>
          <span className="eyebrow">3-Step Simple Workflow</span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              lineHeight: 1.1,
              color: '#0F172A',
              marginBottom: '16px',
            }}
          >
            How ParkPing <span className="gradient-text-blue">works.</span>
          </h2>
          <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: '#64748B' }}>
            From vehicle registration to anonymous notification in three straightforward steps.
          </p>
        </div>

        {/* Step Chapters */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {STEPS.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '64px',
                  alignItems: 'center',
                  paddingTop: '72px',
                  paddingBottom: '72px',
                  borderBottom: idx < STEPS.length - 1 ? '1px solid rgba(15,23,42,0.06)' : 'none',
                }}
                className="step-chapter-grid"
              >
                {/* Content side */}
                <div style={{ order: isEven ? 0 : 1 }}>
                  {/* Step number */}
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: '4rem',
                      lineHeight: 1,
                      color: 'rgba(11,101,237,0.12)',
                      marginBottom: '8px',
                      letterSpacing: '-0.04em',
                    }}
                  >
                    {step.num}
                  </div>

                  <span className="eyebrow" style={{ marginBottom: '8px' }}>
                    {step.subtitle}
                  </span>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: '1.5rem',
                      lineHeight: 1.2,
                      color: '#0F172A',
                      marginBottom: '16px',
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      lineHeight: 1.75,
                      color: '#475569',
                      marginBottom: '24px',
                    }}
                  >
                    {step.desc}
                  </p>

                  {/* Feature list */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {step.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#334155' }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual side */}
                <div style={{ order: isEven ? 1 : 0 }}>
                  {step.visual}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: '64px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <p style={{ fontSize: '1rem', color: '#64748B', fontWeight: 500 }}>
            Ready to experience smarter parking communication?
          </p>
          <a
            href="#app-experience"
            className="btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            See the App in Action
            <ArrowRight size={16} color="#0B65ED" />
          </a>
        </div>
      </div>

      {/* Responsive grid override */}
      <style>{`
        @media (max-width: 768px) {
          .step-chapter-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding-top: 48px !important;
            padding-bottom: 48px !important;
          }
          .step-chapter-grid > div {
            order: unset !important;
          }
        }
      `}</style>
    </section>
  );
};
