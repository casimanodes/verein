import React from "react";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <h1 className="text-3xl font-bold text-center mb-6">Datenschutzerklärung</h1>


 
      <section className="mb-6 ">
        <h2 className="text-2xl font-semibold mb-4">Allgemeine Hinweise</h2>
        <p className="text-base leading-relaxed">
          Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Auf dieser Website
          werden keine personenbezogenen Daten von BesucherInnen gespeichert oder verarbeitet. Es
          erfolgt lediglich die Nutzung eines Cookies, um die Funktionalität der Website
          sicherzustellen.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Verwendung von Cookies</h2>
        <p className="text-base leading-relaxed">
          Diese Website verwendet ausschließlich ein technisch notwendiges Cookie, das folgende
          Eigenschaften hat:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Speicherdauer:</strong> 30 Tage</li>
          <li><strong>Zweck:</strong> Sicherstellung der Funktionalität der Website</li>
          <li><strong>Art:</strong> Technisch notwendig, keine Tracking- oder Marketingzwecke</li>
        </ul>
        <p className="text-base leading-relaxed mt-4">
          Die gesetzten Cookies enthalten keine personenbezogenen Daten und erlauben keine
          Rückverfolgung der NutzerInnen.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Datensicherheit</h2>
        <p className="text-base leading-relaxed">
          Wir setzen technische und organisatorische Maßnahmen ein, um die Sicherheit der Website zu
          gewährleisten. Diese umfassen die Verschlüsselung der Verbindung (HTTPS) und die sichere
          Implementierung von Cookies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Rechte der NutzerInnen</h2>
        <p className="text-base leading-relaxed">
          Da keine personenbezogenen Daten verarbeitet werden, entfallen Rechte wie Auskunft,
          Berichtigung, Löschung oder Widerspruch im Sinne der Datenschutz-Grundverordnung (DSGVO).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Änderungen dieser Datenschutzerklärung</h2>
        <p className="text-base leading-relaxed">
          Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren, um sie an geänderte
          gesetzliche oder technische Anforderungen anzupassen.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Verantwortlicher</h2>
        <p className="text-base leading-relaxed">
          Verantwortlich für die Verarbeitung von Daten auf dieser Website:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Name</strong> Hamburg Schlagball e.V.</li>
          <li><strong>Adresse:</strong> Loki-Schmidt-Platz 15</li>
          <li><strong>E-Mail:</strong> casskomp@gmx.de</li>
          
          <li><strong>Telefonnummer:</strong> 015128819488 </li>
        </ul>
      </section>
    </div>
    
  );
};
