import React from "react";
import styled from "styled-components";
import { BasePageCenter, BaseSection, PageTitle, PrimaryButton } from "../commons";
import { FaBookOpen } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

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
    name: "Project Name",
    icon: <FaBookOpen />,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing eli Maiores usto fuga vitae itaque quaerat inventore tenetur quam nostrum ipsam tempore!",
    href: "#",
  },
  {
    name: "Project Name",
    icon: <FaBookOpen />,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing eli Maiores usto fuga vitae itaque quaerat inventore tenetur quam nostrum ipsam tempore!",
    href: "#",
  },
  {
    name: "Project Name",
    icon: <FaBookOpen />,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing eli Maiores usto fuga vitae itaque quaerat inventore tenetur quam nostrum ipsam tempore!",
    href: "#",
  },
  {
    name: "Project Name",
    icon: <FaBookOpen />,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing eli Maiores usto fuga vitae itaque quaerat inventore tenetur quam nostrum ipsam tempore!",
    href: "#",
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