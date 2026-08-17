import { useState } from 'react';
import { Mail, Send, CheckCircle2, ShieldCheck, ExternalLink, Code2 } from 'lucide-react';
import { CODEBRAINIX_CONFIG } from '../config/company';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'general',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate backend endpoint dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section
      id="contact"
      style={{
        background: '#F8FAFC',
        paddingTop: '108px',
        paddingBottom: '108px',
        borderTop: '1px solid rgba(15,23,42,0.06)',
        position: 'relative',
      }}
    >
      <div className="container-pad">
        <div
          className="contact-card"
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            background: '#FFFFFF',
            borderRadius: '28px',
            border: '1.5px solid rgba(11,101,237,0.18)',
            padding: '44px',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <Mail size={16} color="#0B65ED" />
              <span className="eyebrow" style={{ margin: 0 }}>GET IN TOUCH</span>
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
                color: '#0F172A',
                marginBottom: '12px',
                lineHeight: 1.15,
              }}
            >
              Contact the ParkPing Team
            </h3>
            <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.6, maxWidth: '540px', margin: '0 auto 16px' }}>
              Have questions about residential society integration, commercial QR sticker orders, or mobile app support? Fill out the form below.
            </p>

            {/* Direct Email Callout */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '99px',
                background: '#EFF6FF',
                border: '1px solid #BFDBFE',
                fontSize: '0.8125rem',
                color: '#0B65ED',
                fontWeight: 600,
              }}
            >
              <span>Direct inquiries:</span>
              <a
                href={`mailto:${CODEBRAINIX_CONFIG.email}`}
                style={{
                  color: '#0B65ED',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none'; }}
              >
                {CODEBRAINIX_CONFIG.email}
              </a>
            </div>
          </div>

          {submitted ? (
            <div
              style={{
                background: '#ECFDF5',
                border: '1.5px solid #A7F3D0',
                borderRadius: '20px',
                padding: '36px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '14px',
                animation: 'fadeIn 0.3s ease-out',
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: '#34D399',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CheckCircle2 size={32} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', color: '#065F46' }}>
                Message Sent Successfully!
              </h4>
              <p style={{ fontSize: '0.9375rem', color: '#047857', maxWidth: '440px', lineHeight: 1.6 }}>
                Thank you for reaching out. Your inquiry has been routed to the ParkPing engineering and support team.
              </p>
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', inquiryType: 'general', message: '' });
                }}
                style={{ marginTop: '12px', padding: '10px 24px', fontSize: '0.875rem' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }} className="contact-form-grid">
                {/* Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0F172A' }}>
                    Full Name <span style={{ color: '#E11D48' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1.5px solid rgba(15,23,42,0.12)',
                      background: '#F8FAFC',
                      fontSize: '0.9375rem',
                      color: '#0F172A',
                      outline: 'none',
                    }}
                    onFocus={e => { e.target.style.borderColor = '#0B65ED'; e.target.style.background = '#FFFFFF'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(15,23,42,0.12)'; e.target.style.background = '#F8FAFC'; }}
                  />
                </div>

                {/* Email */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0F172A' }}>
                    Email Address <span style={{ color: '#E11D48' }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1.5px solid rgba(15,23,42,0.12)',
                      background: '#F8FAFC',
                      fontSize: '0.9375rem',
                      color: '#0F172A',
                      outline: 'none',
                    }}
                    onFocus={e => { e.target.style.borderColor = '#0B65ED'; e.target.style.background = '#FFFFFF'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(15,23,42,0.12)'; e.target.style.background = '#F8FAFC'; }}
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0F172A' }}>
                  Inquiry Type
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={e => setFormData({ ...formData, inquiryType: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1.5px solid rgba(15,23,42,0.12)',
                    background: '#F8FAFC',
                    fontSize: '0.9375rem',
                    color: '#0F172A',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="general">General Support & Mobile App</option>
                  <option value="fleet">Commercial Fleet QR Stickers</option>
                  <option value="society">Residential Society Integration</option>
                  <option value="privacy">Privacy & Security Questions</option>
                </select>
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0F172A' }}>
                  Message <span style={{ color: '#E11D48' }}>*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1.5px solid rgba(15,23,42,0.12)',
                    background: '#F8FAFC',
                    fontSize: '0.9375rem',
                    color: '#0F172A',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#0B65ED'; e.target.style.background = '#FFFFFF'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(15,23,42,0.12)'; e.target.style.background = '#F8FAFC'; }}
                />
              </div>

              {/* Submit Button & Engineering Attribution */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginTop: 8, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', color: '#64748B' }}>
                  <ShieldCheck size={16} color="#059669" />
                  <span>Integration-ready backend endpoint form</span>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{ padding: '14px 32px', fontSize: '0.9375rem', borderRadius: '14px' }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={16} style={{ marginLeft: 8 }} />
                </button>
              </div>

              {/* Small Development Partner Credit */}
              <div
                style={{
                  marginTop: '12px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(15,23,42,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: '6px',
                  fontSize: '0.8125rem',
                  color: '#64748B',
                  textAlign: 'center',
                }}
              >
                <Code2 size={14} color="#0B65ED" />
                <span>Product Engineering & Development Partner:</span>
                <a
                  href={CODEBRAINIX_CONFIG.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#0B65ED',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none'; }}
                >
                  {CODEBRAINIX_CONFIG.name}
                  <ExternalLink size={12} />
                </a>
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .contact-form-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-card {
            padding: 24px 16px !important;
            border-radius: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};
