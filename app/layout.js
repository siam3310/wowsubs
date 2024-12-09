import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Nabar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BPL 2025 LIVE - bpl25.netlify.app",
  description: "A website where you can watch live BPL 2025 for free - BPL25.NETLIFY.APP",
  verification: { google: "keVTh4CE7NNuJ2uokcjoiAlHfUlakVP7ThDhRKijtCc" },
};

const containerStyle = {
  backgroundImage: "url(assets/bg-image.webp)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <div className="h-screen" style={containerStyle}>
          <Navbar />
          {children}
          {/* Visitor Counter */}
          <div className="flex justify-center mt-4">
            <a
              href="https://www.freecounterstat.com"
              title="web page counters free"
            >
              <img
                src="https://counter6.optistats.ovh/private/freecounterstat.php?c=sy78cebaseknw8yde4e6jr5b6x3etltl"
                border="0"
                title="web page counters free"
                alt="web page counters free"
              />
            </a>
          </div>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
