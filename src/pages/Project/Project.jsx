import React, { useState } from "react";
import { SiGithub } from "react-icons/si";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { PageTitle } from "../../components/layout";
import { useLanguage } from "../../context/customContexts";
import {
  ProjectPage,
  ProjectSection,
  ProjectContainer,
  ProjectTitle,
  Paragraph,
  RepositoryButton,
  ProjectActionsContainer,
  TechTagContainer,
  TechTag,
  LoadButton,
} from "./style";
import { projectItems, extraProjects } from "./data";

const Project = React.forwardRef((props, ref) => {
  const [secondaryProjects, setSecondaryProjects] = useState(false);
  const langStrs = useLanguage();

  return (
    <ProjectPage {...props} ref={ref}>
      <PageTitle>{langStrs.PROJECT_TITLE}</PageTitle>
      <ProjectSection>
        <ProjectSet projects={projectItems} />
        {secondaryProjects && <ProjectSet projects={extraProjects} />}
      </ProjectSection>
      {!secondaryProjects && (
        <LoadButton onClick={() => setSecondaryProjects(true)}>
          {langStrs.PROJECT_SECONDARY_PROJECTS}
        </LoadButton>
      )}
    </ProjectPage>
  );
});

function ProjectSet({ projects }) {
  const langStrs = useLanguage();

  return (
    <>
      {projects.map((projectData) => (
        <ProjectContainer key={projectData.name}>
          <ProjectTitle>
            {projectData.icon}
            <span>{projectData.name}</span>
          </ProjectTitle>
          <Paragraph>{langStrs[projectData.description]}</Paragraph>
          <TechTagContainer>
            {projectData?.techTags?.map((techTagData) => (
              <TechTag key={techTagData.name} bgColor={techTagData.bgColor}>
                {techTagData.name}
              </TechTag>
            ))}
          </TechTagContainer>
          <ProjectActionsContainer>
            <RepositoryButton as="a" href={projectData.href}>
              <SiGithub />
            </RepositoryButton>
            {projectData?.viewProjectHref && (
              <RepositoryButton as="a" href={projectData.viewProjectHref}>
                <BsBoxArrowUpRight />
              </RepositoryButton>
            )}
          </ProjectActionsContainer>
        </ProjectContainer>
      ))}
    </>
  );
}

export default Project;
