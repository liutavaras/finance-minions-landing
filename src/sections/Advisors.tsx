import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ADVISORS = [
  {
    name: 'Dan Beresford',
    role: 'Director for Investor Acquisition and Open Banking at Fidelity International',
    bio: 'Deep expertise in Open Banking strategy, investor relations, and financial services partnerships.',
    photo: '/advisor-dan.png',
    linkedin: 'https://www.linkedin.com/in/dsberesford/',
  },
  {
    name: 'Robert Greenwood',
    role: 'Ex-CPO at eXate | Ex-Director of API Strategy at Fidelity International',
    bio: 'Product and API strategy veteran with deep experience in data governance and financial platform architecture.',
    photo: '/advisor-robert.png',
    linkedin: 'https://www.linkedin.com/in/robert-greenwood-4889a617/',
  },
  {
    name: 'Tim Moss',
    role: 'Managing Director and Head of Cloud Platform Enablement at JPMorgan Chase & Co',
    bio: 'Cloud infrastructure and platform leadership at one of the world\'s largest banks.',
    photo: '/advisor-tim.png',
    linkedin: 'https://www.linkedin.com/in/tim-moss-3857202/',
  },
]

const NETWORK = [
  {
    name: 'Stefano Vaccino',
    role: 'CEO at Yapily',
    url: 'https://www.linkedin.com/in/stefanovaccino/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bn3GRCXUGRuaVTKvbk8ecXQ%3D%3D',
    photo: '/network-stefano.png',
  },
  {
    name: 'Francesco Simoneschi',
    role: 'CEO at TrueLayer',
    url: 'https://www.linkedin.com/in/francescosimoneschi/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BWSPnBBDeRp6vLYIa2rnilA%3D%3D',
    photo: '/network-francesco.png',
  },
]

export default function Advisors() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.advisor-card').forEach((card, i) => {
        gsap.from(card, { opacity: 0, y: 30, duration: 0.6, delay: i * 0.12, scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none reverse' } })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="advisors" style={{ padding: 'clamp(60px, 8vw, 120px) clamp(20px, 5vw, 80px)', background: '#0A0A1E' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Agreed advisors */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 80px)' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '2px' }}>Advisory Board</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, margin: '16px 0 16px 0', lineHeight: 1.15 }}>Guided by industry leaders</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginBottom: '80px' }}>
          {ADVISORS.map((a) => (
            <div key={a.name} className="advisor-card" style={{ background: 'linear-gradient(135deg, #0E0E20, #121228)', border: '1px solid #1A1A35', borderRadius: '16px', padding: '28px', transition: 'border-color 0.3s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#00D4FF44' }} onMouseLeave={e => { e.currentTarget.style.borderColor = '#1A1A35' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: `url(${a.photo}) center/cover no-repeat`, border: '2px solid #1A1A35', flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 4px 0' }}>{a.name}</h3>
                  <p style={{ fontSize: '12px', color: '#8A8AAA', margin: 0, lineHeight: 1.4 }}>{a.role}</p>
                </div>
              </div>
              <p style={{ color: '#8A8AAA', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>{a.bio}</p>
              <a
                href={a.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', marginTop: '12px', fontSize: '12px', color: '#00D4FF', textDecoration: 'none' }}
              >
                LinkedIn profile
              </a>
            </div>
          ))}
        </div>

        {/* Wider network */}
        <div style={{ background: 'linear-gradient(135deg, #0A0A1E, #0E0E28)', border: '1px solid #1A1A35', borderRadius: '20px', padding: 'clamp(28px, 3vw, 48px)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 700, textAlign: 'center', margin: '0 0 8px 0' }}>Wider Network</h3>
          <p style={{ fontSize: '14px', color: '#8A8AAA', textAlign: 'center', margin: '0 0 28px 0' }}>Connected to the leading voices in Open Banking and fintech.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {NETWORK.map((n) => (
              <a key={n.name} href={n.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 24px', background: '#0E0E20', border: '1px solid #1A1A35', borderRadius: '12px', textDecoration: 'none', color: '#E0E0E0', transition: 'border-color 0.3s, transform 0.2s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#00D4FF44'; e.currentTarget.style.transform = 'translateY(-2px)' }} onMouseLeave={e => { e.currentTarget.style.borderColor = '#1A1A35'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <img
                  src={n.photo}
                  alt={`${n.name} profile`}
                  style={{ width: '44px', height: '44px', borderRadius: '50%', border: '2px solid #1A1A35', flexShrink: 0, objectFit: 'cover' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement | null
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', border: '2px solid #1A1A35', flexShrink: 0, background: '#121228', color: '#8A8AAA', display: 'none', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>
                  {n.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600 }}>{n.name}</div>
                  <div style={{ fontSize: '12px', color: '#8A8AAA' }}>{n.role}</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555577" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
