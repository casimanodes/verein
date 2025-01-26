"use client"
import { AboutSection } from "@/components/about-section"
import { SportSection } from "@/components/sport-section"
import { JoinSection } from "@/components/join-section"
import { NecessaryCookies } from "@/components/coockies"
// import { useEffect, useState } from 'react';


export default function Home() {

  // const [cookies, setCookies] = useState<Record<string, string>>({});
  // const [message, setMessage] = useState('');

  // // Fetch cookies when the component mounts
  // useEffect(() => {
  //   const fetchCookies = async () => {
  //     try {
  //       const response = await fetch('/api/get-cookie');
  //       const data = await response.json();
  //       setCookies(data.cookies || {});
  //       setMessage(data.message || 'No cookies found');
  //       console.log("geklappt1")
  //     } catch (error) {
  //       console.log("neee")
  //       setMessage('Error fetching cookies');
  //     }
  //   };

  //   fetchCookies();
  // }, []);

  
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-16">

        <AboutSection />
        <JoinSection />
        <SportSection />
        <NecessaryCookies />

      </main>
    </div>
  )
}




// werte und philosophie für corperate identety einfügen 