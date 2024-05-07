import { cn } from "@/lib/utils";

type TypographyProps = {
  type: "h1" | "h2" | "h3" | "h4" | "h5";
  children: React.ReactNode;
  customClass?: string;
};

const Typography = ({ type, children, customClass }: TypographyProps) => {
  if (type === "h1") {
    return (
      <h1
        className={cn(
          "text-2xl md:text-3xl lg:text-5xl font-extrabold text-center",
          customClass && customClass
        )}
      >
        {children}
      </h1>
    );
  }
};

export default Typography;
