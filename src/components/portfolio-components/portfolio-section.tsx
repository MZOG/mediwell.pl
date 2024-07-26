import ReactMarkdown from "react-markdown";

type Props = {
  Name: string;
  Content: string;
};

const PortfolioSection = (props: Props) => {
  const { Content: content, Name: name } = props;

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-[45px] tracking-tight mb-10">{name}</h2>
      <ReactMarkdown
        children={content}
        className="ml-14 mb-10 space-y-8 text-lg post-content"
      />
    </div>
  );
};

export default PortfolioSection;
