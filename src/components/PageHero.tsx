// import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import HeroImage from "../../public/mediwell_hero.svg";
import Typography from "./Typography";

const PageHero = () => {
  return (
    <section className="px-5 mx-auto max-w-7xl h-screen flex items-center">
      <div className="flex flex-col md:flex-row gap-10 lg:gap-32 md:items-center">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 lg:gap-5">
            <div className="h-[2px] rounded-full min-w-[30px] lg:min-w-[50px] bg-main"></div>
            <p className="text-zinc-700">Tworzymy najlepsze rozwiązania</p>
          </div>
          <Typography type="h1">
            Skuteczne <span className="text-main">strony internetowe</span> dla
            placówek medycznych
          </Typography>

          <p className="text-lg lg:text-xl text-zinc-700 lg:max-w-xl">
            Zadbaj o profesjonalny wizerunek swojej placówki medycznej w
            internecie. Oferujemy kompleksowe rozwiązania dla branży medycznej.
          </p>

          <Button
            asChild
            variant="primary"
            size="primary"
            className="self-start "
          >
            <a href="tel:739907919">Zadzwoń +48 739 907 919</a>
          </Button>
        </div>

        <div>
          <Image alt="Mediwell - Medyczne strony internetowe" src={HeroImage} />
        </div>
      </div>
    </section>
  );
};

export default PageHero;
