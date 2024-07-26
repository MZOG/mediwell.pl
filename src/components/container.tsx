import { cn } from "@/lib/utils";

type ContainerProps = {
  children?: React.ReactNode;
  section?: boolean;
  customClass?: string;
  width?: string;
};

const Container = ({
  children,
  section,
  customClass,
  width,
}: ContainerProps) => {
  if (section) {
    return (
      <section className={cn("px-5 mx-auto max-w-6xl", customClass)}>
        {children}
      </section>
    );
  }

  if (width === "full") {
    return (
      <div className="w-full bg-blue-500">
        <div className={cn("px-5 py-5 md:py-10 mx-auto", customClass)}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("px-5 py-5 md:py-10 mx-auto max-w-6xl", customClass)}>
      {children}
    </div>
  );
};

export default Container;
