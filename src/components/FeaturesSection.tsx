import { useState } from 'react';
import {
  QrCode, Search, ShieldCheck, Lock, MessageSquare, PhoneCall,
  Bell, Activity, Layers, Sparkles, CheckCircle2, ChevronRight,
  Globe, Zap, Clock
} from 'lucide-react';
import { QrVectorCode } from './QrVectorCode';

type FeatureCategory = 'discovery' | 'communication' | 'presence' | 'roadmap';

interface FeatureItem {
  id: string;
  icon: React.ReactNode;
  badge: string;
  title: string;
  whatItDoes: string;
  whyItMatters: string;
  techDetails: string;
  isRoadmap?: boolean;
  demoType: 'qr' | 'search' | 'verify' | 'masking' | 'chat' | 'call' | 'fcm' | 'presence' | 'fleet' | 'roadmap_lang' | 'roadmap_zones';
}

const CATEGORIES: { id: FeatureCategory; label: string; icon: React.ReactNode; count: string }[] = [
  { id: 'discovery', label: 'Discovery & Trust', icon: <QrCode size={16} />, count: '3 Features' },
  { id: 'communication', label: 'Privacy & Communication', icon: <Lock size={16} />, count: '3 Features' },
  { id: 'presence', label: 'Notifications & Fleet', icon: <Bell size={16} />, count: '3 Features' },
  { id: 'roadmap', label: 'Future Roadmap', icon: <Clock size={16} />, count: 'Coming Soon' },
];

const FEATURES_DATA: Record<FeatureCategory, FeatureItem[]> = {
  discovery: [
    {
      id: 'qr-scan',
      icon: <QrCode size={22} color="#0B65ED" />,
      badge: 'Expo Camera SDK 54',
      title: 'ParkPing QR Sticker & Instant Scanner',
      whatItDoes: 'Point any smartphone camera at a ParkPing windshield sticker to scan the high-contrast QR vector pattern and retrieve the vehicle profile in sub-50ms.',
      whyItMatters: 'Eliminates handwritten dashboard notes, awkward door knocking, and paper friction by providing an instant digital gateway to the owner.',
      techDetails: 'Expo Camera SDK 54 reticle overlay, compound Mongoose lookup index, sub-50ms query response.',
      demoType: 'qr',
    },
    {
      id: 'plate-search',
      icon: <Search size={22} color="#0369A1" />,
      badge: 'License Plate String Query',
      title: 'Global License Plate String Search',
      whatItDoes: 'Manually enter any vehicle license plate number (e.g. "ABC-1234") into the search interface to query the MongoDB Atlas cloud database.',
      whyItMatters: 'Guarantees you can still reach the car owner even if the windshield QR sticker is covered by ice, dirt, or heavy rain.',
      techDetails: 'Case-insensitive regex string match on plate numbers, sanitized inputs via MongoSanitize.',
      demoType: 'search',
    },
    {
      id: 'vehicle-verify',
      icon: <ShieldCheck size={22} color="#059669" />,
      badge: 'Admin Panel Review',
      title: 'Official Admin Vehicle Verification',
      whatItDoes: 'Vehicle owners upload license plate photos, car photos, and registration documents for human review via the React 18 Admin Web Panel.',
      whyItMatters: 'Prevents spam listings, eliminates fake registrations, and gives bystanders 100% confidence that they are reaching the true owner.',
      techDetails: 'Cloudinary API document storage, Admin verification workflow hooks, VERIFIED status flags.',
      demoType: 'verify',
    },
  ],
  communication: [
    {
      id: 'anonymous-comm',
      icon: <Lock size={22} color="#0B65ED" />,
      badge: '100% Identity Masked',
      title: 'Anonymous Identity Masking',
      whatItDoes: 'Routes all communication over tokenized JWT channels so neither party ever sees the other\'s phone number, email address, or full name.',
      whyItMatters: 'Protects personal privacy, prevents harassment, eliminates spam calls, and keeps driver contact details completely confidential.',
      techDetails: 'Short-lived JWT Access Tokens (24h), bcryptJS 10 salt rounds, zero plain-text phone return in API responses.',
      demoType: 'masking',
    },
    {
      id: 'realtime-chat',
      icon: <MessageSquare size={22} color="#059669" />,
      badge: 'Socket.IO Engine',
      title: 'Real-Time Socket.IO Live Messaging',
      whatItDoes: 'Powers instant end-to-end chat between driver and bystander with real-time delivery receipts, typing indicators, and quick-reply presets.',
      whyItMatters: 'Enables clear, polite communication to resolve driveway or parking blockages in seconds without escalating into argument.',
      techDetails: 'Socket.IO client/server socket channels, message queue delivery receipts, low-overhead payload format.',
      demoType: 'chat',
    },
    {
      id: 'voice-call',
      icon: <PhoneCall size={22} color="#0369A1" />,
      badge: 'Agora RTC Engine',
      title: 'Anonymous WebRTC Audio Call',
      whatItDoes: 'Allows users to place encrypted in-app voice calls directly through the mobile application using Agora RTC token authentication.',
      whyItMatters: 'Delivers immediate voice communication for urgent parking emergencies while maintaining strict phone number anonymity.',
      techDetails: 'Agora WebRTC audio engine, agora-token 2.0.5 authentication service, encrypted peer connections.',
      demoType: 'call',
    },
  ],
  presence: [
    {
      id: 'fcm-push',
      icon: <Bell size={22} color="#D97706" />,
      badge: 'Firebase Admin SDK v12',
      title: 'Firebase Push Notifications (FCM)',
      whatItDoes: 'Delivers high-priority push notifications directly to the owner\'s smartphone lock screen the moment a sticker is scanned or plate is searched.',
      whyItMatters: 'Ensures the car owner is alerted instantly, even when the app is completely closed or the phone is in do-not-disturb state.',
      techDetails: 'Firebase Admin SDK v12, FCM push tokens stored per device, background payload dispatcher.',
      demoType: 'fcm',
    },
    {
      id: 'presence-engine',
      icon: <Activity size={22} color="#059669" />,
      badge: '3-Sec Grace Filter',
      title: 'Online/Offline Presence & Grace Timer',
      whatItDoes: 'Tracks socket connections with a 3-second disconnect grace filter to eliminate flickering offline indicators during rapid app switches.',
      whyItMatters: 'Provides accurate real-time online status so bystanders know immediately if the vehicle owner is active and ready to respond.',
      techDetails: 'Socket presence state machine, 3000ms grace timeout buffer before emitting offline status.',
      demoType: 'presence',
    },
    {
      id: 'fleet-manage',
      icon: <Layers size={22} color="#7C3AED" />,
      badge: 'Zustand Fleet Engine',
      title: 'Vehicle Fleet & QR Management',
      whatItDoes: 'Allows users to register and manage multiple vehicles, track windshield QR sticker statuses, and manage vehicle profiles in one account.',
      whyItMatters: 'Ideal for multi-car households and commercial fleets who need central control over all vehicle parking notifications.',
      techDetails: 'Zustand client state persistence, MongoDB multi-vehicle document relations, QR sticker re-issuance.',
      demoType: 'fleet',
    },
  ],
  roadmap: [
    {
      id: 'roadmap-lang',
      icon: <Globe size={22} color="#94A3B8" />,
      badge: 'Coming Soon',
      title: 'Multi-Language Localization (i18n)',
      whatItDoes: 'Automated multi-language interface translation supporting Spanish, French, German, and Arabic for international parking environments.',
      whyItMatters: 'Breaks down language barriers between international drivers and local bystanders in tourism and border regions.',
      techDetails: 'Planned Expo i18n-js integration with dynamic locale switching.',
      isRoadmap: true,
      demoType: 'roadmap_lang',
    },
    {
      id: 'roadmap-zones',
      icon: <Zap size={22} color="#94A3B8" />,
      badge: 'Coming Soon',
      title: 'Community Parking Zones & Geofencing',
      whatItDoes: 'Geofenced residential parking zone alerts notifying building residents when visitors park in reserved private spots.',
      whyItMatters: 'Reduces private residential parking conflicts across apartment complexes and gated communities.',
      techDetails: 'Planned Expo Location geofencing hooks with MongoDB 2DSphere spatial indexes.',
      isRoadmap: true,
      demoType: 'roadmap_zones',
    },
  ],
};

export const FeaturesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FeatureCategory>('discovery');
  const [selectedFeatureId, setSelectedFeatureId] = useState<string>(FEATURES_DATA.discovery[0].id);

  const activeFeatures = FEATURES_DATA[activeCategory];
  const selectedFeature = activeFeatures.find(f => f.id === selectedFeatureId) || activeFeatures[0];

  const handleCategoryChange = (cat: FeatureCategory) => {
    setActiveCategory(cat);
    setSelectedFeatureId(FEATURES_DATA[cat][0].id);
  };

  return (
    <section
      id="features"
      style={{
        background: '#FFFFFF',
        paddingTop: '108px',
        paddingBottom: '108px',
        position: 'relative',
      }}
    >
      <div className="container-pad">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
            <Sparkles size={16} color="#0B65ED" />
            <span className="eyebrow" style={{ margin: 0 }}>DOCUMENTED CAPABILITIES</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 3.5vw, 2.85rem)',
              lineHeight: 1.15,
              color: '#0F172A',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            Engineered for speed, privacy &{' '}
            <span className="gradient-text-blue">seamless resolution.</span>
          </h2>
          <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: '#475569' }}>
            Explore the production capabilities of the ParkPing mobile ecosystem. Select a capability pillar to view live interactive demonstrations.
          </p>
        </div>

        {/* Pillar Category Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '48px',
            flexWrap: 'wrap',
          }}
        >
          {CATEGORIES.map(cat => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 20px',
                  borderRadius: '16px',
                  border: isActive ? '1.5px solid #0B65ED' : '1.5px solid rgba(15,23,42,0.08)',
                  background: isActive ? '#EFF6FF' : '#FFFFFF',
                  color: isActive ? '#0B65ED' : '#475569',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? '0 4px 16px rgba(11,101,237,0.12)' : 'var(--shadow-xs)',
                }}
              >
                {cat.icon}
                <span>{cat.label}</span>
                <span
                  style={{
                    fontSize: '0.6875rem',
                    padding: '2px 8px',
                    borderRadius: 99,
                    background: isActive ? '#DBEAFE' : '#F1F5F9',
                    color: isActive ? '#0B65ED' : '#64748B',
                    fontWeight: 600,
                  }}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Feature Container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '340px 1fr',
            gap: '32px',
            alignItems: 'stretch',
          }}
          className="features-interactive-grid"
        >
          {/* Left Column: Feature Selector List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {activeFeatures.map(item => {
              const isSelected = item.id === selectedFeature.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedFeatureId(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    padding: '18px',
                    borderRadius: '18px',
                    border: isSelected ? '1.5px solid #0B65ED' : '1.5px solid rgba(15,23,42,0.06)',
                    background: isSelected ? '#FFFFFF' : '#F8FAFC',
                    boxShadow: isSelected ? '0 8px 24px rgba(11,101,237,0.1)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textAlign: 'left',
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '12px',
                      background: isSelected ? '#EFF6FF' : '#FFFFFF',
                      border: `1px solid ${isSelected ? '#BFDBFE' : '#E2E8F0'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6, marginBottom: 4 }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 700,
                          fontSize: '0.875rem',
                          color: isSelected ? '#0F172A' : '#334155',
                        }}
                      >
                        {item.title.split(' ')[0]} {item.title.split(' ')[1]}
                      </span>
                      {item.isRoadmap && (
                        <span className="badge badge-amber" style={{ fontSize: '0.55rem', padding: '2px 6px' }}>
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: '0.75rem', color: '#64748B', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {item.whatItDoes}
                    </p>
                  </div>
                  <ChevronRight size={16} color={isSelected ? '#0B65ED' : '#CBD5E1'} style={{ alignSelf: 'center', flexShrink: 0 }} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Large Interactive Feature Panel with Demonstration Visual */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              border: '1.5px solid rgba(11,101,237,0.18)',
              padding: '36px',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Badge & Header */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '14px', background: '#EFF6FF', border: '1px solid #BFDBFE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {selectedFeature.icon}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.375rem', color: '#0F172A', lineHeight: 1.2 }}>
                      {selectedFeature.title}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                      <span className={`badge ${selectedFeature.isRoadmap ? 'badge-amber' : 'badge-blue'}`} style={{ fontSize: '0.65rem' }}>
                        {selectedFeature.badge}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* WHAT IT DOES vs WHY IT MATTERS Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '18px',
                  marginTop: '24px',
                  marginBottom: '28px',
                }}
                className="feature-meta-grid"
              >
                {/* WHAT IT DOES */}
                <div
                  style={{
                    background: '#F8FAFC',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    padding: '20px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#0B65ED' }} />
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', color: '#0B65ED', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      WHAT IT DOES
                    </span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.6 }}>
                    {selectedFeature.whatItDoes}
                  </p>
                </div>

                {/* WHY IT MATTERS */}
                <div
                  style={{
                    background: '#ECFDF5',
                    borderRadius: '16px',
                    border: '1px solid #A7F3D0',
                    padding: '20px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#059669' }} />
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', color: '#065F46', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      WHY IT MATTERS
                    </span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#065F46', lineHeight: 1.6 }}>
                    {selectedFeature.whyItMatters}
                  </p>
                </div>
              </div>
            </div>

            {/* LIVE PRODUCT DEMONSTRATION VISUAL MOCKUP */}
            <div
              style={{
                background: '#090D16',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '28px',
                minHeight: '230px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* DEMO 1: QR Scanner */}
              {selectedFeature.demoType === 'qr' && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
                  <div style={{ position: 'relative', width: 130, height: 130, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {[
                      { top: 0, left: 0, borderTop: '3px solid #38BDF8', borderLeft: '3px solid #38BDF8' },
                      { top: 0, right: 0, borderTop: '3px solid #38BDF8', borderRight: '3px solid #38BDF8' },
                      { bottom: 0, left: 0, borderBottom: '3px solid #38BDF8', borderLeft: '3px solid #38BDF8' },
                      { bottom: 0, right: 0, borderBottom: '3px solid #38BDF8', borderRight: '3px solid #38BDF8' },
                    ].map((b, i) => (
                      <div key={i} style={{ position: 'absolute', width: 18, height: 18, borderRadius: 2, ...b }} />
                    ))}
                    <div style={{ padding: 6, background: '#FFF', borderRadius: 8 }}>
                      <QrVectorCode style={{ width: 80, height: 80, display: 'block' }} />
                    </div>
                    <div className="animate-scan-line" />
                  </div>
                  <span className="badge badge-cyan" style={{ fontSize: '0.75rem', padding: '4px 12px' }}>
                    Expo Camera SDK 54 • Sub-50ms Reticle Match ✓
                  </span>
                </div>
              )}

              {/* DEMO 2: Search */}
              {selectedFeature.demoType === 'search' && (
                <div style={{ width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ background: '#1E293B', borderRadius: '14px', border: '1px solid #334155', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Search size={18} color="#38BDF8" />
                    <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '1rem', color: '#FFF', letterSpacing: '0.1em' }}>
                      ABC-1234
                    </span>
                    <span style={{ marginLeft: 'auto', background: '#0B65ED', color: '#FFF', borderRadius: '8px', padding: '4px 12px', fontSize: '0.7rem', fontWeight: 700 }}>
                      Match Found
                    </span>
                  </div>
                  <div style={{ background: 'rgba(5,150,105,0.15)', border: '1px solid #059669', borderRadius: '12px', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#FFF' }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.8125rem' }}>Toyota Camry 2024</div>
                      <div style={{ fontSize: '0.6875rem', color: '#94A3B8' }}>Midnight Blue • Registered Owner</div>
                    </div>
                    <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>Verified ✓</span>
                  </div>
                </div>
              )}

              {/* DEMO 3: Verification */}
              {selectedFeature.demoType === 'verify' && (
                <div style={{ width: '100%', maxWidth: '380px', background: '#1E293B', borderRadius: '16px', border: '1px solid #334155', padding: '16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: 10 }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.875rem', color: '#FFF' }}>
                      Admin Web Oversight Review
                    </span>
                    <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>Status: VERIFIED</span>
                  </div>
                  {[
                    { label: 'License Plate Photo', status: 'Approved ✓' },
                    { label: 'Vehicle Registration Document', status: 'Approved ✓' },
                    { label: 'Vehicle Front Photo', status: 'Approved ✓' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                      <span style={{ color: '#94A3B8' }}>{item.label}</span>
                      <span style={{ color: '#34D399', fontWeight: 600 }}>{item.status}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* DEMO 4: Masking */}
              {selectedFeature.demoType === 'masking' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, width: '100%', maxWidth: '420px', justifyContent: 'center' }}>
                  <div style={{ background: '#1E293B', padding: '12px', borderRadius: '12px', border: '1px solid #334155', textAlign: 'center', color: '#FFF', flex: 1 }}>
                    <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Bystander</div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, marginTop: 2 }}>Scan QR</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <Lock size={20} color="#38BDF8" />
                    <span style={{ fontSize: '0.6rem', color: '#38BDF8', fontWeight: 700, textTransform: 'uppercase' }}>JWT Masked</span>
                  </div>
                  <div style={{ background: '#1E293B', padding: '12px', borderRadius: '12px', border: '1px solid #334155', textAlign: 'center', color: '#FFF', flex: 1 }}>
                    <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Owner Phone</div>
                    <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#34D399', marginTop: 2 }}>••••••••••</div>
                  </div>
                </div>
              )}

              {/* DEMO 5: Chat */}
              {selectedFeature.demoType === 'chat' && (
                <div style={{ width: '100%', maxWidth: '360px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ background: '#1E293B', padding: '8px 12px', borderRadius: '10px', fontSize: '0.75rem', color: '#E2E8F0', alignSelf: 'flex-start', maxWidth: '80%' }}>
                    Hello! Your car is blocking my driveway exit.
                  </div>
                  <div style={{ background: '#0B65ED', padding: '8px 12px', borderRadius: '10px', fontSize: '0.75rem', color: '#FFF', alignSelf: 'flex-end', maxWidth: '80%' }}>
                    I apologize! Coming down right now to move it.
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.6rem', color: '#38BDF8', marginTop: 4 }}>
                    <CheckCircle2 size={12} color="#38BDF8" />
                    <span>Socket.IO Delivered • Sub-50ms</span>
                  </div>
                </div>
              )}

              {/* DEMO 6: Voice Call */}
              {selectedFeature.demoType === 'call' && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#1E293B', border: '2px solid #38BDF8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PhoneCall size={28} color="#38BDF8" className="animate-pulse" />
                  </div>
                  <div style={{ textAlign: 'center', color: '#FFF' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.875rem' }}>
                      Agora WebRTC Audio Stream
                    </div>
                    <div style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#34D399', marginTop: 2 }}>
                      Connected • Token Tokenized
                    </div>
                  </div>
                </div>
              )}

              {/* DEMO 7: FCM Push */}
              {selectedFeature.demoType === 'fcm' && (
                <div style={{ width: '100%', maxWidth: '360px', background: 'rgba(15,23,42,0.95)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '16px', padding: '14px', display: 'flex', alignItems: 'flex-start', gap: 10, boxShadow: '0 12px 32px rgba(0,0,0,0.4)' }}>
                  <div style={{ width: 32, height: 32, borderRadius: '8px', background: '#0B65ED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Bell size={16} color="#FFF" />
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '0.6rem', color: '#38BDF8', fontWeight: 700 }}>
                      <span>FIREBASE FCM PUSH</span>
                      <span>Lock Screen</span>
                    </div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFF', marginTop: 2 }}>
                      Obstruction Alert — Toyota Camry
                    </div>
                    <div style={{ fontSize: '0.6875rem', color: '#CBD5E1', marginTop: 2 }}>
                      Windshield QR scanned. Tap to reply anonymously.
                    </div>
                  </div>
                </div>
              )}

              {/* DEMO 8: Presence */}
              {selectedFeature.demoType === 'presence' && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, color: '#FFF' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#1E293B', border: '1px solid #334155', borderRadius: 99, padding: '8px 20px' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#34D399', boxShadow: '0 0 10px #34D399' }} />
                    <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '0.8125rem' }}>Status: ONLINE</span>
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: '#94A3B8', textAlign: 'center', maxWidth: 280 }}>
                    3000ms disconnect grace period prevents flickering during tab switching.
                  </div>
                </div>
              )}

              {/* DEMO 9: Fleet */}
              {selectedFeature.demoType === 'fleet' && (
                <div style={{ width: '100%', maxWidth: '380px', display: 'flex', gap: 10 }}>
                  <div style={{ flex: 1, background: '#1E293B', border: '1px solid #334155', borderRadius: '12px', padding: '12px', color: '#FFF' }}>
                    <div style={{ fontSize: '0.65rem', color: '#38BDF8', fontWeight: 700 }}>VEHICLE 01</div>
                    <div style={{ fontWeight: 700, fontSize: '0.8125rem', marginTop: 2 }}>Toyota Camry</div>
                    <div style={{ fontSize: '0.65rem', color: '#34D399', marginTop: 4 }}>QR Active ✓</div>
                  </div>
                  <div style={{ flex: 1, background: '#1E293B', border: '1px solid #334155', borderRadius: '12px', padding: '12px', color: '#FFF' }}>
                    <div style={{ fontSize: '0.65rem', color: '#38BDF8', fontWeight: 700 }}>VEHICLE 02</div>
                    <div style={{ fontWeight: 700, fontSize: '0.8125rem', marginTop: 2 }}>Honda Civic</div>
                    <div style={{ fontSize: '0.65rem', color: '#34D399', marginTop: 4 }}>QR Active ✓</div>
                  </div>
                </div>
              )}

              {/* DEMO 10 & 11: Roadmap items */}
              {(selectedFeature.demoType === 'roadmap_lang' || selectedFeature.demoType === 'roadmap_zones') && (
                <div style={{ textAlign: 'center', color: '#FFF' }}>
                  <span className="badge badge-amber" style={{ fontSize: '0.8125rem', padding: '6px 16px', borderRadius: 99, marginBottom: 12 }}>
                    ROADMAP FEATURE — COMING SOON
                  </span>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: 8 }}>
                    Future enhancement currently planned for upcoming releases.
                  </div>
                </div>
              )}
            </div>

            {/* Disclaimer Footer */}
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <span style={{ fontSize: '0.6875rem', color: '#94A3B8', fontStyle: 'italic' }}>
                Product Demonstration — Visual interactive UI models based strictly on documented ParkPing production capabilities.
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .features-interactive-grid {
            grid-template-columns: 1fr !important;
          }
          .feature-meta-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

