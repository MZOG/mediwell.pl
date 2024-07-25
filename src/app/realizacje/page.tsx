import Link from "next/link";
import Container from "@/components/container";
import { getData } from "@/lib/utils";
import { TypePortfolioItem } from "@/types/portfolio";

const PortfolioPage = async () => {
  const response = await getData("/api/portfolios?sort=id:desc&populate=*");
  const portfolio = response.data;

  return (
    <Container section>
      <p>realizacje page</p>

      <div className="grid grid-cols-3 gap-10 mt-10">
        {portfolio.map(
          ({ id, attributes: { title, slug } }: TypePortfolioItem) => {
            return (
              <Link
                href={`/realizacje/${slug}`}
                key={id}
                className="border p-4"
              >
                {title}
              </Link>
            );
          }
        )}
      </div>
    </Container>
  );
};

export default PortfolioPage;
