type Props = {
  Scope: string;
  Timeframe: string;
  Technologies: string;
  Website: string;
};

import { ExternalLinkIcon } from "lucide-react";

const PortfolioInfo = (props: Props) => {
  const {
    Scope: scope,
    Timeframe: timeframe,
    Technologies: technologies,
    Website: website,
  } = props;

  return (
    <div className="my-10 max-w-2xl mx-auto">
      <h2 className="text-[45px] font-medium tracking-tight">Szczegóły</h2>

      <div className="mt-10">
        <div className="flex items-center border-b pb-5">
          <p className="font-medium text-lg min-w-[170px]">Zakres</p>
          <p className="text-gray-700">{scope}</p>
        </div>
        <div className="flex items-center border-b pb-5 mt-5">
          <p className="font-medium text-lg min-w-[170px]">Ramy czasowe</p>
          <p className="text-gray-700">{timeframe}</p>
        </div>

        <div className="flex items-center border-b pb-5 mt-5">
          <p className="font-medium text-lg min-w-[170px]">Technologie</p>
          <p className="text-gray-700">{technologies}</p>
        </div>
        <div className="flex items-center mt-5">
          <p className="font-medium text-lg min-w-[170px]">Odwiedź stronę</p>
          <p className="text-gray-700">
            <a
              href={`https://${website}`}
              target="_blank"
              className="flex gap-2 items-center"
            >
              {website}
              <ExternalLinkIcon size={15} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioInfo;
