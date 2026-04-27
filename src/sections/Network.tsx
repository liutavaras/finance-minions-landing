import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PARTNERS = [
  { name: 'JPMorgan Chase', category: 'Finance', logo: '/jpmorgan.png' },
  { name: 'FCA', category: 'Regulatory', logo: '/fca.png' },
  { name: 'Fidelity International', category: 'Finance', logo: '/fidelity.png' },
  { name: 'AWS', category: 'Cloud', logo: '/aws.png' },
  { name: 'Ethicsanswer', category: 'Ethics', logo: '/ethicsanswer.png' },
  { name: 'Chic Chic', category: 'Partner', logo: '/chicchic.jpeg' },
]

export default function Network() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.network-heading', { opacity: 0, y: 40, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } })
      gsap.utils.toArray<HTMLElement>('.network-logo').forEach((logo, i) => {
        gsap.from(logo, { opacity: 0, y: 20, scale: 0.9, duration: 0.5, delay: i * 0.08, scrollTrigger: { trigger: '.network-grid', start: 'top 85%', toggleActions: 'play none none reverse' } })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="network" style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 80px)', background: '#f5f7fa', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="network-heading" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 80px)' }}>
          <span className="label-mono" style={{ color: '#00b4d8' }}>Network</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, margin: '16px 0 16px 0', lineHeight: 1.15, color: '#0a1628', letterSpacing: '-1.5px' }}>
            Trusted by the ecosystem
          </h2>
          <p style={{ color: '#8896a4', maxWidth: '640px', margin: '0 auto', fontSize: '17px', lineHeight: 1.6 }}>
            Connected to leading institutions across finance, cloud, and regulatory sectors.
          </p>
        </div>

        <div className="network-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '16px' }}>
          {PARTNERS.map((p) => (
            <div key={p.name} className="network-logo" style={{ background: '#fff', border: '1px solid rgba(0, 24, 69, 0.04)', borderRadius: '16px', padding: '24px', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 24, 69, 0.04)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              <img src={p.logo} alt={p.name} style={{ width: '48px', height: '48px', objectFit: 'contain', margin: '0 auto 10px', borderRadius: '8px' }} />
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#0a1628', marginBottom: '2px' }}>{p.name}</div>
              <div className="label-mono" style={{ color: '#b0bcc8', fontSize: '9px' }}>{p.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
