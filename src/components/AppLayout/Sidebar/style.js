import styled, { css } from "styled-components";

const activeSidebar = css`
  transform: translateX(0%);
`;

export const LinksContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100vh;
  width: 100%;
  max-width: 400px;
  background-color: ${(props) => props.theme.palette.contrast};
  transform: translateX(-100%);
  ${(props) => props.active && activeSidebar};
  transition: transform 0.3s;
`;

const SidebarBase = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 1.1rem 1.3rem;
  color: ${(props) => props.theme.palette.text.secondary};
  font-family: "Poppins", sans-serif;
  border-bottom: 1px solid ${(props) => props.theme.palette.divider};

  & > span {
    text-transform: capitalize;
  }

  -webkit-tap-highlight-color: transparent;
`;

export const SidebarItem = styled(SidebarBase)`
  cursor: pointer;
  text-decoration: none;

  & > span {
    margin-left: 1rem;
  }

  &:hover {
    color: ${(props) => props.theme.palette.primary.light1};
  }
`;

export const SidebarCloseItem = styled(SidebarBase)`
  justify-content: flex-end;

  & > svg {
    cursor: pointer;
    font-size: 1.2rem;
  }

  & > svg:hover {
    color: ${(props) => props.theme.palette.primary.light1};
  }
`;