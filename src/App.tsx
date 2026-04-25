import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Solution from './sections/Solution'
import Minions from './sections/Minions'
import Features from './sections/Features'
import Founders from './sections/Founders'
import Roadmap from './sections/Roadmap'
import Pricing from './sections/Pricing'
import Closing from './sections/Closing'
import Advisors from './sections/Advisors'
import Compare from './sections/Compare'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div style={{ background: '#050510', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Founders />
      <Roadmap />
      <Advisors />
      <Minions />
      <Features />
      <Closing />
      <Pricing />
      <Compare />
      <Footer />
    </div>
  )
}
