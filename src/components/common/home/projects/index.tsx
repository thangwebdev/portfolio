import Dot from "../../dot";
import Wave from "../../wave";
import ListProject from "./ListProject";

export default function Projects() {
  return (
    <section className="dark:bg-slate-800 py-10 relative">
      <div className="container mx-auto px-[10px] lg:px-0">
        <div className="w-full flex gap-x-[10px] justify-center items-center mb-8 lg:mb-16 mx-auto">
          <div className="w-[20px] h-[20px] text-main">
            <Dot />
          </div>
          <h2 className="h2">
            <span>Latest Projects</span>
          </h2>
        </div>
        <div>
          <ListProject />
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full transform translate-y-[98%] rotate-180
       text-white dark:text-slate-800"
      >
        <Wave />
      </div>
    </section>
  );
}
