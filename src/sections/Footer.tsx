import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-cta', { opacity: 0, y: 50, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <footer ref={sectionRef} style={{ background: '#001845', color: '#fff', padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 80px)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="footer-cta" style={{ textAlign: 'center', marginBottom: 'clamp(60px, 8vw, 100px)' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 700, margin: '0 0 32px 0', lineHeight: 1.1, letterSpacing: '-2px' }}>
            Ready to take control?
          </h2>
          <a href="#waitlist" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '20px 48px', borderRadius: '20px', background: '#fff', color: '#001845', fontWeight: 600, fontSize: '16px', textDecoration: 'none', transition: 'transform 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(0.98)'; e.currentTarget.style.opacity = '0.9' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '1' }}>
            Join Waitlist
          </a>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ fontSize: '14px', fontWeight: 500, letterSpacing: '-0.5px' }}>FinchFlow</div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            {['Terms', 'Privacy', 'LinkedIn'].map((link) => (
              <a key={link} href="#" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }} onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}>
                {link}
              </a>
            ))}
          </div>
          <div className="label-mono" style={{ color: 'rgba(255,255,255,0.25)', fontSize: '10px' }}>2025</div>
        </div>
      </div>
    </footer>
  )
}
