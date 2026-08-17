import { EyeOff, Key, Zap, UserCheck, Server, Lock } from 'lucide-react';

const SECURITY_FEATURES = [
  {
    icon: <EyeOff size={22} color="#0B65ED" />,
    iconBg: '#EFF6FF', iconBorder: '#BFDBFE',
    title: 'Zero Plain-Text Phone Disclosure',
    desc: 'API endpoints never return raw telephone numbers or email addresses to bystanders. All interactions happen over tokenized channels.',
  },
  {
    icon: <Key size={22} color="#D97706" />,
    iconBg: '#FFFBEB', iconBorder: '#FDE68A',
    title: 'Dual-Token JWT & Bcrypt Storage',
    desc: 'Short-lived Access Tokens (24h) and long-lived Refresh Tokens (30d) with BcryptJS (10 salt rounds) password hashing.',
  },
  {
    icon: <Zap size={22} color="#059669" />,
    iconBg: '#ECFDF5', iconBorder: '#A7F3D0',
    title: '3-Second Disconnect Grace Filter',
    desc: 'Socket.IO presence engine filters rapid tab switching with a 3-second grace timer to eliminate flickering offline indicators.',
  },
  {
    icon: <UserCheck size={22} color="#0369A1" />,
    iconBg: '#F0F9FF', iconBorder: '#BAE6FD',
    title: 'Admin Web Oversight Panel',
    desc: 'Dedicated React 18 + Vite 5 Admin Web Panel provides fleet oversight, document inspection, and real-time user suspension controls.',
  },
];

export const PrivacySection: React.FC = () => {
  return (
    <section
      id="privacy"
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
            <Lock size={18} color="#0B65ED" />
            <span className="eyebrow" style={{ margin: 0 }}>Security & Privacy Model</span>
          </div>
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
            Privacy built into{' '}
            <span className="gradient-text-blue">every layer.</span>
          </h2>
          <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: '#64748B' }}>
            Engineered with strict non-functional security standards — rate limiting, NoSQL injection guards,
            and tokenized communication streams throughout.
          </p>
        </div>

        {/* Privacy Data Flow Visual */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto 72px',
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid rgba(11,101,237,0.12)',
            padding: '36px',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.8125rem',
                color: '#64748B',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              How communication flows — privately
            </span>
          </div>

          {/* Flow Diagram */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0,
              flexWrap: 'nowrap',
              overflowX: 'auto',
            }}
          >
            {/* Node: Driver */}
            <div
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                padding: '20px 24px',
                background: '#F8FAFC',
                borderRadius: '16px',
                border: '1px solid rgba(15,23,42,0.08)',
                textAlign: 'center',
                minWidth: 110,
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: '2rem' }}>🧍</span>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8125rem', color: '#0F172A' }}>
                  Bystander
                </div>
                <div style={{ fontSize: '0.6875rem', color: '#94A3B8' }}>Anonymous</div>
              </div>
            </div>

            {/* Arrow */}
            <div style={{ width: 40, height: 2, background: 'linear-gradient(90deg, #CBD5E1, #0B65ED)', flexShrink: 0, position: 'relative' }}>
              <div style={{ position: 'absolute', right: -1, top: '50%', transform: 'translateY(-50%)', border: '5px solid transparent', borderLeft: '6px solid #0B65ED' }} />
            </div>

            {/* Node: ParkPing Shield */}
            <div
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                padding: '20px 24px',
                background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
                borderRadius: '16px',
                border: '1.5px solid rgba(11,101,237,0.25)',
                textAlign: 'center',
                minWidth: 130,
                flexShrink: 0,
                boxShadow: '0 4px 16px rgba(11,101,237,0.1)',
              }}
            >
              <div
                style={{
                  width: 44, height: 44,
                  borderRadius: '12px',
                  background: '#0B65ED',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <Lock size={20} color="white" />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.875rem', color: '#0B65ED' }}>
                  ParkPing
                </div>
                <div style={{ fontSize: '0.6rem', color: '#1E40AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Encrypted Bridge
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div style={{ width: 40, height: 2, background: 'linear-gradient(90deg, #0B65ED, #CBD5E1)', flexShrink: 0, position: 'relative' }}>
              <div style={{ position: 'absolute', right: -1, top: '50%', transform: 'translateY(-50%)', border: '5px solid transparent', borderLeft: '6px solid #CBD5E1' }} />
            </div>

            {/* Node: Owner */}
            <div
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                padding: '20px 24px',
                background: '#ECFDF5',
                borderRadius: '16px',
                border: '1px solid #A7F3D0',
                textAlign: 'center',
                minWidth: 110,
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: '2rem' }}>🚗</span>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8125rem', color: '#0F172A' }}>
                  Owner
                </div>
                <div style={{ fontSize: '0.6875rem', color: '#059669', fontWeight: 600 }}>Masked ✓</div>
              </div>
            </div>
          </div>

          {/* Privacy shield note */}
          <div
            style={{
              marginTop: '24px',
              padding: '14px 20px',
              background: '#F8FAFC',
              borderRadius: '12px',
              textAlign: 'center',
              border: '1px solid rgba(15,23,42,0.06)',
              fontSize: '0.8125rem',
              color: '#475569',
              lineHeight: 1.5,
            }}
          >
            📵 <strong style={{ color: '#0F172A' }}>No phone numbers.</strong>{' '}
            No email addresses. No home addresses. Ever exposed. On either side.
          </div>
        </div>

        {/* Security Feature Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '56px',
          }}
        >
          {SECURITY_FEATURES.map((sec, idx) => (
            <div
              key={idx}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(15,23,42,0.06)',
                padding: '28px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                boxShadow: 'var(--shadow-xs)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-md)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(11,101,237,0.15)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-xs)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(15,23,42,0.06)';
                (e.currentTarget as HTMLDivElement).style.transform = 'none';
              }}
            >
              <div
                style={{
                  width: 48, height: 48,
                  borderRadius: '12px',
                  background: sec.iconBg,
                  border: `1px solid ${sec.iconBorder}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {sec.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: '#0F172A', marginBottom: '8px' }}>
                  {sec.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>
                  {sec.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Admin panel banner */}
        <div
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            background: '#FFFFFF',
            borderRadius: '20px',
            border: '1px solid rgba(11,101,237,0.15)',
            padding: '32px 40px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column' as const,
            gap: '20px',
            alignItems: 'center' as const,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Server size={20} color="#0B65ED" />
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.125rem', color: '#0F172A' }}>
              Standalone Admin Web Panel Ecosystem
            </span>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, textAlign: 'center', maxWidth: '540px' }}>
            React 18 + Vite 5 + Tailwind CSS v3 super admin portal with live metrics —
            Total Users, Pending Verifications, and Vehicle Suspension Controls.
          </p>
          <span className="badge badge-emerald">
            Production Ready
          </span>
        </div>
      </div>
    </section>
  );
};
