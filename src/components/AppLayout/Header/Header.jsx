import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGlobe } from "react-icons/fa";
import { Sidebar } from "../Sidebar";
import { navItems } from "../../../constants/globals";
import {
  NavCenter,
  NavBase,
  LinkList,
  LinkItem,
  LanguageDropDown,
  DropdownContent,
  DropDownItem,
} from "./style";
import { useLanguage } from "../../../context/customContexts";

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
    <>
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
                key={item}
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
    </>
  );
}
