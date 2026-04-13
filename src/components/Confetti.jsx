import { useEffect, useRef } from 'react'

const COLORS = ['#7EA8BE', '#8DB48E', '#C4A35A', '#B07AA1', '#E07A5F', '#FFD700', '#FF6B9D']

function randomBetween(a, b) {
  return a + Math.random() * (b - a)
}

export default function Confetti() {
  const canvasRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 120

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: randomBetween(0, canvas.width),
        y: randomBetween(-canvas.height, -20),
        w: randomBetween(6, 12),
        h: randomBetween(4, 8),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rotation: randomBetween(0, Math.PI * 2),
        rotationSpeed: randomBetween(-0.05, 0.05),
        vx: randomBetween(-2, 2),
        vy: randomBetween(2, 6),
        opacity: 1,
      })
    }

    let startTime = Date.now()

    function draw() {
      const elapsed = Date.now() - startTime
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Fade out after 3 seconds
      const fadeStart = 3000
      const fadeDuration = 1500
      const globalAlpha = elapsed > fadeStart
        ? Math.max(0, 1 - (elapsed - fadeStart) / fadeDuration)
        : 1

      if (globalAlpha <= 0) {
        cancelAnimationFrame(animRef.current)
        return
      }

      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.05 // gravity
        p.rotation += p.rotationSpeed

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.globalAlpha = globalAlpha * p.opacity
        ctx.fillStyle = p.color
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
        ctx.restore()
      })

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100]"
    />
  )
}
