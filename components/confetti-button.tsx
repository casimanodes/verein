"use client"

import { useState } from "react"
import confetti from "canvas-confetti"
import { Button } from "@/components/ui/button"

interface ConfettiButtonProps {
  href: string
  children: React.ReactNode
}

export function ConfettiButton({ href, children }: ConfettiButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    setIsDownloading(true)

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })

    // Simulate download delay
    setTimeout(() => {
      setIsDownloading(false)
      window.location.href = href
    }, 1000)
  }

  return (
    <Button asChild className="nav-button" disabled={isDownloading}>
      <a href={href} onClick={handleClick}>
        {isDownloading ? "Wird heruntergeladen..." : children}
      </a>
    </Button>
  )
}

