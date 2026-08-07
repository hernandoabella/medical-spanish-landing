import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SalesChat from "./components/SalesChat";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRAXMED Publishing",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <div className="h-16 md:h-24 bg-gradient-to-b from-transparent to-[#0A1628]" />
          <Footer />
          {/* Floating Sales Chat Widget — available 24/7 on all pages */}
          <SalesChat key="floating-chat" />
        </div>

        <Script id="mailerlite-auto-show" strategy="afterInteractive">
          {`
            (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
            .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
            n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);
            })(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            
            ml('account', '2052347');
            ml('show', '95EugZ', true);
          `}
        </Script>
      </body>
    </html>
  );
}
