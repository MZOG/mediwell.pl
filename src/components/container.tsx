import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  section?: boolean;
  customClass?: string;
};

const Container = ({ children, section, customClass }: ContainerProps) => {
  if (section) {
    return (
      <section
        className={cn(customClass && customClass, "px-5 mx-auto max-w-6xl")}
      >
        {children}
      </section>
    );
  }

  return (
    <div className={cn(customClass && customClass, "px-5 mx-auto max-w-6xl")}>
      {children}
    </div>
  );
};

export default Container;
