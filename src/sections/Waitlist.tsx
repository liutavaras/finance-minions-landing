import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Waitlist() {
  const sectionRef = useRef<HTMLElement>(null)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.waitlist-heading', { opacity: 0, y: 40, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } })
      gsap.from('.waitlist-form', { opacity: 0, y: 40, duration: 0.8, delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section ref={sectionRef} id="waitlist" style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 80px)', background: '#f5f7fa', position: 'relative' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <div className="waitlist-heading" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 60px)' }}>
          <span className="label-mono" style={{ color: '#00b4d8' }}>Join the Waitlist</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, margin: '16px 0 16px 0', lineHeight: 1.15, color: '#0a1628', letterSpacing: '-1.5px' }}>
            Be the first to experience<br />FinchFlow
          </h2>
          <p style={{ color: '#8896a4', fontSize: '16px', lineHeight: 1.6 }}>
            We're rolling out access gradually. Leave your details and we'll be in touch.
          </p>
        </div>

        {!submitted ? (
          <form className="waitlist-form" onSubmit={handleSubmit} style={{ background: '#fff', border: '1px solid rgba(0, 24, 69, 0.04)', borderRadius: '24px', padding: 'clamp(28px, 4vw, 40px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0a1628', marginBottom: '6px' }}>Full name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Smith"
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(0,24,69,0.08)', fontSize: '14px', color: '#0a1628', background: '#fafbfc', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box' }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#00b4d8' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(0,24,69,0.08)' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0a1628', marginBottom: '6px' }}>Work email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@company.com"
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(0,24,69,0.08)', fontSize: '14px', color: '#0a1628', background: '#fafbfc', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box' }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#00b4d8' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(0,24,69,0.08)' }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0a1628', marginBottom: '6px' }}>Company name</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Acme Ltd"
                style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(0,24,69,0.08)', fontSize: '14px', color: '#0a1628', background: '#fafbfc', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box' }}
                onFocus={(e) => { e.currentTarget.style.borderColor = '#00b4d8' }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(0,24,69,0.08)' }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0a1628', marginBottom: '6px' }}>What would you use FinchFlow for?</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us a bit about your finance workflow needs..."
                rows={4}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(0,24,69,0.08)', fontSize: '14px', color: '#0a1628', background: '#fafbfc', outline: 'none', transition: 'border-color 0.2s', resize: 'vertical', boxSizing: 'border-box' }}
                onFocus={(e) => { e.currentTarget.style.borderColor = '#00b4d8' }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(0,24,69,0.08)' }}
              />
            </div>

            <button
              type="submit"
              style={{ width: '100%', padding: '16px', borderRadius: '16px', background: '#001845', color: '#fff', fontWeight: 600, fontSize: '15px', border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#002a6e'; e.currentTarget.style.transform = 'scale(0.99)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#001845'; e.currentTarget.style.transform = 'scale(1)' }}
            >
              Join the Waitlist
            </button>

            <p style={{ fontSize: '12px', color: '#b0bcc8', textAlign: 'center', margin: '16px 0 0 0', lineHeight: 1.5 }}>
              No spam, ever. We'll only contact you when we're ready to onboard.
            </p>
          </form>
        ) : (
          <div style={{ background: '#fff', border: '1px solid rgba(0, 24, 69, 0.04)', borderRadius: '24px', padding: 'clamp(28px, 4vw, 40px)', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(82,183,136,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#52b788" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0a1628', margin: '0 0 8px 0' }}>You're on the list!</h3>
            <p style={{ color: '#8896a4', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
              Thanks for your interest, {form.name || 'there'}. We'll be in touch soon.
            </p>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 520px) {
          #waitlist form > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
