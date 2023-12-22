import {
  RiSunLine,
  RiMoonFill,
  RiUserAddFill,
  RiSearch2Line,
  RiCloseFill,
  RiMenuFill,
} from "react-icons/ri";

import React, { useContext } from "react";
import { ActionContext } from "../context/ActionContext";
import { setIsModal, setIsMenu, setIsDark } from "../actions/Actions";

const getIcons = (dispatch, state) => [
  {
    id: 8,
    Icon: RiMenuFill,
    iconName: "menu",
    label: "Menu",
    action: () => dispatch(setIsMenu(true)),
    isHidden: state.isMenu,
  },
  {
    id: 9,
    Icon: RiCloseFill,
    iconName: "menu",
    label: "Close Menu",
    action: () => dispatch(setIsMenu(false)),
    isHidden: !state.isMenu,
  },
  {
    id: 4,
    Icon: RiSunLine,
    iconName: "bottom",
    label: "light Mode",
    title: "light mode",
    action: () => dispatch(setIsDark(true)),
    isHidden: state.isDark,
  },
  {
    id: 5,
    Icon: RiMoonFill,
    iconName: "bottom",
    label: "dark Mode",
    title: "dark mode",
    action: () => dispatch(setIsDark(false)),
    isHidden: !state.isDark,
  },
  {
    id: 6,
    Icon: RiUserAddFill,
    iconName: "right",
    label: "add Member",
    action: () => dispatch(setIsModal(true)),
  },
  {
    id: 7,
    Icon: RiSearch2Line,
    iconName: "left",
    label: "search Member",
  },
];

const IconsList = ({ iconName, className }) => {
  const { dispatch, state } = useContext(ActionContext);

  return (
    <>
      {getIcons(dispatch, state)
        .filter((i) => i.iconName === iconName)
        .map(({ id, label, Icon, action, isHidden, color }) => (
          <div
            className={className}
            key={id}
            aria-label={label}
            label={label}
            title={label}
            onClick={action}
            hidden={isHidden}
          >
            <Icon className={"inline-block text-xl cursor-pointer"} />
          </div>
        ))}
    </>
  );
};

export default IconsList;
