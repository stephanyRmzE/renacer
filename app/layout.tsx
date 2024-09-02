import type { Metadata } from "next";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import ToastProvider from "@/providers/toast.provider";

export const metadata: Metadata = {
  title: "Terapia con caballos",
  description: "Terapia asistida con caballos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <Navbar/>
          <main className="relative overflow-hidden">
            {children}
          </main>
          <Footer/>
        </ToastProvider>
      </body>
    </html>
  );
}
