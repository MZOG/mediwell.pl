import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import FAQAccordion from "@/components/faq-accordion";
import FAQ_QUESTIONS from "@/lib/faq";

const DlaDentystow = () => {
  return (
    <Container section>
      <PageHeader heading="Dla dentystów" />

      <FAQAccordion questions={FAQ_QUESTIONS.DLA_DENTYSTOW} />
    </Container>
  );
};

export default DlaDentystow;
