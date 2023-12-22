import {
  RiHome5Line,
  RiTeamFill,
  RiCalendar2Fill,
  RiGalleryFill,
  RiInformationFill,
  RiPriceTag3Fill,
} from "react-icons/ri";
import React from "react";
import { Link } from "react-router-dom";

const getMenu = () => [
  {
    id: 1,
    Icon: RiHome5Line,
    label: "home",
    title: "Home",
    link: "/home",
  },
  {
    id: 2,
    Icon: RiPriceTag3Fill,
    label: "pricing",
    title: "Pricing",
    link: "/price",
  },

  {
    id: 3,
    Icon: RiCalendar2Fill,
    label: "scheduler",
    title: "Scheduler",
    link: "/calendar",
  },
  {
    id: 4,
    Icon: RiGalleryFill,
    label: "gallery",
    title: "Gallery",
    link: "/gallery",
    margin: true,
  },
  {
    id: 5,
    Icon: RiTeamFill,
    label: "Classes",
    title: "classes",
    link: "/members",
  },
  {
    id: 6,
    Icon: RiInformationFill,
    label: "About",
    title: "About",
    link: "/about",
  },
];

const MenuList = ({ hidden, isDark }) => {
  return (
    <>
      {getMenu().map(({ id, label, Icon, title, link, margin }) => (
        <Link
          to={link}
          className={` ${
            margin && "mt-20"
          } text-[#5D5D5F] w-full flex items-center text-sm font-medium py-2 px-0.5 ${
            !isDark ? "hover:text-[#d2d2d2]" : "hover:text-[#393939]"
          } duration-300 rounded-md`}
          key={id}
          label={label}
          title={label}
        >
          <div>{React.createElement(Icon, { size: "20" })}</div>
          <h2
            style={{
              transitionDelay: `${id + 3}00ms`,
            }}
            className={` ml-4 ${
              hidden && "opacity-0 translate-x-28 overflow-hidden"
            } duration-300 `}
          >
            {title}
          </h2>
        </Link>
      ))}
    </>
  );
};

export default MenuList;
