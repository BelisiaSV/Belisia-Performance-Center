import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClubProvider } from "@/lib/club-context";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Belisia Performance Center",
  description:
    "Platform for Professionals — wit-label performance-platform voor voetbalclubs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable}>
      <body>
        <ClubProvider>{children}</ClubProvider>
      </body>
    </html>
  );
}
