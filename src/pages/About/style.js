import styled from "styled-components";
import { BasePageCenter, BaseSection } from "../../components/layout";
import { PrimaryButton } from "../../components/buttons";

export const AboutPage = styled(BasePageCenter)``;

export const AboutSection = styled(BaseSection)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutArticle = styled.article`
  padding: 2rem;
  background-color: ${(props) => props.theme.palette.background.paper};
`;

export const ArticleTitle = styled.h5`
  margin: 0 0;
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.palette.text.secondary};
`;

export const DownloadButton = styled(PrimaryButton)`
  margin-top: 2rem;
  width: 100%;
`;

export const HobbieList = styled.ul`
  padding: 0 0;
`;

export const HobbieItem = styled.li`
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
