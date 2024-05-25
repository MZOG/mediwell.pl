import NoiseImage from "/public/noise.png";
import Image from "next/image";

type PageHeaderProps = {
  heading: string;
  slug?: string;
};

const PageHeader = ({ heading, slug }: PageHeaderProps) => {
  return (
    <div className="bg-blue-50/50 bg-gradient-to-r from-blue-50/50 to-blue-100 p-7 md:p-8 lg:p-10 rounded-2xl relative overflow-hidden">
      <h1 className="text-2xl md:text-3xl font-bold">{heading}</h1>
      <p className="pt-1 md:text-lg text-primary/80">{slug}</p>
      <Image
        src={NoiseImage}
        alt="noise"
        className="absolute top-0 right-0 gradient-mask-l-0 opacity-60"
      />
    </div>
  );
};

export default PageHeader;
