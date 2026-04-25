import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  { num: '1', title: 'Connect your accounts', desc: 'Open Banking is a secure API framework used to connect major UK banks to our platform. Built on PSD2-era standards, it lets you link accounts and permissions safely in minutes.', color: '#00D4FF' },
  { num: '2', title: 'Start from templates or build your own', desc: 'Use ready-made Minions (Invoice, Expense, Tax, Cashflow, Advisor) or configure your own custom agents for the exact jobs your business needs.', color: '#00D4FF' },
  { num: '3', title: 'Design workflows in plain English', desc: 'Define trigger-action logic across your connected financial tools: "If cash drops below £10K, pause non-essential spend and alert me." No code required.', color: '#00D4FF' },
  { num: '4', title: 'Minions run in the background', desc: 'Agents execute tasks on schedule or when triggers fire — daily, weekly, or event-driven. They work 24/7 without human intervention.', color: '#00F0C8' },
  { num: '5', title: 'You stay in control', desc: 'Review all actions in a clean dashboard. Every decision shows reasoning. Override, pause, or redirect anytime. Full audit trail included.', color: '#00F0C8' },
]

export default function Solution() {
  const sectionRef = useRef<HTMLElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.step-row').forEach((row, i) => {
        gsap.fromTo(
          row,
          { opacity: 0.25, x: i % 2 === 0 ? -36 : 36, scale: 0.97 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: { trigger: row, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        )
      })

      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleY: 0, transformOrigin: 'top center' },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'bottom 30%',
              scrub: true,
            },
          }
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="solution" style={{ padding: 'clamp(60px, 8vw, 120px) clamp(20px, 5vw, 80px)', background: '#0A0A1E' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 80px)' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '2px' }}>The Solution</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, margin: '16px 0 16px 0', lineHeight: 1.15 }}>From scattered chaos to<br />configurable autonomous workflows</h2>
          <p style={{ color: '#8A8AAA', fontSize: '14px', maxWidth: '820px', margin: '0 auto', lineHeight: 1.6 }}>
            The Second Payment Services Directive (PSD2) entered into force in January 2016 and set the foundation for secure open finance connectivity now used across UK Open Banking.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', position: 'relative' }}>
          <div style={{ position: 'absolute', left: '28px', top: '40px', bottom: '40px', width: '2px', background: 'linear-gradient(180deg, #1A1A35, #1A1A35)', opacity: 1, zIndex: 0 }} />
          <div ref={progressRef} style={{ position: 'absolute', left: '28px', top: '40px', bottom: '40px', width: '2px', background: 'linear-gradient(180deg, #00D4FF, #00F0C8)', zIndex: 1, boxShadow: '0 0 16px rgba(0,212,255,0.45)' }} />
          {STEPS.map((step) => (
            <div key={step.num} className="step-row" style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', padding: '20px 0', position: 'relative', zIndex: 2, transition: 'transform 0.25s ease, box-shadow 0.25s ease' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: `linear-gradient(135deg, ${step.color}, ${step.color}88)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '18px', color: '#000', flexShrink: 0, boxShadow: `0 0 20px ${step.color}33` }}>
                {step.num}
              </div>
              <div style={{ flex: 1, paddingTop: '4px', background: 'linear-gradient(135deg, #0E0E20, #121228)', border: '1px solid #1A1A35', borderRadius: '12px', padding: '16px 18px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 8px 0' }}>{step.title}</h3>
                <p style={{ color: '#8A8AAA', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
