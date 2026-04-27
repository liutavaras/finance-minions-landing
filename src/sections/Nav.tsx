import { useState, useEffect, useRef } from 'react'

const NAV_ITEMS = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Team', href: '#founders' },
  { label: 'Advisors', href: '#advisors' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 50)
      if (currentY > lastScrollY.current && currentY > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: hidden ? '-100px' : '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        maxWidth: '1100px',
        width: 'calc(100% - 48px)',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.78)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRadius: '9999px',
        border: '1px solid rgba(0, 24, 69, 0.04)',
        boxShadow: scrolled
          ? '0 8px 32px rgba(0, 24, 69, 0.06), 0 1px 3px rgba(0, 24, 69, 0.02)'
          : '0 2px 12px rgba(0, 24, 69, 0.02)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <a
        href="#hero"
        style={{
          fontSize: '16px',
          fontWeight: 700,
          textDecoration: 'none',
          color: '#001845',
          letterSpacing: '-0.5px',
          whiteSpace: 'nowrap',
        }}
      >
        FinchFlow
      </a>

      <div
        className="nav-desktop"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            style={{
              fontSize: '13px',
              color: '#8896a4',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'all 0.2s',
              padding: '6px 14px',
              borderRadius: '9999px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0a1628'
              e.currentTarget.style.background = 'rgba(0, 24, 69, 0.03)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#8896a4'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            {item.label}
          </a>
        ))}
        <a
          href="http://13.40.137.17/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '8px 20px',
            borderRadius: '9999px',
            background: '#001845',
            color: '#fff',
            fontWeight: 600,
            fontSize: '13px',
            textDecoration: 'none',
            transition: 'all 0.2s',
            marginLeft: '4px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#002a6e'
            e.currentTarget.style.transform = 'scale(0.98)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#001845'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          Try It
        </a>
      </div>

      <button
        className="nav-mobile-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: '#001845',
          cursor: 'pointer',
          padding: '6px',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(24px)',
            borderRadius: '24px',
            border: '1px solid rgba(0, 24, 69, 0.04)',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            boxShadow: '0 16px 48px rgba(0, 24, 69, 0.08)',
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '15px',
                color: '#0a1628',
                textDecoration: 'none',
                padding: '10px 16px',
                borderRadius: '12px',
                fontWeight: 500,
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 24, 69, 0.03)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="http://13.40.137.17/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              padding: '12px',
              borderRadius: '12px',
              background: '#001845',
              color: '#fff',
              fontWeight: 600,
              fontSize: '14px',
              textDecoration: 'none',
              textAlign: 'center',
              marginTop: '4px',
            }}
          >
            Try It
          </a>
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
