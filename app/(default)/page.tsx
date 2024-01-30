export const metadata = {
  title: 'Teamin',
  description: 'Task manager and messenger',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import GetTheApp from '@/components/get-the-app'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <Zigzag /> */}
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
      <GetTheApp />
    </>
  )
}
