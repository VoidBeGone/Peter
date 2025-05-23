import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./frontend/components/Navbar.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Peter Yoo",
  description: "This is a site by peter yoo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Peter Yoo</title>  
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
