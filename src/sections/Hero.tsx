import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-badge', { opacity: 0, y: 20, duration: 0.8, delay: 0.2 })
      gsap.from('.hero-h1', { opacity: 0, y: 40, duration: 1, delay: 0.4 })
      gsap.from('.hero-sub', { opacity: 0, y: 20, duration: 0.8, delay: 0.7 })
      gsap.from('.hero-prompt', { opacity: 0, y: 30, scale: 0.95, duration: 0.8, delay: 1.0 })
      gsap.from('.hero-cta', { opacity: 0, y: 20, duration: 0.6, delay: 1.3 })
      gsap.from('.hero-trust', { opacity: 0, y: 10, duration: 0.6, delay: 1.5 })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 20px 60px', position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #050510 0%, #0A0A1E 50%, #0D0D28 100%)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,212,255,0.06) 1px, transparent 0)', backgroundSize: '40px 40px', opacity: 0.5 }} />
      <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,212,255,0.08), transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,240,200,0.06), transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <div className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '50px', border: '1px solid #1A1A35', background: 'rgba(0,212,255,0.05)', marginBottom: '32px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00D4FF', animation: 'pulse 2s infinite' }} />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '1px' }}>Reinventing finance with AI</span>
        </div>

        <h1 className="hero-h1" style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, margin: '0 0 20px 0', letterSpacing: '-1px' }}>
          Build your own<br />
          <span style={{ background: 'linear-gradient(135deg, #00D4FF, #00F0C8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>financial agents.</span>
        </h1>

        <p className="hero-sub" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#8A8AAA', maxWidth: '760px', margin: '0 auto 18px', lineHeight: 1.6, fontWeight: 400 }}>
          We make it easy to configure Open Banking powered workflows that act on your money, your way.
        </p>
        <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: '#E0E0E0', maxWidth: '760px', margin: '0 auto 40px', lineHeight: 1.6, fontWeight: 500 }}>
          "finance is personal, this is what it can do for us, what can it do for you?"
        </p>

        <div className="hero-prompt" style={{ maxWidth: '600px', margin: '0 auto 40px', background: 'linear-gradient(135deg, #0E0E20, #151530)', border: '1px solid #1A1A35', borderRadius: '16px', padding: '20px 24px', textAlign: 'left', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00D4FF' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#555577' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#555577' }} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', color: '#555577', marginLeft: '8px' }}>User Prompt</span>
          </div>
          <p style={{ fontSize: '15px', color: '#FFFFFF', margin: '0 0 12px 0', fontWeight: 500, fontStyle: 'italic' }}>"Pay all my invoices under 14 days old and set a reminder to review vendor contracts next month."</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'rgba(0,212,255,0.06)', borderRadius: '10px', borderLeft: '3px solid #00D4FF' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: '#00D4FF' }}>Invoice Minion dispatched &rarr; Processing...</span>
          </div>
        </div>

        <div className="hero-cta" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
          <a href="#closing" style={{ padding: '14px 32px', borderRadius: '50px', background: 'linear-gradient(135deg, #00D4FF, #00B8E0)', color: '#000', fontWeight: 700, fontSize: '15px', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', display: 'inline-flex', alignItems: 'center', gap: '8px' }} onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,212,255,0.3)' }} onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}>
            Join Waitlist
          </a>
          <a href="#problem" style={{ padding: '14px 32px', borderRadius: '50px', border: '1px solid #2A2A45', color: '#8A8AAA', fontWeight: 500, fontSize: '15px', textDecoration: 'none', transition: 'all 0.2s', background: 'transparent' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#00D4FF'; e.currentTarget.style.color = '#00D4FF' }} onMouseLeave={e => { e.currentTarget.style.borderColor = '#2A2A45'; e.currentTarget.style.color = '#8A8AAA' }}>
            See the Problem
          </a>
        </div>

        <p className="hero-trust" style={{ fontSize: '12px', color: '#555577', margin: 0 }}>
          Built on Open Banking &bull; End-to-end encrypted &bull; FCA aligned
        </p>

        <style>{`@keyframes pulse { 0%, 100% { opacity: 1 } 50% { opacity: 0.3 } }`}</style>
      </div>
    </section>
  )
}
