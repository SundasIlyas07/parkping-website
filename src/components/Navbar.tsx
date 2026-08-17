import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoSvg from '../assets/logo.svg';

interface NavbarProps {
  onOpenDownloadModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownloadModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#features',     label: 'Features' },
    { href: '#privacy',      label: 'Privacy' },
    { href: '#faq',          label: 'FAQ' },
    { href: '#contact',      label: 'Contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: scrolled ? '0 1px 0 rgba(15,23,42,0.08), 0 4px 16px rgba(15,23,42,0.06)' : '0 1px 0 rgba(15,23,42,0.04)',
        padding: isMobile ? '12px 0' : (scrolled ? '12px 0' : '20px 0'),
      }}
    >
      <div
        className="container-pad"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        {/* Brand */}
        <a
          href="#"
          style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            textDecoration: 'none', flexShrink: 0,
          }}
          aria-label="ParkPing Home"
        >
          <img
            src={logoSvg}
            alt="ParkPing"
            style={{ width: isMobile ? 30 : 36, height: isMobile ? 30 : 36, objectFit: 'contain', display: 'block' }}
          />
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: isMobile ? '1.05rem' : '1.125rem',
              letterSpacing: '-0.02em',
              color: '#0F172A',
            }}
          >
            Park<span style={{ color: '#0B65ED' }}>Ping</span>
          </span>
        </a>

        {/* Desktop Nav */}
        {!isMobile && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: '#475569',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#0B65ED')}
                onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <button
            type="button"
            onClick={onOpenDownloadModal}
            className="btn-primary"
            style={{ padding: '10px 22px', fontSize: '0.875rem' }}
          >
            Get the App
          </button>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              padding: '8px 12px',
              borderRadius: '10px',
              background: mobileMenuOpen ? '#EFF6FF' : '#F8FAFC',
              border: `1.5px solid ${mobileMenuOpen ? '#DBEAFE' : 'rgba(15,23,42,0.1)'}`,
              color: '#0F172A',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
              transition: 'all 0.15s ease',
            }}
            aria-label="Toggle navigation"
          >
            <span style={{ fontSize: '0.75rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: '#0F172A' }}>
              {mobileMenuOpen ? 'CLOSE' : 'MENU'}
            </span>
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        )}
      </div>

      {/* Mobile Drawer Navigation Panel */}
      {isMobile && mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '56px',
            left: 0,
            right: 0,
            height: 'calc(100vh - 56px)',
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderTop: '1px solid rgba(15,23,42,0.08)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '24px 20px 40px',
            overflowY: 'auto',
            zIndex: 99,
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', paddingLeft: '12px' }}>
              Navigation Menu
            </div>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  color: '#0F172A',
                  textDecoration: 'none',
                  padding: '14px 16px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: '#F8FAFC',
                  border: '1px solid rgba(15,23,42,0.04)',
                }}
              >
                <span>{link.label}</span>
                <span style={{ color: '#0B65ED', fontWeight: 800 }}>→</span>
              </a>
            ))}
          </nav>

          <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(15,23,42,0.08)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownloadModal();
              }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '16px 24px', fontSize: '1rem' }}
            >
              Get the ParkPing App
            </button>
            <div style={{ textAlign: 'center', fontSize: '0.75rem', color: '#64748B' }}>
              🔒 100% Phone Number Privacy Masking
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
