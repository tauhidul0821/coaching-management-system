'use client';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Layout/Footer";
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
// import { useParams  } from "next/navigation";

import { usePathname } from 'next/navigation';




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Coaching Management System",
//   description: "This is a coaching management system",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showSidebar = !['/login', '/signup'].includes(pathname);
  console.log('Show Sidebar:- ', showSidebar);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

      {showSidebar && (
        <div className="bg-gray-100 flex">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />            
            <main className="flex-1 p-6">
              <div className="w-3/4 p-8 overflow-y-auto">{children}</div>
            </main>            
            <Footer />
          </div>
        </div>
      )}
      {!showSidebar && (
        <main>
          <div>{children}</div>
        </main>   
      )}
      </body>
    </html>
  );
}
