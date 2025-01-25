import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ConfettiButton } from "@/components/confetti-button"
import Link from "next/link"

export function JoinSection() {
  return (
    <section id="join" className="py-8 bg-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Trete dem Schlagball-Verein bei</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-center">
          Du bist herzlich Willkommen ein Probetraining zu vereinbaren um Schlagball auszuprobieren 
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="hidden md:block">
            <h3 className="text-xl font-semibold mb-4">Trainingszeiten</h3>
            <h4>Haupttraining</h4>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Freitags 14-16 Uhr</li>
              <li>Adresse: Meerweinstraße 26-28</li>
              <li>8-25 jahre</li>
            </ul>

            <h4>Hallentraining</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Donnerstags 17-19 Uhr</li>
              <li>Adresse: Meerweinstraße 26-28</li>
              <li>8-17 Jahre</li>
            </ul>
          </div>
          <div className="hidden md:block">
            <h3 className="text-xl font-semibold mb-4">Beiträge</h3>
            <ul className="list-none text-gray-700">
              <li>Regulär: 9€ / Monat - für 1 mal Training pro Woche</li>
              <li>Pro: 14€ / Monat - für 2 mal Training pro Woche</li>

            </ul>
          <Link href="/kontakt" className="text-blue-500 hover:text-blue-700">
              <p className="pt-4">Bei fragen bei uns melden</p>
          </Link>
          </div>
          <div className="hidden md:block">
            <h3 className="text-xl font-semibold mb-4">Anmeldung</h3>
            <ol className="list-decimal list-inside text-gray-700">
              <li>Anmeldeformular herunterladen und ausfüllen</li>
              <li>Senden Sie das ausgefüllte Formular per Post oder E-Mail an <Link href="kontakt" className="text-blue-500 hover:text-blue-700">uns</Link></li>
              <li>Willkommen im Verein!</li>
            </ol>
          </div>
          <Accordion type="single" collapsible className="md:hidden w-full">
            <AccordionItem value="benefits">
              <AccordionTrigger>Vorteile</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Professionelles Training durch qualifizierte Trainer</li>
                  <li>Zugang zu modernen Sportanlagen</li>
                  <li>Teilnahme an Vereinsveranstaltungen und Turnieren</li>
                  <li>Vergünstigungen bei Partnershops für Sportausrüstung</li>
                  <li>Gemeinschaft und Teamgeist</li>
                  <li>Gesundheitsförderung durch regelmäßige sportliche Aktivität</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="fees">
              <AccordionTrigger>Beiträge</AccordionTrigger>
              <AccordionContent>
                <ul className="list-none text-gray-700">
                  <li>Erwachsene: 120€ / Jahr</li>
                  <li>Jugendliche (14-18 Jahre): 80€ / Jahr</li>
                  <li>Kinder (bis 14 Jahre): 60€ / Jahr</li>
                  <li>Familien: 200€ / Jahr</li>
                  <li>Passive Mitglieder: 40€ / Jahr</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  Ermäßigungen für Studenten, Arbeitslose und Rentner auf Anfrage möglich.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="registration">
              <AccordionTrigger>Anmeldung</AccordionTrigger>
              <AccordionContent>
                <ol className="list-decimal list-inside text-gray-700">
                  <li>Laden Sie das Anmeldeformular herunter</li>
                  <li>Füllen Sie alle erforderlichen Felder aus</li>
                  <li>Unterschreiben Sie das Formular (bei Minderjährigen auch Erziehungsberechtigte)</li>
                  <li>Senden Sie das ausgefüllte Formular per Post oder E-Mail an uns</li>
                  <li>Nach Prüfung erhalten Sie eine Bestätigung</li>
                  <li>Zahlen Sie den Mitgliedsbeitrag ein</li>
                  <li>Willkommen im Verein!</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="text-center">
          <ConfettiButton href="/mitgliedsantrag.pdf">Mitgliedsantrag herunterladen</ConfettiButton>
        </div>
      </div>
    </section>
  )
}

