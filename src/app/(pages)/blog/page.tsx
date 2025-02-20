import Typography from "@/components/Typography";
import PostCard from "@/components/PostCard";

export default function Blog() {
  return (
    <section className="max-w-5xl mx-auto px-5">
      <Typography type="h1">Blog</Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mt-10 md:mt-14">
        <PostCard
          post={{
            title: "Czemu jesteś kurwą?",
            description:
              "Cześć, tutaj będzie opis, zajawka tak zwana, ten tekst i tak będzie przycięty przez css do 3 linijek i na końcu pojawią się trzy kropki, więc tutaj można wjebać cały tekst co pójdzie np. do seo description",
            url: "pozdro",
          }}
        />
      </div>
    </section>
  );
}
