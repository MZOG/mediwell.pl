import ReactMarkdown from "react-markdown";

type Props = {
  Name: string;
  Content: string;
};

const PortfolioSection = (props: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-[45px] tracking-tight mb-10">{props.Name}</h2>
      <ReactMarkdown
        children={props.Content}
        className="ml-14 mb-10 space-y-8 text-lg text-balance"
      />
    </div>
  );
};

export default PortfolioSection;
