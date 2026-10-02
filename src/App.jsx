import PageShell from './components/PageShell'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <PageShell current="home">
      <Hero />
      <Work />
      <Services />
      <Process />
      <About />
      <Contact />
    </PageShell>
  )
}
