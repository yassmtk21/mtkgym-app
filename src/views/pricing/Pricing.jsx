import React, { useContext } from "react";
import Data from "./data";
import { ActionContext } from "../../components/context/ActionContext";
import { setIsModal } from "../../components/actions/Actions";
import Footer from "../Footer";

const Pricing = () => {
  const { dispatch } = useContext(ActionContext);
  return (
    <>
      <h1 className="text-[1.2rem] font-bold">Pricing</h1>
      <div className="grid md:w-[80%] m-auto mt-4 md:grid-cols-3 grid-cols-1 place-items-center gap-5">
        {Data.map(({ src, title, price, p1, p2, p3, p4 }, i) => (
          <div
            key={i}
            className="bg-white md:w-full sm:w-1/2 w-full text-black shadow-2xl"
          >
            <img src={src} alt={title} className="w-full h-[250px]" />
            <div className="relative bottom-10 flex flex-col items-center text-center">
              <div className="bg-white">
                <h1 className="text-[1.6rem] font-bold mx-6">{title}</h1>
                <div>
                  <p>
                    <span className="relative bottom-6 text-[#6D6D6D] text-[1.2rem] font-bold">
                      $
                    </span>
                    <span className="text-[3.6rem] font-bold mx-2">
                      {price}
                    </span>
                    <span className="font-bold text-[#6D6D6D]">p/m</span>
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <span>{p1}</span>
                  <span>{p2}</span>
                  <span>{p3}</span>
                  <span>{p4}</span>
                </div>
                <button
                  onClick={() => dispatch(setIsModal(true))}
                  className="relative border mt-8 px-1 py-1 bg-[#FF0336] text-white font-bold w-[150px] h-[50px] uppercase after:content-[''] after:absolute after:bottom-[8px] after:left-[8px] after:w-[150px] after:h-[50px] after:border after:border-[#FF0336] hover:after:left-0 hover:after:bottom-0 hover:after:transition-all hover:after:duration-700"
                >
                  Join Class Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};

export default Pricing;
