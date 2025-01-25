"use client"

import React from "react"
import { X } from "lucide-react"
import { useState, useEffect } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export function AlertDemo() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50">
      <Alert className="relative rounded-lg border border-black shadow-md bg-background">
        <div className="flex items-center">
          {/* Placeholder for custom icon */}
          <div className="w-4 h-4 flex-shrink-0 bg-gray-300"></div>
          <div className="flex-grow text-center mx-4">
            <AlertTitle className="justify-center">Eröffnungstraining - 21.02.2025!</AlertTitle>
            <AlertTitle className="justify-center">14 - 16 Uhr</AlertTitle>
            <AlertDescription className="text-blue-500 font-bold">
              <Link href="/kontakt">
                Anmelden per Email
              </Link>
            </AlertDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-3 top-1/2 -translate-y-1/2"
            onClick={() => setIsVisible(false)}
            aria-label="Close alert"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </Alert>
    </div>
  )
}

