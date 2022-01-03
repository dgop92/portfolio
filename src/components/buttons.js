import styled from "styled-components";

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

export const SecondaryButton = styled(BaseButton)`
  background-color: inherit;
  color: ${(props) => props.theme.palette.primary.main};
  border: 1px solid ${(props) => props.theme.palette.primary.main};;
  /* transition: background-color 0.3s; */
  &:hover{
    color: ${(props) => props.theme.palette.primary.light2};
    border-color: ${(props) => props.theme.palette.primary.light2};
  }
`;