import { Braces, FilePen, ShieldCheck } from "lucide-react";
import Typography from "./Typography";

export default function WhyUs() {
  const items = [
    {
      title: "Strony internetowe",
      icon: <Braces color="#fff" strokeWidth={1.75} size={25} />,
      content:
        "Stworzymy dla Ciebie idealną stronę internetową, dopasowaną do Twoich indywidualnych potrzeb",
    },
    {
      title: "Zarządzanie",
      icon: <FilePen color="#fff" strokeWidth={1.75} size={25} />,
      content:
        "Nie przejmuj się technicznymi sprawami, Mediwell zajmie się dodawaniem treści na Twoją stronę",
    },
    {
      title: "Opieka nad stroną",
      icon: <ShieldCheck color="#fff" strokeWidth={1.75} size={25} />,
      content:
        "Nie musisz się martwić o utratę danych, czy aktualizację. Mediwell zatroszczy się o Twoją wizytówkę w internecie",
    },
  ];

  return (
    <section className="px-5 mx-auto max-w-7xl mt-24 lg:mt-40">
      <Typography type="h2" className="text-center">
        Jesteśmy tu, aby Ci pomóc
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 mt-10 md:mt-14 lg:mt-20">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50/60 p-7 lg:p-10 rounded-2xl flex flex-col gap-3 lg:gap-5"
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
