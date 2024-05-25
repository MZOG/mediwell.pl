import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin-ext"] });

import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Mediwell - Placówki medyczne",
  description:
    "Strony internetowe dla placówek medycznych, szpitali, lekarzy, dentystów, fizjoterapeutów, psychiatrów i psychoterapeutów.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (process.env.NEXT_PUBLIC_IS_DEVELOPMENT) {
    return (
      <html>
        <body>
          <main className="h-screen w-full flex items-center justify-center">
            <p className="text-sm">strona w budowie</p>
          </main>
        </body>
      </html>
    );
  } else {
    return (
      <html lang="pl">
        <body className={jakarta.className}>
          <Header />
          <main>{children}</main>
          {/* <Footer /> */}
        </body>
      </html>
    );
  }
}
