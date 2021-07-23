import React from "react";
import styled from "styled-components";
import { BasePageCenter, BaseSection, PrimaryButton } from "../commons";
import { FaBookOpen, FaDesktop, FaCode } from "react-icons/fa";
import { useLanguage } from "../base/customContexts";

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
  "HOBBIE_ITEM_1",
  "HOBBIE_ITEM_2",
  "HOBBIE_ITEM_3",
];

const hobbieIcons = [<FaBookOpen />, <FaDesktop />, <FaCode />];

const About = React.forwardRef((props, ref) => {
  const langStrs = useLanguage();

  const downloadCV = () => {
    alert(langStrs.CV_MESSAGE);
  };

  return (
    <AboutPage {...props} ref={ref}>
      <AboutSection>
        <AboutArticle>
          <ArticleTitle>{langStrs.ABOUT_TITLE}</ArticleTitle>
          <Paragraph>{langStrs.ABOUT_PARAGRAPH_1}</Paragraph>
          <Paragraph>{langStrs.ABOUT_PARAGRAPH_2}</Paragraph>
          <Paragraph>{langStrs.ABOUT_PARAGRAPH_3}</Paragraph>
          <DownloadButton onClick={downloadCV}>
            {langStrs.DOWNLOAD_CV}
          </DownloadButton>
        </AboutArticle>
        <AboutArticle>
          <ArticleTitle>Hobbies</ArticleTitle>
          <HobbieList>
            {hobbieNames.map((name, index) => (
              <HobbieItem key={index}>
                {hobbieIcons[index]}
                <span>{langStrs[name]}</span>
              </HobbieItem>
            ))}
          </HobbieList>
        </AboutArticle>
      </AboutSection>
    </AboutPage>
  );
});

export default About;
