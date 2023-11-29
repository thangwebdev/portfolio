import React from "react";
import { FaRegAddressBook, FaRegCalendar, FaRegUser } from "react-icons/fa";
import { MdOutlineMail, MdOutlinePhoneInTalk } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";
import Description from "~/components/ui/description";

const infoDatas: { icon: React.ReactNode; text: string }[] = [
  {
    icon: <MdOutlinePhoneInTalk />,
    text: "Vo Minh Thang",
  },
  {
    icon: <MdOutlineMail />,
    text: "vothang100401@gmail.com",
  },
  {
    icon: <RiGraduationCapLine />,
    text: "The degree of engineer",
  },
  {
    icon: <MdOutlinePhoneInTalk />,
    text: "+84 358 500 771",
  },
  {
    icon: <FaRegCalendar />,
    text: " Born on 10 April, 2001",
  },
  {
    icon: <FaRegAddressBook />,
    text: "Thu Duc, Ho Chi Minh City, Viet Nam",
  },
];

export default function PersonalInfoTab() {
  return (
    <div>
      <div className="text-center lg:text-left">
        <h3 className="h3 mb-4">Unmatched Service Quality for Over 2 Years</h3>
        <p className="subtitle max-w-xl mx-auto lg:mx-0">
          I specialize in crafting intuitive websites with cutting-edge
          technology, delivering dynamic and engaging user experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-12">
        {infoDatas.map((info, index) => (
          <Description
            key={index}
            className="w-fit mx-auto md:w-auto md:mx-0"
            left={
              <span className="text-[14px] text-main inline-flex items-center justify-center">
                {info.icon}
              </span>
            }
            right={
              <span
                style={{ lineBreak: "anywhere" }}
                className="dark:text-white"
              >
                {info.text}
              </span>
            }
          />
        ))}
      </div>
      <div className="flex flex-col gap-y-[5px]">
        <p className="border-b border-b-gray-200 py-[5px] text-main">
          Language Skill
        </p>
        <p className="dark:text-white">English, Vietnamese</p>
      </div>
    </div>
  );
}
