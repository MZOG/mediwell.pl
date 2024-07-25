"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  questions: FaqItem[];
};

const FAQAccordion = ({ questions }: FaqProps) => {
  const trackQuestion = ({ question }: { question: string }) => {
    // console.log(question);
  };

  return (
    <>
      <h2 className="my-10 md:my-20 text-center font-bold text-3xl">FAQ</h2>
      <Accordion
        type="single"
        collapsible
        className="max-w-xl mx-auto border p-8 pt-3 border-gray-50 rounded-xl"
      >
        {questions &&
          questions.map((item) => {
            return (
              <AccordionItem
                className="border-gray-50"
                key={item.question.toLocaleLowerCase().replace(" ", "-")}
                value={item.question.toLocaleLowerCase().replace(" ", "-")}
              >
                <AccordionTrigger
                  onClick={(e: any) => trackQuestion(e)}
                  className="hover:text-secondary hover:no-underline"
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            );
          })}
      </Accordion>
    </>
  );
};

export default FAQAccordion;
