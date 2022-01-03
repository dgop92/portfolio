import React from "react";
import { SiGmail } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { useLanguage } from "../../../context/customContexts";
import {
  FooterBase,
  FooterTitle,
  FooterItem,
  Copyright,
  ContactList,
} from "./style";

const contactList = [
  {
    name: "CONTACT_ITEM_1",
    icon: <SiGmail color="#EA4335" />,
    href: "mailto:inevaup@gmail.com",
  },
  {
    name: "CONTACT_ITEM_2",
    icon: <FiGithub color="#fff" />,
    href: "https://github.com/dgop92",
  },
];

export default function Footer() {
  const langStrs = useLanguage();

  return (
    <FooterBase>
      <FooterTitle>{langStrs.CONTACT_TITLE}</FooterTitle>
      <ContactList>
        {contactList.map((contactData) => (
          <FooterItem key={contactData.name} href={contactData.href}>
            {contactData.icon}
            <span>{langStrs[contactData.name]}</span>
          </FooterItem>
        ))}
      </ContactList>
      <Copyright>
        {langStrs.CONTACT_COPY} © {new Date().getFullYear()}
      </Copyright>
    </FooterBase>
  );
}
