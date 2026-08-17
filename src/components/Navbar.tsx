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
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(15,23,42,0.08), 0 4px 16px rgba(15,23,42,0.06)' : 'none',
        padding: scrolled ? '12px 0' : '20px 0',
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
            style={{ width: 36, height: 36, objectFit: 'contain', display: 'block' }}
          />
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '1.125rem',
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
              padding: '8px',
              borderRadius: '10px',
              background: mobileMenuOpen ? '#EFF6FF' : 'transparent',
              border: `1.5px solid ${mobileMenuOpen ? '#DBEAFE' : 'rgba(15,23,42,0.1)'}`,
              color: '#0F172A',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.15s ease',
            }}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div
          style={{
            borderTop: '1px solid rgba(15,23,42,0.08)',
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <nav
            className="container-pad"
            style={{ paddingTop: '20px', paddingBottom: '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#334155',
                  textDecoration: 'none',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  display: 'block',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = '#EFF6FF';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#0B65ED';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#334155';
                }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ paddingTop: '12px', marginTop: '8px', borderTop: '1px solid rgba(15,23,42,0.08)' }}>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDownloadModal();
                }}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '14px 24px' }}
              >
                Get the App
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
