import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function TrainingSection() {
  return (
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
                möchten. Erfahrene Trainer führen Sie Schritt für Schritt in die Techniken und Regeln des Schlagballs
                ein.
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
                Unser Fortgeschrittenentraining richtet sich an Spieler, die bereits Erfahrung im Schlagball haben und
                ihre Fähigkeiten weiter verbessern möchten. Hier liegt der Fokus auf fortgeschrittenen Techniken und
                Taktiken.
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
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

