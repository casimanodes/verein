'use client';

import { useEffect, useState } from 'react';

export function NecessaryCookies() {
  const [cookiesSet, setCookiesSet] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set the necessary cookie
    const cookieName = 'necessaryCookie';
    const cookieValue = 'accepted';

    document.cookie = `${cookieName}=${cookieValue}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax; Secure`;

    // Check if the cookie was successfully set
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [key, value] = cookie.split('=');
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);

    if (cookies[cookieName] === cookieValue) {
      setCookiesSet(true);
    } else {
      console.error('Failed to set the necessary cookie.');
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
  
      return () => clearTimeout(timer);
    }

    // Timer zum Ausblenden nach 3 Sekunden
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-green-100 border border-green-400 rounded-t text-green-700 ml-4 mr-4 mb-4">
      <h2 className="text-lg font-bold">Cookie Status</h2>
      {cookiesSet ? (
        <p>
          Die gesetzlich notwendigen Cookies wurden erfolgreich gesetzt. 
        </p>
      ) : (
        <p className="text-red-600">
          Fehler: Die notwendigen Cookies konnten nicht gesetzt werden. Bitte überprüfen Sie Ihre
          Browsereinstellungen.
        </p>
      )}
    </div>
  );
}
