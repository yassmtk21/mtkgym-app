import IconsList from "../Icons/IconsList";
import { useContext, useState } from "react";
import { setIsMenu, setIsModal } from "../actions/Actions";
import { ActionContext } from "../context/ActionContext";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { state, dispatch } = useContext(ActionContext);
  const [LinkName, setLinkName] = useState("home");
  const MenuIsOpen = state.isMenu;

  const LinkClicked = (link) => {
    setLinkName(link);
    dispatch(setIsMenu(false));
  };
  const list = [
    { id: 0, link: "home", page: "Home" },
    { id: 1, link: "about", page: "About" },
    { id: 2, link: "members", page: "Classes" },
    { id: 3, link: "calendar", page: "Scheduler" },
    { id: 4, link: "gallery", page: "Gallery" },
    { id: 5, link: "price", page: "Pricing" },
  ];

  return (
    <div className={`flex w-full h-20`}>
      <div className="w-1/2 flex flex-col justify-center px-5">
        <img src="./gym-logo.png" alt="log" className="w-[100px] h-[90px]" />
      </div>
      <div className="flex flex-row items-center w-1/2 mr-4">
        <IconsList
          onClick={() => dispatch(setIsModal(true))}
          iconName={"right"}
          className="text-black bg-[#08A8CC] text-center w-8 h-8 cursor-pointer rounded-full hover:scale-110 absolute right-4"
        />

        <div className="absolute right-[70px] lg:hidden">
          <IconsList iconName={"bottom"} />
        </div>
        <IconsList
          iconName={"menu"}
          className={`lg:hidden absolute right-[110px]  ${
            MenuIsOpen && "text-red-500 z-[999999999]"
          }`}
        />
        <div
          className={`lg:hidden 
          ${
            !MenuIsOpen && "-translate-x-full"
          } z-[99999999] flex absolute left-0 top-0 flex-col w-full h-screen bg-white duration-500 ease-in-out transition-transform `}
        >
          <ul className="w-full h-full flex flex-col justify-center items-center gap-3 px-2">
            {list.map(({ link, page, id }) => (
              <Link key={id} to={link}>
                <li
                  onClick={() => LinkClicked(link)}
                  className={`${
                    link === LinkName ? "text-red-500" : "text-black"
                  } text-[1.1rem] py-2 font-bold hover:text-red-500`}
                >
                  {page}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default NavBar;
