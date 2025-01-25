import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ContactPerson {
  name: string
  email: string
  telephone: string
}

interface KontaktProps {
  person1: ContactPerson
  person2: ContactPerson
  clubLocation: string
}

export default function Kontakt({ person1, person2, clubLocation }: KontaktProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <ContactCard person={person1} />
      <ContactCard person={person2} />
      <LocationCard location={clubLocation} />
    </div>
  )
}

function ContactCard({ person }: { person: ContactPerson }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{person.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center space-x-2">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <a href={`mailto:${person.email}`} className="text-sm hover:underline">
            {person.email}
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <a href={`tel:${person.telephone}`} className="text-sm hover:underline">
            {person.telephone}
          </a>
        </div>
      </CardContent>
    </Card>
  )
}

function LocationCard({ location }: { location: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vereinsstandort</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{location}</span>
        </div>
      </CardContent>
    </Card>
  )
}

