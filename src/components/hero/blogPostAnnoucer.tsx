import Link from "next/link";

type PostProps = {
  title: string;
  url: string;
};

const BlogPostAnnoucer = (post: PostProps) => {
  return (
    <Link href={post.url} className="border border-blue-100 px-3 py-1">
      {post.title}
    </Link>
  );
};

export default BlogPostAnnoucer;
