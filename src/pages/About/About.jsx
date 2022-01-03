import React from "react";
import { FaBookOpen, FaDesktop, FaCode } from "react-icons/fa";
import { useLanguage } from "../../context/customContexts";
import {
  AboutPage,
  AboutSection,
  AboutArticle,
  ArticleTitle,
  Paragraph,
  DownloadButton,
  HobbieList,
  HobbieItem,
} from "./style";

const hobbieNames = ["HOBBIE_ITEM_1", "HOBBIE_ITEM_2", "HOBBIE_ITEM_3"];

const hobbieIcons = [<FaBookOpen />, <FaDesktop />, <FaCode />];

const About = React.forwardRef((props, ref) => {
  const langStrs = useLanguage();

  const downloadCV = () => {
    // eslint-disable-next-line no-alert
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
              <HobbieItem key={name}>
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
