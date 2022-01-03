import styled from "styled-components";
import { BasePageCenter, BaseSection } from "../../components/layout";

export const SkillPage = styled(BasePageCenter)`
  flex-direction: column;
  align-items: center;
`;

export const SkillSection = styled(BaseSection)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  gap: 1rem;

  @media (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export const SkillSetContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.palette.background.paper};
  border-radius: 1rem;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  max-width: 450px;
  flex-grow: 1;
`;

export const Title = styled.h6`
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.palette.text.primary};
  text-align: center;
  margin: 1rem 0.5rem;
`;

export const TechIconBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1rem;

  & > svg {
    font-size: 4rem;
  }

  & > span {
    font-family: "Poppins", sans-serif;
    color: ${(props) => props.theme.palette.text.primary};
    font-size: 1.2rem;
    padding: 0.5rem 0;
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.palette.text.secondary};
  text-align: center;
`;
