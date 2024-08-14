import globe from "../../static/icons/globe.svg";

interface ProjectCardProps {
  Role: string;
  Company: string;
  Description: string;
  Time: string;
  WebLink?: string;
}

function ButtonLink({ WebLink }: { WebLink: string }) {
  return (
    <div className="mt-4">
      <a
        href={WebLink}
        target="_blank"
        rel="noreferrer"
        className="flex items-center w-min justify-center px-4 py-2 bg-[#000000] rounded-md gap-2"
      >
        <img src={globe} alt="logo" className="w-3 h-3" />
        <span className="text-[#ffffff] text-xs">Web</span>
      </a>
    </div>
  );
}

export default function ProjectCard({
  Role,
  Company,
  Time,
  Description,
  WebLink,
}: ProjectCardProps) {
  return (
    <>
      {/* <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-white bg-gray-200"></div> */}
      <div className="flex flex-col bg-[#0c0f1a] p-4 rounded-lg bg-opacity-50 text-left">
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">{Role}</h3>
          <h3 className="text-lg font-semibold text-white">{Company}</h3>
          <time className="text-sm text-gray-400">{Time}</time>
        </div>

        <div className="mt-2">
          <p className="text-sm text-gray-300">{Description}</p>
        </div>
        {WebLink && <ButtonLink WebLink={WebLink} />}
      </div>
    </>
  );
}
