import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ConfettiButton } from "@/components/confetti-button"

export default function JoinPage() {
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
        <section id="join" className="py-8 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Werde Teil unseres Vereins!</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-center">
              Wir freuen uns immer über neue Mitglieder. Egal ob Anfänger oder Profi, bei uns ist jeder willkommen!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="hidden md:block">
                <h3 className="text-xl font-semibold mb-4">Vorteile</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Professionelles Training durch qualifizierte Trainer</li>
                  <li>Zugang zu modernen Sportanlagen</li>
                  <li>Teilnahme an Vereinsveranstaltungen und Turnieren</li>
                  <li>Vergünstigungen bei Partnershops für Sportausrüstung</li>
                  <li>Gemeinschaft und Teamgeist</li>
                  <li>Gesundheitsförderung durch regelmäßige sportliche Aktivität</li>
                </ul>
              </div>
              <div className="hidden md:block">
                <h3 className="text-xl font-semibold mb-4">Beiträge</h3>
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
              </div>
              <div className="hidden md:block">
                <h3 className="text-xl font-semibold mb-4">Anmeldung</h3>
                <ol className="list-decimal list-inside text-gray-700">
                  <li>Laden Sie das Anmeldeformular herunter</li>
                  <li>Füllen Sie alle erforderlichen Felder aus</li>
                  <li>Unterschreiben Sie das Formular (bei Minderjährigen auch Erziehungsberechtigte)</li>
                  <li>Senden Sie das ausgefüllte Formular per Post oder E-Mail an uns</li>
                  <li>Nach Prüfung erhalten Sie eine Bestätigung</li>
                  <li>Zahlen Sie den Mitgliedsbeitrag ein</li>
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

