import React from "react";
import { FaTimes, FaHome, FaUserAlt, FaTools, FaToolbox } from "react-icons/fa";
import { navItems } from "../../../constants/globals";
import { useLanguage } from "../../../context/customContexts";
import { LinksContainer, SidebarItem, SidebarCloseItem } from "./style";

const navIcons = [<FaHome />, <FaUserAlt />, <FaTools />, <FaToolbox />];

export default function Sidebar({ scrollToSection, active, setActive }) {
  const langStrs = useLanguage();

  const goToLink = (event, index) => {
    scrollToSection(event, index);
    setActive(false);
  };

  return (
    <div>
      <LinksContainer active={active}>
        <SidebarCloseItem>
          <FaTimes onClick={() => setActive(false)} />
        </SidebarCloseItem>
        {navItems.map((item, index) => (
          <SidebarItem
            as="a"
            href={`#${item}`}
            onClick={(event) => goToLink(event, index)}
            key={item}
          >
            {navIcons[index]}
            <span>{langStrs[item]}</span>
          </SidebarItem>
        ))}
      </LinksContainer>
    </div>
  );
}
