import BoxReveal from "../../components/magicui/box-reveal";

function Box({ name }: { name: string }) {
  return (
    <div className="flex items-center w-min justify-center px-4 py-1 bg-[#000000] bg-opacity-60  rounded-md gap-2">
      {/* <img src={globe} alt="logo" className="w-3 h-3" /> */}
      <span className="text-[#eee2e2] text-xs">{name}</span>
    </div>
  );
}

function Tecnologies() {
  const tecnologies = [
    "React",
    "Node.js",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "NestJS",
    "Next.js",
    "PostgreSQL",
    "AWS",
    "Docker",
  ] as string[];

  return (
    <div className="px-[14px] max-w-[671px]">
      <BoxReveal boxColor={"#5046e6"} duration={0.7}>
        <div>
          <h2 className="text-xl text-gray-100 mb-4 text-left">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2 ">
            {tecnologies.map((name, index) => (
              <Box key={index} name={name} />
            ))}
          </div>
        </div>
      </BoxReveal>
    </div>
  );
}

export default Tecnologies;
