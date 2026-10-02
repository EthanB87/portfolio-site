import PageShell from './components/PageShell'
import Hero from './components/Hero'
import About from './components/About'
import Lines from './components/Lines'
import Work from './components/Work'
import ConsultSection from './components/ConsultSection'

export default function App() {
  return (
    <PageShell current="home">
      <Hero />
      <About />
      <section id="services" className="services">
        <div className="wrap">
          <h2>Find the line that fits your business</h2>
          <p className="lede">Each one starts with a free consultation.</p>
          <Lines />
        </div>
      </section>
      <Work />
      <ConsultSection />
    </PageShell>
  )
}
