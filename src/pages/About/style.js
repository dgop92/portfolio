import styled from "styled-components";
import { BasePageCenter, BaseSection } from "../../components/layout";
import { PrimaryButton } from "../../components/buttons";
import { withScrollFadeInAnimation } from "../../components/hocs";

export const AboutPage = styled(BasePageCenter)``;

export const AboutSection = styled(BaseSection)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutArticle = withScrollFadeInAnimation(styled.article`
  padding: 2rem;
  background-color: ${(props) => props.theme.palette.background.paper};
`);

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

export const CVContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

export const CVNote = styled.p`
  font-size: 0.85rem;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.palette.text.secondary};
  text-align: center;
`;

export const ShowCVButton = styled(PrimaryButton)`
  text-align: center;
  text-decoration: none;
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
