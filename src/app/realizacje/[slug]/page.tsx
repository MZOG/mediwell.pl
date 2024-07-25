import type { Metadata, ResolvingMetadata } from "next";
import Container from "@/components/container";
import { getData } from "@/lib/utils";
import PortfolioInfo from "@/components/portfolio-components/portfolio-info";
import PortfolioSection from "@/components/portfolio-components/portfolio-section";
import PortfolioImage from "@/components/portfolio-components/portfolio-image";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const response = await getData(`/api/portfolios?filters[slug][$eq]=${slug}`);

  return {
    title: response.data[0].attributes.title,
  };
}

const getContentComponents = ({ id, __component, ...rest }: any) => {
  let ContentComponent;

  if (__component === "post-category.info") {
    ContentComponent = PortfolioInfo;
  } else if (__component === "post-category.section") {
    ContentComponent = PortfolioSection;
  } else if (__component === "post-category.image") {
    ContentComponent = PortfolioImage;
  }

  return ContentComponent ? (
    <ContentComponent key={`index-${__component}-${id}`} {...rest} />
  ) : null;
};

const PortfolioItem = async ({ params }: Props) => {
  const response = await getData(
    `/api/portfolios?filters[slug][$eq]=${params.slug}&populate=*`
  );

  const { title, content } = response.data[0].attributes;
  console.log(content);

  return (
    <Container section>
      <p>realizacja {title}</p>

      {content.map(getContentComponents)}
    </Container>
  );
};

export default PortfolioItem;
