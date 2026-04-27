import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PROBLEMS = [
  {
    stat: '£11bn',
    label: 'Lost every year',
    text: 'UK businesses bleed cashflow and slow growth chasing invoices — money that should be fueling expansion.',
    accent: '#e85d75',
    bg: 'linear-gradient(135deg, rgba(232,93,117,0.06), rgba(232,93,117,0.01))',
  },
  {
    stat: '24',
    label: 'Days lost yearly',
    text: 'Almost an entire working month gone to manual finance tasks — logging receipts, reconciling accounts, chasing payments.',
    accent: '#f5a623',
    bg: 'linear-gradient(135deg, rgba(245,166,35,0.06), rgba(245,166,35,0.01))',
  },
  {
    stat: '5.7m',
    label: 'UK SMEs',
    text: 'Millions of businesses need finance workflows but cannot justify hiring a full finance team.',
    accent: '#00b4d8',
    bg: 'linear-gradient(135deg, rgba(0,180,216,0.06), rgba(0,180,216,0.01))',
  },
]

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading entrance
      gsap.from('.problem-label', { opacity: 0, y: 20, duration: 0.6, scrollTrigger: { trigger: '.problem-label', start: 'top 85%', toggleActions: 'play none none reverse' } })
      gsap.from('.problem-headline', { opacity: 0, y: 30, duration: 0.7, delay: 0.1, scrollTrigger: { trigger: '.problem-headline', start: 'top 85%', toggleActions: 'play none none reverse' } })
      gsap.from('.problem-sub', { opacity: 0, y: 20, duration: 0.6, delay: 0.2, scrollTrigger: { trigger: '.problem-sub', start: 'top 85%', toggleActions: 'play none none reverse' } })

      // Bento cards stagger
      gsap.utils.toArray<HTMLElement>('.bento-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          scale: 0.96,
          duration: 0.8,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none reverse' },
        })
      })

      // Counter animation for stats
      gsap.utils.toArray<HTMLElement>('.stat-number').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
        })
      })

      // Bottom bar
      gsap.from('.problem-bar', { opacity: 0, y: 20, duration: 0.6, scrollTrigger: { trigger: '.problem-bar', start: 'top 90%', toggleActions: 'play none none reverse' } })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="problem" style={{ padding: 'clamp(100px, 12vw, 160px) clamp(20px, 5vw, 80px)', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative soft blob */}
      <div style={{ position: 'absolute', top: '-15%', right: '-15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(232,93,117,0.035), transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,180,216,0.03), transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 80px)', maxWidth: '720px' }}>
          <span className="problem-label label-mono" style={{ color: '#e85d75', fontSize: '11px' }}>The Problem</span>
          <h2 className="problem-headline" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 700, margin: '16px 0 20px 0', lineHeight: 1.05, color: '#0a1628', letterSpacing: '-2px' }}>
            Finance is still<br />broken for SMEs.
          </h2>
          <p className="problem-sub" style={{ color: '#8896a4', fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: 1.65, maxWidth: '560px' }}>
            <strong style={{ color: '#0a1628', fontWeight: 600 }}>Money matters are scattered. Hiring is expensive. Finance is manual.</strong>{' '}
            Small businesses waste time and money on tasks that should run themselves.
          </p>
        </div>

        {/* Bento Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '16px' }}>
          {/* Large card — £11bn */}
          <div className="bento-card" style={{ gridColumn: 'span 7', background: PROBLEMS[0].bg, border: '1px solid rgba(232,93,117,0.08)', borderRadius: '28px', padding: 'clamp(32px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px', transition: 'transform 0.4s, box-shadow 0.4s', cursor: 'default' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 24px 64px rgba(232,93,117,0.08)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
            <div>
              <div className="stat-number" style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', fontWeight: 800, color: PROBLEMS[0].accent, lineHeight: 1, letterSpacing: '-3px', marginBottom: '8px' }}>
                {PROBLEMS[0].stat}
              </div>
              <div className="label-mono" style={{ color: PROBLEMS[0].accent, fontSize: '11px', opacity: 0.8 }}>{PROBLEMS[0].label}</div>
            </div>
            <p style={{ fontSize: '15px', color: '#8896a4', lineHeight: 1.6, margin: '24px 0 0 0', maxWidth: '380px' }}>{PROBLEMS[0].text}</p>
          </div>

          {/* Right column — stacked */}
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* 24 days */}
            <div className="bento-card" style={{ flex: 1, background: PROBLEMS[1].bg, border: '1px solid rgba(245,166,35,0.08)', borderRadius: '28px', padding: 'clamp(24px, 3vw, 36px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'transform 0.4s, box-shadow 0.4s', cursor: 'default' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 24px 64px rgba(245,166,35,0.08)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div className="stat-number" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: PROBLEMS[1].accent, lineHeight: 1, letterSpacing: '-2px', marginBottom: '8px' }}>
                {PROBLEMS[1].stat}
              </div>
              <div className="label-mono" style={{ color: PROBLEMS[1].accent, fontSize: '11px', opacity: 0.8, marginBottom: '12px' }}>{PROBLEMS[1].label}</div>
              <p style={{ fontSize: '14px', color: '#8896a4', lineHeight: 1.55, margin: 0 }}>{PROBLEMS[1].text}</p>
            </div>

            {/* 5.7m SMEs */}
            <div className="bento-card" style={{ flex: 1, background: PROBLEMS[2].bg, border: '1px solid rgba(0,180,216,0.08)', borderRadius: '28px', padding: 'clamp(24px, 3vw, 36px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'transform 0.4s, box-shadow 0.4s', cursor: 'default' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 24px 64px rgba(0,180,216,0.08)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div className="stat-number" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: PROBLEMS[2].accent, lineHeight: 1, letterSpacing: '-2px', marginBottom: '8px' }}>
                {PROBLEMS[2].stat}
              </div>
              <div className="label-mono" style={{ color: PROBLEMS[2].accent, fontSize: '11px', opacity: 0.8, marginBottom: '12px' }}>{PROBLEMS[2].label}</div>
              <p style={{ fontSize: '14px', color: '#8896a4', lineHeight: 1.55, margin: 0 }}>{PROBLEMS[2].text}</p>
            </div>
          </div>
        </div>

        {/* Bottom context bar */}
        <div className="problem-bar" style={{ marginTop: '48px', display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ padding: '14px 24px', borderRadius: '16px', background: '#fafbfc', border: '1px solid rgba(0,24,69,0.04)', fontSize: '14px', color: '#0a1628', fontWeight: 600 }}>
            £30bn UK accounting services market
          </div>
          <div style={{ padding: '14px 24px', borderRadius: '16px', background: '#fafbfc', border: '1px solid rgba(0,24,69,0.04)', fontSize: '14px', color: '#0a1628', fontWeight: 600 }}>
            £20bn UK SME finance operations alone
          </div>
          <div style={{ padding: '14px 24px', borderRadius: '16px', background: '#fafbfc', border: '1px solid rgba(0,24,69,0.04)', fontSize: '14px', color: '#0a1628', fontWeight: 600 }}>
            16.5m Open Banking connections ready
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #problem .bento-card { grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  )
}
