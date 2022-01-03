import styled, { keyframes, css } from "styled-components";

const fixedAnimation = (bg) => keyframes`
  from {background-color: transparent;}
  to {background-color: ${bg};}
`;

const noFixedAnimation = (bg) => keyframes`
  from {background-color: ${bg};}
  to {background-color: transparent;}
`;

const noFixedStyles = css`
  background-color: transparent;
  animation: ${(props) => noFixedAnimation(props.theme.palette.primary.dark1)}
    0.5s ease;
`;

const fixedStyles = css`
  background-color: ${(props) => props.theme.palette.primary.dark1};
  animation: ${(props) => fixedAnimation(props.theme.palette.primary.dark1)}
    0.5s ease;
`;

export const NavBase = styled.nav`
  padding: 0.5rem 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  @media (min-width: 550px) {
    ${(props) => props.firstScroll && noFixedStyles};
    ${(props) => props.fixed && fixedStyles};
  }

  @media (max-width: 550px) {
    background-color: ${(props) => props.theme.palette.primary.dark1};
  }
`;

/* const activeHamburger = css`
  justify-content: space-between;

  &.hamburger {
    font-size: 1.5rem;
  }
`; */

export const NavCenter = styled.div`
  width: 90vw;
  margin: 0.8rem auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > svg {
    color: ${(props) => props.theme.palette.contrast};
    font-size: 1.5rem;
    display: none;
  }

  @media (max-width: 550px) {
    & > svg {
      display: inline;
    }
    & > ul {
      display: none;
    }
    justify-content: space-between;
    align-items: center;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  padding: 0 0;
  margin: 0 0;
`;

export const LinkItem = styled.a`
  color: ${(props) => props.theme.palette.contrast};
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  text-transform: capitalize;
  margin: 0 1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
`;

export const LanguageDropDown = styled.button`
  position: relative;

  & > svg {
    color: ${(props) => props.theme.palette.contrast};
    font-size: 1.3rem;
    cursor: pointer;
  }

  margin-right: 2rem;
  @media (min-width: 550px) {
    margin-left: 1rem;
  }

  &:hover > div {
    display: flex;
    flex-direction: column;
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${(props) => props.theme.palette.background.paper};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  right: -15px;
  top: 0;
`;

export const DropDownItem = styled.span`
  font-size: 1rem;
  padding: 0.9rem 1.3rem;
  background-color: ${(props) => props.theme.palette.background.paper};
  color: ${(props) => props.theme.palette.text.secondary};
  font-family: "Poppins", sans-serif;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.palette.primary.light1};
  }

  -webkit-tap-highlight-color: transparent;
`;
