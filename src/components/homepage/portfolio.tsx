import Container from "../container";
import { TypePortfolioItem } from "@/types/portfolio";
import ItemCard from "../item-card";
import { getData } from "@/lib/utils";
const categories = [
  {
    name: "Dla lekarzy",
    slug: "dla-lekarzy",
  },
  {
    name: "Dla placówek medycznych",
    slug: "dla-placowek-medycznych",
  },
  {
    name: "Dla szpitali",
    slug: "dla-szpitali",
  },
  {
    name: "Dla dentystów",
    slug: "dla-dentystow",
  },
  {
    name: "Dla fizjoterapeutów",
    slug: "dla-fizjoterapeutow",
  },
  {
    name: "Więcej",
    slug: "wiecej",
    href: "/realizacje",
  },
];

export default async function Portfolio() {
  const portfolio = await getData("/api/portfolios?sort=id:desc&populate=*");
  console.log(portfolio);

  return (
    <Container section customClass="my-10">
      <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
        Sprawdź <span className="text-secondary">realizacje</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 mt-10 lg:mt-20">
        {/* {items.map((item, index) => {
          return <ItemCard type="portfolio" data={item} key={index} />;
        })} */}
      </div>
    </Container>
  );
}
