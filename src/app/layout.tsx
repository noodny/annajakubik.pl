import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anna Jakubik — Specjalista Periodontologii",
  description:
    "Periodontologia z precyzją i troską. Specjalista w zakresie zdrowia dziąseł, medycyny jamy ustnej i zaawansowanego leczenia periodontalnego.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="bg-[#080a08] text-white antialiased">{children}</body>
    </html>
  );
}
