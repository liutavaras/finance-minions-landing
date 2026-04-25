import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TIERS = [
  {
    name: 'Start',
    price: '£29',
    period: '/month',
    target: 'Sole traders, micro-businesses',
    features: ['1 out-of-the-box Minion', 'Basic integrations', 'Standard support', 'Email notifications', 'Monthly reports'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Scale',
    price: '£79',
    period: '/month',
    target: 'Small businesses, startups, consultancies',
    features: ['All 5 out-of-the-box Minions', 'Build your own Minions (chat-configured)', 'Full integrations', 'Priority support', 'Real-time alerts', 'Weekly reports', 'Multi-user access'],
    cta: 'Start Scaling',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    target: 'Larger teams, accounting firms',
    features: ['Unlimited out-of-the-box + custom Minions', 'Advanced custom integrations', 'Dedicated support', 'SLA guarantee', 'API access', 'White-label options', 'Onboarding specialist'],
    cta: 'Contact Us',
    highlight: false,
  },
]

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.pricing-card').forEach((card, i) => {
        gsap.from(card, { opacity: 0, y: 40, duration: 0.7, delay: i * 0.12, scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' } })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="pricing" style={{ padding: 'clamp(60px, 8vw, 120px) clamp(20px, 5vw, 80px)', background: '#050510' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 80px)' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '2px' }}>Pricing</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, margin: '16px 0 16px 0', lineHeight: 1.15 }}>Transparent pricing,<br />real ROI</h2>
          <p style={{ color: '#8A8AAA', maxWidth: '760px', margin: '0 auto', fontSize: '16px', lineHeight: 1.6 }}>
            Start with out-of-the-box Minions on any plan. Build your own custom Minions from <strong style={{ color: '#E0E0E0' }}>Scale</strong> and above.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', alignItems: 'start' }}>
          {TIERS.map((t) => (
            <div key={t.name} className="pricing-card" style={{ background: t.highlight ? 'linear-gradient(135deg, #0E0E28, #121840)' : 'linear-gradient(135deg, #0E0E20, #121228)', border: `2px solid ${t.highlight ? '#00D4FF' : '#1A1A35'}`, borderRadius: '20px', padding: 'clamp(28px, 3vw, 36px)', position: 'relative', transition: 'transform 0.3s' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)' }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}>
              {t.highlight && (
                <div style={{ position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)', padding: '4px 16px', background: '#00D4FF', borderRadius: '0 0 8px 8px', fontFamily: "'Space Mono', monospace", fontSize: '10px', color: '#000', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Most Popular</div>
              )}
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px 0' }}>{t.name}</h3>
              <p style={{ fontSize: '13px', color: '#8A8AAA', margin: '0 0 20px 0', minHeight: '36px' }}>{t.target}</p>
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '36px', fontWeight: 800 }}>{t.price}</span>
                <span style={{ fontSize: '14px', color: '#8A8AAA' }}>{t.period}</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {t.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#B0B0CC' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={t.highlight ? '#00D4FF' : '#00F0C8'} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button style={{ width: '100%', padding: '14px', borderRadius: '12px', border: 'none', background: t.highlight ? 'linear-gradient(135deg, #00D4FF, #00B8E0)' : 'transparent', borderWidth: t.highlight ? 0 : 1, borderStyle: 'solid', borderColor: '#2A2A45', color: t.highlight ? '#000' : '#E0E0E0', fontWeight: 700, fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={e => { if (!t.highlight) { e.currentTarget.style.borderColor = '#00D4FF'; e.currentTarget.style.color = '#00D4FF' } }} onMouseLeave={e => { if (!t.highlight) { e.currentTarget.style.borderColor = '#2A2A45'; e.currentTarget.style.color = '#E0E0E0' } }}>
                {t.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
