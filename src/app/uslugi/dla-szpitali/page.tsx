import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import FAQAccordion from "@/components/faq-accordion";
import FAQ_QUESTIONS from "@/lib/faq";

const DlaSzpitali = () => {
  return (
    <Container section>
      <PageHeader heading="Dla szpitali" />
      <FAQAccordion questions={FAQ_QUESTIONS.DLA_SZPITALI} />
    </Container>
  );
};

export default DlaSzpitali;
