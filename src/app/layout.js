import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "Craxs RAT | Cybersecurity Intelligence & Defense",
  description: "An educational deep dive into Craxs RAT: Understanding its powerful capabilities, attack vectors, and how to defend your systems against advanced mobile malware.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
