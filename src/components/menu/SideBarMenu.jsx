import React, { useContext } from 'react';
import IconsList from '../Icons/IconsList';
import MenuList from '../Icons/ListMenu';
import { ActionContext } from '../context/ActionContext';

const SideBarMenu = () => {
    const {state} = useContext(ActionContext);
    const dark = state.isDark;
    const open = state.isMenu;
  return (
      <div className={
        `flex flex-col relative ${!open? "w-14" : "w-52"}
         duration-500
          h-screen
          hidden lg:block
          px-4  ${!dark?"shadow-[1px_0px_0px_0px] shadow-[#262626]":"shadow-[1px_0px_0px_0px] shadow-slate-200"}`}
      >
        <div className="py-3 flex justify-end">
          <IconsList iconName={"menu"} className={` my-3 ${open && "hover:bg-[#111] hover:text-white w-7 h-7 text-center hover:rounded-full"} `}/>
        </div>
        <div className="mt-3 flex flex-col gap-4">
          <MenuList hidden={!open? true : false} isDark={dark}/>
        </div>
        <div className="h-1/3 flex flex-col justify-end">
          <IconsList iconName={"bottom"} />
        </div>
      </div>
  )
}

export default SideBarMenu
