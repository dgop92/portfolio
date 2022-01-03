import React from "react";
import { useLanguage } from "../../context/customContexts";
import { HomeBase, NameContainer, MainName, JobName } from "./style";

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
