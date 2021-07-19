import React from "react";
import styled from "styled-components";
import { BasePageCenter, BaseSection, PrimaryButton } from "../commons";
import { FaBookOpen, FaDesktop, FaCode } from "react-icons/fa";

const AboutPage = styled(BasePageCenter)``;

const AboutSection = styled(BaseSection)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const AboutArticle = styled.article`
  padding: 2rem;
  background-color: ${(props) => props.theme.palette.background.paper};
`;

const ArticleTitle = styled.h5`
  margin: 0 0;
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.palette.text.secondary};
`;

const DownloadButton = styled(PrimaryButton)`
  margin-top: 2rem;
  width: 100%;
`;

const HobbieList = styled.ul`
  padding: 0 0;
`;

const HobbieItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 1rem 0.8rem;
  color: ${(props) => props.theme.palette.text.primary};
  font-family: "Poppins", sans-serif;

  & > span {
    margin-left: 1rem;
  }

  & > svg {
    color: ${(props) => props.theme.palette.primary.light1};
    font-size: 1.5rem;
  }

  -webkit-tap-highlight-color: transparent;
`;

const hobbieNames = [
  "Read psychology and bussiness books",
  "Watch films and series",
  "Write code or scripts for repetitive tasks",
];
const hobbieIcons = [<FaBookOpen />, <FaDesktop />, <FaCode />];

const About = React.forwardRef((props, ref) => {
  const downloadCV = () => {
    alert("it's too early to have one of those");
  };

  return (
    <AboutPage {...props} ref={ref}>
      <AboutSection>
        <AboutArticle>
          <ArticleTitle>About me</ArticleTitle>
          <Paragraph>
            Hi! my name is Diego Puche, a python back-end developer focused on
            API development using Django Rest Framework.
          </Paragraph>

          <Paragraph>
            I consider myself as an analytical and thinker person, always
            searching for the most effective solution to the problems I face.
            Python allows me to solve these problems fast and elegantly, making
            it one of my favorite languages.
          </Paragraph>

          <Paragraph>
            Being static is something that I don't like, and that's the reason
            why I learn through experience, to make better projects in the
            future.
          </Paragraph>

          <DownloadButton onClick={downloadCV}>Download CV</DownloadButton>
        </AboutArticle>
        <AboutArticle>
          <ArticleTitle>Hobbies</ArticleTitle>
          <HobbieList>
            {hobbieNames.map((name, index) => (
              <HobbieItem key={index}>
                {hobbieIcons[index]}
                <span>{name}</span>
              </HobbieItem>
            ))}
          </HobbieList>
        </AboutArticle>
      </AboutSection>
    </AboutPage>
  );
});

export default About;
