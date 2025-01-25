import Kontakt from "@/components/Kontakt"

export default function KontaktPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Kontakt</h1>
      <Kontakt
        person1={{
          name: "Cassio",
          email: "casskomp@gmx.de",
          telephone: "+49 123 456789",
        }}
        person2={{
          name: "Mateo",
          email: "Mateo.sanchez@web.de",
          telephone: "+49 987 654321",
        }}
        clubLocation="Loki-Schmidt-Platz 15, 22297 Hamburg"
      />
    </div>
  )
}

