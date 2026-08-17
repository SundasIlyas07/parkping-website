import { ShieldCheck, QrCode, Search, Lock, PhoneCall, Bell, BadgeCheck, Zap } from 'lucide-react';

const PILLARS = [
  {
    icon: <QrCode size={22} color="#0B65ED" />,
    iconBg: '#EFF6FF',
    iconBorder: '#BFDBFE',
    title: 'Contactless QR Code Scanning',
    desc: 'Every registered vehicle gets a secure windshield QR sticker. Scan with any smartphone camera to open an anonymous contact session instantly.',
  },
  {
    icon: <Search size={22} color="#0B65ED" />,
    iconBg: '#EFF6FF',
    iconBorder: '#BFDBFE',
    title: 'License Plate Lookup',
    desc: 'No QR sticker visible? Enter the plate number (e.g. "ABC-1234") directly into the app to dispatch an instant move request.',
  },
  {
    icon: <Lock size={22} color="#059669" />,
    iconBg: '#ECFDF5',
    iconBorder: '#A7F3D0',
    title: '100% Identity Privacy',
    desc: 'Phone numbers, emails, and home addresses are never exposed. All communication runs through encrypted WebSocket and Agora WebRTC tokenized streams.',
  },
  {
    icon: <BadgeCheck size={22} color="#0B65ED" />,
    iconBg: '#EFF6FF',
    iconBorder: '#BFDBFE',
    title: 'Official Vehicle Verification',
    desc: 'Owners upload plate photos and registration documents. Admins review and assign a VERIFIED badge to build community trust and accountability.',
  },
  {
    icon: <PhoneCall size={22} color="#0369A1" />,
    iconBg: '#F0F9FF',
    iconBorder: '#BAE6FD',
    title: 'In-App WebRTC Voice Call',
    desc: 'Initiate low-latency peer-to-peer audio calls via Agora RTC SDK — without revealing any phone numbers on either side.',
  },
  {
    icon: <Bell size={22} color="#D97706" />,
    iconBg: '#FFFBEB',
    iconBorder: '#FDE68A',
    title: 'Real-Time FCM Push Alerts',
    desc: 'Firebase Cloud Messaging delivers instant notifications to vehicle owners — even when the app is in background or the phone screen is locked.',
  },
];

export const SolutionSection: React.FC = () => {
  return (
    <section
      id="solution"
      style={{
        background: '#FFFFFF',
        paddingTop: '96px',
        paddingBottom: '96px',
      }}
    >
      <div className="container-pad">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
            <ShieldCheck size={18} color="#0B65ED" />
            <span className="eyebrow" style={{ margin: 0 }}>The ParkPing Protocol</span>
          </div>
          <div className="section-sep" />
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              lineHeight: 1.1,
              color: '#0F172A',
              marginBottom: '20px',
            }}
          >
            A contactless, privacy-preserving{' '}
            <span className="gradient-text-blue">vehicle notification platform.</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              color: '#64748B',
            }}
          >
            ParkPing bridges vehicle owners and blocked drivers using encrypted WebSockets,
            Agora voice tokens, and camera-based QR scanning — keeping personal contact details
            completely invisible to all parties.
          </p>
        </div>

        {/* Feature Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            marginBottom: '64px',
          }}
        >
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="feature-story"
            >
              <div
                style={{
                  width: 52, height: 52,
                  borderRadius: '14px',
                  background: pillar.iconBg,
                  border: `1px solid ${pillar.iconBorder}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                {pillar.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '1.0625rem',
                    color: '#0F172A',
                    marginBottom: '8px',
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    lineHeight: 1.65,
                    color: '#475569',
                  }}
                >
                  {pillar.desc}
                </p>
              </div>
              <div
                style={{
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(15,23,42,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Zap size={13} color="#0B65ED" />
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#0B65ED',
                  }}
                >
                  Core Feature
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Differentiator stat row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            background: 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 100%)',
            borderRadius: '20px',
            padding: '36px',
            border: '1px solid rgba(11,101,237,0.12)',
          }}
        >
          {[
            { value: '<50ms', label: 'Alert delivery latency' },
            { value: '100%', label: 'Identity protected' },
            { value: '3-sec', label: 'Socket grace filter' },
            { value: '2-min', label: 'Average resolution' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '8px 0' }}>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '2rem',
                  color: '#0B65ED',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  color: '#64748B',
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
