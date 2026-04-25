import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Closing() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.closing-content', { opacity: 0, y: 40, duration: 0.8, scrollTrigger: { trigger: '.closing-content', start: 'top 80%', toggleActions: 'play none none reverse' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="closing" style={{ padding: 'clamp(80px, 12vw, 160px) clamp(20px, 5vw, 80px)', background: 'linear-gradient(180deg, #050510, #0A0A1E)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(0,212,255,0.06), transparent 60%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="closing-content" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, margin: '0 0 20px 0' }}>
          Finance tasks?<br />
          <span style={{ background: 'linear-gradient(135deg, #00D4FF, #00F0C8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Just ask your Minion.</span>
        </h2>
        <p style={{ color: '#8A8AAA', fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.6, margin: '0 0 40px 0' }}>
          We're building the future of small business finance — one Minion at a time. Join the waitlist and be among the first to deploy your own finance agents.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
          <div style={{ display: 'flex', gap: '0', background: '#0E0E20', border: '1px solid #1A1A35', borderRadius: '12px', overflow: 'hidden', maxWidth: '100%', width: '420px' }}>
            <input type="email" placeholder="you@company.com" style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: '#fff', padding: '14px 18px', fontSize: '15px', minWidth: 0 }} />
            <button style={{ padding: '14px 24px', background: 'linear-gradient(135deg, #00D4FF, #00B8E0)', border: 'none', color: '#000', fontWeight: 700, fontSize: '14px', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'opacity 0.2s' }} onMouseEnter={e => e.currentTarget.style.opacity = '0.9'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
              Join Waitlist
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:hello@financeminions.ai" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8A8AAA', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#00D4FF'} onMouseLeave={e => e.currentTarget.style.color = '#8A8AAA'}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            hello@financeminions.ai
          </a>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8A8AAA', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#00D4FF'} onMouseLeave={e => e.currentTarget.style.color = '#8A8AAA'}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            @financeminions
          </a>
        </div>
      </div>
    </section>
  )
}
