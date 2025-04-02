import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/src/components/NavBar";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "Tech Jobs Listings",
  description: "Tech Jobs Listings App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NavBar />
      <body
        className="min-h-[calc(100vh-64px)]"
      >
        {children}
      </body>
      <Footer />
    </html>
  );
}
