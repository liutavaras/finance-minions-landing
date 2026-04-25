export default function Footer() {
  return (
    <footer style={{ padding: '40px clamp(20px, 5vw, 80px)', background: '#050510', borderTop: '1px solid #1A1A35' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <span style={{ fontSize: '18px', fontWeight: 800, background: 'linear-gradient(135deg, #00D4FF, #00F0C8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Finance Minions</span>
          <p style={{ fontSize: '12px', color: '#555577', margin: '6px 0 0 0' }}>AI agents for small business finance. Built by ChicChic Ltd.</p>
        </div>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <a href="#problem" style={{ fontSize: '13px', color: '#8A8AAA', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#00D4FF'} onMouseLeave={e => e.currentTarget.style.color = '#8A8AAA'}>Problem</a>
          <a href="#solution" style={{ fontSize: '13px', color: '#8A8AAA', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#00D4FF'} onMouseLeave={e => e.currentTarget.style.color = '#8A8AAA'}>Solution</a>
          <a href="#minions" style={{ fontSize: '13px', color: '#8A8AAA', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#00D4FF'} onMouseLeave={e => e.currentTarget.style.color = '#8A8AAA'}>Minions</a>
          <a href="#features" style={{ fontSize: '13px', color: '#8A8AAA', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#00D4FF'} onMouseLeave={e => e.currentTarget.style.color = '#8A8AAA'}>Features</a>
          <a href="#founders" style={{ fontSize: '13px', color: '#8A8AAA', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#00D4FF'} onMouseLeave={e => e.currentTarget.style.color = '#8A8AAA'}>Team</a>
          <a href="#pricing" style={{ fontSize: '13px', color: '#8A8AAA', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#00D4FF'} onMouseLeave={e => e.currentTarget.style.color = '#8A8AAA'}>Pricing</a>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '24px auto 0', paddingTop: '20px', borderTop: '1px solid #1A1A35', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <p style={{ fontSize: '12px', color: '#555577', margin: 0 }}>&copy; 2026 Finance Minions by ChicChic Ltd. All rights reserved.</p>
        <p style={{ fontSize: '12px', color: '#555577', margin: 0 }}>Built on Open Banking &bull; End-to-end encrypted &bull; FCA aligned</p>
      </div>
    </footer>
  )
}
