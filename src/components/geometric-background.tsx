'use client'

import type React from 'react'
import { useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

export const GeometricBackground = ({ className }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    let animationFrameId: number | null = null

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    interface Node {
      x: number
      y: number
      vx: number
      vy: number
    }

    const nodes: Node[] = []
    const nodeCount = 60 // Adjusted node count
    const maxDistance = 150 // Maximum distance for line connection

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3, // Slightly increased speed
        vy: (Math.random() - 0.5) * 0.3, // Slightly increased speed
      })
    }

    const drawNodes = () => {
      ctx.fillStyle = '#1e2f54'
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = 'rgba(150, 200, 255, 0.7)'
      ctx.strokeStyle = 'rgba(150, 200, 255, 0.2)' // Reduced line opacity

      for (const node of nodes) {
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fill()

        for (const otherNode of nodes) {
          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.stroke()
          }
        }

        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1
      }
    }

    const animate = () => {
      drawNodes()
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={twMerge('top-0 left-0 w-full h-full z-[-1]', className)}
    />
  )
}
