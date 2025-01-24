import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 h-16 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center h-full">
          <MainNav />
          <Link href="/" className="logo">
            Sport<span>verein</span> XYZ
          </Link>
          <Button className="nav-button">Jetzt Mitglied werden</Button>
        </div>
      </header>
      <main className="flex-grow pt-16">
        <section id="about" className="py-8 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Über uns</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Gründer des Vereins"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Die Gründer unseres Vereins</h3>
                <p className="text-gray-700 mb-4">
                  Hier kommt eine Beschreibung der Gründer und ihrer Vision für den Verein. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="hidden md:block">
                  <h4 className="text-xl font-semibold mb-2">Geschichte</h4>
                  <p className="text-gray-700 mb-4">
                    Unser Verein wurde im Jahr 1950 von einer Gruppe enthusiastischer Sportler gegründet. Seitdem haben
                    wir uns zu einem der führenden Sportvereine in der Region entwickelt. Wir haben zahlreiche Erfolge
                    gefeiert und viele Generationen von Sportlern ausgebildet.
                  </p>
                  <h4 className="text-xl font-semibold mb-2">Vorstand</h4>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Vorsitzender: Max Mustermann</li>
                    <li>Stellvertretender Vorsitzender: Erika Musterfrau</li>
                    <li>Schatzmeister: John Doe</li>
                    <li>Sportlicher Leiter: Jane Smith</li>
                    <li>Jugendwart: Tom Johnson</li>
                  </ul>
                  <h4 className="text-xl font-semibold mb-2">Philosophie</h4>
                  <p className="text-gray-700">
                    Unsere Vereinsphilosophie basiert auf den Grundsätzen der Fairness, des Respekts und der
                    Inklusivität. Wir glauben daran, dass Sport Menschen zusammenbringt und wichtige Werte vermittelt.
                    Unser Ziel ist es, jedem Mitglied die Möglichkeit zu geben, sein volles Potenzial zu entfalten,
                    unabhängig von Alter oder Fähigkeiten.
                  </p>
                </div>
                <Accordion type="single" collapsible className="md:hidden w-full">
                  <AccordionItem value="history">
                    <AccordionTrigger>Geschichte</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Unser Verein wurde im Jahr 1950 von einer Gruppe enthusiastischer Sportler gegründet. Seitdem
                        haben wir uns zu einem der führenden Sportvereine in der Region entwickelt. Wir haben zahlreiche
                        Erfolge gefeiert und viele Generationen von Sportlern ausgebildet.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="board">
                    <AccordionTrigger>Vorstand</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Vorsitzender: Max Mustermann</li>
                        <li>Stellvertretender Vorsitzender: Erika Musterfrau</li>
                        <li>Schatzmeister: John Doe</li>
                        <li>Sportlicher Leiter: Jane Smith</li>
                        <li>Jugendwart: Tom Johnson</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="philosophy">
                    <AccordionTrigger>Philosophie</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Unsere Vereinsphilosophie basiert auf den Grundsätzen der Fairness, des Respekts und der
                        Inklusivität. Wir glauben daran, dass Sport Menschen zusammenbringt und wichtige Werte
                        vermittelt. Unser Ziel ist es, jedem Mitglied die Möglichkeit zu geben, sein volles Potenzial zu
                        entfalten, unabhängig von Alter oder Fähigkeiten.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">Sportverein XYZ</h3>
              <p>Gemeinsam aktiv, gemeinsam stark</p>
            </div>
            <div>
              <p>&copy; 2023 Sportverein XYZ. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

