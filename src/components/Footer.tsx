import React from 'react';
import { Smartphone, ShieldCheck, Mail, ExternalLink, Code2 } from 'lucide-react';
import logoSvg from '../assets/logo.svg';
import { CODEBRAINIX_CONFIG } from '../config/company';
import { LinkedinIcon, InstagramIcon } from './SocialIcons';

interface FooterProps {
  onOpenDownloadModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownloadModal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      style={{
        background: '#090D16',
        color: '#FFFFFF',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '240px',
          background: 'radial-gradient(ellipse at top, rgba(11,101,237,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-pad" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top Section Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1.1fr 1.4fr 1.3fr',
            gap: '40px',
            paddingBottom: '48px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
          className="footer-grid"
        >
          {/* Column 1: Primary Brand & Slogan */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <img
                src={logoSvg}
                alt="ParkPing Logo"
                style={{ width: 34, height: 34, objectFit: 'contain', display: 'block' }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                }}
              >
                Park<span style={{ color: '#0B65ED' }}>Ping</span>
              </span>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.9375rem',
                color: '#38BDF8',
                marginBottom: '8px',
              }}
            >
              Smarter parking communication.
            </p>

            <p
              style={{
                fontSize: '0.875rem',
                color: '#94A3B8',
                lineHeight: 1.7,
                maxWidth: '320px',
                marginBottom: '20px',
              }}
            >
              Contactless vehicle parking notification & real-time communication platform. Encrypted QR scanning with 100% phone number privacy.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 99,
                background: 'rgba(5,150,105,0.15)',
                border: '1px solid rgba(5,150,105,0.3)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#34D399',
              }}
            >
              <ShieldCheck size={14} color="#34D399" />
              100% Masked Identity Guaranteed
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.8125rem',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '18px',
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { href: '#how-it-works', label: 'How It Works' },
                { href: '#features', label: 'Features' },
                { href: '#privacy', label: 'Privacy' },
                { href: '#faq', label: 'FAQ' },
                { href: '#contact', label: 'Contact' },
              ].map(item => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    style={{
                      fontSize: '0.875rem',
                      color: '#94A3B8',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      display: 'inline-block',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.color = '#38BDF8';
                      (e.currentTarget as HTMLAnchorElement).style.transform = 'translateX(2px)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.color = '#94A3B8';
                      (e.currentTarget as HTMLAnchorElement).style.transform = 'none';
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Company Social Presence */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '0.8125rem',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '14px',
                }}
              >
                Contact & Support
              </h4>

              {/* Email Link */}
              <a
                href={`mailto:${CODEBRAINIX_CONFIG.email}`}
                aria-label={`Send email to ${CODEBRAINIX_CONFIG.email}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.875rem',
                  color: '#CBD5E1',
                  textDecoration: 'none',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  const target = e.currentTarget as HTMLAnchorElement;
                  target.style.color = '#38BDF8';
                  target.style.borderColor = 'rgba(56,189,248,0.4)';
                  target.style.background = 'rgba(11,101,237,0.12)';
                  target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={e => {
                  const target = e.currentTarget as HTMLAnchorElement;
                  target.style.color = '#CBD5E1';
                  target.style.borderColor = 'rgba(255,255,255,0.08)';
                  target.style.background = 'rgba(255,255,255,0.04)';
                  target.style.transform = 'none';
                }}
              >
                <Mail size={16} style={{ color: '#0B65ED', flexShrink: 0 }} />
                <span>{CODEBRAINIX_CONFIG.email}</span>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  color: '#94A3B8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '10px',
                }}
              >
                Social Profiles
              </h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {/* LinkedIn */}
                <a
                  href={CODEBRAINIX_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CodeBrainix LinkedIn Profile (opens in new tab)"
                  className="social-icon-btn"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94A3B8',
                    textDecoration: 'none',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={e => {
                    const target = e.currentTarget as HTMLAnchorElement;
                    target.style.background = '#0B65ED';
                    target.style.borderColor = '#38BDF8';
                    target.style.color = '#FFFFFF';
                    target.style.transform = 'translateY(-3px)';
                    target.style.boxShadow = '0 6px 16px rgba(11,101,237,0.4)';
                  }}
                  onMouseLeave={e => {
                    const target = e.currentTarget as HTMLAnchorElement;
                    target.style.background = 'rgba(255,255,255,0.05)';
                    target.style.borderColor = 'rgba(255,255,255,0.1)';
                    target.style.color = '#94A3B8';
                    target.style.transform = 'none';
                    target.style.boxShadow = 'none';
                  }}
                >
                  <LinkedinIcon size={18} />
                </a>

                {/* Instagram */}
                <a
                  href={CODEBRAINIX_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CodeBrainix Instagram Profile (opens in new tab)"
                  className="social-icon-btn"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94A3B8',
                    textDecoration: 'none',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={e => {
                    const target = e.currentTarget as HTMLAnchorElement;
                    target.style.background = '#0B65ED';
                    target.style.borderColor = '#38BDF8';
                    target.style.color = '#FFFFFF';
                    target.style.transform = 'translateY(-3px)';
                    target.style.boxShadow = '0 6px 16px rgba(11,101,237,0.4)';
                  }}
                  onMouseLeave={e => {
                    const target = e.currentTarget as HTMLAnchorElement;
                    target.style.background = 'rgba(255,255,255,0.05)';
                    target.style.borderColor = 'rgba(255,255,255,0.1)';
                    target.style.color = '#94A3B8';
                    target.style.transform = 'none';
                    target.style.boxShadow = 'none';
                  }}
                >
                  <InstagramIcon size={18} />
                </a>
              </div>
            </div>

            {/* Development Credit Sub-card */}
            <div
              style={{
                background: 'rgba(15,23,42,0.6)',
                border: '1px solid rgba(11,101,237,0.25)',
                borderRadius: '14px',
                padding: '14px',
                marginTop: '4px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <Code2 size={14} color="#0B65ED" />
                <a
                  href={CODEBRAINIX_CONFIG.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '0.8125rem',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#38BDF8'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#FFFFFF'; }}
                >
                  {CODEBRAINIX_CONFIG.creditText}
                </a>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#94A3B8', lineHeight: 1.4 }}>
                {CODEBRAINIX_CONFIG.supportingText}
              </p>
            </div>
          </div>

          {/* Column 4: Mobile App CTA Box */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.8125rem',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Get Mobile App
            </h4>
            <p style={{ fontSize: '0.8125rem', color: '#94A3B8', lineHeight: 1.5 }}>
              Available for iOS & Android built with React Native Expo SDK 54.
            </p>
            <button
              type="button"
              className="btn-primary"
              onClick={onOpenDownloadModal}
              style={{
                padding: '12px 20px',
                fontSize: '0.875rem',
                borderRadius: '12px',
                justifyContent: 'center',
              }}
            >
              <Smartphone size={16} />
              Get the ParkPing App
            </button>
          </div>
        </div>

        {/* Dedicated Company Attribution Banner */}
        <div
          style={{
            paddingTop: '24px',
            paddingBottom: '24px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '0.875rem',
              color: '#94A3B8',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <span>ParkPing is proudly developed by</span>
            <a
              href={CODEBRAINIX_CONFIG.website}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                color: '#38BDF8',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                borderBottom: '1px solid rgba(56,189,248,0.3)',
                paddingBottom: '1px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                const target = e.currentTarget as HTMLAnchorElement;
                target.style.color = '#FFFFFF';
                target.style.borderBottomColor = '#FFFFFF';
              }}
              onMouseLeave={e => {
                const target = e.currentTarget as HTMLAnchorElement;
                target.style.color = '#38BDF8';
                target.style.borderBottomColor = 'rgba(56,189,248,0.3)';
              }}
            >
              <span>CodeBrainix</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div
          style={{
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ fontSize: '0.8125rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span>© {currentYear} ParkPing. All rights reserved.</span>
            <span style={{ color: '#334155' }}>•</span>
            <span>
              Built by{' '}
              <a
                href={CODEBRAINIX_CONFIG.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#94A3B8',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#38BDF8'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#94A3B8'; }}
              >
                CodeBrainix
              </a>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a
              href="#privacy"
              style={{ fontSize: '0.8125rem', color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#38BDF8'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#94A3B8'; }}
            >
              Privacy & Security Model
            </a>
            <a
              href="#faq"
              style={{ fontSize: '0.8125rem', color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#38BDF8'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#94A3B8'; }}
            >
              Protocol FAQ
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1 !important;
          }
        }
        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
