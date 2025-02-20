type Props = {
  type: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  className?: string;
};

import { cn } from "@/lib/utils";

export default function Typography({ type, children, className }: Props) {
  const defaultStyles = `tracking-tight md:tracking-normal`;

  switch (type) {
    case "h1":
      return (
        <h1
          className={cn(
            "text-4xl md:text-5xl font-bold",
            defaultStyles,
            className
          )}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={cn(
            "text-2xl md:text-4xl font-bold",
            defaultStyles,
            className
          )}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={cn(
            "text-xl lg:text-2xl font-semibold",
            defaultStyles,
            className
          )}
        >
          {children}
        </h3>
      );
    case "h4":
      return <h4 className="h4">{children}</h4>;
  }
}
