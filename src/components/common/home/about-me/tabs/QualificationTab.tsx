import { LuGraduationCap } from "react-icons/lu";
import CardInfo from "~/components/ui/card-info";

type ExperienceType = { name: string; role: string; years: string };
type EducationType = {
  university: string;
  qualification: string;
  years: string;
};

const qualificationDatas = [
  {
    title: "education",
    data: [
      {
        university: "Nong Lam University",
        qualification: "The degree of engineer",
        years: "2019 - 2023",
      },
    ] as EducationType[],
  },
  {
    title: "experience",
    data: [
      {
        name: "Fostech",
        role: "Fullstack Developer",
        years: "2022 - 2023",
      },
    ] as ExperienceType[],
  },
];

const getData = (key: string) => {
  return qualificationDatas.find((item) => item.title === key);
};

export default function QualificationTab() {
  return (
    <div>
      <h3 className="h3 mb-8 text-center lg:text-left">My Awesome Journey</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Experience */}
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-x-4 items-center text-main">
            <span className="text-[18px]">
              <LuGraduationCap />
            </span>
            <h4 className="capitalize font-medium text-[16px]">
              {getData("experience")?.title}
            </h4>
          </div>
          {/* List */}
          <div className="flex flex-col gap-y-4">
            {getData("experience")?.data.map((item, index) => {
              const { name, role, years } = item as ExperienceType;
              return (
                <CardInfo
                  key={index}
                  title={name}
                  subtitle={role}
                  years={years}
                />
              );
            })}
          </div>
        </div>
        {/* Education */}
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-x-4 items-center text-main">
            <span className="text-[18px]">
              <LuGraduationCap />
            </span>
            <h4 className="capitalize font-medium text-[16px]">
              {getData("education")?.title}
            </h4>
          </div>
          {/* List */}
          <div className="flex flex-col gap-y-4">
            {getData("education")?.data.map((item, index) => {
              const { university, qualification, years } =
                item as EducationType;
              return (
                <CardInfo
                  key={index}
                  title={university}
                  subtitle={qualification}
                  years={years}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
