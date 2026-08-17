import { FileText, PhoneOff, Truck } from 'lucide-react';

const PROBLEMS = [
  {
    icon: <FileText size={24} color="#D97706" />,
    accentClass: 'amber',
    badge: 'Unreliable',
    badgeClass: 'badge badge-amber',
    title: 'Handwritten Paper Notes',
    issue: 'Notes blow away in wind, dissolve in rain, or get completely ignored by passers-by.',
    impact: 'Zero delivery guarantee. You stay stranded while your appointment clock ticks.',
    bg: '#FFFBEB',
    iconBg: '#FEF3C7',
    border: '#FDE68A',
  },
  {
    icon: <PhoneOff size={24} color="#E11D48" />,
    accentClass: 'rose',
    badge: 'Severe Privacy Risk',
    badgeClass: 'badge badge-rose',
    title: 'Dashboard Phone Numbers',
    issue: 'Your real cell number sits visible on the windshield — publicly, permanently.',
    impact: 'Web-scraped. Harassed. Spam calls. Stalking risk. All for a 5-minute parking stop.',
    bg: '#FFF1F2',
    iconBg: '#FFE4E6',
    border: '#FECDD3',
  },
  {
    icon: <Truck size={24} color="#DC2626" />,
    accentClass: 'red',
    badge: 'Costly & Hostile',
    badgeClass: 'badge badge-rose',
    title: 'Physical Towing Services',
    issue: 'Towing costs $200+, takes 2–4 hours, and routinely escalates into verbal altercations.',
    impact: 'A minor parking dispute becomes an expensive, stressful, sometimes dangerous event.',
    bg: '#FFF1F2',
    iconBg: '#FFE4E6',
    border: '#FECACA',
  },
];

export const ProblemSection: React.FC = () => {
  return (
    <section
      id="problem"
      style={{
        background: '#F8FAFC',
        paddingTop: '96px',
        paddingBottom: '96px',
        borderTop: '1px solid rgba(15,23,42,0.06)',
      }}
    >
      <div className="container-pad">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 64px' }}>
          <span className="eyebrow">The Urban Parking Problem</span>
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
            You've been here before.
            <br />
            <span className="gradient-text-blue">And the old ways just don't work.</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              color: '#64748B',
            }}
          >
            Rapid urbanization and high vehicle density create daily driveway blockages.
            Every legacy solution either fails to reach the owner, or puts your privacy at risk.
          </p>
        </div>

        {/* Problem Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '56px',
          }}
        >
          {PROBLEMS.map((p, idx) => (
            <div
              key={idx}
              className={`problem-card ${p.accentClass}`}
              style={{ background: p.bg, borderColor: p.border }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 52, height: 52,
                  borderRadius: '14px',
                  background: p.iconBg,
                  border: `1px solid ${p.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                {p.icon}
              </div>

              {/* Badge + Title */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '12px' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '1.125rem',
                    color: '#0F172A',
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </h3>
                <span className={p.badgeClass} style={{ flexShrink: 0, fontSize: '0.6875rem' }}>
                  {p.badge}
                </span>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  color: '#475569',
                  marginBottom: '16px',
                }}
              >
                {p.issue}
              </p>

              {/* Impact bar */}
              <div
                style={{
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(15,23,42,0.08)',
                }}
              >
                <div
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: '#94A3B8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '6px',
                  }}
                >
                  Real Impact
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    color: '#DC2626',
                    fontWeight: 500,
                    lineHeight: 1.5,
                  }}
                >
                  {p.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transition bridge into solution */}
        <div
          className="problem-bridge-card"
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            background: '#FFFFFF',
            borderRadius: '20px',
            border: '1px solid rgba(11,101,237,0.15)',
            padding: '36px 40px',
            boxShadow: 'var(--shadow-sm)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '1.1875rem',
              color: '#0F172A',
              lineHeight: 1.4,
              marginBottom: '20px',
            }}
          >
            "What if you could contact the vehicle owner instantly —{' '}
            <span className="gradient-text-blue">
              without exposing your phone number or leaving paper notes?
            </span>"
          </p>
          <a
            href="#solution"
            className="btn-primary"
            style={{ padding: '13px 28px', fontSize: '0.9375rem', display: 'inline-flex' }}
          >
            Meet ParkPing →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .problem-bridge-card {
            padding: 24px 16px !important;
          }
        }
      `}</style>
    </section>
  );
};
