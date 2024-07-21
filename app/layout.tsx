import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from './component/footer';
import Navbar from './component/navbar';
import Whatssp from './component/whatsssap';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MetaLearning Hub",
  description: "Metalearning HUB a pour activité principale le Brain Coaching pour aider les lifelong learners et décideurs à reprendre le contrôle de leur cerveau en développant et améliorant leurs performances cognitives: Concentration, lecture rapide, mind mapping, mémoire, mindset, prise de décisions… Nos programmes sont destinés aux entreprises et aux particuliers et adaptés aux besoins recensés.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Whatssp />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
