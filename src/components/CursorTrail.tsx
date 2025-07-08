'use client'

import { useEffect, useRef } from 'react'

interface CursorTrailProps {
  colors?: string[]
  maxParticles?: number
  particleSize?: number
  fadeSpeed?: number
}

const CursorTrail: React.FC<CursorTrailProps> = ({
  colors = ['#FF0066', '#00FFCC', '#FF6600', '#6600FF', '#00FF66', '#FF0099', '#00CCFF', '#FF9900'],
  maxParticles = 50,
  particleSize = 30,
  fadeSpeed = 0.08
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Array<{
    x: number
    y: number
    vx: number
    vy: number
    alpha: number
    color: string
    size: number
    life: number
    colorStops: Array<{offset: number, color: string}>
  }>>([])
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Create flowing particles with no defined shape
      for (let i = 0; i < 3; i++) {
        const angle = Math.random() * Math.PI * 2
        const distance = Math.random() * 50
        
        // Create random color gradient stops for each particle
        const colorStops = []
        const baseColor = colors[Math.floor(Math.random() * colors.length)]
        for (let j = 0; j < 5; j++) {
          colorStops.push({
            offset: j * 0.25,
            color: baseColor
          })
        }
        
        particlesRef.current.push({
          x: e.clientX + Math.cos(angle) * distance,
          y: e.clientY + Math.sin(angle) * distance,
          vx: (Math.random() - 0.5) * 10,
          vy: (Math.random() - 0.5) * 10,
          alpha: 1,
          color: baseColor,
          size: particleSize + Math.random() * 40,
          life: 1,
          colorStops: colorStops
        })
      }

      if (particlesRef.current.length > maxParticles) {
        particlesRef.current.splice(0, particlesRef.current.length - maxParticles)
      }
    }

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Use additive blending for bright, flowing colors
      ctx.globalCompositeOperation = 'lighter'

      // Update and draw particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const particle = particlesRef.current[i]
        
        // Update particle with fluid movement
        particle.x += particle.vx
        particle.y += particle.vy
        particle.vx *= 0.92
        particle.vy *= 0.92
        particle.life -= fadeSpeed
        particle.alpha = Math.max(0, particle.life * particle.life)
        particle.size *= 1.02 // Grow slightly for fluid effect
        
        // Remove particles that are too faded
        if (particle.alpha <= 0.01) {
          particlesRef.current.splice(i, 1)
          continue
        }

        // Create completely fluid, smoke-like effect using image data manipulation
        const time = Date.now() * 0.002
        
        // Create multiple overlapping irregular circles with noise
        for (let layer = 0; layer < 4; layer++) {
          ctx.save()
          
          // Random transformation for organic feel
          const offsetX = Math.sin(time + layer) * 15
          const offsetY = Math.cos(time + layer * 1.3) * 15
          
          // Create irregular gradient using transforms
          const gradient = ctx.createRadialGradient(
            particle.x + offsetX, particle.y + offsetY, 0,
            particle.x + offsetX, particle.y + offsetY, particle.size * (1 + layer * 0.5)
          )
          
          // Create flowing alpha gradients
          const alpha = particle.alpha * (1 - layer * 0.2)
          const alphaHex = Math.floor(alpha * 255).toString(16).padStart(2, '0')
          
          // Add noise to gradient stops
          gradient.addColorStop(0, `${particle.color}${alphaHex}`)
          gradient.addColorStop(0.3 + Math.sin(time) * 0.2, `${particle.color}${Math.floor(alpha * 128).toString(16).padStart(2, '0')}`)
          gradient.addColorStop(0.7 + Math.cos(time) * 0.2, `${particle.color}${Math.floor(alpha * 64).toString(16).padStart(2, '0')}`)
          gradient.addColorStop(1, `${particle.color}00`)

          ctx.fillStyle = gradient
          ctx.globalAlpha = alpha * 0.8
          
          // Create irregular shape using random points
          ctx.beginPath()
          const points = 20
          let firstPoint = true
          
          for (let j = 0; j <= points; j++) {
            const angle = (j / points) * Math.PI * 2
            // Add noise to radius for fluid, irregular shape
            const noise1 = Math.sin(angle * 3 + time + layer) * 0.3
            const noise2 = Math.cos(angle * 5 + time * 1.5 + layer) * 0.2
            const radius = particle.size * (0.5 + noise1 + noise2)
            
            const x = particle.x + offsetX + radius * Math.cos(angle)
            const y = particle.y + offsetY + radius * Math.sin(angle)
            
            if (firstPoint) {
              ctx.moveTo(x, y)
              firstPoint = false
            } else {
              ctx.lineTo(x, y)
            }
          }
          
          ctx.closePath()
          ctx.fill()
          
          // Additional blur effect using shadow
          ctx.shadowColor = particle.color
          ctx.shadowBlur = particle.size * 0.5
          ctx.fill()
          
          ctx.restore()
        }
      }

      ctx.shadowBlur = 0
      ctx.globalCompositeOperation = 'source-over'

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [colors, maxParticles, particleSize, fadeSpeed])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
    />
  )
}

export default CursorTrail