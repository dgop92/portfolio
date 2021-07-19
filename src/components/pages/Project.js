import React from "react";
import styled from "styled-components";
import { BasePageCenter, BaseSection, PageTitle, PrimaryButton } from "../commons";
import { FaSearch, FaBriefcase, FaCalendarCheck, FaTerminal } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { CgMathEqual } from "react-icons/cg";

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
  margin-bottom: 2rem;
`;

const RepositoryButton = styled(PrimaryButton)`
  width: fit-content;
  & > svg {
    color: ${(props) => props.theme.palette.primary.white};
    font-size: 1.5rem;
  }
  align-self: flex-end;
  padding: 0.5rem;
`;

const projecItems = [
  {
    name: "Find your gap",
    icon: <FaSearch />,
    description:
      "an API to find common gaps (free hours between the university classes) given the schedules from a group of classmates",
    href: "https://github.com/dgop92/find-your-gap-api",
  },
  {
    name: "Retail Tech Business API",
    icon: <FaBriefcase />,
    description:
      "an API that allows you to control exits and entries while collecting useful data to create insights for your business",
    href: "https://github.com/dgop92/retail-tech-business-api",
  },
  {
    name: "Wolfram Helper",
    icon: <CgMathEqual />,
    description:
      "A mini-framework design to solve mathematical problems step-by-step using a solver template class and scraping the results from wolfram alpha",
    href: "https://github.com/dgop92/wolfram-helper",
  },
  {
    name: "Schedule Maker",
    icon: <FaCalendarCheck />,
    description:
      "This project generates a combination of schedules to help students in the process of making a new schedule for the next semester",
    href: "https://github.com/dgop92/schedule-maker",
  },
  {
    name: "Utils3",
    icon: <FaTerminal />,
    description:
      "My own CLI which provides a set of utilities for 2021 virtual classes.",
    href: "https://github.com/dgop92/utils3",
  },
];

const Project = React.forwardRef((props, ref) => (
  <ProjectPage {...props} ref={ref}>
    <PageTitle>Projects</PageTitle>
    <ProjectSection>
      {projecItems.map((projectData, index) => (
        <ProjectContainer key={index}>
          <ProjectTitle>
            {projectData.icon}
            <span>{projectData.name}</span>
          </ProjectTitle>
          <Paragraph>{projectData.description}</Paragraph>
          <RepositoryButton as="a" href={projectData.href}>
            <SiGithub />
          </RepositoryButton>
        </ProjectContainer>
      ))}
    </ProjectSection>
  </ProjectPage>
));

export default Project;
