import { Geist_Mono, Montserrat } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils";
import Page from "./page";

const montserrat = Montserrat({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", montserrat.variable, "scroll-smooth")}
    >
      <body>
        <Page />
      </body>
    </html>
  )
}
