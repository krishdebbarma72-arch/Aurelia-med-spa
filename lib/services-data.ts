export interface Service {
  id: string
  name: string
  image: string
  description: string
  benefits: string
  downtime: string
  candidate: string
  price: string
  duration: string
}

export const services: Service[] = [
  {
    id: 'botox',
    name: 'Botox & Wrinkle Relaxers',
    image: '/images/treatment-botox.png',
    description:
      'Soften fine lines and expression wrinkles while preserving your natural, expressive look.',
    benefits: "Smoother forehead, softened frown lines and crow's feet.",
    downtime: 'None — return to your day immediately.',
    candidate: 'Anyone seeking subtle prevention or correction of fine lines.',
    price: '$350',
    duration: '20 min',
  },
  {
    id: 'fillers',
    name: 'Dermal Fillers',
    image: '/images/treatment-fillers.png',
    description:
      'Restore lost volume and refine facial balance for a refreshed, naturally lifted appearance.',
    benefits: 'Restored cheek volume, balanced contours, hydrated lips.',
    downtime: 'Minimal — mild swelling that settles within days.',
    candidate: 'Those noticing volume loss or seeking gentle definition.',
    price: '$750',
    duration: '45 min',
  },
  {
    id: 'laser',
    name: 'Laser Skin Rejuvenation',
    image: '/images/treatment-laser.png',
    description:
      'Improve tone, texture, and overall skin quality with precision laser technology.',
    benefits: 'Refined texture, reduced discoloration, renewed radiance.',
    downtime: 'A few days of mild redness depending on intensity.',
    candidate: 'Skin showing sun damage, uneven tone, or texture concerns.',
    price: '$500',
    duration: '60 min',
  },
  {
    id: 'microneedling',
    name: 'Microneedling',
    image: '/images/treatment-microneedling.png',
    description:
      "Stimulate your skin's natural collagen to smooth texture and improve firmness.",
    benefits: 'Smoother texture, softened scarring, improved firmness.',
    downtime: 'Light redness for 24–48 hours.',
    candidate: 'Those addressing texture, fine lines, or acne scarring.',
    price: '$299',
    duration: '45 min',
  },
  {
    id: 'ipl',
    name: 'IPL Photofacial',
    image: '/images/treatment-ipl.png',
    description:
      'Reduce the appearance of sun damage and reveal a brighter, more even complexion.',
    benefits: 'Reduced sun spots, more even tone, brighter complexion.',
    downtime: 'Minimal — spots may darken briefly before fading.',
    candidate: 'Skin with sun damage, redness, or uneven pigmentation.',
    price: '$350',
    duration: '30 min',
  },
  {
    id: 'hydrafacial',
    name: 'HydraFacial',
    image: '/images/treatment-hydrafacial.png',
    description:
      'Deeply cleanse, exfoliate, and hydrate for an instant, luminous glow.',
    benefits: 'Deep hydration, refined pores, immediate radiance.',
    downtime: 'None — glowing skin right away.',
    candidate: 'Anyone wanting healthy, hydrated, refreshed skin.',
    price: '$199',
    duration: '45 min',
  },
]
