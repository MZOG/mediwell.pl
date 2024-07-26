import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin-ext"] });

import Header from "@/components/header";

export const metadata: Metadata = {
  title: {
    template: "%s - Placówki medyczne",
    default: "Mediwell - Placówki medyczne",
  },
  description:
    "Strony internetowe dla placówek medycznych, szpitali, lekarzy, dentystów, fizjoterapeutów, psychiatrów i psychoterapeutów.",
};

const Maintenance = () => {
  return (
    <html>
      <body>
        <main className="h-screen w-full flex items-center justify-center">
          <p className="text-sm">strona w budowie</p>
        </main>
      </body>
    </html>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (process.env.NEXT_PUBLIC_IS_DEVELOPMENT) <Maintenance />;
  return (
    <html lang="pl">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
