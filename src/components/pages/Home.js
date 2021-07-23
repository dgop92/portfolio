import React from "react";
import styled from "styled-components";
import { PageBase } from "../commons";
import { useLanguage } from "../base/customContexts";

const HomeBase = styled(PageBase)`
  background-image: 
  url(${process.env.PUBLIC_URL + "/assets/svgs/curve-home-bg.svg"});
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
`;

const NameContainer = styled.div`
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

const MainName = styled.h2`
  font-size: 4rem;
  font-family: "Poppins", sans-serif;
  font-weight: normal;
  color: ${(props) => props.theme.palette.text.primary};
  margin: 0.4rem 0;
`;
const JobName = styled.h5`
  font-size: 1.75rem;
  font-family: "Poppins", sans-serif;
  font-weight: normal;
  color: ${(props) => props.theme.palette.text.secondary};
  margin: 0.4rem 0;
`;

const Home = React.forwardRef((props, ref) => {
  const langStrs = useLanguage();

  return (
    <HomeBase {...props} ref={ref}>
      <NameContainer>
        <MainName>Diego Puche</MainName>
        <JobName>{langStrs.JOB_TITLE}</JobName>
      </NameContainer>
    </HomeBase>
  );
});

export default Home;
