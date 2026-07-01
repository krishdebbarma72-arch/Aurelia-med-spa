import { Navigation } from "@/components/navigation"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { Hero } from "@/components/sections/hero"
import { DoctorTrust } from "@/components/sections/doctor-trust"
import { Assessment } from "@/components/sections/assessment"
import { BeforeAfter } from "@/components/sections/before-after"
import { Reviews } from "@/components/sections/reviews"
import { Services } from "@/components/sections/services"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { ContactForm } from "@/components/sections/contact-form"
import { FAQ } from "@/components/sections/faq"
import { SiteFooter } from "@/components/sections/site-footer"

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <DoctorTrust />
        <Services />
        <BeforeAfter />
        <Reviews />
        <WhyChooseUs />
        <Assessment />
        <ContactForm />
        <FAQ />
      </main>
      <SiteFooter />
    </>
  )
}
