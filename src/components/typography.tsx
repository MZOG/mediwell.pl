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
          "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl",
          customClass && customClass
        )}
      >
        {children}
      </h1>
    );
  }

  if (type === "h2") {
    return (
      <h2
        className={cn(
          "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
          customClass && customClass
        )}
      >
        {children}
      </h2>
    );
  }

  if (type === "h3") {
    return (
      <h3
        className={cn(
          "scroll-m-20 text-2xl font-semibold tracking-tight",
          customClass && customClass
        )}
      >
        {children}
      </h3>
    );
  }

  if (type === "h4") {
    return (
      <h3
        className={cn(
          "scroll-m-20 text-xl font-semibold tracking-tight",
          customClass && customClass
        )}
      >
        {children}
      </h3>
    );
  }
};

export default Typography;
