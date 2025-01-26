import React from "react";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <h1 className="text-3xl font-bold text-center mb-6">Impressum</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
        <p className="text-base leading-relaxed">
          <strong>Schlagball Hamburg e.V.</strong>
          <br />
          Loki-Schmidt-Platz 15
          <br />
          22297 Hamburg
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Vertretungsberechtigte</h2>
        <p className="text-base leading-relaxed">
          Cassius Kompala(1. Vorstand)
        </p>
        <p className="text-base leading-relaxed">
          Mateo Sanchez(2. Vorstand)
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Registereintrag</h2>
        <h4 className="text-1xl font-semibold mb-1">Registernummer</h4>
        <p className="text-base leading-relaxed">VR 22890</p>
        <h4 className="text-1xl font-semibold mb-1">Registergericht</h4>
        <p className="text-base leading-relaxed">Vereinsregister des Amtsgerichts Hamburg</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
        <h4 className="text-1xl font-semibold mb-1">1. Vorstand</h4>
        <p className="text-base leading-relaxed">
          E-Mail: <a href="mailto:casskomp@gmx.de" className="text-blue-500 underline">casskomp@gmx.de</a>
          <br />
          Telefon: +49 15128819488
        </p>

        <h4 className="text-1xl font-semibold mb-1 mt-2">2. Vorstand</h4>
        <p className="text-base leading-relaxed">
          E-Mail: <a href="mailto:mateo.sanchez@gmx.de" className="text-blue-500 underline">mateo.sanchez@gmx.de</a>
          <br />
          {/* Telefon: +49 176 23788159 */}
          Telefon: **************
        </p>
      </section>

      {/* <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
        <p className="text-base leading-relaxed">
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE123456789
        </p>
      </section> */}

      {/* <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p className="text-base leading-relaxed">
          Cassius Kompala(1. Vorstand)
        </p>
      </section> */}

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Haftungsausschluss</h2>
        <p className="text-base leading-relaxed">
          Trotz sorgfältiger Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
          Für den Inhalt der verlinkten Seiten sind ausschließlich deren BetreiberInnen verantwortlich.
        </p>
      </section>


    </div>
  );
};
