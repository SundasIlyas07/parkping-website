import { useState } from 'react';
import { HelpCircle, Search, Plus, Minus, ShieldCheck } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'privacy' | 'technical';
}

const FAQS: FaqItem[] = [
  {
    id: 'what-is-parkping',
    question: 'What is ParkPing?',
    answer: 'ParkPing is a contactless vehicle parking notification and anonymous communication platform. It enables drivers whose exit or driveway is blocked to immediately reach the vehicle owner without either party disclosing their personal phone number or email address.',
    category: 'general',
  },
  {
    id: 'how-qr-works',
    question: 'How does the ParkPing QR work?',
    answer: 'Vehicle owners place an official ParkPing QR sticker on their windshield. When a vehicle blocks someone, the bystander scans the sticker using any standard smartphone camera. The system matches the sticker ID to the owner\'s profile in sub-50ms and dispatches an instant push alert.',
    category: 'technical',
  },
  {
    id: 'how-register-vehicle',
    question: 'How do I register my vehicle?',
    answer: 'Download the ParkPing mobile app, create an account, enter your vehicle details (Make, Model, Color, License Plate), and upload plate and registration documents. Once reviewed and approved by the ParkPing Admin Web Panel, your vehicle receives an official VERIFIED badge and active QR sticker mapping.',
    category: 'general',
  },
  {
    id: 'how-contact-owner',
    question: 'How can someone contact me if my vehicle is blocking them?',
    answer: 'A bystander scans your windshield QR sticker or searches your license plate string (e.g. "ABC-1234") in the app. They can send an instant real-time Socket.IO chat message or initiate an encrypted Agora WebRTC voice call directly to your smartphone.',
    category: 'privacy',
  },
  {
    id: 'phone-number-visible',
    question: 'Will my personal phone number be visible?',
    answer: 'Never. ParkPing enforces strict 100% identity masking. All messaging and voice calls route over tokenized JWT authorization channels. No raw telephone numbers, personal emails, or home addresses are ever stored in plain text or exposed to any party.',
    category: 'privacy',
  },
  {
    id: 'what-happens-on-scan',
    question: 'What happens when someone scans my ParkPing QR?',
    answer: 'Firebase Cloud Messaging (FCM) delivers an urgent push notification directly to your smartphone lock screen, even if the app is closed. Tapping the notification opens a private, encrypted Socket.IO chat session so you can coordinate moving your vehicle in seconds.',
    category: 'technical',
  },
  {
    id: 'do-i-need-app',
    question: 'Do I need the ParkPing mobile app?',
    answer: 'As a vehicle owner, you use the ParkPing mobile app (built with React Native Expo SDK 54) to receive push alerts, manage your fleet, and respond anonymously. Bystanders scanning your windshield QR sticker can use any standard smartphone camera or the web/app lookup interface.',
    category: 'general',
  },
  {
    id: 'how-get-qr',
    question: 'How do I get my ParkPing QR?',
    answer: 'Once your vehicle registration is approved by the ParkPing Admin Panel, your unique QR vector code is generated inside the mobile app. You can download the digital QR vector or order an official weather-resistant windshield sticker directly through your account.',
    category: 'general',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('what-is-parkping');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'privacy' | 'technical'>('all');

  const filteredFaqs = FAQS.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <section
      id="faq"
      style={{
        background: '#FFFFFF',
        paddingTop: '108px',
        paddingBottom: '108px',
        borderTop: '1px solid rgba(15,23,42,0.06)',
      }}
    >
      <div className="container-pad">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
            <HelpCircle size={16} color="#0B65ED" />
            <span className="eyebrow" style={{ margin: 0 }}>FREQUENTLY ASKED QUESTIONS</span>
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
            Everything you need to know{' '}
            <span className="gradient-text-blue">about ParkPing.</span>
          </h2>
          <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: '#475569' }}>
            Documented answers about identity masking, QR scanning, vehicle registration, and instant notifications.
          </p>
        </div>

        {/* FAQ Search & Category Filter Controls */}
        <div style={{ maxWidth: '720px', margin: '0 auto 40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Search Box */}
          <div style={{ position: 'relative', width: '100%' }}>
            <Search size={18} color="#94A3B8" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search questions (e.g. privacy, registration, QR scan)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px 14px 44px',
                borderRadius: '16px',
                border: '1.5px solid rgba(15,23,42,0.12)',
                background: '#F8FAFC',
                fontSize: '0.9375rem',
                color: '#0F172A',
                outline: 'none',
                transition: 'all 0.2s ease',
              }}
              onFocus={e => {
                e.target.style.borderColor = '#0B65ED';
                e.target.style.background = '#FFFFFF';
                e.target.style.boxShadow = '0 4px 16px rgba(11,101,237,0.1)';
              }}
              onBlur={e => {
                e.target.style.borderColor = 'rgba(15,23,42,0.12)';
                e.target.style.background = '#F8FAFC';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'general', label: 'General & Mobile App' },
              { id: 'privacy', label: 'Identity & Privacy' },
              { id: 'technical', label: 'QR & Push Alerts' },
            ].map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as any)}
                style={{
                  padding: '8px 16px',
                  borderRadius: 99,
                  border: activeCategory === cat.id ? '1.5px solid #0B65ED' : '1px solid rgba(15,23,42,0.08)',
                  background: activeCategory === cat.id ? '#EFF6FF' : '#FFFFFF',
                  color: activeCategory === cat.id ? '#0B65ED' : '#64748B',
                  fontWeight: activeCategory === cat.id ? 700 : 500,
                  fontSize: '0.8125rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filteredFaqs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', background: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0', color: '#64748B' }}>
              No questions found matching "{searchQuery}". Try searching for "privacy", "QR", or "vehicle".
            </div>
          ) : (
            filteredFaqs.map(faq => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '18px',
                    border: `1.5px solid ${isOpen ? '#0B65ED' : 'rgba(15,23,42,0.08)'}`,
                    boxShadow: isOpen ? '0 8px 24px rgba(11,101,237,0.08)' : 'var(--shadow-xs)',
                    overflow: 'hidden',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '1.0625rem',
                        color: isOpen ? '#0B65ED' : '#0F172A',
                        lineHeight: 1.4,
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {faq.question}
                    </span>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: '10px',
                        background: isOpen ? '#0B65ED' : '#F1F5F9',
                        color: isOpen ? '#FFFFFF' : '#64748B',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {isOpen ? <Minus size={16} color="white" /> : <Plus size={16} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 24px 24px',
                        fontSize: '0.9375rem',
                        lineHeight: 1.75,
                        color: '#475569',
                        borderTop: '1px solid rgba(15,23,42,0.06)',
                        paddingTop: '18px',
                        animation: 'fadeIn 0.25s ease-out',
                      }}
                    >
                      <p>{faq.answer}</p>
                      <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', color: '#059669', fontWeight: 600 }}>
                        <ShieldCheck size={14} color="#059669" />
                        <span>Verified by Official ParkPing Protocol Documentation</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

