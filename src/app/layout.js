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
  title: {
    default: "Uner Satu | Kelurahan Asri di Kecamatan Kawangkoan",
    template: "%s | Uner Satu",
  },
  description:
    "Uner Satu — Kelurahan yang asri dan penuh kehangatan di jantung Kecamatan Kawangkoan, Kabupaten Minahasa. Temukan informasi lengkap tentang Kelurahan Uner Satu di sini.",
  keywords: [
    "Uner Satu",
    "Kelurahan Uner Satu",
    "Kawangkoan",
    "Minahasa",
    "Informasi Kelurahan",
  ],
  authors: [{ name: "Kelurahan Uner Satu" }],
  creator: "Kelurahan Uner Satu",
  publisher: "Kelurahan Uner Satu",
  metadataBase: new URL("https://unersatu.vercel.app"),
  alternates: {
    canonical: "https://unersatu.vercel.app",
  },
  openGraph: {
    title: "Uner Satu | Kelurahan di Kecamatan Kawangkoan",
    description:
      "Kelurahan yang asri dan penuh kehangatan di jantung Kecamatan Kawangkoan, Kabupaten Minahasa.",
    url: "https://unersatu.vercel.app",
    siteName: "Uner Satu",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uner Satu | Kelurahan di Kecamatan Kawangkoan",
    description:
      "Informasi lengkap tentang Kelurahan Uner Satu, Kecamatan Kawangkoan, Kabupaten Minahasa.",
  },
  icons: {
    icon: "/images/kelurahan_unersatu.jpeg",       // 👈 tab logo (favicon)
    shortcut: "/images/kelurahan_unersatu.jpeg",   // 👈 fallback shortcut
    apple: "/images/kelurahan_unersatu.jpeg",      // 👈 iPhone/iPad icon
  },
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
