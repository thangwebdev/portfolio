import Image from "next/image";
import Link from "next/link";
import { IoLink } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { HTMLAttributes } from "react";
import { ProjectType } from "~/utils/projects";

export interface ICardProjectProps extends HTMLAttributes<HTMLDivElement> {
  data: ProjectType;
}

export default function CardProject({ data, ...props }: ICardProjectProps) {
  return (
    <div className="w-full rounded-[10px] overflow-hidden group" {...props}>
      {/* Card header */}
      <div
        className="card-header w-full flex justify-center pt-14 bg-bgLight
       dark:bg-bgDark relative"
      >
        <div
          className="card-header__tag absolute z-20 top-2 left-2 px-2 py-1 rounded-full
         text-white bg-main"
        >
          <span className="text text-[12px]">{data.tech}</span>
        </div>
        {(data.deployLink || data.github) && (
          <div
            className="card-header__overlay absolute z-10 inset-0 flex items-center 
          justify-center gap-x-2"
          >
            {data.deployLink && (
              <Link href={data.deployLink} target="_blank">
                <span
                  className="inline-flex items-center justify-center text-[18px] p-2
             bg-slate-800 rounded-full text-white scale-0 group-hover:scale-100 
             transition-all delay-100"
                >
                  <IoLink />
                </span>
              </Link>
            )}
            {data.github && (
              <Link href={data.github} target="_blank">
                <span
                  className="inline-flex items-center justify-center text-[18px] p-2
             bg-slate-800 rounded-full text-white scale-0 group-hover:scale-100
              transition-all delay-200"
                >
                  <FiGithub />
                </span>
              </Link>
            )}
          </div>
        )}
        <div className="card-header__img w-2/3 pt-[50%] mx-auto relative">
          <div className="absolute top-0 left-0 w-full h-full shadow-lg">
            <Image
              src={data.imgPath}
              width={200}
              height={300}
              alt=""
              className="rounded-[6px] w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      {/* Card body */}
      <div className="p-4">
        <p className="text text-[16px] font-semibold mb-2">{data.name}</p>
        <p className="text text-[14px] font-light">{data.description}</p>
      </div>
    </div>
  );
}
