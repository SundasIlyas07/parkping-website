import { useState, useEffect, useRef } from 'react';
import {
  MessageSquare, PhoneCall, QrCode, Search, ShieldCheck,
  Send, Bell, Car, CheckCircle2, Play, Pause,
  Lock, Sparkles, Layers, ChevronRight, Activity
} from 'lucide-react';
import { QrVectorCode } from './QrVectorCode';

interface AppExperienceSectionProps {
  onOpenDownloadModal?: () => void;
}

type ScreenId = 'home' | 'scan' | 'vehicle' | 'comm' | 'chat' | 'notifications' | 'management';

interface ScreenDef {
  id: ScreenId;
  stepNum: string;
  tabLabel: string;
  title: string;
  benefitSubtitle: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
}

const SCREENS: ScreenDef[] = [
  {
    id: 'home',
    stepNum: '01',
    tabLabel: 'Main Experience',
    title: 'Home Dashboard',
    benefitSubtitle: 'Everything you need to stay connected to your vehicle.',
    description: 'Central hub showing your registered vehicles, real-time protection status, and instant quick actions for scanning stickers or searching plate numbers.',
    badge: 'Zustand State Engine',
    icon: <Car size={16} />,
  },
  {
    id: 'scan',
    stepNum: '02',
    tabLabel: 'QR Scanning',
    title: 'Instant QR Scanner',
    benefitSubtitle: 'Sub-50ms camera lookup. Zero friction.',
    description: 'Point your camera at any ParkPing windshield sticker for instant sub-50ms vehicle profile matching powered by Expo Camera and optimized index queries.',
    badge: 'Expo Camera SDK 54',
    icon: <QrCode size={16} />,
  },
  {
    id: 'vehicle',
    stepNum: '03',
    tabLabel: 'Vehicle Info',
    title: 'Verified Vehicle Profile',
    benefitSubtitle: 'Clear identification without exposing identity.',
    description: 'View official vehicle details, license plate info, and Admin VERIFIED trust badge — while preserving owner privacy behind encrypted tokens.',
    badge: 'Admin VERIFIED ✓',
    icon: <ShieldCheck size={16} />,
  },
  {
    id: 'comm',
    stepNum: '04',
    tabLabel: 'Anonymous Hub',
    title: 'Masked Communication',
    benefitSubtitle: 'Simple communication. Less friction. More privacy.',
    description: 'Choose between Socket.IO text chat or Agora WebRTC voice call. Neither driver ever sees the other party\'s phone number or personal email.',
    badge: '100% Identity Shielded',
    icon: <Lock size={16} />,
  },
  {
    id: 'chat',
    stepNum: '05',
    tabLabel: 'Real-time Chat',
    title: 'Socket.IO Live Messaging',
    benefitSubtitle: 'Resolve parking issues in seconds.',
    description: 'Instant end-to-end socket messaging with automated quick responses, delivery confirmations, and typing indicators for seamless resolution.',
    badge: 'Socket.IO Engine',
    icon: <MessageSquare size={16} />,
  },
  {
    id: 'notifications',
    stepNum: '06',
    tabLabel: 'Push Alerts',
    title: 'FCM Push Notifications',
    benefitSubtitle: 'Stay alert even when your phone is locked.',
    description: 'Firebase Cloud Messaging delivers low-latency push notifications directly to your lock screen the instant someone scans your windshield sticker.',
    badge: 'Firebase Admin SDK v12',
    icon: <Bell size={16} />,
  },
  {
    id: 'management',
    stepNum: '07',
    tabLabel: 'Fleet Management',
    title: 'Vehicle Fleet Manager',
    benefitSubtitle: 'Manage all your vehicles in one place.',
    description: 'Register multiple vehicles, upload plate & registration documents for Admin review, and track unique windshield sticker QR codes effortlessly.',
    badge: 'MongoDB Atlas Fleet',
    icon: <Layers size={16} />,
  },
];

export const AppExperienceSection: React.FC<AppExperienceSectionProps> = ({ onOpenDownloadModal }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [showNotificationToast, setShowNotificationToast] = useState<boolean>(true);
  const cardRef = useRef<HTMLDivElement>(null);

  const activeScreen = SCREENS[activeIdx];

  // Auto-tour rotation timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % SCREENS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Periodic notification popup pulse
  useEffect(() => {
    const toastInterval = setInterval(() => {
      setShowNotificationToast(false);
      setTimeout(() => setShowNotificationToast(true), 300);
    }, 9000);
    return () => clearInterval(toastInterval);
  }, []);

  // 3D Parallax Tilt Handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 14, y: -y * 14 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="app-experience"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 60%, #EFF6FF 100%)',
        paddingTop: '108px',
        paddingBottom: '108px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(11,101,237,0.06) 0%, rgba(56,189,248,0.03) 50%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container-pad" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 60px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <span className="badge badge-blue" style={{ fontSize: '0.75rem', padding: '6px 14px', borderRadius: 99 }}>
              <Sparkles size={13} color="#0B65ED" style={{ marginRight: 4 }} />
              MOBILE APP EXPERIENCE SHOWCASE
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(2.1rem, 3.8vw, 3rem)',
              lineHeight: 1.12,
              color: '#0F172A',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            Everything you need to stay{' '}
            <span className="gradient-text-blue">connected to your vehicle.</span>
          </h2>
          <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: '#475569', fontWeight: 400 }}>
            Simple communication. Less friction. More privacy. Visually experience how ParkPing operates on iOS & Android.
          </p>

          {/* Technology pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              marginTop: 20,
              padding: '8px 18px',
              background: '#FFFFFF',
              border: '1px solid rgba(11,101,237,0.18)',
              borderRadius: 99,
              boxShadow: '0 4px 14px rgba(15,23,42,0.04)',
            }}
          >
            <Activity size={15} color="#0B65ED" />
            <span style={{ fontSize: '0.8125rem', color: '#334155', fontWeight: 600 }}>
              React Native Expo SDK 54 • Expo Router v4 • Socket.IO • Agora WebRTC
            </span>
          </div>
        </div>

        {/* Showcase Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="app-showcase-grid"
        >
          {/* Left Column: Screen Selector & Benefit Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Auto tour header control */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 18px',
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(15,23,42,0.08)',
                boxShadow: 'var(--shadow-xs)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: isPlaying ? '#059669' : '#94A3B8' }} />
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8125rem', color: '#0F172A' }}>
                  Interactive App Tour ({activeIdx + 1} of {SCREENS.length})
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '6px 12px',
                  borderRadius: 99,
                  background: isPlaying ? '#EFF6FF' : '#F1F5F9',
                  border: `1px solid ${isPlaying ? '#BFDBFE' : '#E2E8F0'}`,
                  color: isPlaying ? '#0B65ED' : '#64748B',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                {isPlaying ? 'Pause Tour' : 'Play Tour'}
              </button>
            </div>

            {/* Screen Navigation Tabs */}
            <div className="app-screen-nav-tabs no-scrollbar" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {SCREENS.map((s, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setActiveIdx(idx);
                      setIsPlaying(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '14px 18px',
                      borderRadius: '16px',
                      border: isActive ? '1.5px solid #0B65ED' : '1.5px solid rgba(15,23,42,0.06)',
                      background: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.6)',
                      boxShadow: isActive ? '0 10px 28px rgba(11,101,237,0.12)' : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
                      textAlign: 'left',
                      transform: isActive ? 'translateX(6px)' : 'none',
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: '10px',
                        background: isActive ? '#0B65ED' : '#F1F5F9',
                        color: isActive ? '#FFFFFF' : '#64748B',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.8125rem',
                        flexShrink: 0,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {s.icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: isActive ? '#0B65ED' : '#94A3B8' }}>
                          {s.stepNum}
                        </span>
                        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.875rem', color: isActive ? '#0F172A' : '#475569' }}>
                          {s.tabLabel}
                        </span>
                      </div>
                      {isActive && (
                        <p style={{ fontSize: '0.75rem', color: '#64748B', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {s.benefitSubtitle}
                        </p>
                      )}
                    </div>
                    <span className={`badge ${isActive ? 'badge-blue' : 'badge-amber'}`} style={{ fontSize: '0.65rem', padding: '3px 8px', borderRadius: 99 }}>
                      {s.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Screen Context Detail Box */}
            <div
              style={{
                padding: '20px',
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid rgba(11,101,237,0.2)',
                boxShadow: '0 8px 24px rgba(11,101,237,0.06)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
                  Documented Functionality
                </span>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600 }}>
                  Screen {activeIdx + 1} of 7
                </span>
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.0625rem', color: '#0F172A', marginBottom: 6 }}>
                {activeScreen.title}
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>
                {activeScreen.description}
              </p>
            </div>
          </div>

          {/* Right Column: Physical Smartphone Showcase with 3D Tilt & Connected Screens */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              perspective: '1200px',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* FLOATING UI OVERLAY 1: FCM Push Notification Toast */}
            {showNotificationToast && (
              <div
                className="floating-toast"
                style={{
                  position: 'absolute',
                  top: -24,
                  right: -20,
                  zIndex: 30,
                  width: 260,
                  background: 'rgba(15,23,42,0.92)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  padding: '12px 14px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  animation: 'fadeInDown 0.4s cubic-bezier(0.16,1,0.3,1)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '10px',
                    background: '#0B65ED',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Bell size={16} color="#FFFFFF" className="animate-bounce" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#38BDF8', textTransform: 'uppercase' }}>
                      Firebase FCM Push
                    </span>
                    <span style={{ fontSize: '0.6rem', color: '#94A3B8' }}>Just now</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF', marginTop: 2 }}>
                    Driveway Obstruction Alert
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: '#CBD5E1', marginTop: 2 }}>
                    Toyota Camry ABC-1234 windshield QR scanned.
                  </div>
                </div>
              </div>
            )}

            {/* FLOATING UI OVERLAY 2: Socket.IO Latency Pill */}
            <div
              className="floating-pill-left"
              style={{
                position: 'absolute',
                left: -30,
                top: '40%',
                zIndex: 30,
                background: '#FFFFFF',
                borderRadius: 99,
                border: '1px solid rgba(5,150,105,0.3)',
                padding: '8px 16px',
                boxShadow: '0 12px 28px rgba(15,23,42,0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                animation: 'floatSlow 4s ease-in-out infinite alternate',
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#059669', boxShadow: '0 0 8px #059669' }} />
              <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '0.75rem', color: '#065F46' }}>
                Socket.IO &lt;50ms
              </span>
            </div>

            {/* FLOATING UI OVERLAY 3: Privacy Shield Pill */}
            <div
              className="floating-pill-right"
              style={{
                position: 'absolute',
                right: -24,
                bottom: '15%',
                zIndex: 30,
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(11,101,237,0.25)',
                padding: '10px 14px',
                boxShadow: '0 12px 28px rgba(11,101,237,0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                animation: 'floatSlow 5s ease-in-out infinite alternate-reverse',
              }}
            >
              <ShieldCheck size={18} color="#0B65ED" />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', color: '#0F172A' }}>
                  Zero Number Leak
                </div>
                <div style={{ fontSize: '0.625rem', color: '#64748B' }}>
                  Masked WebRTC & Socket
                </div>
              </div>
            </div>

            {/* PHYSICAL SMARTPHONE CHASSIS */}
            <div
              ref={cardRef}
              className="phone-mockup-frame"
              style={{
                width: 300,
                height: 610,
                background: '#090D16',
                borderRadius: '48px',
                padding: '10px',
                boxShadow: `
                  0 40px 100px rgba(15,23,42,0.25),
                  0 20px 40px rgba(15,23,42,0.15),
                  0 0 0 12px #1E293B,
                  0 0 0 14px #0F172A,
                  0 0 0 15px rgba(255,255,255,0.1)
                `,
                transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
                transition: 'transform 0.15s ease-out',
                position: 'relative',
                userSelect: 'none',
              }}
            >
              {/* Outer Metallic Bevel Highlights */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '48px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  pointerEvents: 'none',
                  zIndex: 25,
                }}
              />

              {/* Side Buttons (Physical Mockup Details) */}
              <div style={{ position: 'absolute', left: -16, top: 110, width: 4, height: 28, background: '#334155', borderRadius: '4px 0 0 4px' }} />
              <div style={{ position: 'absolute', left: -16, top: 150, width: 4, height: 48, background: '#334155', borderRadius: '4px 0 0 4px' }} />
              <div style={{ position: 'absolute', left: -16, top: 210, width: 4, height: 48, background: '#334155', borderRadius: '4px 0 0 4px' }} />
              <div style={{ position: 'absolute', right: -16, top: 160, width: 4, height: 64, background: '#334155', borderRadius: '0 4px 4px 0' }} />

              {/* SCREEN VIEWPORT CONTAINER */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: '#FFFFFF',
                  borderRadius: '38px',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* DYNAMIC ISLAND / NOTCH */}
                <div
                  style={{
                    position: 'absolute',
                    top: 8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 96,
                    height: 24,
                    background: '#090D16',
                    borderRadius: 99,
                    zIndex: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 10px',
                  }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1E293B', border: '1px solid #334155' }} />
                  <div style={{ width: 28, height: 4, borderRadius: 99, background: '#1E293B' }} />
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#059669' }} />
                </div>

                {/* SMARTPHONE STATUS BAR */}
                <div
                  style={{
                    height: 38,
                    padding: '8px 20px 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: activeScreen.id === 'scan' ? '#0F172A' : '#FFFFFF',
                    color: activeScreen.id === 'scan' ? '#FFFFFF' : '#0F172A',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    zIndex: 35,
                  }}
                >
                  <span>9:41</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: '0.6rem', fontFamily: 'monospace' }}>5G</span>
                    <div style={{ width: 16, height: 8, border: `1px solid ${activeScreen.id === 'scan' ? '#FFF' : '#0F172A'}`, borderRadius: 2, padding: 1 }}>
                      <div style={{ width: '80%', height: '100%', background: activeScreen.id === 'scan' ? '#38BDF8' : '#0B65ED', borderRadius: 1 }} />
                    </div>
                  </div>
                </div>

                {/* APP HEADER BAR */}
                <div
                  style={{
                    padding: '6px 14px 10px',
                    background: activeScreen.id === 'scan' ? '#0F172A' : '#FFFFFF',
                    borderBottom: `1px solid ${activeScreen.id === 'scan' ? 'rgba(255,255,255,0.1)' : '#F1F5F9'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    zIndex: 35,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 22, height: 22, borderRadius: '6px', background: '#0B65ED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ShieldCheck size={13} color="white" />
                    </div>
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.8125rem', color: activeScreen.id === 'scan' ? '#FFF' : '#0F172A' }}>
                      ParkPing
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span className="badge badge-emerald" style={{ fontSize: '0.55rem', padding: '2px 6px' }}>
                      Live Engine
                    </span>
                  </div>
                </div>

                {/* CONNECTED SCREENS SLIDER TRACK */}
                <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                  <div
                    style={{
                      display: 'flex',
                      width: `${SCREENS.length * 100}%`,
                      height: '100%',
                      transform: `translateX(-${(activeIdx * 100) / SCREENS.length}%)`,
                      transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    {/* ==================== SCREEN 1: HOME / MAIN ==================== */}
                    <div style={{ width: `${100 / SCREENS.length}%`, height: '100%', padding: '12px', display: 'flex', flexDirection: 'column', gap: 10, background: '#F8FAFC' }}>
                      {/* User Welcome */}
                      <div style={{ background: '#FFFFFF', padding: '12px', borderRadius: '14px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ fontSize: '0.625rem', color: '#64748B', fontWeight: 600 }}>Welcome back</div>
                          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8125rem', color: '#0F172A' }}>
                            Alex Rivera
                          </div>
                        </div>
                        <span className="badge badge-emerald" style={{ fontSize: '0.55rem' }}>Protected ✓</span>
                      </div>

                      {/* Active Vehicle Card */}
                      <div style={{ background: 'linear-gradient(135deg, #0A1628 0%, #1E293B 100%)', padding: '14px', borderRadius: '16px', color: 'white', display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.6rem', color: '#38BDF8', fontWeight: 700, letterSpacing: '0.05em' }}>PRIMARY VEHICLE</span>
                          <span style={{ background: 'rgba(5,150,105,0.2)', border: '1px solid #059669', color: '#34D399', borderRadius: 99, padding: '2px 6px', fontSize: '0.55rem', fontWeight: 700 }}>
                            VERIFIED ✓
                          </span>
                        </div>
                        <div>
                          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.9375rem', color: '#FFF' }}>
                            Toyota Camry
                          </div>
                          <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#94A3B8', marginTop: 2 }}>
                            Plate: ABC-1234
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4, paddingTop: 6, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.6rem', color: '#CBD5E1' }}>
                          <Lock size={10} color="#38BDF8" />
                          <span>Identity & Phone 100% Masked</span>
                        </div>
                      </div>

                      {/* Quick Actions Grid */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                        <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '12px', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                          <QrCode size={18} color="#0B65ED" />
                          <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#0B65ED' }}>Scan QR</span>
                        </div>
                        <div style={{ background: '#F0F9FF', border: '1px solid #BAE6FD', borderRadius: '12px', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                          <Search size={18} color="#0369A1" />
                          <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#0369A1' }}>Search Plate</span>
                        </div>
                      </div>

                      {/* Recent Activity */}
                      <div style={{ flex: 1, background: '#FFFFFF', borderRadius: '14px', border: '1px solid #E2E8F0', padding: '10px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <div style={{ fontSize: '0.625rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Recent Activity</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.6875rem' }}>
                          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#059669' }} />
                          <span style={{ color: '#334155' }}>Socket presence active</span>
                          <span style={{ marginLeft: 'auto', color: '#94A3B8', fontSize: '0.6rem' }}>Now</span>
                        </div>
                      </div>
                    </div>

                    {/* ==================== SCREEN 2: QR SCANNING ==================== */}
                    <div style={{ width: `${100 / SCREENS.length}%`, height: '100%', background: '#090D16', padding: '12px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <div style={{ textAlign: 'center', color: '#FFF' }}>
                        <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#38BDF8' }}>Expo Camera Viewfinder</div>
                        <div style={{ fontSize: '0.6rem', color: '#94A3B8' }}>Align sticker inside reticle</div>
                      </div>

                      {/* Camera Reticle Container */}
                      <div
                        style={{
                          flex: 1,
                          background: '#020617',
                          borderRadius: '16px',
                          border: '1px solid rgba(56,189,248,0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        <div style={{ position: 'relative', width: 140, height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {/* Corner brackets */}
                          {[
                            { top: 0, left: 0, borderTop: '3px solid #38BDF8', borderLeft: '3px solid #38BDF8' },
                            { top: 0, right: 0, borderTop: '3px solid #38BDF8', borderRight: '3px solid #38BDF8' },
                            { bottom: 0, left: 0, borderBottom: '3px solid #38BDF8', borderLeft: '3px solid #38BDF8' },
                            { bottom: 0, right: 0, borderBottom: '3px solid #38BDF8', borderRight: '3px solid #38BDF8' },
                          ].map((b, i) => (
                            <div key={i} style={{ position: 'absolute', width: 20, height: 20, borderRadius: 2, ...b }} />
                          ))}
                          {/* QR Graphic */}
                          <div style={{ padding: 6, background: '#FFF', borderRadius: 8 }}>
                            <QrVectorCode style={{ width: 84, height: 84, display: 'block' }} />
                          </div>
                          {/* Laser Scan Line Animation */}
                          <div className="animate-scan-line" style={{ background: 'linear-gradient(90deg, transparent, #38BDF8, transparent)', height: 3 }} />
                        </div>
                      </div>

                      {/* Detection Feedback Bar */}
                      <div style={{ background: 'rgba(5,150,105,0.2)', border: '1px solid #059669', borderRadius: '12px', padding: '8px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '0.6875rem', color: '#34D399', fontWeight: 700 }}>
                          Match Found (&lt;50ms)
                        </span>
                        <span style={{ fontSize: '0.6rem', color: '#FFF' }}>Toyota Camry</span>
                      </div>
                    </div>

                    {/* ==================== SCREEN 3: VEHICLE INFO ==================== */}
                    <div style={{ width: `${100 / SCREENS.length}%`, height: '100%', padding: '12px', display: 'flex', flexDirection: 'column', gap: 10, background: '#FFFFFF' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.875rem', color: '#0F172A' }}>
                          Vehicle Profile
                        </span>
                        <span className="badge badge-emerald" style={{ fontSize: '0.55rem' }}>VERIFIED OWNER ✓</span>
                      </div>

                      {/* Vehicle summary card */}
                      <div style={{ background: '#F8FAFC', borderRadius: '14px', border: '1px solid #E2E8F0', padding: '12px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <div style={{ fontSize: '0.625rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>Registered Vehicle</div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.9375rem', color: '#0F172A' }}>
                          Toyota Camry 2024
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', color: '#475569', paddingTop: 6, borderTop: '1px solid #F1F5F9' }}>
                          <span>Plate: <strong style={{ fontFamily: 'monospace', color: '#0F172A' }}>ABC-1234</strong></span>
                          <span>Color: <strong>Midnight Blue</strong></span>
                        </div>
                      </div>

                      {/* Privacy card */}
                      <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '12px', padding: '10px', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <ShieldCheck size={16} color="#059669" style={{ flexShrink: 0, marginTop: 2 }} />
                        <div style={{ fontSize: '0.65rem', color: '#065F46', lineHeight: 1.4 }}>
                          <strong>Privacy Shielded:</strong> Owner contact info is hidden. Calls & messages route through tokenized channels.
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 6 }}>
                        <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '8px', fontSize: '0.75rem' }}>
                          <MessageSquare size={13} style={{ marginRight: 6 }} /> Send Anonymous Alert
                        </button>
                        <button style={{ width: '100%', padding: '8px', borderRadius: '10px', background: '#F1F5F9', border: '1px solid #E2E8F0', color: '#334155', fontWeight: 700, fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                          <PhoneCall size={13} color="#0B65ED" /> Encrypted Audio Call
                        </button>
                      </div>
                    </div>

                    {/* ==================== SCREEN 4: ANONYMOUS HUB ==================== */}
                    <div style={{ width: `${100 / SCREENS.length}%`, height: '100%', padding: '12px', display: 'flex', flexDirection: 'column', gap: 10, background: '#F8FAFC' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.875rem', color: '#0F172A' }}>
                          Select Channel
                        </div>
                        <div style={{ fontSize: '0.6rem', color: '#64748B' }}>
                          Both options guarantee 100% privacy
                        </div>
                      </div>

                      {/* Option 1: Socket Chat */}
                      <div style={{ background: '#FFFFFF', border: '1.5px solid #0B65ED', borderRadius: '14px', padding: '12px', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 32, height: 32, borderRadius: '8px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0B65ED' }}>
                          <MessageSquare size={16} />
                        </div>
                        <div>
                          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', color: '#0F172A' }}>
                            Socket.IO Text Chat
                          </div>
                          <div style={{ fontSize: '0.6rem', color: '#64748B' }}>
                            Instant real-time socket messages
                          </div>
                        </div>
                        <CheckCircle2 size={16} color="#0B65ED" style={{ marginLeft: 'auto' }} />
                      </div>

                      {/* Option 2: Agora RTC Call */}
                      <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '12px', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 32, height: 32, borderRadius: '8px', background: '#F0F9FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0369A1' }}>
                          <PhoneCall size={16} />
                        </div>
                        <div>
                          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', color: '#0F172A' }}>
                            Agora WebRTC Audio Call
                          </div>
                          <div style={{ fontSize: '0.6rem', color: '#64748B' }}>
                            In-app encrypted audio stream
                          </div>
                        </div>
                      </div>

                      {/* Security Architecture box */}
                      <div style={{ flex: 1, background: '#0A1628', borderRadius: '14px', padding: '12px', color: '#FFF', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <Lock size={12} color="#38BDF8" />
                          <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#38BDF8' }}>Zero Number Leak Policy</span>
                        </div>
                        <p style={{ fontSize: '0.6rem', color: '#94A3B8', lineHeight: 1.4 }}>
                          Neither party raw phone number or email is ever fetched, logged, or rendered.
                        </p>
                      </div>
                    </div>

                    {/* ==================== SCREEN 5: REAL-TIME CHAT ==================== */}
                    <div style={{ width: `${100 / SCREENS.length}%`, height: '100%', padding: '10px', display: 'flex', flexDirection: 'column', gap: 8, background: '#FFFFFF' }}>
                      {/* Chat bar */}
                      <div style={{ background: '#F8FAFC', padding: '8px 10px', borderRadius: '10px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#0F172A' }}>
                          Toyota Camry • ABC-1234
                        </div>
                        <span className="badge badge-emerald" style={{ fontSize: '0.5rem' }}>Active</span>
                      </div>

                      {/* Chat history */}
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, overflowY: 'auto' }}>
                        <div>
                          <div style={{ fontSize: '0.55rem', color: '#94A3B8', marginBottom: 2 }}>Bystander • 09:41 AM</div>
                          <div className="app-chat-bubble-in" style={{ fontSize: '0.6875rem', padding: '8px 10px' }}>
                            Hello! Your car is blocking my garage exit.
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.55rem', color: '#94A3B8', marginBottom: 2, textAlign: 'right' }}>You (Owner) • 09:41 AM</div>
                          <div className="app-chat-bubble-out" style={{ fontSize: '0.6875rem', padding: '8px 10px' }}>
                            So sorry! On my way down right now.
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#F1F5F9', borderRadius: 99, padding: '4px 10px', alignSelf: 'flex-start' }}>
                          <span style={{ fontSize: '0.55rem', color: '#64748B', fontWeight: 600 }}>Owner is typing…</span>
                        </div>
                      </div>

                      {/* Preset buttons */}
                      <div style={{ display: 'flex', gap: 4 }}>
                        {['On my way', '2 mins', 'Moving now'].map((txt, i) => (
                          <span key={i} style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#0B65ED', borderRadius: 99, padding: '3px 8px', fontSize: '0.55rem', fontWeight: 700, cursor: 'pointer' }}>
                            {txt}
                          </span>
                        ))}
                      </div>

                      {/* Send bar */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, borderTop: '1px solid #F1F5F9', paddingTop: 6 }}>
                        <div style={{ flex: 1, background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 99, padding: '6px 10px', fontSize: '0.625rem', color: '#94A3B8' }}>
                          Type anonymous message…
                        </div>
                        <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#0B65ED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Send size={11} color="white" />
                        </div>
                      </div>
                    </div>

                    {/* ==================== SCREEN 6: NOTIFICATIONS ==================== */}
                    <div style={{ width: `${100 / SCREENS.length}%`, height: '100%', padding: '12px', display: 'flex', flexDirection: 'column', gap: 10, background: '#F8FAFC' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.875rem', color: '#0F172A' }}>
                          FCM Push History
                        </span>
                        <Bell size={14} color="#0B65ED" />
                      </div>

                      {/* Push feed items */}
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <div style={{ background: '#FFFFFF', border: '1px solid #BFDBFE', borderRadius: '12px', padding: '10px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.625rem', fontWeight: 800, color: '#0B65ED' }}>🚨 PARKING OBSTRUCTION</span>
                            <span style={{ fontSize: '0.55rem', color: '#94A3B8' }}>2m ago</span>
                          </div>
                          <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#0F172A' }}>Windshield QR Scanned</div>
                          <div style={{ fontSize: '0.6rem', color: '#64748B' }}>Someone scanned Toyota Camry ABC-1234.</div>
                        </div>

                        <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '10px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.625rem', fontWeight: 800, color: '#059669' }}>✓ VERIFICATION APPROVED</span>
                            <span style={{ fontSize: '0.55rem', color: '#94A3B8' }}>1d ago</span>
                          </div>
                          <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#0F172A' }}>Admin Verified Badge</div>
                          <div style={{ fontSize: '0.6rem', color: '#64748B' }}>Your plate documents were approved.</div>
                        </div>
                      </div>
                    </div>

                    {/* ==================== SCREEN 7: MANAGEMENT ==================== */}
                    <div style={{ width: `${100 / SCREENS.length}%`, height: '100%', padding: '12px', display: 'flex', flexDirection: 'column', gap: 10, background: '#FFFFFF' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.875rem', color: '#0F172A' }}>
                          My Fleet (2 Vehicles)
                        </span>
                        <span style={{ fontSize: '0.6rem', color: '#0B65ED', fontWeight: 700 }}>+ Add</span>
                      </div>

                      {/* Vehicle List */}
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {/* Vehicle 1 */}
                        <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '10px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', color: '#0F172A' }}>Toyota Camry</span>
                            <span className="badge badge-emerald" style={{ fontSize: '0.5rem' }}>Verified ✓</span>
                          </div>
                          <div style={{ fontSize: '0.6rem', color: '#64748B', display: 'flex', justifyContent: 'space-between' }}>
                            <span>Plate: ABC-1234</span>
                            <span>QR Code: Active</span>
                          </div>
                        </div>

                        {/* Vehicle 2 */}
                        <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '10px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', color: '#0F172A' }}>Honda Civic</span>
                            <span className="badge badge-cyan" style={{ fontSize: '0.5rem' }}>Verified ✓</span>
                          </div>
                          <div style={{ fontSize: '0.6rem', color: '#64748B', display: 'flex', justifyContent: 'space-between' }}>
                            <span>Plate: XYZ-9876</span>
                            <span>QR Code: Active</span>
                          </div>
                        </div>
                      </div>

                      {/* Order sticker CTA */}
                      <button style={{ width: '100%', padding: '8px', borderRadius: '10px', background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#0B65ED', fontWeight: 700, fontSize: '0.6875rem', cursor: 'pointer', textAlign: 'center' }}>
                        Order Replacement QR Sticker
                      </button>
                    </div>
                  </div>
                </div>

                {/* BOTTOM GESTURE NAVIGATION BAR */}
                <div style={{ height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', background: activeScreen.id === 'scan' ? '#0F172A' : '#FFFFFF' }}>
                  <div style={{ width: 84, height: 4, borderRadius: 99, background: activeScreen.id === 'scan' ? '#475569' : '#CBD5E1' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA BAR: Showcase Call-to-Action */}
        <div
          className="app-cta-banner"
          style={{
            marginTop: '72px',
            background: 'linear-gradient(135deg, #0A1628 0%, #0F172A 100%)',
            borderRadius: '28px',
            border: '1px solid rgba(11,101,237,0.3)',
            padding: '40px 32px',
            boxShadow: '0 24px 60px rgba(15,23,42,0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ maxWidth: '560px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <ShieldCheck size={18} color="#38BDF8" />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                AVAILABLE ON IOS & ANDROID
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: '#FFFFFF', lineHeight: 1.2 }}>
              Simple communication. Less friction. More privacy.
            </h3>
            <p style={{ fontSize: '0.9375rem', color: '#94A3B8', marginTop: 8, lineHeight: 1.6 }}>
              Download the ParkPing mobile application today to protect your vehicle and solve parking friction without sharing personal details.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn-primary"
              style={{
                padding: '14px 28px',
                fontSize: '1rem',
                borderRadius: '14px',
                boxShadow: '0 8px 24px rgba(11,101,237,0.35)',
              }}
              onClick={() => {
                if (onOpenDownloadModal) onOpenDownloadModal();
              }}
            >
              Get the ParkPing App
              <ChevronRight size={18} style={{ marginLeft: 6 }} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .app-showcase-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .app-screen-nav-tabs {
            flex-direction: row !important;
            overflow-x: auto !important;
            white-space: nowrap !important;
            padding-bottom: 6px !important;
            width: 100% !important;
          }
          .app-screen-nav-tabs button {
            flex-shrink: 0 !important;
            transform: none !important;
            padding: 10px 14px !important;
          }
        }
        @media (max-width: 640px) {
          .floating-toast {
            right: 0 !important;
            top: -16px !important;
            width: clamp(220px, 75vw, 260px) !important;
          }
          .floating-pill-left {
            left: 0 !important;
          }
          .floating-pill-right {
            right: 0 !important;
          }
          .phone-mockup-frame {
            width: clamp(260px, 85vw, 290px) !important;
          }
          .app-cta-banner {
            padding: 24px 16px !important;
            border-radius: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

