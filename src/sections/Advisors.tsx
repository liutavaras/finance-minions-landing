import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ADVISORS = [
  {
    name: 'Dan Beresford',
    role: 'Director for Investor Acquisition and Open Banking at Fidelity International',
    bio: 'Deep expertise in Open Banking strategy, investor relations, and financial services partnerships.',
    photo: '/daniel.jpeg',
    linkedin: 'https://www.linkedin.com/in/dsberesford/',
  },
  {
    name: 'Robert Greenwood',
    role: 'Ex-CPO at eXate | Ex-Director of API Strategy at Fidelity International',
    bio: 'Product and API strategy veteran with deep experience in data governance and financial platform architecture.',
    photo: '/rob.jpeg',
    linkedin: 'https://www.linkedin.com/in/robert-greenwood-4889a617/',
  },
  {
    name: 'Tim Moss',
    role: 'Managing Director and Head of Cloud Platform Enablement at JPMorgan Chase & Co',
    bio: 'Cloud infrastructure and platform leadership at one of the world\'s largest banks.',
    photo: '/tim.jpeg',
    linkedin: 'https://www.linkedin.com/in/tim-moss-3857202/',
  },
]

export default function Advisors() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.advisors-heading', {
        opacity: 0, y: 40, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
      })
      gsap.utils.toArray<HTMLElement>('.advisor-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0, y: 40, duration: 0.6, delay: i * 0.12,
          scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none reverse' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="advisors" style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 80px)', background: '#ffffff', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="advisors-heading" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 80px)' }}>
          <span className="label-mono" style={{ color: '#00b4d8' }}>Advisory Board</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, margin: '16px 0 16px 0', lineHeight: 1.15, color: '#0a1628', letterSpacing: '-1.5px' }}>
            Guided by industry experts
          </h2>
          <p style={{ color: '#8896a4', maxWidth: '640px', margin: '0 auto', fontSize: '17px', lineHeight: 1.6 }}>
            Our advisors bring decades of experience across payments, cloud infrastructure, and financial services.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {ADVISORS.map((a) => (
            <div key={a.name} className="advisor-card" style={{ background: '#fafbfc', border: '1px solid rgba(0, 24, 69, 0.04)', borderRadius: '24px', padding: '28px', transition: 'transform 0.3s, box-shadow 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 24, 69, 0.05)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <img src={a.photo} alt={a.name} style={{ width: '64px', height: '64px', borderRadius: '16px', objectFit: 'cover', flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, margin: '0 0 4px 0', color: '#0a1628' }}>{a.name}</h3>
                  <a href={a.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: '#00b4d8', textDecoration: 'none', fontWeight: 500 }}>LinkedIn profile &rarr;</a>
                </div>
              </div>
              <div className="label-mono" style={{ color: '#b0bcc8', fontSize: '10px', marginBottom: '8px' }}>{a.role}</div>
              <p style={{ fontSize: '14px', color: '#8896a4', lineHeight: 1.6, margin: 0 }}>{a.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          #advisors .advisor-card { padding: 22px !important; }
          #advisors .advisor-card img { width: 56px !important; height: 56px !important; }
        }
      `}</style>
    </section>
  )
}
