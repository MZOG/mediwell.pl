import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { portfolioItems } from "@/lib/portfolio";
import { www } from "@/lib/www";

const footerLinks = [
  {
    name: "Strony internetowe",
    href: "/strony-internetowe",
  },
  {
    name: "Realizacje",
    href: "/realizacje",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Darmowa konsultacja",
    href: "/darmowa-konsultacja",
  },
  {
    name: "Kontakt",
    href: "/kontakt",
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="px-5 mx-auto max-w-7xl mt-10 lg:mt-20 pb-10">
        <div className="gap-8 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col">
            <p className="text-xl font-semibold">
              Medi<span className="text-main">well</span>
            </p>

            <a
              href="mailto:biuro@mediwell.pl"
              className="mt-2 md:mt-5 text-lg inline-flex gap-1 items-center group hover:text-main transition-all text-[17px] md:text-base"
            >
              biuro@mediwell.pl
              <Mail
                size={16}
                className="opacity-0 group-hover:opacity-100 transition-all text-main"
              />
            </a>

            <a
              href="tel:739907919"
              className="mt-1 text-lg inline-flex gap-1 items-center group hover:text-main transition-all text-[17px] md:text-base"
            >
              +48 739 907 919
              <Phone
                size={16}
                className="opacity-0 group-hover:opacity-100 transition-all text-main"
              />
            </a>
          </div>

          <div>
            <p className="text-lg font-medium">Menu</p>

            <ul className="space-y-4 mt-5">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="inline-flex gap-1 items-center group hover:text-main transition-all "
                  >
                    {link.name}
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-all text-main"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Link href="/strony-internetowe" className="text-lg font-medium">
              Strony internetowe
            </Link>

            <ul className="space-y-4 mt-5">
              {www.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="inline-flex gap-1 items-center group hover:text-main transition-all"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-all text-main"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden">
            <p className="text-lg font-medium">Realizacje</p>

            <ul className="space-y-4 mt-5">
              {portfolioItems.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.portfolioDescription}
                    className="inline-flex gap-1 items-center group hover:text-main transition-all"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-all text-main"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-10 mt-5">
          <p className="text-sm">2025 &copy; Mediwell.</p>
          <Link
            href="/polityka-prywatnosci"
            className="inline-flex gap-1 items-center group hover:text-main transition-all text-sm"
          >
            Polityka prywatności
            <ArrowUpRight
              size={16}
              className="opacity-0 group-hover:opacity-100 transition-all text-main"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
