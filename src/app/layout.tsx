import type { Metadata } from "next";
import "./globals.css";
// import Header from "@/components/common/Header";
// import Footer from "@/components/common/Footer";
import { unstable_ViewTransition as ViewTransition } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ display: "swap", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mediwell",
  description: "Strony internetowe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${jakarta.className} text-primary`}>
        {/* <Header /> */}
        <main className="">
          <ViewTransition name="test">{children}</ViewTransition>
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
