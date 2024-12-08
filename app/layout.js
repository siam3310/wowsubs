import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Nabar";
import "./globals.css";
import { Inter } from "next/font/google";
import { useEffect } from "react";

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
  useEffect(() => {
    // Create the script element
    const script = document.createElement("script");
    script.src = "https://www.counters-free.net/count/gsx3";
    script.async = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <div className="h-screen" style={containerStyle}>
          <Navbar />
          {children}
          <Analytics />
          
          {/* Visitor Counter Container */}
          <div className="flex justify-center items-center p-4">
            <div id="visitor-counter">Loading visitor count...</div>
          </div>
        </div>
      </body>
    </html>
  );
}
