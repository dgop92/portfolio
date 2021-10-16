import React from "react";
import styled from "styled-components";
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
import { ReactComponent as PyhonLogo } from "./custom-dev-icons/python.svg";
import { ReactComponent as FigmaLogo } from "./custom-dev-icons/figma.svg";
import { ReactComponent as SerenadeLogo } from "./custom-dev-icons/serenade.svg";
import { BasePageCenter, BaseSection, PageTitle } from "../commons";
import { useLanguage } from "../base/customContexts";

const SkillPage = styled(BasePageCenter)`
  flex-direction: column;
  align-items: center;
`;

const SkillSection = styled(BaseSection)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  gap: 1rem;

  @media (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const SkillSetContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.palette.background.paper};
  border-radius: 1rem;
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  max-width: 450px;
  flex-grow: 1;
`;

const Title = styled.h6`
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.palette.text.primary};
  text-align: center;
  margin: 1rem 0.5rem;
`;

const TechIconBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1rem;

  & > svg {
    font-size: 4rem;
  }

  & > span {
    font-family: "Poppins", sans-serif;
    color: ${(props) => props.theme.palette.text.primary};
    font-size: 1.2rem;
    padding: 0.5rem 0;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.palette.text.secondary};
  text-align: center;
`;

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
        {skillSetItems.map(skillSetData => (
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
