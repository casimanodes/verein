import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SportPage() {
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
        <section id="sport" className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Unser Sport</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Schlagball</h3>
                <p className="text-gray-700 mb-4">
                  Schlagball ist eine dynamische Teamsportart, die Geschicklichkeit, Schnelligkeit und Teamgeist
                  erfordert. Es ist eine Mischung aus traditionellem Baseball und europäischen Ballspielen, die für
                  Spieler aller Altersgruppen geeignet ist.
                </p>
                <div className="hidden md:block">
                  <h4 className="text-xl font-semibold mb-2">Regeln</h4>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Zwei Teams mit je 12 Spielern</li>
                    <li>Spielfeld ist ein Quadrat mit 60m Seitenlänge</li>
                    <li>Schlagteam versucht, den Ball weit zu schlagen und Punkte zu erzielen</li>
                    <li>Feldteam versucht, den Ball zu fangen und das Schlagteam auszumachen</li>
                    <li>Ein Spiel besteht aus 2 Halbzeiten à 30 Minuten</li>
                  </ul>
                  <h4 className="text-xl font-semibold mb-2">Ausrüstung</h4>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Schlagball: Ähnlich einem Tennisball, aber etwas größer und weicher</li>
                    <li>Schlagholz: Aus Holz oder Kunststoff, etwa 80cm lang</li>
                    <li>Handschuhe: Nicht zwingend erforderlich, aber empfohlen</li>
                    <li>Sportkleidung: Bequeme Sportbekleidung und Laufschuhe</li>
                  </ul>
                  <h4 className="text-xl font-semibold mb-2">Turniere</h4>
                  <p className="text-gray-700 mb-2">Unser Verein organisiert jährlich mehrere Turniere:</p>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Frühjahrsturnier (April)</li>
                    <li>Sommerpokal (Juli)</li>
                    <li>Herbstmeisterschaft (September)</li>
                    <li>Wintercup (Indoor, Januar)</li>
                  </ul>
                  <p className="text-gray-700">
                    Zusätzlich nehmen wir an regionalen und überregionalen Wettkämpfen teil.
                  </p>
                </div>
                <Accordion type="single" collapsible className="md:hidden w-full">
                  <AccordionItem value="rules">
                    <AccordionTrigger>Regeln</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Zwei Teams mit je 12 Spielern</li>
                        <li>Spielfeld ist ein Quadrat mit 60m Seitenlänge</li>
                        <li>Schlagteam versucht, den Ball weit zu schlagen und Punkte zu erzielen</li>
                        <li>Feldteam versucht, den Ball zu fangen und das Schlagteam auszumachen</li>
                        <li>Ein Spiel besteht aus 2 Halbzeiten à 30 Minuten</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="equipment">
                    <AccordionTrigger>Ausrüstung</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Schlagball: Ähnlich einem Tennisball, aber etwas größer und weicher</li>
                        <li>Schlagholz: Aus Holz oder Kunststoff, etwa 80cm lang</li>
                        <li>Handschuhe: Nicht zwingend erforderlich, aber empfohlen</li>
                        <li>Sportkleidung: Bequeme Sportbekleidung und Laufschuhe</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="tournaments">
                    <AccordionTrigger>Turniere</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">Unser Verein organisiert jährlich mehrere Turniere:</p>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Frühjahrsturnier (April)</li>
                        <li>Sommerpokal (Juli)</li>
                        <li>Herbstmeisterschaft (September)</li>
                        <li>Wintercup (Indoor, Januar)</li>
                      </ul>
                      <p className="text-gray-700 mt-2">
                        Zusätzlich nehmen wir an regionalen und überregionalen Wettkämpfen teil.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Button asChild className="mt-4">
                  <Link href="#">Mehr erfahren</Link>
                </Button>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Unsere Sportart"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
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

