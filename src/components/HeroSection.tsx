import { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ShieldCheck, QrCode, Bell, MessageSquare, CheckCircle2 } from 'lucide-react';
import { QrVectorCode } from './QrVectorCode';

interface HeroSectionProps {
  onOpenDownloadModal: () => void;
}

/* Cinematic scene phases */
const PHASES = [
  {
    id: 0,
    label: 'Obstruction',
    badge: 'Vehicle Blocked',
    badgeClass: 'badge badge-amber',
    icon: <span style={{ fontSize: '1.25rem' }}>🚘</span>,
    title: 'A car is blocking the driveway.',
    detail: 'No phone number on the dashboard. No way to reach the owner.',
  },
  {
    id: 1,
    label: 'QR Sticker',
    badge: 'ParkPing Detected',
    badgeClass: 'badge badge-blue',
    icon: <QrCode size={18} color="#0B65ED" />,
    title: 'A ParkPing QR sticker is on the windshield.',
    detail: 'A small, official sticker — the key to contactless communication.',
  },
  {
    id: 2,
    label: 'Scan',
    badge: 'Scanning…',
    badgeClass: 'badge badge-cyan',
    icon: <QrCode size={18} color="#0369A1" />,
    title: 'Point camera at the sticker.',
    detail: 'Vehicle profile matched in under 50ms. Zero personal data visible.',
  },
  {
    id: 3,
    label: 'Notification',
    badge: 'Alert Delivered',
    badgeClass: 'badge badge-emerald',
    icon: <Bell size={18} color="#059669" />,
    title: 'The owner receives an instant alert.',
    detail: 'Firebase FCM delivers the push notification — even when the phone is locked.',
  },
  {
    id: 4,
    label: 'Chat',
    badge: '100% Anonymous',
    badgeClass: 'badge badge-blue',
    icon: <MessageSquare size={18} color="#0B65ED" />,
    title: 'Anonymous message sent & received.',
    detail: 'Encrypted Socket.IO chat. Zero phone number exposure.',
  },
  {
    id: 5,
    label: 'Resolved',
    badge: 'Conflict Solved',
    badgeClass: 'badge badge-emerald',
    icon: <CheckCircle2 size={18} color="#059669" />,
    title: 'Owner moves the car. Problem solved.',
    detail: 'No shouting. No towing fees. No privacy leaks. Done in minutes.',
  },
];

const PHASE_DURATION = 3200;

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDownloadModal }) => {
  const [phase, setPhase] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [, setTick] = useState(0); // force re-renders for animation state

  const advance = useCallback(() => {
    setPhase(p => (p + 1) % PHASES.length);
    setTick(t => t + 1);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(advance, PHASE_DURATION);
    return () => clearInterval(id);
  }, [playing, advance]);

  const currentPhase = PHASES[phase];

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #FFFFFF 0%, #F8FAFC 50%, #EFF6FF 100%)',
        paddingTop: '120px',
        paddingBottom: '80px',
      }}
    >
      {/* Subtle background grid pattern */}
      <div
        style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(11,101,237,0.06) 1px, transparent 0)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}
      />

      {/* Right-side ambient blue gradient */}
      <div
        style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '560px', height: '560px',
          background: 'radial-gradient(circle, rgba(11,101,237,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
        }}
      />

      <div className="container-pad" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* ── LEFT COLUMN ── */}
          <div className="hero-col-left" style={{ gridColumn: 'span 6' }}>
            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <ShieldCheck size={16} color="#0B65ED" />
              <span className="eyebrow" style={{ margin: 0, color: '#0B65ED' }}>
                Smarter Parking Communication
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#0F172A',
                marginBottom: '24px',
              }}
            >
              When your car
              <br />
              blocks someone,
              <br />
              <span className="gradient-text-blue">there's a better way.</span>
            </h1>

            {/* Supporting copy */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                color: '#475569',
                marginBottom: '36px',
                maxWidth: '480px',
              }}
            >
              ParkPing lets anyone scan a windshield QR or search a license plate to
              reach the vehicle owner instantly — with{' '}
              <strong style={{ color: '#0F172A' }}>100% phone number privacy</strong>{' '}
              guaranteed.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
              <button
                onClick={onOpenDownloadModal}
                className="btn-primary"
                style={{ padding: '15px 32px', fontSize: '1rem' }}
              >
                Get the ParkPing App
              </button>
              <a
                href="#how-it-works"
                className="btn-secondary"
                style={{ padding: '15px 28px', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                See How It Works
                <ArrowRight size={16} color="#0B65ED" />
              </a>
            </div>

            {/* Trust Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(15,23,42,0.08)',
              }}
            >
              {[
                { icon: '🔒', text: '100% Identity Masked' },
                { icon: '⚡', text: 'Sub-50ms Delivery' },
                { icon: '✓',  text: 'Admin Verified' },
              ].map(badge => (
                <div
                  key={badge.text}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <span style={{ fontSize: '0.9rem' }}>{badge.icon}</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: '#334155',
                    }}
                  >
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — Cinematic Scene ── */}
          <div className="hero-col-right" style={{ gridColumn: 'span 6' }}>
            <div className="hero-scene" style={{ flexDirection: 'column', gap: '0', padding: '0' }}>
              {/* Scene top bar */}
              <div
                style={{
                  padding: '16px 20px',
                  borderBottom: '1px solid rgba(11,101,237,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div
                    style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: phase === 5 ? '#059669' : '#0B65ED',
                      boxShadow: phase === 5 ? '0 0 0 3px rgba(5,150,105,0.2)' : '0 0 0 3px rgba(11,101,237,0.2)',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#0F172A',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    ParkPing Live Scenario
                  </span>
                </div>
                <span className={currentPhase.badgeClass} style={{ fontSize: '0.7rem' }}>
                  {currentPhase.badge}
                </span>
              </div>

              {/* Scene visual area */}
              <div
                style={{
                  flex: 1,
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  background: 'linear-gradient(160deg, #F8FAFC 0%, #EFF6FF 100%)',
                  minHeight: '340px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Phase 0 — Obstruction */}
                {phase === 0 && (
                  <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: '100%' }}>
                    <div style={{ flex: 1, display: 'flex', gap: '8px', alignItems: 'stretch' }}>
                      {/* Blocked car */}
                      <div
                        style={{
                          flex: 1,
                          background: '#FFFFFF',
                          borderRadius: '16px',
                          border: '2px solid #FEF3C7',
                          padding: '14px 8px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          boxShadow: '0 4px 16px rgba(217,119,6,0.08)',
                        }}
                      >
                        <div
                          style={{
                            width: 56, height: 56,
                            borderRadius: '16px',
                            background: '#FFFBEB',
                            border: '1.5px solid #FDE68A',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.75rem',
                          }}
                        >
                          🚗
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8125rem', color: '#0F172A' }}>Your Vehicle</div>
                          <div style={{ fontSize: '0.7rem', color: '#94A3B8', marginTop: '2px' }}>Plate: XYZ-5678</div>
                        </div>
                      </div>

                      {/* Arrow blocked */}
                      <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                        <div
                          style={{
                            width: 48,
                            height: 3,
                            background: 'linear-gradient(90deg, #FDE68A, #D97706)',
                            borderRadius: '99px',
                            position: 'relative',
                          }}
                        >
                          <div
                            style={{
                              position: 'absolute',
                              right: '-2px', top: '50%',
                              transform: 'translateY(-50%)',
                              border: '6px solid transparent',
                              borderLeft: '8px solid #D97706',
                            }}
                          />
                        </div>
                      </div>

                      {/* Double-parked blocker */}
                      <div
                        style={{
                          flex: 1,
                          background: '#FFFFFF',
                          borderRadius: '16px',
                          border: '2px solid #FECACA',
                          padding: '20px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '10px',
                          boxShadow: '0 4px 16px rgba(225,29,72,0.08)',
                        }}
                      >
                        <div
                          style={{
                            width: 56, height: 56,
                            borderRadius: '16px',
                            background: '#FFF1F2',
                            border: '1.5px solid #FECACA',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.75rem',
                          }}
                        >
                          🚘
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8125rem', color: '#0F172A' }}>Blocking Car</div>
                          <div style={{ fontSize: '0.7rem', color: '#94A3B8', marginTop: '2px' }}>ABC-1234</div>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: '14px 18px',
                        background: '#FFFBEB',
                        borderRadius: '12px',
                        border: '1px solid #FDE68A',
                        fontSize: '0.8125rem',
                        color: '#92400E',
                        fontWeight: 500,
                      }}
                    >
                      ⚠️ No phone number on dashboard. No way to reach the owner.
                    </div>
                  </div>
                )}

                {/* Phase 1 — QR Sticker discovered */}
                {phase === 1 && (
                  <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
                    <div
                      style={{
                        flex: 1,
                        background: '#FFFFFF',
                        borderRadius: '16px',
                        border: '2px solid #DBEAFE',
                        padding: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '16px',
                      }}
                    >
                      {/* QR on windshield */}
                      <div
                        className="animate-qr-glow qr-sticker"
                        style={{ borderRadius: '12px', border: '2px solid #BFDBFE', padding: '12px' }}
                      >
                        <QrVectorCode style={{ width: 72, height: 72, display: 'block' }} />
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.875rem', color: '#0F172A' }}>
                          Official ParkPing Sticker
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '4px' }}>
                          Affixed cleanly on the windshield
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: '14px 18px',
                        background: '#EFF6FF',
                        borderRadius: '12px',
                        border: '1px solid #BFDBFE',
                        fontSize: '0.8125rem',
                        color: '#1E40AF',
                        fontWeight: 500,
                      }}
                    >
                      👁 Owner's phone number remains 100% hidden — always.
                    </div>
                  </div>
                )}

                {/* Phase 2 — Scanning */}
                {phase === 2 && (
                  <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
                    <div
                      style={{
                        flex: 1,
                        background: '#FFFFFF',
                        borderRadius: '16px',
                        border: '2px solid #DBEAFE',
                        padding: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '16px',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Viewfinder corners */}
                      <div style={{ position: 'relative', display: 'inline-block' }}>
                        {/* Corner decorations */}
                        {[
                          { top: -2, left: -2, borderTop: '3px solid #0B65ED', borderLeft: '3px solid #0B65ED' },
                          { top: -2, right: -2, borderTop: '3px solid #0B65ED', borderRight: '3px solid #0B65ED' },
                          { bottom: -2, left: -2, borderBottom: '3px solid #0B65ED', borderLeft: '3px solid #0B65ED' },
                          { bottom: -2, right: -2, borderBottom: '3px solid #0B65ED', borderRight: '3px solid #0B65ED' },
                        ].map((style, i) => (
                          <div
                            key={i}
                            style={{
                              position: 'absolute',
                              width: 16, height: 16,
                              borderRadius: 2,
                              ...style,
                            }}
                          />
                        ))}
                        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 8 }}>
                          <QrVectorCode style={{ width: 80, height: 80, display: 'block' }} />
                          <div className="animate-scan-line" style={{ position: 'absolute' }} />
                        </div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div
                          className="badge badge-blue"
                          style={{ marginBottom: '6px', display: 'inline-flex' }}
                        >
                          Match Found
                        </div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.875rem', color: '#0F172A' }}>
                          Honda Civic • ABC-1234
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '4px' }}>
                          Identity: Fully Encrypted ✓
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: '14px 18px',
                        background: '#F0F9FF',
                        borderRadius: '12px',
                        border: '1px solid #BAE6FD',
                        fontSize: '0.8125rem',
                        color: '#0369A1',
                        fontWeight: 500,
                      }}
                    >
                      📱 Camera detects ParkPing QR in under 50ms. No app install needed to scan.
                    </div>
                  </div>
                )}

                {/* Phase 3 — Notification */}
                {phase === 3 && (
                  <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
                    <div
                      style={{
                        flex: 1,
                        background: '#FFFFFF',
                        borderRadius: '16px',
                        border: '2px solid #D1FAE5',
                        padding: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        justifyContent: 'center',
                      }}
                    >
                      {/* Phone notification mockup */}
                      <div
                        className="animate-notif"
                        style={{
                          background: '#F8FAFC',
                          border: '1px solid #E2E8F0',
                          borderRadius: '16px',
                          padding: '14px 16px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          boxShadow: '0 4px 16px rgba(15,23,42,0.08)',
                        }}
                      >
                        <div
                          style={{
                            width: 40, height: 40,
                            background: '#059669',
                            borderRadius: '12px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Bell size={18} color="#FFFFFF" />
                        </div>
                        <div>
                          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8125rem', color: '#0F172A' }}>
                            ParkPing Alert
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#475569', marginTop: '2px' }}>
                            "Someone needs your vehicle (ABC-1234) moved."
                          </div>
                        </div>
                        <div style={{ fontSize: '0.6875rem', color: '#94A3B8', marginLeft: 'auto', flexShrink: 0 }}>
                          Now
                        </div>
                      </div>
                      <div style={{ textAlign: 'center', color: '#64748B', fontSize: '0.75rem' }}>
                        Alert delivered via Firebase FCM — even when screen is locked
                      </div>
                    </div>
                    <div
                      style={{
                        padding: '14px 18px',
                        background: '#ECFDF5',
                        borderRadius: '12px',
                        border: '1px solid #A7F3D0',
                        fontSize: '0.8125rem',
                        color: '#065F46',
                        fontWeight: 500,
                      }}
                    >
                      🔔 Push delivered in &lt;50ms. Background, foreground — always.
                    </div>
                  </div>
                )}

                {/* Phase 4 — Chat */}
                {phase === 4 && (
                  <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
                    <div
                      style={{
                        flex: 1,
                        background: '#FFFFFF',
                        borderRadius: '16px',
                        border: '2px solid #DBEAFE',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Chat header */}
                      <div
                        style={{
                          padding: '12px 16px',
                          borderBottom: '1px solid #F1F5F9',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          background: '#FAFAFA',
                        }}
                      >
                        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8125rem', color: '#0F172A' }}>
                          Anonymous Chat
                        </span>
                        <span className="badge badge-blue" style={{ fontSize: '0.65rem', padding: '4px 10px' }}>
                          Encrypted
                        </span>
                      </div>
                      {/* Messages */}
                      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div className="animate-msg" style={{ animationDelay: '0ms' }}>
                          <div style={{ fontSize: '0.6875rem', color: '#94A3B8', marginBottom: '4px' }}>
                            Bystander
                          </div>
                          <div className="app-chat-bubble-in">
                            Hi, your car is blocking my exit. Could you please move it?
                          </div>
                        </div>
                        <div className="animate-msg" style={{ animationDelay: '300ms', animationFillMode: 'both', opacity: 0 }}>
                          <div style={{ fontSize: '0.6875rem', color: '#94A3B8', marginBottom: '4px', textAlign: 'right' }}>
                            Vehicle Owner
                          </div>
                          <div className="app-chat-bubble-out">
                            On my way down right now! Thanks.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: '14px 18px',
                        background: '#EFF6FF',
                        borderRadius: '12px',
                        border: '1px solid #BFDBFE',
                        fontSize: '0.8125rem',
                        color: '#1E40AF',
                        fontWeight: 500,
                      }}
                    >
                      🛡 Zero phone number exposure. Tokenized WebSocket routing.
                    </div>
                  </div>
                )}

                {/* Phase 5 — Resolved */}
                {phase === 5 && (
                  <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
                    <div
                      style={{
                        flex: 1,
                        background: '#FFFFFF',
                        borderRadius: '16px',
                        border: '2px solid #A7F3D0',
                        padding: '28px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '14px',
                      }}
                    >
                      <div
                        style={{
                          width: 64, height: 64,
                          borderRadius: '50%',
                          background: '#ECFDF5',
                          border: '2px solid #6EE7B7',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}
                      >
                        <CheckCircle2 size={32} color="#059669" />
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.125rem', color: '#0F172A' }}>
                          Vehicle Moved. Resolved.
                        </div>
                        <div style={{ fontSize: '0.8125rem', color: '#64748B', marginTop: '6px', maxWidth: '240px' }}>
                          "On my way down right now!" — Owner replied in 90 seconds.
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <span className="badge badge-emerald">No towing fee</span>
                        <span className="badge badge-emerald">No privacy leak</span>
                        <span className="badge badge-emerald">&lt;2 minutes</span>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: '14px 18px',
                        background: '#ECFDF5',
                        borderRadius: '12px',
                        border: '1px solid #A7F3D0',
                        fontSize: '0.8125rem',
                        color: '#065F46',
                        fontWeight: 500,
                      }}
                    >
                      ✅ Conflict resolved peacefully. No personal data exchanged.
                    </div>
                  </div>
                )}
              </div>

              {/* Scene footer — step indicators + description */}
              <div
                style={{
                  padding: '16px 20px',
                  borderTop: '1px solid rgba(11,101,237,0.1)',
                  background: 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                {/* Phase description */}
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                      color: '#0F172A',
                      marginBottom: '2px',
                    }}
                  >
                    {currentPhase.title}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                    {currentPhase.detail}
                  </div>
                </div>

                {/* Step indicator dots + phase name */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {PHASES.map((p, i) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => { setPhase(i); setPlaying(false); }}
                      style={{
                        height: 6,
                        width: phase === i ? 24 : 8,
                        borderRadius: 99,
                        background: phase === i ? '#0B65ED' : '#CBD5E1',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        padding: 0,
                      }}
                      aria-label={`Go to phase ${i + 1}: ${p.label}`}
                    />
                  ))}
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      color: '#94A3B8',
                      marginLeft: '4px',
                    }}
                  >
                    {phase + 1} / {PHASES.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => setPlaying(p => !p)}
                    style={{
                      marginLeft: 'auto',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      color: '#0B65ED',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '2px 6px',
                    }}
                  >
                    {playing ? '⏸ Pause' : '▶ Play'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: 80,
          background: 'linear-gradient(to bottom, transparent, #F8FAFC)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .hero-col-left, .hero-col-right {
            grid-column: span 12 !important;
          }
        }
        @media (max-width: 480px) {
          #hero {
            padding-top: 96px !important;
            padding-bottom: 48px !important;
          }
          .hero-scene {
            border-radius: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};
