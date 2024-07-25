import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import { Button } from "./ui/button";

type PortfolioItem = {
  item: {
    id: number;
    attributes: {
      title: string;
      description: string;
      updatedAt: string;
      publishedAt: string;
      createdAt: string;
      image: {
        data: {
          attributes: {
            width: number;
            height: number;
            formats: {
              small: {
                url: string;
              };
            };
          };
        }[];
      };
    };
  };
};

export default function PortfolioItem({ item }: PortfolioItem) {
  const imageWidth = item.attributes.image.data[0].attributes.width;
  const imageHeight = item.attributes.image.data[0].attributes.height;
  const { title, description, createdAt: dateAdded } = item.attributes;

  const imageSrc = `http://localhost:1337${item.attributes.image.data[0].attributes.formats.small.url}`;

  return (
    <article>
      <Link href="#">
        <Image
          src={imageSrc}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className="block rounded-lg"
        />
      </Link>
      <div className="mt-5">
        <p className="text-secondary text-sm">
          {dayjs(dateAdded).locale("pl").format("DD MMMM YYYY")}
        </p>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-secondary mt-5">{description}</p>

        <div className="flex justify-between mt-7">
          <Button asChild variant="outline">
            <Link href="#">Case study</Link>
          </Button>
          <Button asChild>
            <Link href="#">Odwiedź stronę</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
