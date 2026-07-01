'use client'

import Image from 'next/image'
import { Reveal, RevealItem } from '@/components/ui/reveal'
import { SectionLabel } from '@/components/ui/section-label'

export function DoctorTrust() {
  return (
    <section
      id="about"
      className="bg-secondary px-5 py-14 sm:px-8 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal stagger className="text-center">
          <RevealItem>
            <SectionLabel align="center">The Aurelia Difference</SectionLabel>
          </RevealItem>
          <RevealItem
            as="div"
            className="mt-3 font-serif text-xl leading-tight font-medium text-balance text-foreground sm:mt-6 sm:text-4xl lg:text-[2.75rem]"
          >
            <h2>A Personalized Approach To Natural, Beautiful Results</h2>
          </RevealItem>
        </Reveal>

        {/*
          Mobile/tablet: stacked (unchanged).
          Desktop (lg+): photo on the left, copy on the right,
          photo height matches the copy via items-stretch + h-full.
        */}
        <div className="mt-5 sm:mt-10 lg:grid lg:grid-cols-[55fr_45fr] lg:items-stretch lg:gap-8">
          {/* Copy */}
          <Reveal className="order-2 lg:order-2 lg:flex lg:items-center">
            <RevealItem className="mx-auto mt-5 max-w-2xl text-center text-[0.85rem] leading-snug text-pretty text-muted-foreground sm:mt-10 sm:text-2xl sm:leading-relaxed lg:mx-0 lg:mt-0 lg:max-w-none lg:text-left">
              <p>
                You deserve to look in the mirror and see someone who looks as
                vibrant, confident, and refreshed as they feel inside. That's why
                every treatment begins with understanding your goals, your
                concerns, and what a beautiful result means to you. Together,
                we'll create a personalized plan designed to restore confidence,
                enhance your natural features, and deliver results that look
                effortlessly like you, only more radiant.
              </p>
            </RevealItem>
          </Reveal>

          {/* Consultation room photo */}
          <Reveal
            blur
            className="order-1 mt-5 sm:mt-10 lg:order-1 lg:mt-0 lg:h-full"
          >
            <div className="relative mx-auto aspect-[16/9] w-full overflow-hidden rounded-2xl bg-background shadow-[0_0_1px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.06),0_10px_24px_rgba(0,0,0,0.05)] sm:rounded-3xl lg:aspect-auto lg:h-full lg:min-h-[360px]">
              <Image
                src="/images/consultation-room.png"
                alt="Dr. Sophia Laurent's private consultation room at Aurelia Medical Spa"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
