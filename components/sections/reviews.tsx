'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { Reveal, RevealItem } from '@/components/ui/reveal'
import { SectionLabel } from '@/components/ui/section-label'

const testimonials = [
  {
    avatar: '/images/review-sarah.png',
    quote:
      "I catch myself smiling when I look in the mirror now. I still look like me, just more refreshed, confident, and rested than I have in years.",
    name: 'Sarah M.',
    age: 42,
  },
  {
    avatar: '/images/review-jennifer.png',
    quote:
      "I wasn't looking for a dramatic change. I just wanted to feel good in my own skin again. The results were subtle, natural, and exactly what I hoped for.",
    name: 'Jennifer K.',
    age: 38,
  },
  {
    avatar: '/images/review-amanda.png',
    quote:
      "For the first time in a long time, I don't feel the need to hide behind makeup. My skin looks brighter, healthier, and I feel more confident every day.",
    name: 'Amanda R.',
    age: 46,
  },
]

function Stars({ className }: { className?: string }) {
  return (
    <div
      className={className}
      role="img"
      aria-label="Rated 5 out of 5 stars"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="size-4 fill-accent text-accent"
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section className="bg-background px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal stagger className="text-center">
          <RevealItem>
            <SectionLabel>Trusted By Discerning Clients</SectionLabel>
          </RevealItem>
          <RevealItem
            as="div"
            blur
            className="mt-3 font-serif text-xl font-medium text-balance text-foreground sm:mt-5 sm:text-4xl lg:text-5xl"
          >
            <h2>Real Experiences. Natural Results.</h2>
          </RevealItem>
          <RevealItem className="mx-auto mt-2 max-w-2xl text-[0.85rem] leading-snug text-pretty text-muted-foreground sm:mt-5 sm:text-lg sm:leading-relaxed">
            <p>
              Discover why clients trust Aurelia Medical Spa for personalized
              care, physician-led expertise, and beautifully natural outcomes.
            </p>
          </RevealItem>
          <RevealItem className="mt-3 flex flex-col items-center gap-1 sm:mt-7 sm:gap-2">
            <div className="flex items-center gap-1.5 sm:gap-3">
              <Stars className="flex gap-0.5 sm:gap-1 [&_svg]:size-2.5 sm:[&_svg]:size-4" />
              <span className="font-serif text-[0.85rem] font-medium text-foreground sm:text-xl">
                4.9 Average Rating
              </span>
            </div>
            <p className="text-[0.85rem] text-muted-foreground sm:text-sm">
              Based on 500+ Verified Client Reviews
            </p>
          </RevealItem>
        </Reveal>

        <Reveal
          stagger
          className="mt-5 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <RevealItem
              key={t.name}
              as="article"
              className="flex flex-col rounded-xl border border-border bg-secondary p-4 shadow-[0_0_1px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.05),0_2px_5px_rgba(0,0,0,0.03)] sm:rounded-3xl sm:p-7"
            >
              {/* Profile picture + stars row */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative size-7 shrink-0 overflow-hidden rounded-full sm:size-10">
                  <Image
                    src={t.avatar}
                    alt={`${t.name} profile photo`}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <Stars className="flex gap-0.5 [&_svg]:size-2.5 sm:gap-1 sm:[&_svg]:size-4" />
              </div>

              <blockquote className="mt-1.5 flex-1 text-[0.85rem] leading-snug text-pretty text-foreground sm:mt-5 sm:text-lg sm:leading-relaxed">
                {`"${t.quote}"`}
              </blockquote>
              <footer className="mt-1.5 border-t border-border pt-1.5 text-[0.85rem] sm:mt-6 sm:pt-5 sm:text-base">
                <span className="font-medium text-foreground">{t.name}</span>
                <span className="text-muted-foreground">{` Age ${t.age}`}</span>
              </footer>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
