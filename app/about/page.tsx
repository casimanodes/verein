import { AboutSection } from "@/components/about-section"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-16">
        <AboutSection />
      </main>
    </div>
  )
}

