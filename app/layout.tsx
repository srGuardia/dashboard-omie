import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";

import { Container } from "@/components";
import Providers from "@/providers";
import "./globals.css";
import StyledComponentsRegistry from "./registry";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
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
        className={`${roboto.variable} ${robotoMono.variable} scroll-smooth antialiased`}
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
