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

export const BaseButton = styled.button`
  padding: 0.7rem 1rem;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  outline: none;
  border-radius: 0.4rem;
  cursor: pointer;
  border: none;
`;

export const PrimaryButton = styled(BaseButton)`
  color: ${(props) => props.theme.palette.common.white};
  background-color: ${(props) => props.theme.palette.primary.main};
  transition: background-color 0.3s;
  &:hover{
    background-color: ${(props) => props.theme.palette.primary.light1};
  }
`;