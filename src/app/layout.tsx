import type { Metadata } from "next";
import { Ysabeau, Cormorant, Fira_Code } from "next/font/google";

import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";
import Navbar from "../components/navbar.tsx";

import "./globals.css";

const ysabeau = Ysabeau({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ysabeau",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
});

const fira_code = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "React Home Page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ysabeau.variable} ${cormorant.variable} ${fira_code.variable}`}>
      <body>
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex-grow max-w-screen-lg flex justify-between my-2 mx-auto">
            <div className="flex-grow w-20">
              <Navbar />
            </div>
            <div className="w-8/12 max-w-screen-lg mx-auto">{children}</div>
            <div className="flex-grow w-20"></div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
