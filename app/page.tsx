import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Ticker } from '@/components/ticker'
import { Stats } from '@/components/stats'
import { AboutCity } from '@/components/about-city'
import { Features } from '@/components/features'
import { Gallery } from '@/components/gallery'
import { Community } from '@/components/community'
import { Faq } from '@/components/faq'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Ticker />
      <Stats />
      <AboutCity />
      <Features />
      <Gallery />
      <Community />
      <Faq />
      <SiteFooter />
    </main>
  )
}
