import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Uner Satu",
  description: "Website Desa Uner Satu",
  other: {
    "google-site-verification": "Z2otE_ZmHtYcDcEvcGXk6p5m1ngciR7pwXlNGjesTKo",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-800`}
      >
        {/* Navbar selalu di atas dan responsif */}
        <Navbar />

        {/* Konten utama dengan jarak antar section proporsional */}
        <main className="flex flex-col w-full overflow-x-hidden">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
