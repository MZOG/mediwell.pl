import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import { Badge } from "./ui/badge";

type PostProps = {
  post: {
    attributes: {
      Title: string;
      Content: string;
      createdAt: string;
      post_categories: {
        data: {
          attributes: {
            name: string;
          };
        }[];
      };
      Image: {
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
        };
      };
    };
  };
};

export default function BlogPost({ post }: PostProps) {
  const imageWidth = post.attributes.Image.data.attributes.width;
  const imageHeight = post.attributes.Image.data.attributes.height;
  const {
    Title: title,
    Content: content,
    createdAt: dateAdded,
    post_categories,
  } = post.attributes;
  const imageSrc = `http://localhost:1337${post.attributes.Image.data.attributes.formats.small.url}`;

  return (
    <Link
      href="#"
      className="p-4 bg-blue-50/30 border border-blue-50 rounded-xl"
    >
      <Image
        src={imageSrc}
        alt={title}
        width={imageWidth}
        height={imageHeight}
        className="block rounded-lg"
      />
      <div className="py-5">
        <div className="mb-5">
          {post_categories.data.map(
            (category: { attributes: { name: string } }, index) => {
              return (
                <Badge key={index} variant={"outline"}>
                  {category.attributes.name}
                </Badge>
              );
            }
          )}
        </div>
        <h3 className="text-xl font-semibold pb-5">{title}</h3>
        <p className="line-clamp-4 leading-6">{content}</p>
        <div className="mt-5 flex justify-between items-center">
          <p className="font-medium text-secondary">Czytaj dalej</p>
          <p className="text-slate-400 text-sm">
            {dayjs(dateAdded).locale("pl").format("DD MMMM YYYY")}
          </p>
        </div>
      </div>
    </Link>
  );
}
