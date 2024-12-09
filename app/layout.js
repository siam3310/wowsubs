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
          <Analytics />
          {/* Footer with Visitor Counter */}
          <footer className="text-center bg-black text-white py-4 mt-4">
            <div className="text-sm">Visitor Count:</div>
            <div id="sfc8ktlkhm54j9j76qtmtjd1q5kcmtz7j6k"></div>
            <script
              type="text/javascript"
              src="https://counter6.optistats.ovh/private/counter.js?c=8ktlkhm54j9j76qtmtjd1q5kcmtz7j6k&down=async"
              async
            ></script>
            <noscript>
              <a href="https://www.freecounterstat.com" title="free counter">
                <img
                  src="https://counter6.optistats.ovh/private/freecounterstat.php?c=8ktlkhm54j9j76qtmtjd1q5kcmtz7j6k"
                  border="0"
                  title="free counter"
                  alt="free counter"
                />
              </a>
            </noscript>
          </footer>
        </div>
      </body>
    </html>
  );
}
