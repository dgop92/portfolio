import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Sidebar from "./Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGlobe } from "react-icons/fa";
import { navItems } from "../../constants/globals";
import { useLanguage } from "../base/customContexts";

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

const NavBase = styled.nav`
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

const NavCenter = styled.div`
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

const LinkList = styled.ul`
  display: flex;
  padding: 0 0;
  margin: 0 0;
`;

const LinkItem = styled.a`
  color: ${(props) => props.theme.palette.contrast};
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  text-transform: capitalize;
  margin: 0 1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
`;

const LanguageDropDown = styled.button`
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

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${(props) => props.theme.palette.background.paper};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  right: -15px;
  top: 0;
`;

const DropDownItem = styled.span`
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

export default function Header({ scrollToSection, changeLanguage }) {
  const navRef = useRef(null);
  const [fixed, setFixed] = useState(false);
  const [firstScroll, setFirstScroll] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);

  const langStrs = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const navHeight = navRef.current.getBoundingClientRect().height;

      if (!fixed && scrollY > navHeight) {
        setFixed(true);
      }

      if (!firstScroll && scrollY > navHeight) {
        setFirstScroll(true);
      }

      if (fixed && scrollY <= navHeight) {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // cleanup this component
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fixed, firstScroll]);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <React.Fragment>
      <Sidebar
        active={sidebarActive}
        setActive={setSidebarActive}
        scrollToSection={(event, linkIndex) =>
          scrollToSection(event, navRef, linkIndex)
        }
      />
      <NavBase firstScroll={firstScroll} fixed={fixed} ref={navRef}>
        <NavCenter sidebarActive={sidebarActive}>
          <GiHamburgerMenu
            className="hamburger"
            onClick={() => toggleSidebar()}
          />
          <LinkList>
            {navItems.map((item, index) => (
              <LinkItem
                onClick={(event) => scrollToSection(event, navRef, index)}
                key={index}
                href={`#${item}`}
              >
                <span>{langStrs[item]}</span>
              </LinkItem>
            ))}
          </LinkList>
          <LanguageDropDown as="div">
            <FaGlobe />
            <DropdownContent>
              <DropDownItem onClick={() => changeLanguage("es")}>
                Español
              </DropDownItem>
              <DropDownItem onClick={() => changeLanguage("en")}>
                English
              </DropDownItem>
            </DropdownContent>
          </LanguageDropDown>
        </NavCenter>
      </NavBase>
    </React.Fragment>
  );
}
