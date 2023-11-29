import { Tabs } from "antd";
import PersonalInfoTab from "./PersonalInfoTab";
import QualificationTab from "./QualificationTab";
import SkillTab from "./SkillTab";

export default function AboutMeTabs() {
  return (
    <Tabs
      defaultActiveKey="1"
      items={[
        { key: "1", label: "Personal Info", children: <PersonalInfoTab /> },
        { key: "2", label: "Qualifications", children: <QualificationTab /> },
        { key: "3", label: "Skills", children: <SkillTab /> },
      ]}
    />
  );
}
