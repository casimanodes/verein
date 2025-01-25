import { SportSection } from "@/components/sport-section"

export default function SportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-16">
        <SportSection />
      </main>
    </div>
  )
}

