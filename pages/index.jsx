import Section from '../components/ui/Section'
import Main from '../components/ui/Main'
import Hero from '../components/index/Hero'
import Management from '../components/index/Management'
import Support from '../components/index/Support'
import Collaborative from '../components/index/Collaborative'
import ContentStrategies from '../components/index/ContentStrategies'
import Pricing from '../components/index/Pricing'
import Testimonials from '../components/index/Testimonials'
import Callout from '../components/index/Callout'
import { RotatedBackgroundGradient, Process } from '../components/index/Process'
import { BackgroundGradient, Features } from '../components/index/Features'

export default function Home() {
  return (
    <Main>
      <Section>
        <Hero />
      </Section>
      <BackgroundGradient>
        <Section>
          <Features />
        </Section>
      </BackgroundGradient>
      <Section>
        <Management />
      </Section>
      <Section>
        <Support />
      </Section>
      <Section>
        <Collaborative />
      </Section>
      <RotatedBackgroundGradient>
        <Section>
          <Process />
        </Section>
      </RotatedBackgroundGradient>
      <Section>
        <ContentStrategies />
      </Section>
      <Section>
        <Pricing />
      </Section>
      <Section>
        <Testimonials />
      </Section>
      <Section>
        <Callout />
      </Section>
    </Main>
  )
}
