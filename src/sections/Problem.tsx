import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type ProblemBubble = {
  big: string
  unit: string
  desc: string
  tone: 'red' | 'amber' | 'cyan' | 'violet'
  size: number
}

const PROBLEM_METRICS: ProblemBubble[] = [
  {
    big: '£11bn',
    unit: 'lost yearly to late payments',
    desc: 'UK businesses bleed cashflow and slow growth chasing invoices.',
    tone: 'red',
    size: 240,
  },
  {
    big: '24',
    unit: 'days/year of finance admin',
    desc: 'Almost a working month gone to manual money work, every year.',
    tone: 'amber',
    size: 210,
  },
  {
    big: '5.7m',
    unit: 'UK SMEs',
    desc: 'Millions need finance workflows without hiring a finance team.',
    tone: 'cyan',
    size: 210,
  },
  {
    big: '16.5m',
    unit: 'Open Banking connections',
    desc: 'Secure rails already exist. The next layer is agentic action.',
    tone: 'violet',
    size: 220,
  },
]

const TONE_GRADIENT: Record<ProblemBubble['tone'], string> = {
  red: 'radial-gradient(circle at 30% 25%, rgba(255,94,94,0.55), rgba(255,94,94,0.10) 60%, rgba(20,20,40,0.95) 100%)',
  amber: 'radial-gradient(circle at 30% 25%, rgba(255,176,82,0.50), rgba(255,176,82,0.08) 60%, rgba(20,20,40,0.95) 100%)',
  cyan: 'radial-gradient(circle at 30% 25%, rgba(0,212,255,0.45), rgba(0,212,255,0.08) 60%, rgba(20,20,40,0.95) 100%)',
  violet: 'radial-gradient(circle at 30% 25%, rgba(157,108,255,0.50), rgba(157,108,255,0.08) 60%, rgba(20,20,40,0.95) 100%)',
}

const TONE_BORDER: Record<ProblemBubble['tone'], string> = {
  red: 'rgba(255,94,94,0.55)',
  amber: 'rgba(255,176,82,0.55)',
  cyan: 'rgba(0,212,255,0.55)',
  violet: 'rgba(157,108,255,0.55)',
}

const TONE_GLOW: Record<ProblemBubble['tone'], string> = {
  red: '0 0 60px rgba(255,94,94,0.25), 0 20px 50px rgba(0,0,0,0.45)',
  amber: '0 0 60px rgba(255,176,82,0.25), 0 20px 50px rgba(0,0,0,0.45)',
  cyan: '0 0 60px rgba(0,212,255,0.22), 0 20px 50px rgba(0,0,0,0.45)',
  violet: '0 0 60px rgba(157,108,255,0.25), 0 20px 50px rgba(0,0,0,0.45)',
}

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null)
  const floatingARef = useRef<HTMLDivElement>(null)
  const floatingBRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.problem-bubble').forEach((bubble, i) => {
        gsap.from(bubble, {
          opacity: 0,
          scale: 0.6,
          y: 24,
          duration: 0.7,
          delay: i * 0.1,
          ease: 'back.out(1.6)',
          scrollTrigger: { trigger: bubble, start: 'top 88%', toggleActions: 'play none none reverse' },
        })
        gsap.to(bubble.querySelector('.problem-bubble-circle'), {
          y: i % 2 === 0 ? -10 : 10,
          duration: 3 + (i % 2),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.2,
        })
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

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 'clamp(20px, 4vw, 48px)',
            margin: '0 auto',
            maxWidth: '1100px',
          }}
        >
          {PROBLEM_METRICS.map((p) => (
            <div
              key={p.big + p.unit}
              className="problem-bubble"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: `${p.size}px`,
                maxWidth: '90vw',
              }}
            >
              <div
                className="problem-bubble-circle"
                style={{
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  maxWidth: '90vw',
                  maxHeight: '90vw',
                  borderRadius: '50%',
                  background: TONE_GRADIENT[p.tone],
                  border: `1px solid ${TONE_BORDER[p.tone]}`,
                  boxShadow: TONE_GLOW[p.tone],
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '14px',
                  position: 'relative',
                  backdropFilter: 'blur(6px)',
                }}
              >
                <div
                  style={{
                    fontSize: `${Math.round(p.size * 0.26)}px`,
                    fontWeight: 900,
                    lineHeight: 1,
                    color: '#FFFFFF',
                    letterSpacing: '-0.02em',
                    textShadow: '0 2px 18px rgba(0,0,0,0.4)',
                  }}
                >
                  {p.big}
                </div>
                <div
                  style={{
                    marginTop: '10px',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    color: '#E6E6F5',
                    maxWidth: '85%',
                    lineHeight: 1.3,
                  }}
                >
                  {p.unit}
                </div>
              </div>
              <p
                style={{
                  marginTop: '18px',
                  color: '#8A8AAA',
                  fontSize: '14px',
                  lineHeight: 1.55,
                  textAlign: 'center',
                  maxWidth: '220px',
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
