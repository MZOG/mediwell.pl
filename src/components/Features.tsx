import Typography from "./Typography";
import FeaturesImage from "../../public/features-image.jpg";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { Button } from "./ui/button";

export default function Features() {
  const features = [
    "Strona internetowa dopasowana do Twoich potrzeb",
    "Intuicyjny panel administracyjny do zarządzania stroną",
    "Gwarantowana opieka nad stroną internetową",
    "Bezpieczeństwo danych",
    "Lepsza widoczność w Google",
  ];

  return (
    <section className="px-5 mx-auto max-w-6xl mt-24 lg:mt-40 flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-20 md:items-center">
      <div>
        <Image src={FeaturesImage} alt="Korzyści współpracy" />
      </div>

      <div>
        <Typography type="h2" className="text-center mt-5 md:mt-0">
          Korzyści współpracy
        </Typography>

        <div className="space-y-3 md:space-y-5 mt-8 lg:mt-10">
          {features.map((feature, index) => (
            <div key={index} className="flex lg:items-center gap-4">
              <BadgeCheck
                size={24}
                color="#3B82F6"
                className="w-[7%] md:w-auto"
              />
              <p className="lg:text-lg w-[90%] lg:w-auto">{feature}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 lg:mt-10">
          <Button variant="primary" size="primary">
            Umów się na konsultację
          </Button>
        </div>
      </div>
    </section>
  );
}
