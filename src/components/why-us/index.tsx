import Container from "@/components/container";
import { Button } from "../ui/button";

const WhyUs = () => {
  return (
    <Container section customClass="flex justify-between py-20">
      <div className="w-6/12 space-y-10 md:space-y-32">
        <div>
          <h2 className="text-2xl font-bold mb-5 relative after:content-[''] before:content-[''] before:absolute after:absolute after:-bottom-2 after:left-0 after:h-[4px] after:w-20 after:bg-secondary after:rounded-full before:h-[4px] before:w-3 before:left-[85px] before:-bottom-2 before:rounded-full before:bg-secondary">
            Doświadczenie
          </h2>
          <p className="max-w-md mb-3">
            Wieloletnie doświadczenie w tworzeniu stron internetowych pozwala na
            dobranie idealnych funkcjonalności dla Twojej strony.
          </p>
          <p className="max-w-md">Zaufaj.. bla bla</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-5 relative after:content-[''] before:content-[''] before:absolute after:absolute after:-bottom-2 after:left-0 after:h-[4px] after:w-20 after:bg-secondary after:rounded-full before:h-[4px] before:w-3 before:left-[85px] before:-bottom-2 before:rounded-full before:bg-secondary">
            Nowoczesne technologie
          </h2>
          <p className="max-w-md mb-3">
            Świat idzie do przodu, nowe technologie to nowe, lepsze
            doświadczenia, szybkość oraz bezpieczeństwo.
          </p>
          <p className="max-w-md mb-3">
            Twoja strona internetowa będzie zachwycać nie tylko wyglądem, ale
            również funkcjonalnościami dobranymi do Twoich potrzeb
          </p>
          <div className="flex gap-5">
            <Button variant="outline">Next.js</Button>
            <Button variant="outline">WordPress</Button>
          </div>
        </div>
      </div>

      <div className="w-6/12 space-y-10">
        <h2 className="text-2xl font-bold mb-5 relative after:content-[''] before:content-[''] before:absolute after:absolute after:-bottom-2 after:left-0 after:h-[4px] after:w-20 after:bg-secondary after:rounded-full before:h-[4px] before:w-3 before:left-[85px] before:-bottom-2 before:rounded-full before:bg-secondary">
          Dlaczego warto?
        </h2>

        <div className="flex gap-8">
          <div className="size-24 bg-gray-200"></div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              <span className="text-secondary">Darmowa</span> wycena
            </h3>
            <p className="max-w-md mb-3">
              Wypełnij formularz i dowiedz się ile będzie kosztować nowa strona
              internetowa.
            </p>
            <p className="max-w-md">
              Wycena strony nie zajmuję więcej niż 48h.
            </p>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="size-24 bg-gray-200"></div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              <span className="text-secondary">7 lat</span> doświadczenia
            </h3>
            <p className="max-w-md mb-3">
              Jestem doświadczonym programistą, który wie jak poradzić sobie z
              problemami.
            </p>
            <p className="max-w-md">
              W razie wątpliwości chętnie pomogę Ci wybrać idealne rozwiązanie.
            </p>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="size-24 bg-gray-200"></div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              <span className="text-secondary">Szybka</span> realizacja
            </h3>
            <p className="max-w-md mb-3">
              Strony internetowe tworzę "modułami", które są już gotowymi
              rozwiązaniami, wystarczy tylko zmiana parametrów.
            </p>
            <p className="max-w-md">
              Realizacja jest możliwa nawet w dwa tygodnie!
            </p>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="size-24 bg-gray-200"></div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              <span className="text-secondary">Czysty</span> kod
            </h3>
            <p className="max-w-md mb-3">
              Czysty kod, to szybsza i lepsza strona internetowa.
            </p>
            <p className="max-w-md">
              Nowoczesny kod dodatkowo poprawi pozycję strony w Google.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyUs;
