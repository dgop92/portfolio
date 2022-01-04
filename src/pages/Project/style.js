import styled from "styled-components";
import { BasePageCenter, BaseSection } from "../../components/layout";
import { PrimaryButton, SecondaryButton } from "../../components/buttons";
import { withScrollFadeInAnimation } from "../../components/hocs";

export const ProjectPage = styled(BasePageCenter)`
  flex-direction: column;
  align-items: center;
`;

export const ProjectSection = styled(BaseSection)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 1rem;

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

export const ProjectContainer = withScrollFadeInAnimation(
  styled.article`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.palette.background.paper};

    padding: 1.2rem;
  `,
  0
);

export const ProjectTitle = styled.div`
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

export const Paragraph = styled.p`
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.palette.text.secondary};
  margin-bottom: 1rem;
  flex-grow: 1;
`;

export const RepositoryButton = styled(PrimaryButton)`
  width: fit-content;
  & > svg {
    color: ${(props) => props.theme.palette.common.white};
    font-size: 1.5rem;
  }
  padding: 0.5rem;
  margin: 0.5rem 0.2rem;
`;

export const ProjectActionsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 0.5rem;
`;

export const TechTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TechTag = styled.span`
  color: ${(props) => props.theme.palette.common.white};
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  background-color: ${(props) => props.bgColor};
  border-radius: 0.5rem;
  padding: 0.3rem 0.8rem;
  margin: 0.5rem;
`;

export const LoadButton = styled(SecondaryButton)`
  margin-top: 2rem;
`;
