import React from "react";
import {
  FaSearch,
  FaBriefcase,
  FaCalendarCheck,
  FaTerminal,
  FaUniversity,
  FaBusinessTime,
} from "react-icons/fa";
import { CgMathEqual } from "react-icons/cg";
import { ImTree } from "react-icons/im";
import { BsFillChatFill } from "react-icons/bs";
import { techTagsOptions } from "../../constants/globals";

export const projectItems = [
  {
    name: "GapFind",
    icon: <FaSearch />,
    description: "FINDGAP_DESCRIPTION",
    href: "https://github.com/dgop92/gfind",
    viewProjectHref: "https://gapfind.netlify.app",
    techTags: [techTagsOptions.DJANGO, techTagsOptions.REACTJS],
  },
  {
    name: "Communotes API",
    icon: <FaUniversity />,
    description: "COMMUNOTES_DESCRIPTION",
    href: "https://github.com/dgop92/communotes",
    techTags: [techTagsOptions.DJANGO],
  },
  {
    name: "Retail Tech Business API",
    icon: <FaBriefcase />,
    description: "RETAIL_TECH_DESCRIPTION",
    href: "https://github.com/dgop92/retail-tech-business-api",
    techTags: [techTagsOptions.DJANGO],
  },
  {
    name: "Anon Chat",
    icon: <BsFillChatFill />,
    description: "ANON_CHAT_DESCRIPTION",
    href: "https://github.com/dgop92/anon-chat",
    viewProjectHref: "https://dgop92-anon-chat.netlify.app",
    techTags: [techTagsOptions.REACTJS, techTagsOptions.JS],
  },
  {
    name: "Binary tree builder",
    icon: <ImTree />,
    description: "BINTREE_BUILDER_DESCRIPTION",
    href: "https://github.com/dgop92/binary-tree-builder-typescript",
    viewProjectHref: "https://binary-tree-builder.netlify.app/",
    techTags: [techTagsOptions.TYPESCRIPT],
  },
  {
    name: "G-Utils",
    icon: <FaTerminal />,
    description: "GUTILS_DESCRIPTION",
    href: "https://github.com/dgop92/gutils",
    techTags: [techTagsOptions.PYTHON],
  },
];

export const extraProjects = [
  {
    name: "Inevaup Negocios",
    icon: <FaBusinessTime />,
    description: "INEVAUP_NEGOCIOS_DESCRIPTION",
    href: "https://github.com/dgop92/inevaup-negocios-react",
    viewProjectHref: "https://inevaup-negocios.netlify.app/login",
    techTags: [techTagsOptions.REACTJS],
  },
  {
    name: "Wolfram Helper",
    icon: <CgMathEqual />,
    description: "WHELPER_DESCRIPTION",
    href: "https://github.com/dgop92/wolfram-helper",
    techTags: [techTagsOptions.PYTHON],
  },
  {
    name: "Schedule Maker",
    icon: <FaCalendarCheck />,
    description: "SCHEDULE_MAKER_DESCRIPTION",
    href: "https://github.com/dgop92/schedule-maker",
    techTags: [techTagsOptions.PYTHON],
  },
  {
    name: "Utils3",
    icon: <FaTerminal />,
    description: "UTILS3_DESCRIPTION",
    href: "https://github.com/dgop92/utils3",
    techTags: [techTagsOptions.PYTHON],
  },
];
