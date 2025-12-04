'use client'

import { YStack } from '@my/ui'
import {
  Header,
  Hero,
  AboutUs,
  Problem,
  WhyUs,
  Download,
  Footer,
} from 'app/features/landing'

export default function LandingPage() {
  return (
    <YStack flex={1} backgroundColor="$background">
      <Header />
      <Hero />
      <AboutUs />
      <Problem />
      <WhyUs />
      <Download />
      <Footer />
    </YStack>
  )
}
