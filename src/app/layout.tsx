import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-sans",
  weight: "400",
  display: "swap",
});

const playfair = localFont({
  src: "./fonts/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--font-display",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Happy 17th, Aura",
  description: "Hadiah kecil: website spesial untuk Aura 💕",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${playfair.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
