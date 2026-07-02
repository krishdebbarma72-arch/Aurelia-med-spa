import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'
import { MoveHorizontal } from 'lucide-react'

export function BeforeAfterSlider() {
  const [pct, setPct] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setPct(Math.min(100, Math.max(0, next)))
  }, [])

  // Events live on the handle — not the container.
  // touch-none on the handle prevents scroll when grabbing it;
  // the rest of the image has no touch-action restriction so vertical
  // scroll works normally on mobile.
  function onHandlePointerDown(e: React.PointerEvent) {
    e.stopPropagation()
    draggingRef.current = true
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }
  function onHandlePointerMove(e: React.PointerEvent) {
    if (!draggingRef.current) return
    updateFromClientX(e.clientX)
  }
  function onHandlePointerUp() {
    draggingRef.current = false
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowLeft') setPct((p) => Math.max(0, p - 5))
    if (e.key === 'ArrowRight') setPct((p) => Math.min(100, p + 5))
  }

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-label="Before and after treatment comparison. Use arrow keys to adjust."
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="relative aspect-[1/1.4] w-full max-w-sm select-none overflow-hidden rounded-2xl border border-border shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:max-w-md lg:aspect-auto lg:h-full lg:max-w-none"
    >
      {/* After (base layer) */}
      <Image
        src="/images/skin-after.png"
        alt="Skin after the treatment cycle showing smooth, radiant, even-toned complexion"
        fill
        priority
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 768px"
        draggable={false}
      />
      <span className="absolute right-3 top-3 rounded-full bg-background/85 px-3 py-1 text-xs font-medium tracking-wide text-foreground backdrop-blur-sm">
        After
      </span>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
      >
        <Image
          src="/images/skin-before.png"
          alt="Skin before the treatment showing fine lines, uneven texture and dullness"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          draggable={false}
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1 text-xs font-medium tracking-wide text-foreground backdrop-blur-sm">
          Before
        </span>
      </div>

      {/*
        Handle — w-12 (48px) hit area centred on the line gives ~24px
        proximity on each side. touch-none here only, so the image area
        stays scrollable on mobile.
      */}
      <div
        className="absolute inset-y-0 z-10 w-12 -translate-x-1/2 cursor-ew-resize touch-none"
        style={{ left: `${pct}%` }}
        onPointerDown={onHandlePointerDown}
        onPointerMove={onHandlePointerMove}
        onPointerUp={onHandlePointerUp}
      >
        {/* Visual line centred in hit area */}
        <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-accent" />
        {/* Circle button */}
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md">
          <MoveHorizontal className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
