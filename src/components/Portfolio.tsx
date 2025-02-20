"use client";
import { useState } from "react";
import Typography from "./Typography";
import Image from "next/image";
import { portfolioItems } from "@/lib/portfolio";
import artysci from "../../public/artysci.jpg";
import nzoz from "../../public/nzoz.jpg";
import identysta from "../../public/identysta.png";
import royal from "../../public/royal.png";
import psycho from "../../public/psycho.png";
import silmedica from "../../public/silmedica.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import Link from "next/link";

export default function PortfolioHomepage() {
  const [selectedImage, setSelectedImage] = useState(artysci);

  const handleImage = (e: string) => {
    switch (e) {
      case "artysci":
        setSelectedImage(artysci);
        break;
      case "nzoz":
        setSelectedImage(nzoz);
        break;
      case "identysta":
        setSelectedImage(identysta);
        break;
      case "royal":
        setSelectedImage(royal);
        break;
      case "psycho":
        setSelectedImage(psycho);
        break;
      case "silmedica":
        setSelectedImage(silmedica);
        break;

      default:
        break;
    }
  };

  return (
    <section className="px-5 mx-5 xl:mx-auto max-w-7xl mt-24 lg:mt-40 bg-gray-50/60 py-10 md:py-20 rounded-xl md:rounded-3xl">
      <Typography type="h2" className="text-center md:max-w-lg md:mx-auto">
        Realizacje
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 max-w-5xl mx-auto mt-5 md:mt-10 lg:mt-20">
        <div>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            onValueChange={(e) => {
              handleImage(e);
            }}
          >
            {portfolioItems.map((item, index) => (
              <AccordionItem
                value={item.value}
                key={index}
                className="border-none"
              >
                <AccordionTrigger className="text-lg hover:no-underline hover:text-main">
                  {item.name}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-5">
                  <p className="text-base/7 text-zinc-700">
                    {item.description}
                  </p>
                  <div className="flex flex-col lg:flex-row gap-5 lg:gap-3">
                    <Button
                      asChild
                      variant="primary"
                      size="primary"
                      className="self-start"
                    >
                      <Link href={item.portfolioDescription || ""}>
                        Wiecej informacji o projekcie
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full shadow-none self-start h-12 px-5 text-base"
                    >
                      <a href={`${item.portfolioLink}?ref=mediwell.pl` || ""}>
                        Odwiedź stronę
                      </a>
                    </Button>
                  </div>
                  <div className="md:hidden">
                    <Image
                      src={selectedImage}
                      alt="Realizacja"
                      className="rounded-xl"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="hidden md:block">
          <Image src={selectedImage} alt="Realizacja" className="rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
