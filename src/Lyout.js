import "./App.css";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import SideBarMenu from "./components/menu/SideBarMenu";
import NavBar from "./components/NavBar/NavBar";
import { ActionContext } from "./components/context/ActionContext";

function App() {
  const { state } = useContext(ActionContext);
  const dark = state.isDark;
  return (
    <div
      className={`flex h-screen ${
        !dark ? "bg-[#020202] text-white" : "bg-white text-black"
      }`}
    >
      {/* Sidebar */}
      <aside className="">
        <SideBarMenu />
      </aside>
      <div className="flex flex-col w-full">
        <header>
          <NavBar />
        </header>
        <main className={`flex-1 overflow-y-auto scroll-smooth scroll-co p-4`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
