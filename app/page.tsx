import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ConfettiButton } from "@/components/confetti-button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import "@/styles/custom.css"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 h-16 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <MainNav />
          <Link href="/" className="logo">
            Sport<span>verein</span> XYZ
          </Link>
          <Button className="nav-button">Jetzt Mitglied werden</Button>
        </div>
      </header>
      <main className="flex-grow pt-16">
        {/* Über uns */}
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

        {/* Unser Sport */}
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

        {/* Mitglied werden */}
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

        {/* Training */}
        <section id="training" className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Trainingszeiten und -orte</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="hidden md:block">
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <h3 className="text-xl font-semibold mb-2">Anfänger</h3>
                  <p className="text-gray-700">Montag & Mittwoch</p>
                  <p className="text-gray-700">18:00 - 20:00 Uhr</p>
                  <p className="text-gray-700">Sporthalle Musterstadt</p>
                  <p className="text-gray-700 mt-4">
                    Unser Anfängertraining ist perfekt für alle, die neu im Sport sind oder ihre Grundlagen verbessern
                    möchten. Erfahrene Trainer führen Sie Schritt für Schritt in die Techniken und Regeln des
                    Schlagballs ein.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2">
                    <li>Grundlegende Schlag- und Wurftechniken</li>
                    <li>Einführung in die Spielregeln</li>
                    <li>Aufbau von Ausdauer und Koordination</li>
                    <li>Teambuilding-Übungen</li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <h3 className="text-xl font-semibold mb-2">Fortgeschrittene</h3>
                  <p className="text-gray-700">Dienstag & Donnerstag</p>
                  <p className="text-gray-700">19:00 - 21:00 Uhr</p>
                  <p className="text-gray-700">Sportplatz Musterstadt</p>
                  <p className="text-gray-700 mt-4">
                    Unser Fortgeschrittenentraining richtet sich an Spieler, die bereits Erfahrung im Schlagball haben
                    und ihre Fähigkeiten weiter verbessern möchten. Hier liegt der Fokus auf fortgeschrittenen Techniken
                    und Taktiken.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2">
                    <li>Verfeinerung von Schlag- und Wurftechniken</li>
                    <li>Taktische Spielzüge und Strategien</li>
                    <li>Intensives Konditionstraining</li>
                    <li>Mentale Vorbereitung auf Wettkämpfe</li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <h3 className="text-xl font-semibold mb-2">Leistungssport</h3>
                  <p className="text-gray-700">Freitag</p>
                  <p className="text-gray-700">18:00 - 21:00 Uhr</p>
                  <p className="text-gray-700">Leistungszentrum Musterstadt</p>
                  <p className="text-gray-700 mt-4">
                    Unser Leistungssporttraining ist für ambitionierte Spieler, die an Wettkämpfen teilnehmen und ihre
                    Leistung auf ein höheres Niveau bringen möchten. Hier wird intensiv an allen Aspekten des Spiels
                    gearbeitet.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2">
                    <li>Hochintensives Technik- und Taktiktraining</li>
                    <li>Individuelle Leistungsanalyse und -optimierung</li>
                    <li>Wettkampfspezifische Vorbereitung</li>
                    <li>Regenerations- und Verletzungspräventionstraining</li>
                  </ul>
                </div>
              </div>
              <Accordion type="single" collapsible className="md:hidden w-full">
                <AccordionItem value="beginners">
                  <AccordionTrigger>Anfänger</AccordionTrigger>
                  <AccordionContent>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-2">Anfänger</h3>
                      <p className="text-gray-700">Montag & Mittwoch</p>
                      <p className="text-gray-700">18:00 - 20:00 Uhr</p>
                      <p className="text-gray-700">Sporthalle Musterstadt</p>
                      <p className="text-gray-700 mt-4">
                        Unser Anfängertraining ist perfekt für alle, die neu im Sport sind oder ihre Grundlagen
                        verbessern möchten. Erfahrene Trainer führen Sie Schritt für Schritt in die Techniken und Regeln
                        des Schlagballs ein.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 mt-2">
                        <li>Grundlegende Schlag- und Wurftechniken</li>
                        <li>Einführung in die Spielregeln</li>
                        <li>Aufbau von Ausdauer und Koordination</li>
                        <li>Teambuilding-Übungen</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="advanced">
                  <AccordionTrigger>Fortgeschrittene</AccordionTrigger>
                  <AccordionContent>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-2">Fortgeschrittene</h3>
                      <p className="text-gray-700">Dienstag & Donnerstag</p>
                      <p className="text-gray-700">19:00 - 21:00 Uhr</p>
                      <p className="text-gray-700">Sportplatz Musterstadt</p>
                      <p className="text-gray-700 mt-4">
                        Unser Fortgeschrittenentraining richtet sich an Spieler, die bereits Erfahrung im Schlagball
                        haben und ihre Fähigkeiten weiter verbessern möchten. Hier liegt der Fokus auf fortgeschrittenen
                        Techniken und Taktiken.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 mt-2">
                        <li>Verfeinerung von Schlag- und Wurftechniken</li>
                        <li>Taktische Spielzüge und Strategien</li>
                        <li>Intensives Konditionstraining</li>
                        <li>Mentale Vorbereitung auf Wettkämpfe</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="competitive">
                  <AccordionTrigger>Leistungssport</AccordionTrigger>
                  <AccordionContent>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-2">Leistungssport</h3>
                      <p className="text-gray-700">Freitag</p>
                      <p className="text-gray-700">18:00 - 21:00 Uhr</p>
                      <p className="text-gray-700">Leistungszentrum Musterstadt</p>
                      <p className="text-gray-700 mt-4">
                        Unser Leistungssporttraining ist für ambitionierte Spieler, die an Wettkämpfen teilnehmen und
                        ihre Leistung auf ein höheres Niveau bringen möchten. Hier wird intensiv an allen Aspekten des
                        Spiels gearbeitet.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 mt-2">
                        <li>Hochintensives Technik- und Taktiktraining</li>
                        <li>Individuelle Leistungsanalyse und -optimierung</li>
                        <li>Wettkampfspezifische Vorbereitung</li>
                        <li>Regenerations- und Verletzungspräventionstraining</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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

