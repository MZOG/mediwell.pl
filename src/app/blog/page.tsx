import Container from "@/components/container";
import Typography from "@/components/typography";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/page-header";

async function getPosts(url: string) {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(baseUrl + url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function BlogPage({ params }) {
  const posts = await getPosts("/api/posts?populate=*");
  console.log("params", params);

  return (
    <Container section>
      <PageHeader heading="Blog" />

      <div className="grid grid-cols-3 gap-5">
        {posts.data.map((post) => {
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
              <Typography type="h2">{Title}</Typography>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
