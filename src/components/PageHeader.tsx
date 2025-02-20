import { cn } from "@/lib/utils";

type PageHeaderProps = {
  color?: string;
  children: React.ReactNode;
};

export default function PageHeader({
  color = "bg-main",
  children,
}: PageHeaderProps) {
  return (
    <div className={cn("", color)}>
      <div className="px-5 mx-auto max-w-7xl py-10 md:py-14 text-white">
        {children}
      </div>
    </div>
  );
}
