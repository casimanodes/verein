import Link from "next/link"
// import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center">
            {/* Placeholder for logo */}
            <div className="w-12 h-12 bg-white rounded-full mr-4"></div>
            <h3 className="text-xl font-semibold">Schlagball Hamburg</h3>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-4">
              <Link href="/impressum" className="hover:text-gray-300 transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-gray-300 transition-colors">
                Datenschutz
              </Link>
              <Link href="/kontakt" className="hover:text-gray-300 transition-colors">
                Kontakt
              </Link>
            </div>
            <Link
              href="https://www.instagram.com/schlagball.winterhude/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              {/* <Instagram className="inline-block mr-2" size={20} /> */}
              <span>Instagram</span>
            </Link>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Schlagball Hamburg e.V. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}



