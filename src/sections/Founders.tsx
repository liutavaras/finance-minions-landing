import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FOUNDERS = [
  {
    name: 'Liutauras Mazonas',
    role: 'Co-founder',
    photo: '/founder-liutauras.png',
    linkedin: 'https://www.linkedin.com/in/liutauras-mazonas/',
    bio: 'Product leader in financial services, currently VP of Product Management (Public Cloud) at JPMorgan Chase. Background spans cloud architecture, regulatory finance environments, and API-led platform strategy.',
    firms: ['JPMorgan Chase', 'Financial Conduct Authority', 'Fidelity International'],
  },
  {
    name: 'Khizar Malik',
    role: 'Co-founder',
    photo: '/founder-khizar.png',
    linkedin: 'https://www.linkedin.com/in/malikkhizar1/',
    bio: 'Software Engineer at JPMorgan Chase, ex-AWS cloud architect in Global Financial Services. Focused on scalable cloud automation, infrastructure as code, and AI-enabled financial workflows.',
    firms: ['JPMorgan Chase', 'Amazon Web Services', 'Ethicsanswer', 'Fidelity International'],
  },
]

const FIRM_LOGOS: Record<string, string> = {
  ChicChic: '/logo-chicchic.png',
  'JPMorgan Chase': '/logo-jpmorgan.png',
  'Financial Conduct Authority': '/logo-fca.png',
  'Fidelity International': '/logo-fidelity.png',
  'Amazon Web Services': '/logo-aws.png',
  Ethicsanswer: '/logo-ethicsanswer.png',
}

export default function Founders() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.founder-card').forEach((card, i) => {
        gsap.from(card, { opacity: 0, y: 40, duration: 0.7, delay: i * 0.15, scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' } })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="founders" style={{ padding: 'clamp(60px, 8vw, 120px) clamp(20px, 5vw, 80px)', background: '#050510' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Founders */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 80px)' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '2px' }}>Why Us</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, margin: '16px 0 16px 0', lineHeight: 1.15 }}>Built by people who know<br />finance, AI, and code</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 420px))', gap: '18px', marginBottom: '44px', justifyContent: 'center' }}>
          {FOUNDERS.map((f) => (
            <div key={f.name} className="founder-card" style={{ background: 'linear-gradient(135deg, #0E0E20, #121228)', border: '1px solid #1A1A35', borderRadius: '16px', padding: '16px', transition: 'border-color 0.3s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#00D4FF44' }} onMouseLeave={e => { e.currentTarget.style.borderColor = '#1A1A35' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <img
                  src={f.photo}
                  alt={`${f.name} profile`}
                  style={{ width: '72px', height: '72px', borderRadius: '14px', objectFit: 'cover', objectPosition: 'center 24%', border: '1px solid #1A1A35', flexShrink: 0 }}
                />
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 2px 0' }}>{f.name}</h3>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>{f.role}</div>
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', fontSize: '11px', color: '#00D4FF', textDecoration: 'none' }}
                  >
                    LinkedIn profile
                  </a>
                </div>
              </div>

              <p style={{ color: '#8A8AAA', fontSize: '12px', lineHeight: 1.5, margin: '0 0 12px 0' }}>{f.bio}</p>

              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: '#555577', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Worked with
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {f.firms.map((firm) => (
                  <div key={`${f.name}-${firm}`} style={{ background: 'rgba(0,212,255,0.06)', border: '1px solid #1A1A35', borderRadius: '8px', padding: '8px', display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                    <img
                      src={FIRM_LOGOS[firm] ?? ''}
                      alt={`${firm} logo`}
                      style={{ width: '16px', height: '16px', borderRadius: '4px', objectFit: 'contain', background: '#fff', padding: '2px', flexShrink: 0 }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement | null
                        if (fallback) fallback.style.display = 'flex'
                      }}
                    />
                    <div style={{ display: 'none', width: '16px', height: '16px', borderRadius: '4px', background: '#1A1A35', color: '#8A8AAA', fontSize: '9px', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                      {firm.slice(0, 1)}
                    </div>
                    <div style={{ fontSize: '11px', color: '#B0B0CC', fontWeight: 600, lineHeight: 1.2 }}>{firm}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: '10px', color: '#555577', marginTop: '10px' }}>
                Full role-by-role journey is shown in Career Roadmap below.
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
