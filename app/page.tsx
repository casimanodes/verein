import { AboutSection } from "@/components/about-section"
import { SportSection } from "@/components/sport-section"
import { JoinSection } from "@/components/join-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-16">

        <AboutSection />
        <JoinSection />
        <SportSection />
        {/* <TrainingSection /> */}
        {/* <section className="py-12 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Bereit, Teil unserer Gemeinschaft zu werden?</h2>
            <p className="text-xl mb-8">
              Egal ob Anfänger oder Profi, bei uns findet jeder seinen Platz. Werden Sie noch heute Mitglied!
            </p>
            <a
              href="/mitgliedsantrag.pdf"
              className="bg-white text-primary font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300"
            >
              Jetzt Mitglied werden
            </a>
          </div>
        </section> */}
      </main>
    </div>
  )
}

