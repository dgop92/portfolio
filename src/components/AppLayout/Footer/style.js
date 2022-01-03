import styled from "styled-components";

export const FooterBase = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.primary.dark1};
  padding: 2rem 1rem;
`;

export const FooterTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.palette.contrast};
  font-family: "Poppins", sans-serif;
  margin-bottom: 1rem;
`;

export const ContactList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const FooterItem = styled.a`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.5rem;
  color: ${(props) => props.theme.palette.contrast};
  font-family: "Poppins", sans-serif;
  text-decoration: none;

  & > span {
    margin-left: 1rem;
  }

  & > svg {
    font-size: 2rem;
  }
`;

export const Copyright = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.palette.contrast};
  font-family: "Poppins", sans-serif;
  text-align: center;
`;
