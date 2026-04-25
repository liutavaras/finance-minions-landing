import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Minions', href: '#minions' },
  { label: 'Features', href: '#features' },
  { label: 'Team', href: '#founders' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '12px clamp(16px, 4vw, 40px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(5, 5, 16, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid #1A1A35' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <a href="#hero" style={{ fontSize: '18px', fontWeight: 800, textDecoration: 'none', background: 'linear-gradient(135deg, #00D4FF, #00F0C8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Finance Minions
      </a>

      {/* Desktop nav */}
      <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
        {NAV_ITEMS.map((item) => (
          <a key={item.label} href={item.href} style={{ fontSize: '13px', color: '#8A8AAA', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#00D4FF'} onMouseLeave={e => e.currentTarget.style.color = '#8A8AAA'}>
            {item.label}
          </a>
        ))}
        <a href="http://13.40.137.17/" target="_blank" rel="noopener noreferrer" style={{ padding: '8px 20px', borderRadius: '50px', background: 'linear-gradient(135deg, #00D4FF, #00B8E0)', color: '#000', fontWeight: 700, fontSize: '13px', textDecoration: 'none', transition: 'opacity 0.2s' }} onMouseEnter={e => e.currentTarget.style.opacity = '0.9'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
          Try It
        </a>
      </div>

      {/* Mobile hamburger */}
      <button className="nav-mobile-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', color: '#8A8AAA', cursor: 'pointer', padding: '6px' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav-mobile-menu" style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'rgba(5, 5, 16, 0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid #1A1A35', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} style={{ fontSize: '15px', color: '#E0E0E0', textDecoration: 'none', padding: '10px 0' }}>{item.label}</a>
          ))}
          <a href="http://13.40.137.17/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} style={{ padding: '12px', borderRadius: '10px', background: 'linear-gradient(135deg, #00D4FF, #00B8E0)', color: '#000', fontWeight: 700, fontSize: '14px', textDecoration: 'none', textAlign: 'center' }}>Try It</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-btn { display: none !important; }
          .nav-mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
