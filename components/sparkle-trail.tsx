"use client"

import { useEffect, useRef } from "react"

type Variant = "stars" | "orbs"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  max: number
  size: number
  rot: number
  color: string
  ring: boolean
}

const PALETTES: Record<Variant, string[]> = {
  // twinkling four-pointed stars — night-sky feel
  stars: ["#fff4c2", "#ffe08a", "#ffffff", "#cfe2ff"],
  // soft glowing orbs and ripples — water / light / healing feel
  orbs: ["#9be7ff", "#7fd1ff", "#ffffff", "#b6f3e0"],
}

// A sparkling trail that follows the pointer while it moves over the parent element.
// Drop it inside a `relative` container; it draws on a transparent, click-through canvas.
//  - variant "stars": small twinkling stars that drift down and fade
//  - variant "orbs":  soft glowing orbs (and the odd ripple ring) that float upward, swaying gently
// Does nothing for visitors who prefer reduced motion, and stops animating when idle.
export function SparkleTrail({ variant = "stars" }: { variant?: Variant }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const host = canvas?.parentElement
    if (!canvas || !host) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const colors = PALETTES[variant]
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0
    let h = 0
    const resize = () => {
      const r = host.getBoundingClientRect()
      w = r.width
      h = r.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(host)

    const particles: Particle[] = []
    let raf = 0
    let last = 0
    let lx = -1
    let ly = -1

    // four-pointed star
    const star = (x: number, y: number, r: number, rot: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rot)
      ctx.beginPath()
      for (let i = 0; i < 8; i++) {
        const rad = i % 2 === 0 ? r : r * 0.28
        const a = (Math.PI / 4) * i
        ctx.lineTo(Math.cos(a) * rad, Math.sin(a) * rad)
      }
      ctx.closePath()
      ctx.fill()
      ctx.restore()
    }

    // soft glowing orb: bright core fading to transparent
    const orb = (x: number, y: number, r: number, color: string) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r)
      g.addColorStop(0, "#ffffff")
      g.addColorStop(0.25, color)
      g.addColorStop(1, "rgba(155, 231, 255, 0)")
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
    }

    const tick = (t: number) => {
      const dt = Math.min(32, t - last)
      last = t
      ctx.clearRect(0, 0, w, h)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life -= dt
        if (p.life <= 0) {
          particles.splice(i, 1)
          continue
        }
        const fade = p.life / p.max
        if (variant === "orbs") {
          p.y += p.vy * dt
          p.x += p.vx * dt + Math.sin(t / 380 + p.rot * 6) * 0.018 * dt // gentle sway
          ctx.shadowBlur = 0
          if (p.ring) {
            // ripple: a thin ring that widens as it fades
            const grow = 1 - fade
            ctx.globalAlpha = fade * 0.7
            ctx.strokeStyle = p.color
            ctx.lineWidth = 1.2
            ctx.beginPath()
            ctx.arc(p.x, p.y, p.size * (0.6 + grow * 2.6), 0, Math.PI * 2)
            ctx.stroke()
          } else {
            ctx.globalAlpha = Math.min(1, fade * 1.4) * 0.9
            orb(p.x, p.y, p.size * (0.7 + 0.5 * fade), p.color)
          }
        } else {
          p.x += p.vx * dt
          p.y += p.vy * dt
          p.vy += 0.00005 * dt // a gentle fall
          p.rot += 0.002 * dt
          const twinkle = 0.65 + 0.35 * Math.sin(t / 55 + p.rot * 9)
          ctx.globalAlpha = Math.max(0, fade * twinkle)
          ctx.fillStyle = p.color
          ctx.shadowColor = p.color
          ctx.shadowBlur = 10
          star(p.x, p.y, p.size * (0.5 + 0.5 * fade), p.rot)
        }
      }
      ctx.globalAlpha = 1
      raf = particles.length ? requestAnimationFrame(tick) : 0
      if (!raf) ctx.clearRect(0, 0, w, h)
    }

    const spawn = (x: number, y: number) => {
      const n = 2 + Math.floor(Math.random() * 2)
      for (let i = 0; i < n; i++) {
        const orbs = variant === "orbs"
        const max = orbs ? 1100 + Math.random() * 900 : 650 + Math.random() * 600
        particles.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 12,
          vx: (Math.random() - 0.5) * 0.04,
          vy: orbs ? -(0.025 + Math.random() * 0.05) : (Math.random() - 0.3) * 0.04,
          life: max,
          max,
          size: orbs ? 4 + Math.random() * 7 : 3 + Math.random() * 5,
          rot: Math.random() * Math.PI,
          color: colors[Math.floor(Math.random() * colors.length)],
          ring: orbs && Math.random() < 0.18,
        })
      }
      if (particles.length > 160) particles.splice(0, particles.length - 160)
      if (!raf) {
        last = performance.now()
        raf = requestAnimationFrame(tick)
      }
    }

    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect()
      const x = e.clientX - r.left
      const y = e.clientY - r.top
      if (lx < 0) {
        lx = x
        ly = y
      }
      const dist = Math.hypot(x - lx, y - ly)
      if (dist < 8) return
      // fill the gap between events so fast movement still leaves a continuous trail
      const steps = Math.min(8, Math.floor(dist / 14))
      for (let s = 1; s <= steps; s++) spawn(lx + ((x - lx) * s) / steps, ly + ((y - ly) * s) / steps)
      spawn(x, y)
      lx = x
      ly = y
    }
    const onLeave = () => {
      lx = -1
      ly = -1
    }

    host.addEventListener("pointermove", onMove)
    host.addEventListener("pointerleave", onLeave)
    return () => {
      host.removeEventListener("pointermove", onMove)
      host.removeEventListener("pointerleave", onLeave)
      ro.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [variant])

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none absolute inset-0 z-20" />
}
