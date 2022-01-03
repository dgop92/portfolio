import styled from "styled-components";

export const PageBase = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.palette.background.default};
`;

export const BasePageCenter = styled.div`
  background-color: ${(props) => props.theme.palette.background.default};
  display: flex;
  justify-content: center;
  padding-bottom: 2.5rem;
`;

export const PageTitle = styled.h5`
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
  margin: 0.5rem 0 3rem 0;
`;

export const BaseSection = styled.section`
  width: 90vw;
  max-width: 1500px;
`;