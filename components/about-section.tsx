import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
  return (
    <section id="about" className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Willkommen bei Schlagball Hamburg</h2>
        <div className="grid grid-flow-row md:grid-flow-col auto-cols-auto gap-8 items-start">
          <div>
            <Image
              src="/images/Cassio_Mateo.jpg"
              alt="Cassio & Mateo"
              width={600}
              height={400}
              className="max-h-[calc(100vh-12rem)] w-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Wir sind Cassio & Mateo</h3>
            <p className="text-gray-700 mb-4">
            seit 3 Jahren unterrichten wir gemeinsam, Schlagball an der Winterhuder 
                Reformschule. Freizeitlich geben wir seit über 5 Jahren jeden Freitag von 14-16 Uhr Training. Wir haben auch erfolgreich ein 3 Wöchiges Projekt für Oberstufenschüler geleitet, 
                denen wir Schlagball beigebracht und am von uns selbst organisierten Herbst-Turnier teilnehmen lassen haben. 
                Um noch mehr Menschen Spaß an diesem Sport finden zu lassen, haben wir einen Verein gegründet.

            </p>
            <div className="hidden md:block">
              <h4 className="text-xl font-semibold mb-2">Cassio - 1. Vorstand</h4>
              <p className="text-gray-700 mb-4">
              Ich bin Cassio, 23 Jahre alt, Sport Trainer mit über 8 Jahren Erfahrung und leidenschaftlicher 
                      Schlagballer. Zusätzlich habe ich eine C-Trainerlizenz im Badminton und unterrichte Hauptberuflich 
                      Kinder im Schwimmen.
              </p>
              <h4 className="text-xl font-semibold mb-2">Mateo - 2. Vorstand</h4>
              <p className="text-gray-700 mb-4">
              Ich bin Mateo, 19 Jahre alt, leidenschaftlicher Schlagballer seit 8 Jahren, 
                      Trainer seit einem halben Jahrzehnt und mit viel Herzblut dabei. 
                      Ich habe eine JuLeiCa Lizenz und Studiere Bewegungswissenschaften (Sport) and der Universität Hamburg. 
                      Sport ist meine Leidenschaft und ich freue mich diese mit andern Menschen zu teilen!
              </p>
              <h4 className="text-xl font-semibold mb-2">Der Sport Schlagball</h4>
              <p className="text-gray-700">
              Schlagball kombiniert Elemente aus Baseball, Brennball und Völkerball. 
                      Zwei Teams wechseln sich im Schlagrecht ab. Die Spieler des schlagenden Teams schlagen 
                      den Ball ins Spielfeld und laufen durch das Feld zu einem Mal und zurück, um Punkte zu sammeln. 
                      Das andere Team versucht, den Ball zu kontrollieren, ihn geschickt zuzuspielen und die Läufer abzuwerfen. 
                      Nach einem erfolgreichen Abwurf wechseln die Teams die Rollen.
              </p>
              <Button className="my-2">
                <Link href="/sport">
                <p>Mehr Informationen</p>

                </Link>
              </Button>
            </div>
            <Accordion type="single" collapsible className="md:hidden w-full">
              <AccordionItem value="history">
                <AccordionTrigger>Cassio - 1. Vorstand</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                  Ich bin Cassio, 23 Jahre alt, Sport Trainer mit über 8 Jahren Erfahrung und leidenschaftlicher 
                      Schlagballer. Zusätzlich habe ich eine C-Trainerlizenz im Badminton und unterrichte Hauptberuflich 
                      Kinder im Schwimmen.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="board">
                <AccordionTrigger>Mateo - 2. Vorstand</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                  Ich bin Mateo, 19 Jahre alt, leidenschaftlicher Schlagballer seit 8 Jahren, 
                      Trainer seit einem halben Jahrzehnt und mit viel Herzblut dabei. 
                      Ich habe eine JuLeiCa Lizenz und Studiere Bewegungswissenschaften (Sport) and der Universität Hamburg. 
                      Sport ist meine Leidenschaft und ich freue mich diese mit andern Menschen zu teilen!
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="philosophy">
                <AccordionTrigger>Der Sport Schlagball</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                  Schlagball kombiniert Elemente aus Baseball, Brennball und Völkerball. 
                      Zwei Teams wechseln sich im Schlagrecht ab. Die Spieler des schlagenden Teams schlagen 
                      den Ball ins Spielfeld und laufen durch das Feld zu einem Mal und zurück, um Punkte zu sammeln. 
                      Das andere Team versucht, den Ball zu kontrollieren, ihn geschickt zuzuspielen und die Läufer abzuwerfen. 
                      Nach einem erfolgreichen Abwurf wechseln die Teams die Rollen.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

