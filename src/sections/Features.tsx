import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FEATURES = [
  { title: 'Plain English commands', desc: '"Pay all my invoices under 14 days old and set a reminder to review vendor contracts next month." No code, no setup wizards.', icon: '💬' },
  { title: 'Open Banking ready', desc: 'Pre-built integrations with major UK and EU banks via standardised Open Banking APIs. 95%+ coverage.', icon: '🏦' },
  { title: 'Built-in audit trail', desc: 'Every decision a Minion makes is logged with full reasoning, data sources, and timestamps. You can always ask "why?"', icon: '📋' },
  { title: 'Multi-tenant by design', desc: 'Securely serves thousands of small businesses with isolated data, shared infrastructure, and zero cross-contamination.', icon: '🏗️' },
  { title: 'Fast iteration', desc: 'New agents can be assembled in hours, not months. The shared building block architecture means rapid experimentation.', icon: '⚡' },
  { title: 'Never replace a human', desc: 'Minions handle the repetitive 80% — not the strategic 20%. Founders stay in control, save time, and make better decisions.', icon: '🤝' },
]

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.features-heading', { opacity: 0, y: 40, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } })
      gsap.utils.toArray<HTMLElement>('.feature-card').forEach((card, i) => {
        gsap.from(card, { opacity: 0, y: 40, duration: 0.6, delay: i * 0.08, scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none reverse' } })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="features" style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 80px)', background: '#f5f7fa', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="features-heading" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 80px)' }}>
          <span className="label-mono" style={{ color: '#00b4d8' }}>Core Features</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, margin: '16px 0 16px 0', lineHeight: 1.15, color: '#0a1628', letterSpacing: '-1.5px' }}>
            What makes FinchFlow different
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
          {FEATURES.map((f) => (
            <div key={f.title} className="feature-card" style={{ background: '#fff', border: '1px solid rgba(0, 24, 69, 0.04)', borderRadius: '24px', padding: '28px', transition: 'transform 0.3s, box-shadow 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 24, 69, 0.03)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ fontSize: '28px', marginBottom: '14px' }}>{f.icon}</div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0', color: '#0a1628' }}>{f.title}</h3>
              <p style={{ color: '#8896a4', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
