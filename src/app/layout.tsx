import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Inter } from "next/font/google";

// Add Inter as the default font for body text
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"], // Define the font weights you need
});

// Add Merriweather for headings


export const metadata = {
  title: "VividCart",
  description:
    "Your go-to destination for vibrant and engaging shopping. Explore a wide range of products with unbeatable quality and style. Shop now for a seamless experience!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#4F46E5" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`bg-background text-foreground max-w-7xl mx-auto ${inter.className}`}
      >
        <Navbar />
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
