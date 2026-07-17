import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Cinzel } from "next/font/google";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-brand",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://disquietudevengeance.com"),
  title: {
    default: "Disquietude Vengeance",
    template: "%s | Disquietude Vengeance",
  },
  description:
    "Official website of Disquietude Vengeance. Explore music, albums, videos, gallery, events, news, and the latest from the band.",
  keywords: [
    "Disquietude Vengeance",
    "Deathcore",
    "dvdeathcore",
    "Metal Band",
    "Kolkata",
    "India",
    "Deathcore Band",
    "Metal Music",
    "Official Website",
  ],
  authors: [{ name: "Disquietude Vengeance" }],
  creator: "Disquietude Vengeance",
  publisher: "Disquietude Vengeance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${cinzel.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
