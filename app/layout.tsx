import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Container } from "@/components";
import Providers from "@/providers";
import "./globals.css";
import StyledComponentsRegistry from "./registry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omie - Dashboard",
  description: "Teste técnico Omie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
      >
        <StyledComponentsRegistry>
          <Container>
            <Providers>{children}</Providers>
          </Container>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
