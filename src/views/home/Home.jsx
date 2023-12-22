import React, { useContext } from "react";
import Card from "./Card";
import HomePage from "./images/male-boxer-boxing-punching-bag.jpg";
import CalculateBmi from "./CalculateBmi";
import {setIsModal} from '../../components/actions/Actions'
import { ActionContext } from "../../components/context/ActionContext";
import Footer from "../Footer";

const Home = () => {
  const { dispatch } = useContext(ActionContext);

  return (
    <>
      <h1 className="text-[1.2rem] font-bold">Home</h1>
      <div>
        <div
          className="text-white mt-6 bg-cover bg-no-repeat w-full h-[600px] relative rounded-lg"
          style={{ backgroundImage: `url(${HomePage})` }}
        >
          <div className="absolute top-1/2 md:left-2/3 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <h1 className="font-bold text-[30px] sm:text-[35px] md:text-[50px] uppercase mb-[4rem] min450:text-[40px]">
              MAKE YOUR BODY <br />
              <span className="font-thin">FIT & PERFECT</span>
            </h1>
            <button 
              onClick={()=>dispatch(setIsModal(true))}
              className="relative border px-1 py-1 bg-white font-bold w-[150px] h-[50px] text-black uppercase after:content-[''] after:absolute after:bottom-[8px] after:left-[8px] after:w-[150px] after:h-[50px] after:border after:border-white hover:after:left-0 hover:after:bottom-0 after:z-[-50] hover:after:transition-all hover:after:duration-700">
              Join Class Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[90%] m-auto relative bottom-10 grid md:grid-cols-3 grid-cols-1 gap-5">
        <Card />
      </div>
      <div className="">
        <CalculateBmi />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
