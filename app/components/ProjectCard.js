import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function ProjectCard({ card }) {
  return (
    <div className="mt-14 rounded-md py-[0.95px] px-[0.95px] parent group  bg-gradient-to-b from-slate-700 to-transparent   hover:from-lime-300 drop-shadow-2xl">
      <div className="bg-gradient-to-b from-slate-800 to-transparent flex lg:flex-row flex-col hover:bg-slate-800 px-6 py-4 rounded-md">
       
      <Image
            src={card.url}
            width={150}
            height={50}
            alt={card.alt}
            className="object-contain flex  mr-4 drop-shadow-xl object-left-top py-2 rounded-xl"
          />
       
        <div className="flex flex-col">
          <div className="flex flex-row">
            <a
              href={card.hosted}
              rel="noreferrer"
              target="_blank"
              aria-label="project opens in new tab"
              title={card.title}
              className="flex flex-row"
            >
           
       
              <h3 className="lg:text-lg text-md font-medium  group-hover:from-teal-300 group-hover:to-lime-300 group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent ">
                {card.title}
              </h3>
              <FaExternalLinkAlt className="ml-4 w-3 h-3 mt-2 group-hover:self-start group-hover:w-5 group-hover:h-5 group-hover:mt-0 group-hover:text-lime-300" />
            </a>

            <a
              className="ml-auto lg:px-16 px-2 lg:py-1 hover:text-lime-500"
              href={card.git}
              rel="noreferrer"
              target="_blank"
              aria-label="Git hub repo opens in a new tab"
              title={`${card.title} git repo`}
            >
              <FaGithub className="lg:w-6 lg:h-6 w-5 h-5 " />
            </a>
          </div>

          <p className="leading-8 text-sm text-left py-4 text-slate-200">
            {card.description}
          </p>
          <div className="flex-wrap flex gap-4 py-4">
            {card.stack.map((x) => {
              return (
                <div className="   p-0.5 mb-2 text-sm rounded-md overflow-hidden bg-gradient-to-br from-teal-300 to-lime-300 text-slate-200">
                  <p className=" px-4 py-2  bg-gray-800  rounded-md ">{x}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
