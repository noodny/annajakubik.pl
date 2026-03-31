import type { Metadata } from "next";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anna Jakubik — Specjalista Periodontologii",
  description:
    "Periodontologia z precyzją i troską. Specjalista w zakresie zdrowia dziąseł, medycyny jamy ustnej i zaawansowanego leczenia periodontalnego.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Anna Jakubik — Specjalista Periodontologii",
    description:
      "Periodontologia z precyzją i troską. Specjalista w zakresie zdrowia dziąseł, medycyny jamy ustnej i zaawansowanego leczenia periodontalnego.",
    images: [{ url: "/ogimage.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ogimage.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="bg-[#080a08] text-white antialiased">
        <Header />
        {children}
        <Contact />
        <CtaSection />
        <Footer />
      </body>
    </html>
  );
}
