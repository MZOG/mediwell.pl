import Container from "../container";
import BlogPost from "../blog-post";
import { TypeBlogPost } from "@/types/blog";
import { getData } from "@/lib/utils";

export default async function Blog() {
  const posts = await getData("/api/posts?populate=*");

  return (
    <Container customClass="py-20" section>
      <h2 className="text-2xl font-bold mb-5 relative after:content-[''] before:content-[''] before:absolute after:absolute after:-bottom-2 after:left-0 after:h-[4px] after:w-20 after:bg-secondary after:rounded-full before:h-[4px] before:w-3 before:left-[85px] before:-bottom-2 before:rounded-full before:bg-secondary">
        Aktualności
      </h2>

      <div className="grid grid-cols-3 gap-10 mt-10">
        {posts &&
          posts?.data.map((post: TypeBlogPost, index: number) => (
            <BlogPost post={post} key={index} />
          ))}
      </div>
    </Container>
  );
}
