import { useEffect, useRef } from 'react'
import useReducedMotion from '../hooks/useReducedMotion'

/**
 * Generative topographic hero.
 * Contour lines are computed every frame with marching squares over
 * fractal value noise; the cursor adds a gaussian "elevation bump".
 */
export default function TopoCanvas() {
  const canvasRef = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    // --- compact value-noise + fbm ---
    const P = new Uint8Array(512)
    {
      const p = [...Array(256).keys()]
      let s = 1337
      const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647
      for (let i = 255; i > 0; i--) {
        const j = (rnd() * (i + 1)) | 0
        ;[p[i], p[j]] = [p[j], p[i]]
      }
      for (let i = 0; i < 512; i++) P[i] = p[i & 255]
    }
    const fade = (t) => t * t * (3 - 2 * t)
    const grad = (h, x, y) => ((h & 1) ? -x : x) + ((h & 2) ? -y : y)
    function noise2(x, y) {
      const X = Math.floor(x) & 255,
        Y = Math.floor(y) & 255
      x -= Math.floor(x)
      y -= Math.floor(y)
      const u = fade(x),
        v = fade(y)
      const a = P[X + P[Y]],
        b = P[X + 1 + P[Y]],
        c = P[X + P[Y + 1]],
        d = P[X + 1 + P[Y + 1]]
      return (
        ((grad(a, x, y) * (1 - u) + grad(b, x - 1, y) * u) * (1 - v) +
          (grad(c, x, y - 1) * (1 - u) + grad(d, x - 1, y - 1) * u) * v) *
        0.7
      )
    }
    const fbm = (x, y) =>
      noise2(x, y) + 0.5 * noise2(x * 2.03, y * 2.03) + 0.25 * noise2(x * 4.01, y * 4.01)

    // --- state ---
    let W = 0,
      H = 0,
      cols = 0,
      rows = 0,
      cell = 16,
      field = null
    let mx = -9999,
      my = -9999,
      smx = -9999,
      smy = -9999
    let t = 0,
      raf = null,
      visible = true,
      alive = true

    function resize() {
      const dpr = Math.min(devicePixelRatio || 1, 2)
      W = canvas.clientWidth
      H = canvas.clientHeight
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cell = W > 900 ? 16 : 20
      cols = Math.ceil(W / cell) + 1
      rows = Math.ceil(H / cell) + 1
      field = new Float32Array(cols * rows)
    }

    function sample(time) {
      const sc = 0.0035
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const x = i * cell,
            y = j * cell
          let v = fbm(x * sc + time * 0.06, y * sc - time * 0.045)
          const dx = x - smx,
            dy = y - smy
          const d2 = dx * dx + dy * dy
          if (d2 < 160000) v += 0.85 * Math.exp(-d2 / 26000)
          field[j * cols + i] = v
        }
      }
    }

    function drawLevel(level, stroke, width) {
      ctx.beginPath()
      for (let j = 0; j < rows - 1; j++) {
        for (let i = 0; i < cols - 1; i++) {
          const a = field[j * cols + i] - level
          const b = field[j * cols + i + 1] - level
          const c = field[(j + 1) * cols + i + 1] - level
          const d = field[(j + 1) * cols + i] - level
          let idx = 0
          if (a > 0) idx |= 8
          if (b > 0) idx |= 4
          if (c > 0) idx |= 2
          if (d > 0) idx |= 1
          if (idx === 0 || idx === 15) continue
          const x = i * cell,
            y = j * cell
          const lerp = (p, q) => p / (p - q)
          const top = [x + cell * lerp(a, b), y]
          const right = [x + cell, y + cell * lerp(b, c)]
          const bottom = [x + cell * lerp(d, c), y + cell]
          const left = [x, y + cell * lerp(a, d)]
          const seg = (p, q) => {
            ctx.moveTo(p[0], p[1])
            ctx.lineTo(q[0], q[1])
          }
          switch (idx) {
            case 1:
            case 14:
              seg(left, bottom)
              break
            case 2:
            case 13:
              seg(bottom, right)
              break
            case 3:
            case 12:
              seg(left, right)
              break
            case 4:
            case 11:
              seg(top, right)
              break
            case 5:
              seg(top, left)
              seg(bottom, right)
              break
            case 6:
            case 9:
              seg(top, bottom)
              break
            case 7:
            case 8:
              seg(top, left)
              break
            case 10:
              seg(top, right)
              seg(left, bottom)
              break
            default:
              break
          }
        }
      }
      ctx.lineWidth = width
      ctx.strokeStyle = stroke
      ctx.stroke()
    }

    const LEVELS = [-0.9, -0.65, -0.4, -0.15, 0.1, 0.35, 0.6, 0.85]
    function frame() {
      if (!alive) return
      smx += (mx - smx) * 0.07
      smy += (my - smy) * 0.07
      sample(t)
      ctx.clearRect(0, 0, W, H)
      for (let k = 0; k < LEVELS.length; k++) {
        const major = k % 2 === 0
        const col =
          k >= LEVELS.length - 2
            ? `rgba(255,122,89,${major ? 0.2 : 0.12})`
            : `rgba(111,140,125,${major ? 0.3 : 0.15})`
        drawLevel(LEVELS[k], col, major ? 1.1 : 0.6)
      }
      t += 0.016
      if (!reduced && visible) raf = requestAnimationFrame(frame)
    }

    const onResize = () => {
      resize()
      if (reduced) {
        sample(0)
        frame()
      }
    }
    const onPointer = (e) => {
      const r = canvas.getBoundingClientRect()
      mx = e.clientX - r.left
      my = e.clientY - r.top
    }
    addEventListener('resize', onResize, { passive: true })
    addEventListener('pointermove', onPointer, { passive: true })

    const io = new IntersectionObserver(([en]) => {
      visible = en.isIntersecting
      if (visible && !reduced && raf === null) raf = requestAnimationFrame(frame)
      if (!visible && raf !== null) {
        cancelAnimationFrame(raf)
        raf = null
      }
    })
    io.observe(canvas)

    resize()
    if (reduced) {
      sample(0)
      frame()
    } else {
      raf = requestAnimationFrame(frame)
    }

    return () => {
      alive = false
      if (raf !== null) cancelAnimationFrame(raf)
      io.disconnect()
      removeEventListener('resize', onResize)
      removeEventListener('pointermove', onPointer)
    }
  }, [reduced])

  return <canvas id="topo" ref={canvasRef} aria-hidden="true" />
}
