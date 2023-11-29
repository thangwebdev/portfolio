import Button from "~/components/ui/button";
import { CiPaperplane } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import ShapeLight from "~/components/common/home/shape";
import Image from "next/image";
import Flexing from "~/components/common/home/flexing";
import { MdWorkHistory } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import Link from "next/link";
import Social from "./Social";

export default function General() {
  return (
    <main className="bg-bgLight dark:bg-bgDark h-screen py-12 lg:py-24 lg:pt-28">
      <div className="container mx-auto px-[10px] lg:px-0">
        <div className="flex justify-between gap-x-8">
          <div className="flex flex-col justify-center mx-auto lg:mx-0 text-center lg:text-left lg:w-[50%]">
            <p className="text-sm font-semibold mb-4 text-main tracking-[4px]">
              WEB DEVELOPER
            </p>
            <h1 className="h1 mb-4">Hello, My name is Thang</h1>
            <h5 className="subtitle max-w-[490px] mx-auto lg:mx-0">
              Brief description with insight into myself, my vocational journey,
              and what i engage in professionally.
            </h5>
            <div className="flex flex-col items-center lg:flex-row gap-y-3 gap-x-3 mx-auto lg:mx-0 mb-12">
              <Link href="/contact">
                <Button
                  endIcon={
                    <span className="text-[18px]">
                      <CiPaperplane />
                    </span>
                  }
                >
                  Contact me
                </Button>
              </Link>
              <Link href="/web.pdf" download target="_blank">
                <Button
                  variant="secondary"
                  endIcon={
                    <span className="text-[18px]">
                      <MdOutlineFileDownload />
                    </span>
                  }
                >
                  Download CV
                </Button>
              </Link>
            </div>
            <Social
              containerClassName="flex gap-x-6 mx-auto lg:mx-0"
              iconClasseName="text-[22px] dark:text-white hover:dark:text-main hover:text-main transition-all"
            />
          </div>
          <div className="hidden lg:flex relative w-[50%]">
            <div
              className="text-main absolute z-30 top-1/2 left-1/2 transform 
            -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]"
            >
              <Image
                src="/assets/about/developer.png"
                width={300}
                height={300}
                className="w-full h-full"
                priority
                alt=""
              />
              <div className="absolute top-[15%] -left-[15%]">
                <Flexing
                  icon={<MdWorkHistory />}
                  number={2}
                  text="Years of Experiences"
                />
              </div>
              <div className="absolute bottom-[10%] -left-[5%]">
                <Flexing
                  icon={<FaDiagramProject />}
                  number={20}
                  suffixNumber="+"
                  text="Finished projects"
                />
              </div>
              <div className="absolute bottom-[40%] -right-[15%]">
                <Flexing
                  icon={<FaCode />}
                  number={4}
                  suffixNumber="+"
                  text="Programing languages"
                />
              </div>
            </div>
            <div
              className="text-main absolute z-20 top-1/2 left-1/2 transform 
            -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]"
            >
              <ShapeLight />
            </div>
            <div
              className="text-[#f4d6d6] absolute z-10 top-1/2 left-1/2 transform 
            -translate-x-1/2 -translate-y-1/2 rotate-180 w-[400px] h-[400px]"
            >
              <div className="w-full h-full animate__animated animate__pulse animate__infinite">
                <ShapeLight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
