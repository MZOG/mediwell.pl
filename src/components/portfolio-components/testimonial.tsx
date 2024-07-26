import Container from "../container";
import { Quote } from "lucide-react";
type Props = {
  Author: string;
  Company: string;
  Content: string;
};

const Testimonial = (props: Props) => {
  return (
    <Container width="full" customClass="max-w-3xl text-white md:py-20">
      <h2 className="text-[45px] tracking-tight mb-10">Opinia klienta</h2>
      <Quote size={50} />
      <p className="text-2xl mt-10 text-balance">{props.Content}</p>

      <div className="mt-10 flex gap-5 items-center">
        <div className="size-20 bg-gray-200 rounded-full"></div>
        <div>
          <p>{props.Author}</p>
          <p>{props.Company}</p>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
