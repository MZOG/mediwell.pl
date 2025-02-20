import { Search, Sparkles, Zap } from "lucide-react";
import Typography from "./Typography";

export default function Success() {
  const items = [
    {
      title: "Wyróżnienie się na rynku",
      icon: <Sparkles color="#fff" strokeWidth={1.75} size={25} />,
      content:
        "Twoja strona internetowa będzie wyróżniać się na tle innych stron w branży. Zostanie zaprojektowana tak, aby wyróżnić się nie tylko dzięki nowoczesnej technologii, ale przede wszystkim dzięki unikalnemu i przemyślanemu designowi, który odzwierciedla osobowość Twojej marki",
    },
    {
      title: "Szybkość i wydajność",
      icon: <Zap color="#fff" strokeWidth={1.75} size={25} />,
      content:
        "Zastosowanie jednej z najnowszych technologii (Next.js) na Twojej stronie internetowej gwarantuje niesamowitą szybkość ładowania. Dzięki nowoczesnej architekturze i optymalizacji pod kątem wydajności, użytkownicy doświadczą płynnego przeglądania stron",
    },
    {
      title: "Optymalizacja SEO",
      icon: <Search color="#fff" strokeWidth={1.75} size={25} />,
      content:
        "Zadbamy o to, aby Twoja strona była wysoko w wynikach wyszukiwania Google. Stosujemy zaawansowane techniki SEO, które pomogą zwiększyć widoczność Twojej strony w Google, co przekłada się na większy ruch, oraz potencjalne zyski",
    },
  ];

  return (
    <section className="px-5 mx-auto max-w-7xl mt-24 lg:mt-40">
      <Typography type="h2" className="text-center md:max-w-lg md:mx-auto">
        W jaki sposób <span className="text-main">Mediwell</span> pomoże Ci
        osiągnąć sukces?
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-15 mt-10 md:mt-14 lg:mt-20">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50/60 p-7 lg:p-10 rounded-2xl flex flex-col gap-3 lg:gap-8"
          >
            <div className="bg-main self-start p-2.5 rounded-full">
              {item.icon}
            </div>
            <Typography type="h3">{item.title}</Typography>
            <p className="text-base/7 text-zinc-700">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
