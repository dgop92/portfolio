import React from "react";
import styled from "styled-components";
import { SiGmail } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

const FooterBase = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.primary.dark1};
  padding: 2rem 1rem;
`;

const FooterTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.palette.contrast};
  font-family: "Poppins", sans-serif;
  margin-bottom: 1rem;
`;

const ContactList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const FooterItem = styled.a`
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

const Copyright = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.palette.contrast};
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

const contactList = [
  {
    name: "Mail me",
    icon: <SiGmail color="#EA4335" />,
    href: "#",
  },
  {
    name: "Visit my github",
    icon: <FiGithub color="#fff" />,
    href: "#",
  },
];

export default function Footer() {
  return (
    <FooterBase>
      <FooterTitle>Contact me</FooterTitle>
      <ContactList>
        {contactList.map((contactData, index) => (
          <FooterItem key={index} href={contactData.href}>
            {contactData.icon}
            <span>{contactData.name}</span>
          </FooterItem>
        ))}
      </ContactList>
      <Copyright>
        Developed and designed by Diego Puche © {new Date().getFullYear()}
      </Copyright>
    </FooterBase>
  );
}