import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FOUNDERS = [
  {
    name: 'Liutauras Mazonas',
    role: 'Co-founder',
    photo: '/liutauras-pic.jpeg',
    linkedin: 'https://www.linkedin.com/in/liutauras-mazonas/',
    bio: 'Product leader in financial services, currently VP of Product Management (Public Cloud) at JPMorgan Chase. Background spans cloud architecture, regulatory finance environments, and API-led platform strategy.',
    firms: [
      { name: 'JPMorgan Chase', logo: '/jpmorgan.png' },
      { name: 'Financial Conduct Authority', logo: '/fca.png' },
      { name: 'Fidelity International', logo: '/fidelity.png' },
    ],
  },
  {
    name: 'Khizar Malik',
    role: 'Co-founder',
    photo: '/khizar.jpeg',
    linkedin: 'https://www.linkedin.com/in/malikkhizar1/',
    bio: 'Software Engineer at JPMorgan Chase, ex-AWS cloud architect in Global Financial Services. Focused on scalable cloud automation, infrastructure as code, and AI-enabled financial workflows.',
    firms: [
      { name: 'JPMorgan Chase', logo: '/jpmorgan.png' },
      { name: 'Amazon Web Services', logo: '/aws.png' },
      { name: 'Ethicsanswer', logo: '/ethicsanswer.png' },
      { name: 'Fidelity International', logo: '/fidelity.png' },
    ],
  },
]

export default function Founders() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.founders-heading', { opacity: 0, y: 40, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } })
      gsap.utils.toArray<HTMLElement>('.founder-card').forEach((card, i) => {
        gsap.from(card, { opacity: 0, y: 50, duration: 0.7, delay: i * 0.15, scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' } })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="founders" style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 80px)', background: '#f5f7fa', position: 'relative' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div className="founders-heading" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 80px)' }}>
          <span className="label-mono" style={{ color: '#00b4d8' }}>Meet the Team</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, margin: '16px 0 16px 0', lineHeight: 1.15, color: '#0a1628', letterSpacing: '-1.5px' }}>
            Built by finance & AI veterans
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', justifyContent: 'center' }}>
          {FOUNDERS.map((f) => (
            <div key={f.name} className="founder-card" style={{ background: '#fff', border: '1px solid rgba(0, 24, 69, 0.04)', borderRadius: '24px', padding: '28px', transition: 'transform 0.3s, box-shadow 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 24, 69, 0.05)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <img src={f.photo} alt={f.name} style={{ width: '64px', height: '64px', borderRadius: '16px', objectFit: 'cover', flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 4px 0', color: '#0a1628' }}>{f.name}</h3>
                  <div className="label-mono" style={{ color: '#00b4d8', fontSize: '10px' }}>{f.role}</div>
                  <a href={f.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: '#00b4d8', textDecoration: 'none', fontWeight: 500 }}>LinkedIn profile &rarr;</a>
                </div>
              </div>
              <p style={{ color: '#8896a4', fontSize: '14px', lineHeight: 1.6, margin: '0 0 20px 0' }}>{f.bio}</p>
              <div className="label-mono" style={{ color: '#b0bcc8', fontSize: '10px', marginBottom: '12px' }}>Worked with</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {f.firms.map((firm) => (
                  <div key={`${f.name}-${firm.name}`} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#f5f7fa', borderRadius: '8px', padding: '4px 10px', border: '1px solid rgba(0,24,69,0.03)' }}>
                    <img src={firm.logo} alt={firm.name} style={{ width: '18px', height: '18px', borderRadius: '3px', objectFit: 'contain', flexShrink: 0 }} />
                    <span style={{ fontSize: '11px', color: '#8896a4', fontWeight: 500 }}>{firm.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
