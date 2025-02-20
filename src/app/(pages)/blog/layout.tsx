import { unstable_ViewTransition as ViewTransition } from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransition>
      <div className="max-w-5xl mx-auto blogPost">{children}</div>
    </ViewTransition>
  );
}
