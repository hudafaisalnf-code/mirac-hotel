import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mirak Hotel — Luxury Redefined",
    template: "%s | Mirak Hotel",
  },
  description:
    "Experience unparalleled luxury at Mirak Hotel. Exquisite rooms, world-class amenities, and exceptional service.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable}`}
    >
      <body className="bg-navy text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
