'use client'

import { Reveal, RevealItem } from '@/components/ui/reveal'
import { SectionLabel } from '@/components/ui/section-label'
import { BeforeAfterSlider } from '@/components/ui/before-after-slider'

const highlights = [
  'Smoother Skin Texture',
  'More Even Skin Tone',
  'Refreshed Appearance',
]

export function BeforeAfter() {
  return (
    <section id="results" className="bg-secondary px-5 py-14 sm:px-8 sm:py-20 lg:pt-28 lg:pb-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal stagger className="text-center">
          <RevealItem>
            <SectionLabel>Real Results</SectionLabel>
          </RevealItem>
          <RevealItem
            as="div"
            blur
            className="mt-3 font-serif text-xl font-medium text-balance text-foreground sm:mt-5 sm:text-4xl lg:text-5xl"
          >
            <h2>Subtle Enhancements. Meaningful Results.</h2>
          </RevealItem>
          <RevealItem className="mx-auto mt-3 max-w-2xl text-[0.85rem] leading-snug text-pretty text-muted-foreground sm:mt-5 sm:text-lg sm:leading-relaxed">
            <p>
              Our goal is never to change how you look — it's to enhance your
              natural beauty so you look refreshed, rested, and confidently
              yourself.
            </p>
          </RevealItem>
        </Reveal>

        <div className="mt-7 grid items-center gap-5 sm:mt-14 sm:gap-10 lg:grid-cols-[55fr_45fr] lg:gap-14 lg:items-stretch">
          <Reveal blur className="lg:relative lg:h-full">
            <div className="lg:h-full lg:max-w-[300px] lg:w-full lg:mx-auto">
              <BeforeAfterSlider />
            </div>
            <p className="mt-2 text-center text-[0.85rem] text-muted-foreground sm:mt-3 sm:text-sm lg:absolute lg:inset-x-0 lg:top-full lg:mt-4">
              Drag the handle to compare
            </p>
          </Reveal>

          <Reveal stagger>
            <div className="flex flex-col gap-3 sm:gap-4">
              {/* Case study — full width on mobile, 2-col grid inside */}
              <RevealItem className="rounded-2xl border border-border bg-background p-4 shadow-[0_0_1px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] sm:rounded-3xl sm:p-8">
                <span className="block text-center text-[0.85rem] font-medium uppercase tracking-[0.1em] text-accent sm:text-left sm:text-xs sm:tracking-[0.18em]">
                  Featured Case Study
                </span>
                <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 sm:mt-5 sm:gap-y-5">
                  <div>
                    <dt className="flex items-center gap-1.5 text-[0.85rem] font-medium text-foreground sm:text-sm">
                      <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      Patient
                    </dt>
                    <dd className="mt-0.5 text-[0.85rem] text-muted-foreground sm:mt-1 sm:text-base">Female, Age 47</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1.5 text-[0.85rem] font-medium text-foreground sm:text-sm">
                      <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      Treatment
                    </dt>
                    <dd className="mt-0.5 text-[0.85rem] text-muted-foreground sm:mt-1 sm:text-base">Combination Facial Rejuvenation</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1.5 text-[0.85rem] font-medium text-foreground sm:text-sm">
                      <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      Timeframe
                    </dt>
                    <dd className="mt-0.5 text-[0.85rem] text-muted-foreground sm:mt-1 sm:text-base">12 Weeks</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1.5 text-[0.85rem] font-medium text-foreground sm:text-sm">
                      <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      Goal
                    </dt>
                    <dd className="mt-0.5 text-[0.85rem] text-muted-foreground sm:mt-1 sm:text-base">Natural, refreshed look</dd>
                  </div>
                </dl>
              </RevealItem>

              {/* Highlights — 3-col row on mobile, stacked on sm+ */}
              <RevealItem className="grid grid-cols-3 gap-2 sm:flex sm:flex-col sm:gap-3">
                {highlights.map((h) => (
                  <div
                    key={h}
                    className="flex flex-row items-center justify-start gap-1.5 rounded-xl border border-border bg-background px-2 py-3 shadow-[0_0_1px_rgba(0,0,0,0.03),0_1px_2px_rgba(0,0,0,0.04)] sm:rounded-2xl sm:px-5 sm:py-4"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-accent sm:size-2" aria-hidden="true" />
                    <span className="text-[0.75rem] font-medium leading-snug text-foreground sm:text-base">{h}</span>
                  </div>
                ))}
              </RevealItem>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
