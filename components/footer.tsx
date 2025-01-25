import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 m-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Sportverein XYZ</h3>
            <p>Gemeinsam aktiv, gemeinsam stark</p>
          </div>
          <div>
            <p>&copy; {new Date().getFullYear()} Sportverein XYZ. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
      <Link href="/kontakt" className="font-bold text-right block pr-4">
        Kontakt
      </Link>
    </footer>
  )
}

