import React, { useState } from "react";
import styled from "styled-components";
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
import {
  BasePageCenter,
  BaseSection,
  PageTitle,
  PrimaryButton,
  SecondaryButton,
} from "../commons";
import { useLanguage } from "../base/customContexts";
import { techTagsOptions } from "../../constants/globals";

const ProjectPage = styled(BasePageCenter)`
  flex-direction: column;
  align-items: center;
`;

const ProjectSection = styled(BaseSection)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 1rem;

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const ProjectContainer = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.palette.background.paper};

  padding: 1.2rem;
`;

const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: ${(props) => props.theme.palette.text.primary};
  font-family: "Poppins", sans-serif;
  border-bottom: 1px solid ${(props) => props.theme.palette.divider};
  padding-bottom: 1rem;

  & > span {
    margin-left: 1rem;
    font-weight: bold;
  }

  & > svg {
    color: ${(props) => props.theme.palette.primary.light1};
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.palette.text.secondary};
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const RepositoryButton = styled(PrimaryButton)`
  width: fit-content;
  & > svg {
    color: ${(props) => props.theme.palette.common.white};
    font-size: 1.5rem;
  }
  padding: 0.5rem;
  margin: 0.5rem 0.2rem;
`;

const ProjectActionsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 0.5rem;
`;

const TechTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TechTag = styled.span`
  color: ${(props) => props.theme.palette.common.white};
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  background-color: ${(props) => props.bgColor};
  border-radius: 0.5rem;
  padding: 0.3rem 0.8rem;
  margin: 0.5rem;
`;

const LoadButton = styled(SecondaryButton)`
  margin-top: 2rem;
`;

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
