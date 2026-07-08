import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Dhiaa Mostafa | Senior Systems Architect & ERP Integrations Engineer",
  description: "Dhiaa Mostafa - Portfolio website detailing enterprise ERP systems, multi-tenant SaaS platforms, REST/GraphQL APIs, real-time dispatch operations, and AI workflows.",
  keywords: ["Dhiaa Mostafa", "Systems Architect", "ERP Integrations", "Laravel Developer", "NestJS", "React", "Next.js", "AI Automation", "WebSockets"],
  authors: [{ name: "Dhiaa Mostafa" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#020202] text-[#f8fafc] overflow-x-hidden selection:bg-brand-blue selection:text-[#020202]">
        <I18nProvider>
          <Navbar />
          <div className="flex-grow flex flex-col">
            {children}
          </div>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
