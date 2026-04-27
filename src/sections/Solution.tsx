import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  { num: '01', title: 'Connect your accounts', desc: 'Open Banking is a secure API framework used to connect major UK banks to our platform. Built on PSD2-era standards, it lets you link accounts and permissions safely in minutes.', accent: '#00b4d8' },
  { num: '02', title: 'Start from templates or build your own', desc: 'Use ready-made Minions (Invoice, Expense, Tax, Cashflow, Advisor) or configure your own custom agents for the exact jobs your business needs.', accent: '#4361ee' },
  { num: '03', title: 'Design workflows in plain English', desc: 'Define trigger-action logic across your connected financial tools: "If cash drops below \u00a310K, pause non-essential spend and alert me." No code required.', accent: '#52b788' },
  { num: '04', title: 'Minions run in the background', desc: 'Agents execute tasks on schedule or when triggers fire \u2014 daily, weekly, or event-driven. They work 24/7 without human intervention.', accent: '#f5a623' },
  { num: '05', title: 'You stay in control', desc: 'Review all actions in a clean dashboard. Every decision shows reasoning. Override, pause, or redirect anytime. Full audit trail included.', accent: '#9d4edd' },
]

export default function Solution() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading entrance
      gsap.from('.solution-heading', {
        opacity: 0, y: 40, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
      })

      // Pin the timeline and reveal steps one by one as user scrolls
      const stepEls = gsap.utils.toArray<HTMLElement>('.timeline-step')

      // Animate the connecting line fill
      if (lineRef.current) {
        gsap.fromTo(lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 75%',
              end: 'bottom 60%',
              scrub: true,
            },
          }
        )
      }

      // Each step animates in sequentially
      stepEls.forEach((step) => {
        const content = step.querySelector('.step-content')
        const dot = step.querySelector('.step-dot')
        const num = step.querySelector('.step-num')

        // Content slides in from right
        gsap.from(content, {
          opacity: 0,
          x: 40,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        })

        // Dot scales up
        gsap.from(dot, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          delay: 0.1,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        })

        // Number fades
        gsap.from(num, {
          opacity: 0,
          duration: 0.5,
          delay: 0.2,
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        })

        // Highlight active step on scroll
        ScrollTrigger.create({
          trigger: step,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => {
            gsap.to(content, { opacity: 1, y: 0, duration: 0.4 })
            gsap.to(dot, { scale: 1.2, duration: 0.3 })
          },
          onLeaveBack: () => {
            gsap.to(content, { opacity: 0.35, duration: 0.4 })
            gsap.to(dot, { scale: 1, duration: 0.3 })
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="solution" style={{ padding: 'clamp(100px, 12vw, 160px) clamp(20px, 5vw, 80px)', background: '#f5f7fa', position: 'relative', overflow: 'hidden' }}>
      {/* Soft background accent */}
      <div style={{ position: 'absolute', top: '30%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(67,97,238,0.03), transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div className="solution-heading" style={{ textAlign: 'center', marginBottom: 'clamp(60px, 8vw, 100px)' }}>
          <span className="label-mono" style={{ color: '#4361ee' }}>The Solution</span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 700, margin: '16px 0 20px 0', lineHeight: 1.1, color: '#0a1628', letterSpacing: '-1.5px' }}>
            From scattered chaos to<br /><span style={{ color: '#4361ee' }}>autonomous workflows</span>
          </h2>
          <p style={{ color: '#8896a4', fontSize: '16px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.65 }}>
            The Second Payment Services Directive (PSD2) entered into force in January 2016 and set the foundation for secure open finance connectivity now used across UK Open Banking.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div ref={timelineRef} style={{ position: 'relative', paddingLeft: '48px' }}>
          {/* Vertical connecting line */}
          <div style={{ position: 'absolute', left: '15px', top: '24px', bottom: '24px', width: '2px', background: 'rgba(0,24,69,0.06)', borderRadius: '2px' }}>
            <div ref={lineRef} style={{ width: '100%', height: '100%', background: 'linear-gradient(180deg, #00b4d8, #4361ee, #52b788, #f5a623, #9d4edd)', borderRadius: '2px', transformOrigin: 'top center', transform: 'scaleY(0)' }} />
          </div>

          {STEPS.map((step, i) => (
            <div key={step.num} className="timeline-step" style={{ position: 'relative', marginBottom: i === STEPS.length - 1 ? 0 : '48px', opacity: 1 }}>
              {/* Dot */}
              <div className="step-dot" style={{ position: 'absolute', left: '-48px', top: '4px', width: '32px', height: '32px', borderRadius: '50%', background: step.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 16px ${step.accent}30`, zIndex: 2 }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 700, fontFamily: "'Space Mono', monospace" }}>{step.num}</span>
              </div>

              {/* Content card */}
              <div className="step-content" style={{ background: '#fff', border: '1px solid rgba(0, 24, 69, 0.04)', borderRadius: '24px', padding: 'clamp(24px, 3vw, 36px)', transition: 'transform 0.3s, box-shadow 0.3s', position: 'relative' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(6px)'; e.currentTarget.style.boxShadow = `0 12px 40px ${step.accent}10` }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = 'none' }}>
                {/* Accent stripe */}
                <div style={{ position: 'absolute', left: 0, top: '20%', width: '3px', height: '60%', background: step.accent, borderRadius: '0 4px 4px 0', opacity: 0.5 }} />

                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '12px' }}>
                  <h3 style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 700, margin: 0, color: '#0a1628', lineHeight: 1.3 }}>
                    {step.title}
                  </h3>
                  <span className="step-num label-mono" style={{ color: step.accent, fontSize: '11px', flexShrink: 0, marginTop: '4px' }}>
                    {step.num}
                  </span>
                </div>
                <p style={{ fontSize: '15px', color: '#8896a4', lineHeight: 1.65, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
