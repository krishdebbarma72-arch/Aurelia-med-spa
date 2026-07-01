'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Reveal, RevealItem } from '@/components/ui/reveal'
import { SectionLabel } from '@/components/ui/section-label'
import { services } from '@/lib/services-data'
import { cn } from '@/lib/utils'

export function Services() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section id="treatments" className="bg-secondary px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal stagger className="text-center">
          <RevealItem>
            <SectionLabel>Our Treatments</SectionLabel>
          </RevealItem>
          <RevealItem
            as="div"
            blur
            className="mt-3 font-serif text-xl font-medium text-balance text-foreground sm:mt-5 sm:text-4xl lg:text-5xl"
          >
            <h2>Physician-Led Aesthetic Treatments</h2>
          </RevealItem>
          <RevealItem className="mx-auto mt-2 max-w-2xl text-[0.85rem] leading-snug text-pretty text-muted-foreground sm:mt-5 sm:text-lg sm:leading-relaxed">
            <p>
              Every treatment is tailored to your skin and goals — thoughtfully
              selected to deliver natural, lasting results.
            </p>
          </RevealItem>
        </Reveal>

        <Reveal stagger className="mt-6 -mx-2.5 flex flex-col gap-2.5 sm:mt-14 sm:mx-0 sm:gap-5">
          {services.map((service) => {
            const open = expanded === service.id
            return (
              <RevealItem
                key={service.id}
                as="article"
                className={cn(
                  'group mx-auto flex w-full flex-col rounded-2xl border border-border bg-card p-3 shadow-[0_0_1px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_1px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.08),0_6px_16px_rgba(0,0,0,0.08),0_12px_24px_rgba(0,0,0,0.06)] sm:max-w-[793px] sm:rounded-3xl sm:p-7',
                )}
              >
                {/* Row: text column + image column, 50/50, never wraps */}
                <div className="flex w-full flex-row gap-3 sm:gap-6">
                  {/* Left: text content — 50% on both mobile and desktop */}
                  <div className="flex w-1/2 min-w-0 flex-col">
                    <h3 className="pl-2 text-[0.85rem] font-medium leading-tight text-foreground sm:pl-0 sm:text-2xl">
                      {service.name}
                    </h3>
                    <div className="mt-2 flex items-center gap-2 text-[0.85rem] font-medium text-accent sm:mt-3 sm:gap-3 sm:text-sm">
                      <span>{service.price}</span>
                      <span className="text-border">•</span>
                      <span className="text-muted-foreground">{service.duration}</span>
                    </div>
                    <p className="mt-2 text-[0.85rem] leading-snug text-muted-foreground sm:mt-3 sm:text-lg sm:leading-relaxed">
                      {service.description}
                    </p>

                    <button
                      type="button"
                      onClick={() => setExpanded(open ? null : service.id)}
                      aria-expanded={open}
                      className="mt-auto pt-3 inline-flex items-center gap-1 self-start text-[0.85rem] font-medium text-foreground transition-colors hover:text-accent sm:mt-5 sm:gap-2 sm:text-sm"
                    >
                      <Plus
                        className={cn(
                          'size-3 transition-transform duration-300 sm:size-4',
                          open && 'rotate-45',
                        )}
                      />
                      {open ? 'Show less' : 'Learn more'}
                    </button>
                  </div>

                  {/* Right: image column (50% width), photo capped smaller and centered within it */}
                  <div className="flex w-1/2 items-start justify-center">
                    <div className="relative aspect-square w-[85%] max-w-[180px] shrink-0 overflow-hidden rounded-xl bg-secondary sm:max-w-[280px] sm:rounded-2xl">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        sizes="(max-width: 640px) 45vw, 280px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Expanded details — separate row, full card width, below the text/image row */}
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.dl
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full overflow-hidden"
                    >
                      {/* Mobile: stacked. Desktop: 3-column row. Full card width either way. */}
                      <div className="mt-2 flex flex-col gap-2 border-t border-border pt-2 text-[0.85rem] sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:pt-5 sm:text-sm">
                        <div>
                          <dt className="font-medium text-accent">
                            Treatment Benefits
                          </dt>
                          <dd className="mt-0.5 text-muted-foreground sm:mt-1">
                            {service.benefits}
                          </dd>
                        </div>
                        <div>
                          <dt className="font-medium text-accent">
                            Expected Downtime
                          </dt>
                          <dd className="mt-0.5 text-muted-foreground sm:mt-1">
                            {service.downtime}
                          </dd>
                        </div>
                        <div>
                          <dt className="font-medium text-accent">
                            Ideal Candidate
                          </dt>
                          <dd className="mt-0.5 text-muted-foreground sm:mt-1">
                            {service.candidate}
                          </dd>
                        </div>
                      </div>
                    </motion.dl>
                  )}
                </AnimatePresence>
              </RevealItem>
            )
          })}
        </Reveal>

        <Reveal stagger className="mt-6 flex flex-col items-center gap-3 rounded-2xl bg-background p-4 text-center sm:mt-14 sm:gap-5 sm:rounded-3xl sm:p-10">
          <RevealItem as="div">
            <h3 className="text-[0.85rem] font-medium text-foreground sm:font-serif sm:text-3xl">
              Not Sure Which Treatment Is Right For You?
            </h3>
          </RevealItem>
          <RevealItem as="div" className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:gap-3">
            <a
              href="#assessment"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-primary px-3 py-2 text-[0.85rem] font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.03] sm:rounded-2xl sm:px-8 sm:py-4 sm:text-sm"
            >
              Take The Assessment
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-accent px-3 py-2 text-[0.85rem] font-medium text-foreground transition-colors hover:bg-accent/10 sm:rounded-2xl sm:px-8 sm:py-4 sm:text-sm"
            >
              Book Consultation
            </a>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  )
}
