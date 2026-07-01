import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Cairo, Noto_Kufi_Arabic } from "next/font/google";
import Script from "next/script";
import { LanguageProvider } from "@/lib/language";
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

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-kufi",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mirak Hotel — Luxury Redefined",
    template: "%s | Mirak Hotel",
  },
  description:
    "Experience unparalleled luxury at Mirak Hotel in the heart of Port Sudan, on the shores of the Red Sea.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${playfair.variable} ${montserrat.variable} ${cairo.variable} ${notoKufiArabic.variable}`}
    >
      <body className="bg-navy text-white font-sans antialiased">
        <Script id="lang-init" strategy="beforeInteractive">
          {`try {
            var l = window.localStorage.getItem('mirak-lang');
            if (l === 'en') {
              document.documentElement.lang = 'en';
              document.documentElement.dir = 'ltr';
            }
          } catch (e) {}`}
        </Script>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
