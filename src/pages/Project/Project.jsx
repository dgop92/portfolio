import React, { useState } from "react";
import {
  FaSearch,
  FaBriefcase,
  FaCalendarCheck,
  FaTerminal,
  FaUniversity,
  FaBusinessTime,
} from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { CgMathEqual } from "react-icons/cg";
import { ImTree } from "react-icons/im";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { PageTitle } from "../../components/layout";
import { useLanguage } from "../../context/customContexts";
import { techTagsOptions } from "../../constants/globals";
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

const projectItems = [
  {
    name: "Communotes API",
    icon: <FaUniversity />,
    description: "COMMUNOTES_DESCRIPTION",
    href: "https://github.com/dgop92/communotes",
    techTags: [techTagsOptions.DJANGO],
  },
  {
    name: "Find your gap",
    icon: <FaSearch />,
    description: "FINDGAP_DESCRIPTION",
    href: "https://github.com/dgop92/find-your-gap-api",
    viewProjectHref: "https://find-your-gap.netlify.app/home",
    techTags: [techTagsOptions.DJANGO, techTagsOptions.REACTJS],
  },
  {
    name: "Retail Tech Business API",
    icon: <FaBriefcase />,
    description: "RETAIL_TECH_DESCRIPTION",
    href: "https://github.com/dgop92/retail-tech-business-api",
    techTags: [techTagsOptions.DJANGO],
  },
  {
    name: "Wolfram Helper",
    icon: <CgMathEqual />,
    description: "WHELPER_DESCRIPTION",
    href: "https://github.com/dgop92/wolfram-helper",
    techTags: [techTagsOptions.PYTHON],
  },
  {
    name: "G-Utils",
    icon: <FaTerminal />,
    description: "GUTILS_DESCRIPTION",
    href: "https://github.com/dgop92/gutils",
    techTags: [techTagsOptions.PYTHON],
  },
  {
    name: "Binary tree builder",
    icon: <ImTree />,
    description: "BINTREE_BUILDER_DESCRIPTION",
    href: "https://github.com/dgop92/binary-tree-builder",
    viewProjectHref: "https://dgop92.github.io/binary-tree-builder",
    techTags: [techTagsOptions.JS],
  },
];

const extraProjects = [
  {
    name: "Inevaup Negocios",
    icon: <FaBusinessTime />,
    description: "INEVAUP_NEGOCIOS_DESCRIPTION",
    href: "https://github.com/dgop92/inevaup-negocios-react",
    viewProjectHref: "https://inevaup-negocios.netlify.app/login",
    techTags: [techTagsOptions.REACTJS],
  },
  {
    name: "Schedule Maker",
    icon: <FaCalendarCheck />,
    description: "SCHEDULE_MAKER_DESCRIPTION",
    href: "https://github.com/dgop92/schedule-maker",
    techTags: [techTagsOptions.PYTHON],
  },
  {
    name: "Utils3",
    icon: <FaTerminal />,
    description: "UTILS3_DESCRIPTION",
    href: "https://github.com/dgop92/utils3",
    techTags: [techTagsOptions.PYTHON],
  },
];

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
