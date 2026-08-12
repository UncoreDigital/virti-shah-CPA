import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Virti Shah CPA | Audit, Tax, Bookkeeping & CAS for CPA Firms",
    template: "%s | Virti Shah CPA",
  },
  description:
    "Virti Shah CPA provides scalable audit, tax, bookkeeping and CAS capacity for CPA and accounting firms, with CPA, EA and CA leadership, three-tier quality review and integrated workflows.",
  keywords: [
    "outsourced accounting",
    "offshore accounting",
    "bookkeeping",
    "tax preparation",
    "audit support",
    "CPA outsourcing",
    "HUD audit",
    "CIRA audit",
    "NFP audit",
    "EBP audit",
  ],
  metadataBase: new URL("https://virtishahcpa.com"),
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
