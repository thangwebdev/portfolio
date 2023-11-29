import Image from "next/image";
import Link from "next/link";
import CardInfo from "~/components/ui/card-info";

const skillData = [
  {
    title: "Frontend Development",
    // content: `HTML, CSS, SASS, TailwindCSS, Material-UI, Antd, Javascript, Responsive Design, React.js,
    //  Next.js, Redux, Performance, Progress Web Application`,
    content: (
      <div className="text">
        <p>- HTML, CSS</p>
        <p>- SASS, TailwindCSS, Material-UI, Antd, Responsive Design</p>
        <p>- Javascript, React.js, Next.js</p>
        <p>- Redux, Performance, Progess Web Application</p>
      </div>
    ),
  },
  {
    title: "Backend Development",
    content: (
      <div className="text">
        <p>- Node.js, PHP</p>
        <p>- Express.js, Nest.js, Laravel</p>
        <p>- MySQL, MSSQL, MongoDB, Redis</p>
        <p>- Docker, NGINX</p>
      </div>
    ),
  },
];

const toolsData = [
  {
    href: "https://code.visualstudio.com/download",
    path: "/assets/tools/visual_code.png",
  },
  {
    href: "https://www.figma.com",
    path: "/assets/tools/figma.png",
  },
];

export default function SkillTab() {
  return (
    <div className="text-left flex flex-col gap-y-8">
      <h3 className="h3 text-center lg:text-left">Tools I Use Everyday</h3>
      <div>
        <h4 className="text text-[16px] font-semibold mb-4">Skills</h4>
        {/* List */}
        <div className="flex flex-col gap-y-8 items-start">
          {skillData.map((item) => (
            <CardInfo key={item.title} title={item.title}>
              {item.content}
            </CardInfo>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text text-[16px] font-semibold mb-4">Tools</h4>
        {/* List */}
        <div className="flex gap-x-4">
          {toolsData.map((tool) => (
            <Link
              href={tool.href}
              key={tool.path}
              target="_blank"
              className="w-[30px] h-[30px]"
            >
              <Image
                src={tool.path}
                width={40}
                height={40}
                className="w-full h-full object-contain"
                alt=""
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
