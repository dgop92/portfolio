import React from "react";
import {
  SiDjango,
  SiGit,
  SiNodeDotJs,
  SiTypescript,
  SiMaterialUi,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiVisualstudiocode,
} from "react-icons/si";
import { ReactComponent as PyhonLogo } from "../../assets/custom-dev-icons/python.svg";
import { ReactComponent as FigmaLogo } from "../../assets/custom-dev-icons/figma.svg";
// eslint-disable-next-line max-len
import { ReactComponent as SerenadeLogo } from "../../assets/custom-dev-icons/serenade.svg";

export const skillSetItems = [
  {
    title: "SKILL_SECTION_1",
    iconBoxs: [
      {
        name: "Python",
        icon: <PyhonLogo />,
      },
      {
        name: "Django",
        icon: <SiDjango color="#092E20" />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript color="#3178c6" />,
      },
      {
        name: "NodeJs",
        icon: <SiNodeDotJs color="#88c043" />,
      },
      {
        name: "React JS",
        icon: <SiReact color="#61DAFB" />,
      },
      {
        name: "Material Ui",
        icon: <SiMaterialUi color="#0081CB" />,
      },
      {
        name: "Postgres",
        icon: <SiPostgresql color="#336791" />,
      },
    ],
    paragraph: "SKILL_SET_1",
  },
  {
    title: "SKILL_SECTION_2",
    iconBoxs: [
      {
        name: "Vs Code",
        icon: <SiVisualstudiocode color="#007ACC" />,
      },
      {
        name: "Git",
        icon: <SiGit color="#F05032" />,
      },
      {
        name: "Postman",
        icon: <SiPostman color="#FF6C37" />,
      },
      {
        name: "Figma",
        icon: <FigmaLogo />,
      },
      {
        name: "Serenade",
        icon: <SerenadeLogo height="48" />,
      },
    ],
    paragraph: "SKILL_SET_3",
  },
];
