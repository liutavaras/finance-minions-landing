import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Closing() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.closing-heading', { opacity: 0, y: 50, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } })
      gsap.from('.closing-card', { opacity: 0, y: 30, duration: 0.7, stagger: 0.12, scrollTrigger: { trigger: '.closing-cards', start: 'top 85%', toggleActions: 'play none none reverse' } })
      gsap.from('.closing-cta', { opacity: 0, y: 30, duration: 0.7, scrollTrigger: { trigger: '.closing-cta', start: 'top 90%', toggleActions: 'play none none reverse' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="closing" style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 80px)', background: '#f5f7fa', position: 'relative' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="closing-heading" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 60px)' }}>
          <span className="label-mono" style={{ color: '#00b4d8' }}>Closing</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, margin: '16px 0 24px 0', lineHeight: 1.15, color: '#0a1628', letterSpacing: '-1.5px' }}>
            Let's take care of your money so<br />you can focus on growing your business.
          </h2>
          <p style={{ fontStyle: 'italic', color: '#8896a4', maxWidth: '640px', margin: '0 auto 20px', fontSize: '16px', lineHeight: 1.6 }}>
            We only work as hard as you make us. We don't replace humans, we support them.
          </p>
          <p style={{ color: '#0a1628', fontWeight: 600, maxWidth: '640px', margin: '0 auto', fontSize: '16px', lineHeight: 1.6, opacity: 0.7 }}>
            Let us handle the heavy lifting — invoice payments, expense tracking, and taxes — so you can focus on what matters most: building the business you love.
          </p>
        </div>

        <div className="closing-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '48px' }}>
          {[
            { icon: '🏦', text: 'UK open banking enabled', desc: 'Connect your accounts securely' },
            { icon: '🔒', text: 'End-to-end encrypted', desc: 'Your data is always protected' },
            { icon: '🤝', text: 'No unnecessary hires', desc: 'Automate, don\'t replace' },
            { icon: '🧠', text: '100% transparent', desc: 'Every decision logged' },
          ].map((item) => (
            <div key={item.text} className="closing-card" style={{ background: '#fff', border: '1px solid rgba(0, 24, 69, 0.04)', borderRadius: '20px', padding: '24px', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 24, 69, 0.03)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#0a1628', marginBottom: '4px' }}>{item.text}</div>
              <div style={{ fontSize: '13px', color: '#8896a4', lineHeight: 1.5 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="closing-cta" style={{ textAlign: 'center' }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '20px 48px', borderRadius: '20px', background: '#001845', color: '#fff', fontWeight: 600, fontSize: '16px', textDecoration: 'none', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#002a6e'; e.currentTarget.style.transform = 'scale(0.98)' }} onMouseLeave={(e) => { e.currentTarget.style.background = '#001845'; e.currentTarget.style.transform = 'scale(1)' }}>
            Join the Waitlist
          </a>
        </div>
      </div>
    </section>
  )
}
