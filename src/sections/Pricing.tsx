import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PLANS = [
  { name: 'Core', badge: 'Free', price: '\u00a30', period: '/mo', features: ['Up to 2 Minions', '300 tasks/month', 'Basic insights', 'Email support', '1 bank connection'] },
  { name: 'Pro', badge: null, price: '\u00a329', period: '/mo', features: ['Unlimited Minions', '10,000 tasks/month', 'Advanced reporting & advisor summaries', 'Priority support (next-day)', 'Multi-bank connections'] },
]

const FEATURE_CHECKLIST = [
  { feature: 'Free to start', core: true, pro: true },
  { feature: 'Minion deployments', core: 'Up to 2', pro: 'Unlimited' },
  { feature: 'Agent executions', core: '300/month', pro: '10,000/month' },
  { feature: 'Human in the loop controls', core: true, pro: true },
  { feature: 'Open banking integrations', core: '1 bank', pro: 'Multi-bank' },
  { feature: 'Audit trail & reasoning logs', core: true, pro: true },
  { feature: 'Basic insights', core: true, pro: true },
  { feature: 'Advanced reporting & advisor summaries', core: false, pro: true },
  { feature: 'Priority support', core: '3-5 days', pro: 'Next-day' },
]

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null)
  const [yearly, setYearly] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-heading', { opacity: 0, y: 40, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } })
      gsap.utils.toArray<HTMLElement>('.pricing-card').forEach((card, i) => {
        gsap.from(card, { opacity: 0, y: 40, duration: 0.6, delay: i * 0.15, scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none reverse' } })
      })
      gsap.from('.pricing-table', { opacity: 0, y: 30, duration: 0.7, scrollTrigger: { trigger: '.pricing-table', start: 'top 88%', toggleActions: 'play none none reverse' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="pricing" style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 80px)', background: '#ffffff', position: 'relative' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div className="pricing-heading" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 60px)' }}>
          <span className="label-mono" style={{ color: '#00b4d8' }}>Pricing</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, margin: '16px 0 16px 0', lineHeight: 1.15, color: '#0a1628', letterSpacing: '-1.5px' }}>
            Simple pricing, powerful agents.
          </h2>
          <p style={{ color: '#8896a4', fontSize: '15px', maxWidth: '640px', margin: '0 auto 20px', lineHeight: 1.6 }}>
            Start for free, then scale. No hidden fees. Cancel anytime.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: '#fafbfc', border: '1px solid rgba(0, 24, 69, 0.04)', borderRadius: '9999px', padding: '4px' }}>
            <button onClick={() => setYearly(false)} style={{ padding: '8px 20px', borderRadius: '9999px', border: 'none', fontSize: '13px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', background: !yearly ? '#001845' : 'transparent', color: !yearly ? '#fff' : '#8896a4' }}>Monthly</button>
            <button onClick={() => setYearly(true)} style={{ padding: '8px 20px', borderRadius: '9999px', border: 'none', fontSize: '13px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', background: yearly ? '#001845' : 'transparent', color: yearly ? '#fff' : '#8896a4' }}>
              Yearly<span style={{ fontSize: '11px', color: yearly ? 'rgba(255,255,255,0.7)' : '#00b4d8', marginLeft: '4px' }}>Save 20%</span>
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '60px' }}>
          {PLANS.map((p) => {
            const isPro = p.name === 'Pro'
            return (
              <div key={p.name} className="pricing-card" style={{ background: isPro ? '#001845' : '#fafbfc', border: isPro ? 'none' : '1px solid rgba(0, 24, 69, 0.04)', borderRadius: '24px', padding: '32px', position: 'relative', transition: 'transform 0.3s, box-shadow 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = isPro ? '0 20px 60px rgba(0, 24, 69, 0.12)' : '0 20px 60px rgba(0, 24, 69, 0.04)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
                {p.badge && <span style={{ position: 'absolute', top: '16px', right: '16px', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 700, background: 'rgba(0,180,216,0.08)', color: '#00b4d8' }}>{p.badge}</span>}
                <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 16px 0', color: isPro ? '#fff' : '#0a1628' }}>{p.name}</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '24px' }}>
                  <span style={{ fontSize: '42px', fontWeight: 800, color: isPro ? '#fff' : '#0a1628', letterSpacing: '-1px' }}>{isPro && yearly ? '\u00a324' : p.price}</span>
                  <span style={{ color: isPro ? 'rgba(255,255,255,0.6)' : '#b0bcc8', fontSize: '14px' }}>{isPro && yearly ? '/mo billed yearly' : p.period}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '14px', color: isPro ? 'rgba(255,255,255,0.85)' : '#8896a4' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#52b788" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#waitlist" style={{ display: 'block', width: '100%', padding: '14px', borderRadius: '16px', background: isPro ? '#fff' : '#001845', color: isPro ? '#001845' : '#fff', textAlign: 'center', fontWeight: 600, fontSize: '14px', textDecoration: 'none', transition: 'transform 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(0.98)'; e.currentTarget.style.opacity = '0.9' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '1' }}>
                  {isPro ? 'Start Pro Trial' : 'Get Started'}
                </a>
              </div>
            )
          })}
        </div>

        <style>{`
          @media (max-width: 480px) {
            #pricing .pricing-card { padding: 24px !important; }
            #pricing .pricing-card h3 { font-size: 17px !important; }
            #pricing .pricing-table { padding: 16px !important; }
            #pricing .pricing-table th, #pricing .pricing-table td { padding: 8px 10px !important; font-size: 12px !important; }
          }
        `}</style>

        <div className="pricing-table" style={{ background: '#fafbfc', border: '1px solid rgba(0, 24, 69, 0.04)', borderRadius: '24px', padding: 'clamp(20px, 3vw, 32px)', overflowX: 'auto' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 16px 0', color: '#0a1628', textAlign: 'center' }}>Feature Comparison</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '400px' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '12px 16px', color: '#b0bcc8', fontWeight: 500, fontSize: '12px', borderBottom: '1px solid rgba(0, 24, 69, 0.04)' }}>Feature</th>
                <th style={{ textAlign: 'center', padding: '12px 16px', color: '#b0bcc8', fontWeight: 500, fontSize: '12px', borderBottom: '1px solid rgba(0, 24, 69, 0.04)' }}>Core</th>
                <th style={{ textAlign: 'center', padding: '12px 16px', color: '#0a1628', fontWeight: 600, fontSize: '12px', borderBottom: '1px solid rgba(0, 24, 69, 0.04)', background: 'rgba(0, 180, 216, 0.03)' }}>Pro</th>
              </tr>
            </thead>
            <tbody>
              {FEATURE_CHECKLIST.map((row) => (
                <tr key={row.feature}>
                  <td style={{ padding: '10px 16px', borderBottom: '1px solid rgba(0, 24, 69, 0.03)', color: '#0a1628' }}>{row.feature}</td>
                  <td style={{ padding: '10px 16px', textAlign: 'center', borderBottom: '1px solid rgba(0, 24, 69, 0.03)', color: row.core === true ? '#52b788' : row.core === false ? '#b0bcc8' : '#8896a4' }}>
                    {row.core === true ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#52b788" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg> : row.core === false ? '—' : row.core}
                  </td>
                  <td style={{ padding: '10px 16px', textAlign: 'center', borderBottom: '1px solid rgba(0, 24, 69, 0.03)', background: 'rgba(0, 180, 216, 0.01)', color: row.pro === true ? '#52b788' : row.pro === false ? '#b0bcc8' : '#8896a4' }}>
                    {row.pro === true ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#52b788" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg> : row.pro === false ? '—' : row.pro}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
