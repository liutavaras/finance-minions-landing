import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PROBLEM_METRICS = [
  {
    metric: '24 days/year lost',
    desc: 'Financial admin drains almost a working month from small businesses every year.',
  },
  {
    metric: '£11 billion lost every year',
    desc: 'UK businesses lose this to late payments, squeezing cashflow and slowing growth.',
  },
  {
    metric: '5.7m UK businesses',
    desc: 'Millions of SMEs need finance workflows without hiring full finance teams.',
  },
  {
    metric: '16.5m Open Banking connections',
    desc: 'The secure data rails already exist. Now the next layer is agentic action.',
  },
]

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null)
  const floatingARef = useRef<HTMLDivElement>(null)
  const floatingBRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.problem-card').forEach((card, i) => {
        gsap.from(card, { opacity: 0, y: 30, duration: 0.6, delay: i * 0.08, scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none reverse' } })
      })

      if (floatingARef.current) {
        gsap.fromTo(
          floatingARef.current,
          { y: 32, opacity: 0.2, rotate: -2 },
          {
            y: -18,
            opacity: 1,
            rotate: 0,
            ease: 'none',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'bottom 20%', scrub: true },
          }
        )
      }
      if (floatingBRef.current) {
        gsap.fromTo(
          floatingBRef.current,
          { y: 18, opacity: 0.2, rotate: 2 },
          {
            y: -34,
            opacity: 1,
            rotate: 0,
            ease: 'none',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', end: 'bottom 18%', scrub: true },
          }
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="problem" style={{ padding: 'clamp(60px, 8vw, 120px) clamp(20px, 5vw, 80px)', background: '#050510' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 80px)' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: '#FF5E5E', textTransform: 'uppercase', letterSpacing: '2px' }}>The Problem</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 800, margin: '16px 0 18px 0', lineHeight: 1.08 }}>
            Finance is still broken for SMEs.
          </h2>
          <p style={{ color: '#B0B0CC', maxWidth: '760px', margin: '0 auto 18px', fontSize: '17px', lineHeight: 1.6 }}>
            <strong>Money Matters are Scattered.</strong> <strong>Hiring is Expensive.</strong> <strong>Finance is Manual.</strong>
          </p>
        </div>

        <div style={{ position: 'relative', height: '86px', margin: '0 auto 24px', maxWidth: '1000px' }}>
          <div
            ref={floatingARef}
            style={{
              position: 'absolute',
              left: '8%',
              top: '6px',
              padding: '12px 16px',
              borderRadius: '12px',
              border: '1px solid #2A2A45',
              background: 'linear-gradient(135deg, rgba(255,94,94,0.15), rgba(255,94,94,0.04))',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              boxShadow: '0 14px 34px rgba(0,0,0,0.35)',
            }}
          >
            GBP30bn UK accounting services market
          </div>
          <div
            ref={floatingBRef}
            style={{
              position: 'absolute',
              right: '8%',
              top: '30px',
              padding: '12px 16px',
              borderRadius: '12px',
              border: '1px solid #2A2A45',
              background: 'linear-gradient(135deg, rgba(0,212,255,0.16), rgba(0,212,255,0.05))',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              boxShadow: '0 14px 34px rgba(0,0,0,0.35)',
            }}
          >
            GBP20bn UK SME finance operations alone
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
          {PROBLEM_METRICS.map((p) => (
            <div key={p.metric} className="problem-card" style={{ background: 'linear-gradient(135deg, #0E0E20, #121228)', border: '1px solid #1A1A35', borderRadius: '16px', padding: '28px', transition: 'border-color 0.3s, transform 0.3s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF5E5E44'; e.currentTarget.style.transform = 'translateY(-4px)' }} onMouseLeave={e => { e.currentTarget.style.borderColor = '#1A1A35'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <h3 style={{ fontSize: '29px', fontWeight: 800, margin: '0 0 10px 0', lineHeight: 1.1, color: '#FFFFFF' }}>{p.metric}</h3>
              <p style={{ color: '#8A8AAA', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
