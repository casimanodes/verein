import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function SportSection() {
  return (
    <section id="sport" className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Unser Sport</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Schlagball</h3>
            <p className="text-gray-700 mb-4">
              Schlagball kombiniert Elemente aus Baseball, Brennball und Völkerball. Zwei Teams wechseln sich im Schlagrecht ab. 
              Die Spieler des schlagenden Teams schlagen den Ball ins Spielfeld und laufen durch das Feld zu einem Mal und zurück,
              um Punkte zu sammeln. Das andere Team versucht, den Ball zu kontrollieren, ihn geschickt zuzuspielen und die Läufer 
              abzuwerfen. Nach einem erfolgreichen Abwurf wechseln die Teams die Rollen.
            </p>
            <div className="hidden md:block">
              <h4 className="text-xl font-semibold mb-2">Regeln</h4>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Zwei Teams mit je 12 Spielern</li>

              </ul>
              <h4 className="text-xl font-semibold mb-2">Wir benutzen</h4>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Schlagball: Ein Tennisball großer Lederball</li>
                <li>Keule: Zum Schlagen des Balles ins Spielfeld</li>

              </ul>
              <h4 className="text-xl font-semibold mb-2">Turniere</h4>
              <p className="text-gray-700 mb-2">Unser Verein organisiert jedes Jahr das Winterhuder Herbstturnier</p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Herbstturnier </li>
              </ul>
              <p className="text-gray-700">Zusätzlich nehmen wir an regionalen und überregionalen Wettkämpfen teil.</p>
            </div>

            <Accordion type="single" collapsible className="md:hidden w-full">
              <AccordionItem value="rules">
                <AccordionTrigger>Regeln</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Zwei Teams mit je 12 Spielern</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="equipment">
                <AccordionTrigger>Wir benutzen</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Schlagball: Ein Tennisball großer Lederball</li>
                    <li>Keule: Zum Schlagen des Balles ins Spielfeld</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tournaments">
                <AccordionTrigger>Turniere</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">Unser Verein organisiert jedes Jahr das Winterhuder Herbstturnier</p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Herbstturnier</li>
                  </ul>
                  <p className="text-gray-700">
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
              src="/images/schlagball_himmelfahrt_mannschaft.jpg"
              alt="Unsere Sportart"
              width={600}
              height={400}
              className="max-h-[70vh] w-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

