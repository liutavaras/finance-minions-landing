import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.fromTo('.hero-title',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
      )
      gsap.fromTo('.hero-sub',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power3.out' }
      )
      gsap.fromTo('.hero-quote',
        { opacity: 0, y: 20 },
        { opacity: 0.6, y: 0, duration: 0.7, delay: 0.65, ease: 'power3.out' }
      )
      gsap.fromTo('.hero-cta-row',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.85, ease: 'power3.out' }
      )
      gsap.fromTo('.hero-trust',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, delay: 1.05, ease: 'power3.out' }
      )

      // Floating cards stagger entrance
      gsap.fromTo('.float-card',
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          delay: 0.7,
          ease: 'power3.out',
        }
      )

      // Continuous floating animation for cards (yoyo)
      gsap.to('.float-card-1', {
        y: '-=12',
        rotation: 2,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })
      gsap.to('.float-card-2', {
        y: '-=16',
        rotation: -2,
        duration: 3.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 0.5,
      })
      gsap.to('.float-card-3', {
        y: '-=10',
        rotation: 1.5,
        duration: 2.8,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1,
      })

      // Decorative rings slow rotation
      gsap.to('.hero-ring-1', {
        rotation: 360,
        duration: 60,
        ease: 'none',
        repeat: -1,
      })
      gsap.to('.hero-ring-2', {
        rotation: -360,
        duration: 80,
        ease: 'none',
        repeat: -1,
      })

      // Scroll-driven EXIT — using fromTo for perfect reversibility
      const scrollElements = ['.hero-title', '.hero-sub', '.hero-quote', '.hero-cta-row', '.hero-trust', '.float-card']
      scrollElements.forEach((sel, i) => {
        gsap.fromTo(sel,
          { opacity: 1, y: 0, filter: 'blur(0px)' },
          {
            opacity: 0,
            y: -30 - i * 5,
            filter: 'blur(4px)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: '+=60%',
              scrub: 1,
            },
          }
        )
      })

      // Mouse parallax on floating cards
      const handleMouseMove = (e: MouseEvent) => {
        if (!cardsRef.current) return
        const rect = cardsRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height

        gsap.to('.float-card-1', { x: x * 12, y: `+=${y * 6}`, duration: 0.8, ease: 'power2.out', overwrite: 'auto' })
        gsap.to('.float-card-2', { x: x * -8, y: `+=${y * 4}`, duration: 0.9, ease: 'power2.out', overwrite: 'auto' })
        gsap.to('.float-card-3', { x: x * 6, y: `+=${y * 8}`, duration: 0.7, ease: 'power2.out', overwrite: 'auto' })
      }
      window.addEventListener('mousemove', handleMouseMove)

      // Cleanup function
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '140px 20px 80px',
        position: 'relative',
        overflow: 'hidden',
        background: '#ffffff',
      }}
    >
      {/* Background effects */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
        <div className="glow-1" style={{ position: 'absolute', width: '55%', height: '55%', top: '0%', left: '0%', background: 'radial-gradient(circle, rgba(0,180,216,0.06) 0%, rgba(0,180,216,0.01) 50%, transparent 70%)', borderRadius: '100%', filter: 'blur(80px)', opacity: 0.9 }} />
        <div className="glow-2" style={{ position: 'absolute', width: '45%', height: '45%', top: '45%', right: '-5%', background: 'radial-gradient(circle, rgba(67,97,238,0.05) 0%, rgba(67,97,238,0.01) 50%, transparent 70%)', borderRadius: '100%', filter: 'blur(80px)', opacity: 0.8 }} />
        <div className="glow-3" style={{ position: 'absolute', width: '40%', height: '40%', bottom: '0%', left: '20%', background: 'radial-gradient(circle, rgba(82,183,136,0.04) 0%, rgba(82,183,136,0.01) 50%, transparent 70%)', borderRadius: '100%', filter: 'blur(80px)', opacity: 0.7 }} />
      </div>

      {/* Dot grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(10,22,40,0.022) 1px, transparent 0)', backgroundSize: '40px 40px', opacity: 0.7, zIndex: 0, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center', position: 'relative', zIndex: 2 }}>
        {/* Left column — text */}
        <div style={{ maxWidth: '560px' }}>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.05, margin: '0 0 24px 0', letterSpacing: '-2.5px', color: '#0a1628' }}>
            Finance workflows,
            <br />
            <span className="gradient-text" style={{
              background: 'linear-gradient(90deg, #00b4d8, #4361ee, #52b788, #00b4d8)',
              backgroundSize: '300% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>automated.</span>
          </h1>

          <p className="hero-sub" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: '#8896a4', lineHeight: 1.65, margin: '0 0 12px 0', fontWeight: 400 }}>
            We make it easy to configure Open Banking powered workflows that act on your money, your way.
          </p>
          <p className="hero-quote" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1rem)', color: '#0a1628', lineHeight: 1.6, fontWeight: 500, opacity: 0.6, margin: '0 0 36px 0' }}>
            "Finance is personal — this is what it can do for us, what can it do for you?"
          </p>

          <div className="hero-cta-row" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <a href="#waitlist" style={{ padding: '16px 32px', borderRadius: '16px', background: '#001845', color: '#fff', fontWeight: 600, fontSize: '15px', textDecoration: 'none', transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: '8px' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#002a6e'; e.currentTarget.style.transform = 'scale(0.98)' }} onMouseLeave={(e) => { e.currentTarget.style.background = '#001845'; e.currentTarget.style.transform = 'scale(1)' }}>
              Join Waitlist
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#problem" style={{ padding: '16px 32px', borderRadius: '16px', border: '1px solid rgba(0, 24, 69, 0.08)', color: '#8896a4', fontWeight: 500, fontSize: '15px', textDecoration: 'none', transition: 'all 0.2s', background: 'transparent' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0a1628'; e.currentTarget.style.color = '#0a1628' }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0, 24, 69, 0.08)'; e.currentTarget.style.color = '#8896a4' }}>
              See the Problem
            </a>
          </div>

          <p className="hero-trust" style={{ fontSize: '12px', color: '#b0bcc8', margin: 0, fontFamily: "'Space Mono', monospace", letterSpacing: '0.5px' }}>
            Built on Open Banking &bull; End-to-end encrypted &bull; FCA aligned
          </p>
        </div>

        {/* Right column — floating cards */}
        <div ref={cardsRef} style={{ position: 'relative', height: '440px', display: 'none' }} className="hero-visual">
          {/* Prompt card */}
          <div className="float-card float-card-1" style={{ position: 'absolute', top: '5%', left: '8%', background: '#fff', border: '1px solid rgba(0, 24, 69, 0.05)', borderRadius: '20px', padding: '20px 24px', boxShadow: '0 20px 60px rgba(0, 24, 69, 0.06)', maxWidth: '340px', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00b4d8' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e8ecef' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e8ecef' }} />
              <span className="label-mono" style={{ color: '#b0bcc8', marginLeft: '6px', fontSize: '9px' }}>User Prompt</span>
            </div>
            <p style={{ fontSize: '13px', color: '#0a1628', margin: '0 0 10px 0', fontWeight: 500, fontStyle: 'italic', lineHeight: 1.5 }}>
              "Pay all invoices under 14 days and set a reminder to review vendor contracts."
            </p>
          </div>

          {/* Processing card */}
          <div className="float-card float-card-2" style={{ position: 'absolute', top: '38%', right: '2%', background: '#fff', border: '1px solid rgba(0, 180, 216, 0.12)', borderRadius: '20px', padding: '16px 20px', boxShadow: '0 12px 40px rgba(0, 180, 216, 0.08)', zIndex: 3, maxWidth: '240px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(0,180,216,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              </div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#0a1628' }}>Invoice Minion</div>
                <div className="label-mono" style={{ color: '#00b4d8', fontSize: '9px' }}>Processing... 3 invoices paid</div>
              </div>
            </div>
          </div>

          {/* Done card */}
          <div className="float-card float-card-3" style={{ position: 'absolute', bottom: '8%', left: '3%', background: '#fff', border: '1px solid rgba(82,183,136,0.12)', borderRadius: '20px', padding: '16px 20px', boxShadow: '0 12px 40px rgba(82,183,136,0.06)', zIndex: 2, maxWidth: '220px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(82,183,136,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#52b788" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#0a1628' }}>All done</div>
                <div className="label-mono" style={{ color: '#52b788', fontSize: '9px' }}>Reminder set for next month</div>
              </div>
            </div>
          </div>

          {/* Decorative rings */}
          <div className="hero-ring-1" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '280px', height: '280px', borderRadius: '50%', border: '1px solid rgba(0, 180, 216, 0.08)', pointerEvents: 'none' }} />
          <div className="hero-ring-2" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '360px', height: '360px', borderRadius: '50%', border: '1px solid rgba(67, 97, 238, 0.05)', pointerEvents: 'none' }} />

          {/* Floating particles */}
          <div style={{ position: 'absolute', top: '15%', left: '50%', width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(0,180,216,0.3)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '55%', left: '15%', width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(67,97,238,0.25)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '75%', right: '20%', width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(82,183,136,0.3)', pointerEvents: 'none' }} />
        </div>
      </div>

      {/* Animated gradient for the "automated" text */}
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .gradient-text {
          animation: gradient-shift 6s ease infinite;
        }
        @media (max-width: 768px) {
          #hero > div:first-of-type + div { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
        }
        @media (min-width: 769px) {
          .hero-visual { display: block !important; }
        }
      `}</style>
    </section>
  )
}
