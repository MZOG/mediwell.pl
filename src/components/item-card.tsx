import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import dayjs from "dayjs";
import "dayjs/locale/pl";

type ItemCardProps = {
  data: {
    attributes: {
      title: string;
      content?: string;
      description?: string;
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
  type: "post" | "portfolio";
};

export default function ItemCard({ data, type }: ItemCardProps) {
  const imageWidth = data.attributes.image.data[0].attributes.width;
  const imageHeight = data.attributes.image.data[0].attributes.height;
  const { title, content, description, createdAt: dateAdded } = data.attributes;
  const imageSrc = `http://localhost:1337${data.attributes.image.data[0].attributes.formats.small.url}`;

  const isPortfolio = type === "portfolio";

  return (
    <article>
      <Image
        src={imageSrc}
        alt={title}
        width={imageWidth}
        height={imageHeight}
        className="block rounded-lg"
      />
      <p className="mt-5 text-sm text-gray-400">
        {dayjs(dateAdded).locale("pl").format("DD MMMM YYYY")}
      </p>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="line-clamp-4 text-lg leading-6 mt-5 text-gray-500">
        {content || description}
      </p>
      <div
        className={cn(
          isPortfolio && "flex justify-between items-center",
          "mt-5"
        )}
      >
        <Button asChild variant="secondary">
          <Link href="/">{isPortfolio ? `Case study` : `Czytaj dalej`}</Link>
        </Button>
        {isPortfolio && (
          <Button asChild variant="outline">
            <Link href="/">Sprawdź stronę</Link>
          </Button>
        )}
      </div>
    </article>
  );
}
