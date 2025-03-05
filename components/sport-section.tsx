import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function SportSection() {
  return (
    <section id="sport" className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Unser Sport</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Schlagball</h3>
            <p className="text-gray-700 mb-4">Das Schlagballspiel ist ein Spiel, bei dem sich z
              wei Parteien von je zwölf oder auch sechs Spielern gegenüberstehen. Gekämpft wird um
              das Schlagrecht und die höhere Punktzahl nach einer festen Spieldauer. Die Schlagpartei (nach
              GutsMuths die herrschende Partei[3]) verteidigt das Schlagrecht, und die Feld- oder Fangpartei
              (nach GutsMuths die dienende Partei[3]) versucht, es zu erringen. Die Schlagpartei mit dem wechs
              elnden Schläger besetzt das Schlagmal und versucht, durch Schläge ihre Läufe zum Laufmal hin- und 
              herzubringen.Die Feldpartei (mit den Fängern) besetzt das Lauffeld und den Schrägraum in beliebiger 
              Verteilung. Die Fänger versuchen, die geschlagenen Bälle zu fangen oder aufzunehmen, durch Zuspiel die 
              laufenden Schläger einzukreisen und abzuwerfen oder zu treffen, über die Grenzen des Lauffeldes zu treiben 
              oder den Ball zurück ins Schlagmal zu werfen, um den Gegner am Gewinn weiterer Punkte zu hindern.
              Bei erfolgreichem Feldspiel der Feldpartei und mit jedem Wechselpunkt erhält die Feldpartei das Schlagrecht, sie wird zur 
              neuen Schlagpartei. Verbunden mit dem Malwechsel zum Schlagmal können die Spieler der neuen Schlagpartei sofort wieder von der neuen Fangpartei abgeworfen werden.
            </p>
            <div className="hidden md:block">
              <h4 className="text-xl font-semibold mb-2">Regeln</h4>
                <h6 className="text-lg font-semibold mb-2">Laufpunkt</h6>
                  <p>Schafft es ein Spieler der Schlagmannschaft, 
                    nach Erwerb des Laufrechts zu einer der Tickstangen und zurück ins Schlagmal zu laufen, 
                    ohne dass zwischenzeitlich ein Wechsel stattgefunden hat, so erhält die Schlagmannschaft einen Laufpunkt.</p>
                <h6 className="text-lg font-semibold mb-2">Wechselpunkt</h6>
                  <p>Wird ein Läufer von einem Spieler der Feldmannschaft abgeworfen, so erhält die Feldmannschaft einen Wechselpunkt. 
                    Erzwingt die Feldpartei durch Abdrängen eines Läufers der Schlagmannschaft aus dem Spielfeld hinaus den Wechsel des Schlagrechts, erhält sie keinen Wechselpunkt.</p>
                <h6 className="text-lg font-semibold mb-2">Fangpunkt</h6>
                  <p>Wird der geschlagene Ball von einem Spieler der Feldmannschaft direkt aus der Luft, mit einer Hand und ohne 
                    Nachgreifen gefangen, so erhält die Feldmannschaft einen Fangpunkt. Fangpunkte werden auch bei ins Aus geschlagenen, ungültigen Schlägen der Schlagmannschaft durch Fangen des Balls gemacht.</p>
                <h6 className="text-lg font-semibold mb-2">Weitschlagpunkt</h6>
                      <p>Schlägt ein Spieler den Ball über das Spielfeld hinaus in das dahinter liegende Weitschlagfeld, also weiter als 70 Meter, so erhält die Schlagmannschaft einen Weitschlagpunkt.</p>

          
              <h4 className="text-xl font-semibold mb-2">Equipment</h4>
              
              <h5 className="text-lg font-semibold mb-2">Schlagball (Ball)</h5>
                <p className="list-disc list-inside text-gray-700 mb-4">
                  Spielgerät ist ein Lederball, der Schlagball. Das Gewicht des Balles soll vor dem Spiel mindestens 70 g, höchstens 85 g betragen, 
                  der Umfang 19 cm bis 21 cm. Das Leder soll wegen der Blendung im Sonnenschein keine helle Farbe haben. Der Regelball 
                  soll rot sein, jedoch ist mit Zustimmung beider Teams jede Farbe erlaubt.
                </p>
                <p>
                  Das Schlagholz, auch Klippe genannt, darf unbegrenzt lang sein; es muss aus einheitlichem Naturholz und kreisrund im Querschnitt sein 
                  und darf am unteren Ende bis zu 3 cm dick sein. Das Griffende und der Schaft des Holzes dürfen dünner und mit Handschlinge oder Endknauf versehen sein. Das Schlagende
                  darf nicht künstlich beschwert werden. Ein Umwickeln mit Draht, Leder und dergleichen ist verboten. Jeder Spieler darf sein eigenes Schlagholz 
                  benutzen. Alle in das Spiel gebrachten Geräte sind Gemeingut.
                </p>
              <h4>Spielfeld</h4>
              <p>
                Das rechteckige Spielfeld ist 70 m × 25 m mit einem sich anschließenden Weitschlagfeld, das sich aus einer Verlängerung der Diagonalen durch das Spielfeld ergibt. 
                Die Grundlinie ist das Schlagmal, die gegenüber liegende Linie ist das Fangmal. 10 m vor dem Fangmal stehen zwei Tickstangen mit einem Abstand von 4 m. Laufmale sind 
                die Tickstangen. Hinter dem Spielfeld schließt sich in Verlängerung der Diagonalen des Spielfeldes das Weitschlagfeld an.
                Das Fangmal ist in den Spielregeln nach Gutsmuths das Laufziel,[3] in den neueren Spielregeln sind es lediglich die Tickstangen
              </p>
              
              <h4 className="text-xl font-semibold mb-2">Turniere</h4>
                <p className="text-gray-700 mb-2">Unser Verein organisiert jedes Jahr im September das Winterhuder Herbstturnier</p>
                <p className="text-gray-700 mb-2">Himmelfahrt Spiekeroog - Deutsche Meisterschaft</p>
                <p className="text-gray-700 mb-2">Kieler Woche</p>

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


                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/* <Button asChild className="mt-4">
              <Link href="#">Mehr erfahren</Link>
            </Button> */}
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

