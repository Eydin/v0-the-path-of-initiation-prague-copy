"use client"

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// A swipeable row of cards: scrolls sideways (finger, trackpad or the arrows), each card snaps into
// place. The cards are rendered by the server and passed in as children, so this only handles scrolling.
export function CalendarCarousel({
  children,
  prevLabel,
  nextLabel,
}: {
  children: ReactNode
  prevLabel: string
  nextLabel: string
}) {
  const scroller = useRef<HTMLUListElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const update = useCallback(() => {
    const el = scroller.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    const el = scroller.current
    if (!el) return
    update()
    el.addEventListener("scroll", update, { passive: true })
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => {
      el.removeEventListener("scroll", update)
      ro.disconnect()
    }
  }, [update])

  const scrollByPage = (dir: 1 | -1) => {
    const el = scroller.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" })
  }

  const arrow =
    "absolute top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-primary/50 bg-background/90 text-primary shadow-lg transition-opacity hover:bg-primary hover:text-primary-foreground disabled:pointer-events-none disabled:opacity-0 sm:flex"

  return (
    <div className="relative mt-7">
      <button type="button" aria-label={prevLabel} disabled={!canPrev} onClick={() => scrollByPage(-1)} className={`${arrow} -left-3`}>
        <ChevronLeft className="h-5 w-5" />
      </button>
      <ul
        ref={scroller}
        className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>
      <button type="button" aria-label={nextLabel} disabled={!canNext} onClick={() => scrollByPage(1)} className={`${arrow} -right-3`}>
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}
