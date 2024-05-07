import Link from "next/link";
import Image from "next/image";
import Container from "@/components/container";
import { Button } from "../ui/button";
import { Fingerprint, ShieldPlus } from "lucide-react";
import HeroImage from "/public/heroImage.jpg";

const offerList = [
  {
    name: "Dla lekarzy",
    href: "/uslugi/dla-lekarzy",
  },
  {
    name: "Dla centrów medycznych",
    href: "/uslugi/dla-centrow-medycznych",
  },
  {
    name: "Dla dentystów",
    href: "/uslugi/dla-dentystow",
  },
  {
    name: "Dla fizjoterapeutów",
    href: "/uslugi/dla-fizjoterapeutow",
  },
  {
    name: "Dla psychiatrów i psychoterapeutów",
    href: "/uslugi/dla-psychiatrow-i-psychoterapeutow",
  },
];

export default function Hero() {
  return (
    <section className="bg-blue-50 py-20">
      <Container customClass="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <Button asChild size="sm" variant="outline">
            <Link href="/blog">
              Strona internetowa na raty - sprawdź szczegóły
            </Link>
          </Button>

          <h1 className="text-[45px] leading-none font-extrabold">
            Strony internetowe dla placówek{" "}
            <span className="text-secondary">medycznych</span>
          </h1>

          <div className="flex flex-wrap gap-2">
            {offerList.map((offer, index) => (
              <Button key={index} asChild variant="outline">
                <Link href={offer.href} className="flex gap-1 items-center">
                  <ShieldPlus size={19} />
                  {offer.name}
                </Link>
              </Button>
            ))}
          </div>

          <Button asChild variant="secondary">
            <Link href="/zostan-klientem" className="flex gap-2">
              <Fingerprint size={19} />
              Zostań klientem
            </Link>
          </Button>
        </div>

        <Image src={HeroImage} alt="MediWell" />
      </Container>
    </section>
  );
}
