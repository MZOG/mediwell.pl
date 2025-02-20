import Link from "next/link";
import { Button } from "./ui/button";

type PostProps = {
  post: {
    title: string;
    description: string;
    url: string;
    image?: string;
  };
};

export default function PostCard({ post }: PostProps) {
  return (
    <article className="rounded-xl">
      <div className="h-[150px] bg-gray-200 rounded-xl"></div>
      <h2 className="text-xl font-semibold mt-5">{post.title}</h2>
      <p className="line-clamp-3 mt-5">{post.description}</p>

      <div className="mt-7 flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
        <p className="text-sm text-slate-500">16 Luty 2025</p>
        <Button asChild variant="primary" className="text-sm">
          <Link href={`/blog/${post.url}`}>Więcej</Link>
        </Button>
      </div>
    </article>
  );
}
