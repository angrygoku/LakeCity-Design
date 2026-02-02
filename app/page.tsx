import { OutcomeHero } from '@/components/sections/outcome-hero'
import { SocialProof } from '@/components/sections/social-proof'
import { ResultPackages } from '@/components/sections/result-packages'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Capabilities } from '@/components/sections/capabilities'
import { FAQ } from '@/components/sections/faq'
import { CTA } from '@/components/sections/cta'

export default function HomePage() {
  return (
    <>
      <OutcomeHero />
      <SocialProof />
      <ResultPackages />
      <HowItWorks />
      <Capabilities />
      <FAQ />
      <CTA />
    </>
  )
}
