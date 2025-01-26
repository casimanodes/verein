"use client"
import { Button } from "@/components/ui/button"

export function DownloadButton() {
  const handleDownload = async () => {
    try {
      const response = await fetch("/api/download-pdf")
      console.log("toollele")
      if (!response.ok) throw new Error("Download failed")

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.style.display = "none"
      a.href = url
      a.download = "Mitgliedsantrag.pdf"
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Download error:", error)
    }
  }

  return <Button onClick={handleDownload} className="nav-button">Mitgliedsantrag download</Button>
}

