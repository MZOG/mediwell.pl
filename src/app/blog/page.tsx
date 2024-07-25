import Container from "@/components/container";
import { TypeBlogPost } from "@/types/blog";
import { getData } from "@/lib/utils";

export default async function BlogPage() {
  const posts = await getData("/api/posts?populate=*");

  return (
    <Container section>
      <div className="grid grid-cols-3 gap-5">
        {/* {posts &&
          posts.data.map((post: TypeBlogPost) => {
            const imageSrc = `http://localhost:1337${post.attributes.Image.data.attributes.formats.small.url}`;
            const imageWidth = post.attributes.Image.data.attributes.width;
            const imageHeight = post.attributes.Image.data.attributes.height;
            const { Title } = post.attributes;

            return (
              <Link href="#" key={Title.toLowerCase().replace(" ", "-")}>
                <Image
                  src={imageSrc}
                  alt={Title}
                  width={imageWidth}
                  height={imageHeight}
                  className="block rounded-xl"
                />
                {Title}
              </Link>
            );
          })} */}
      </div>
    </Container>
  );
}
