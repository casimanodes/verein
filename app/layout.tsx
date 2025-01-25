import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
// import { AlertDemo } from "@/components/alert-demo"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Schlagball Hamburg",
  description: "Erstellt von Cassio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <MainNav />
        {children}
        <Footer />
        {/* <AlertDemo /> */}

      </body>
    </html>
  );
}
