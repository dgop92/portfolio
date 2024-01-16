import React from "react";
import {
  FaSearch,
  FaCalendarCheck,
  FaTerminal,
  FaUniversity,
  FaBusinessTime,
  FaRoute,
  FaShoppingBasket,
  FaUtensilSpoon,
} from "react-icons/fa";
import { CgMathEqual } from "react-icons/cg";
import { GiPortal } from "react-icons/gi";
import { ImTree } from "react-icons/im";
import { BsFillChatFill, BsCamera } from "react-icons/bs";
import { techTagsOptions } from "../../constants/globals";

export const projectItems = [
  {
    name: "FitVoice",
    icon: <FaUtensilSpoon />,
    description: "FITVOICE_DESCRIPTION",
    href: "https://github.com/dgop92/speech2diet",
    techTags: [techTagsOptions.PYTHON, techTagsOptions.TYPESCRIPT],
  },
  {
    name: "GapFind",
    icon: <FaSearch />,
    description: "FINDGAP_DESCRIPTION",
    href: "https://github.com/dgop92/gfind",
    viewProjectHref: "https://gapfind.netlify.app",
    techTags: [techTagsOptions.DJANGO, techTagsOptions.REACTJS],
  },
  {
    name: "Sellers4U",
    icon: <FaShoppingBasket />,
    description: "SELLERS4U_DESCRIPTION",
    href: "https://github.com/dgop92/sellers4u-api",
    techTags: [techTagsOptions.TYPESCRIPT],
  },
  {
    name: "Communotes API",
    icon: <FaUniversity />,
    description: "COMMUNOTES_DESCRIPTION",
    href: "https://github.com/dgop92/communotes",
    techTags: [techTagsOptions.DJANGO],
  },
  {
    name: "Evepcount",
    icon: <BsCamera />,
    description: "EVEPCOUNT_DESCRIPTION",
    href: "https://github.com/dgop92/evepcount",
    techTags: [techTagsOptions.FASTAPI, techTagsOptions.TYPESCRIPT],
  },
  {
    name: "Covid-19 Data visualization",
    icon: <FaUniversity />,
    description: "COVID19_DESCRIPTION",
    href: "https://github.com/dgop92/covid-data-vis-client",
    viewProjectHref: "https://covid-eda.netlify.app/",
    techTags: [techTagsOptions.REACTJS, techTagsOptions.FASTAPI],
  },
  {
    name: "Transmetro Paths",
    icon: <FaRoute />,
    description: "TRANSMETRO_DESCRIPTION",
    href: "https://github.com/dgop92/transmetro-path",
    techTags: [techTagsOptions.FASTAPI],
  },
  {
    name: "Rick and Morty NextJS",
    icon: <GiPortal />,
    description: "RICK_AND_MORTY_NEXTJS",
    href: "https://github.com/dgop92/rick-morty-nextjs",
    viewProjectHref: "https://rick-morty-nextjs-beta.vercel.app",
    techTags: [techTagsOptions.REACTJS, techTagsOptions.TYPESCRIPT],
  },
  {
    name: "Anon Chat",
    icon: <BsFillChatFill />,
    description: "ANON_CHAT_DESCRIPTION",
    href: "https://github.com/dgop92/anon-chat",
    viewProjectHref: "https://dgop92-anon-chat.netlify.app",
    techTags: [techTagsOptions.REACTJS, techTagsOptions.JS],
  },
];

export const extraProjects = [
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
  /* {
    name: "Utils3",
    icon: <FaTerminal />,
    description: "UTILS3_DESCRIPTION",
    href: "https://github.com/dgop92/utils3",
    techTags: [techTagsOptions.PYTHON],
  }, */
];
