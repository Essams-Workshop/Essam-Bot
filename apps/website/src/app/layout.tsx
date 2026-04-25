import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Grain } from "@/components/fx/Grain";
import { GridBackdrop } from "@/components/fx/GridBackdrop";
import { Scanlines } from "@/components/fx/Scanlines";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: "Builder Cohort #1",
  description: "Retro-futuristic command deck for Builder Cohort #1."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
        <div className="fixed inset-0 -z-10">
          <GridBackdrop />
          <Scanlines />
          <Grain />
        </div>
        {children}
      </body>
    </html>
  );
}
