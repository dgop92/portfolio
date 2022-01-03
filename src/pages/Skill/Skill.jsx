import React from "react";
import {
  SiCss3,
  SiDjango,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMaterialUi,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiVisualstudiocode,
} from "react-icons/si";
import { ReactComponent as PyhonLogo } from "../../assets/custom-dev-icons/python.svg";
import { ReactComponent as FigmaLogo } from "../../assets/custom-dev-icons/figma.svg";
// eslint-disable-next-line max-len
import { ReactComponent as SerenadeLogo } from "../../assets/custom-dev-icons/serenade.svg";
import { PageTitle } from "../../components/layout";
import {
  SkillPage,
  SkillSection,
  SkillSetContainer,
  IconContainer,
  Title,
  TechIconBox,
  Paragraph,
} from "./style";
import { useLanguage } from "../../context/customContexts";

const skillSetItems = [
  {
    title: "Main",
    iconBoxs: [
      {
        name: "Python",
        icon: <PyhonLogo />,
      },
      {
        name: "Django",
        icon: <SiDjango color="#092E20" />,
      },
      {
        name: "Postgres",
        icon: <SiPostgresql color="#336791" />,
      },
    ],
    paragraph: "SKILL_SET_1",
  },
  {
    title: "Extra",
    iconBoxs: [
      {
        name: "HTML",
        icon: <SiHtml5 color="#E34F26" />,
      },
      {
        name: "CSS",
        icon: <SiCss3 color="#1572B6" />,
      },
      {
        name: "JavaScript",
        icon: (
          <SiJavascript color="#F7DF1E" style={{ backgroundColor: "black" }} />
        ),
      },
      {
        name: "React JS",
        icon: <SiReact color="#61DAFB" />,
      },
      {
        name: "Material Ui",
        icon: <SiMaterialUi color="#0081CB" />,
      },
    ],
    paragraph: "SKILL_SET_2",
  },
  {
    title: "Tools",
    iconBoxs: [
      {
        name: "Vs Code",
        icon: <SiVisualstudiocode color="#007ACC" />,
      },
      {
        name: "Git",
        icon: <SiGit color="#F05032" />,
      },
      {
        name: "Postman",
        icon: <SiPostman color="#FF6C37" />,
      },
      {
        name: "Figma",
        icon: <FigmaLogo />,
      },
      {
        name: "Serenade",
        icon: <SerenadeLogo width="64" height="71" />,
      },
    ],
    paragraph: "SKILL_SET_3",
  },
];

const Skill = React.forwardRef((props, ref) => {
  const langStrs = useLanguage();

  return (
    <SkillPage {...props} ref={ref}>
      <PageTitle>{langStrs.SKILL_TITLE}</PageTitle>
      <SkillSection>
        {skillSetItems.map((skillSetData) => (
          <SkillSetContainer key={skillSetData.title}>
            <Title>{skillSetData.title}</Title>
            <IconContainer>
              {skillSetData.iconBoxs.map((iconBoxData) => (
                <TechIconBox>
                  {iconBoxData.icon}
                  <span>{iconBoxData.name}</span>
                </TechIconBox>
              ))}
            </IconContainer>
            <Paragraph>{langStrs[skillSetData.paragraph]}</Paragraph>
          </SkillSetContainer>
        ))}
      </SkillSection>
    </SkillPage>
  );
});

export default Skill;
