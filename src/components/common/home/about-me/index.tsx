import Image from "next/image";
import Dot from "../../dot";
import Wave from "../../wave";
import ShapeLight from "../shape";
import AboutMeTabs from "./tabs";

export default function AboutMe() {
  return (
    <main className="relative py-10 bg-white dark:bg-slate-800">
      <div
        className="absolute top-0 left-0 w-full transform -translate-y-[98%]
       text-white dark:text-slate-800"
      >
        <Wave />
      </div>
      <div className="container mx-auto px-[10px] lg:px-0">
        <div className="w-full flex gap-x-[10px] justify-center items-center mb-8 lg:mb-16 mx-auto">
          <div className="w-[20px] h-[20px] text-main">
            <Dot />
          </div>
          <h2 className="h2">
            <span>About me</span>
          </h2>
        </div>
        <div className="flex justify-between">
          <div className="hidden w-[40%] lg:flex items-center content-center">
            <div className="w-[300px] h-[300px] text-bgLight relative">
              <ShapeLight />
              <div
                className="text-main absolute z-30 top-1/2 left-1/2 transform 
            -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]"
              >
                <Image
                  src="/assets/about/developer.png"
                  width={300}
                  height={300}
                  className="w-full h-full"
                  priority
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex-1 lg:w-[60%]">
            <AboutMeTabs />
          </div>
        </div>
      </div>
    </main>
  );
}
