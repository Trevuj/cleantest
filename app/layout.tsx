import type { Metadata } from "next";
import { Poppins } from "next/font/google";  // Changed to Poppins
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Navigation } from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";

// Import Poppins font
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });  // You can adjust weights as needed

export const metadata: Metadata = {
  title: "Solution Saintaire Optimale",
  description: "Create by IFTE-13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(poppins.className, "antialiased bg-[#e0f2fe] hide-scrollbar overflow-auto")}>
        <main>
          <Navigation />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
