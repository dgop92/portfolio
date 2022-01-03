import React from "react";
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
import { skillSetItems } from "./data";

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
