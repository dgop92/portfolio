import styled, { keyframes } from "styled-components";
import { PageBase } from "../../components/layout";

export const HomeBase = styled(PageBase)`
  background-image: url(${`${process.env.PUBLIC_URL}/assets/svgs/curve-home-bg.svg`});
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
`;

export const NameContainer = styled.div`
  margin: auto 4rem;
  padding: 1rem;

  @media (max-width: 600px) {
    margin: auto;

    & > h2,
    & > h5 {
      text-align: center;
    }
  }

  @media (max-width: 450px) {
    margin: auto;

    & > h2 {
      font-size: 3rem;
    }

    & > h5 {
      font-size: 1.2rem;
    }
  }
`;

const trackingInExpand = keyframes`
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;

export const MainName = styled.h2`
  font-size: 4rem;
  font-family: "Poppins", sans-serif;
  font-weight: normal;
  color: ${(props) => props.theme.palette.text.primary};
  margin: 0.4rem 0;
  animation: ${trackingInExpand} 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;

export const JobName = styled.h5`
  font-size: 1.75rem;
  font-family: "Poppins", sans-serif;
  font-weight: normal;
  color: ${(props) => props.theme.palette.text.secondary};
  margin: 0.4rem 0;
  animation: ${trackingInExpand} 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  animation-delay: 0.5s;
`;
