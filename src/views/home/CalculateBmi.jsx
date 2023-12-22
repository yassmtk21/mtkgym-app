import React, { useState } from "react";

const CalculateBmi = () => {
  const [Weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();
  const [result, setResult] = useState({});

  const changeWeight = (e) => {
    setWeight(e.target.value);
  };
  const changeHeight = (e) => {
    setHeight(e.target.value);
  };
  const calculate = (bmi) => {
    var h = height / 100;
    var bm = parseFloat(Weight) / Math.pow(parseFloat(h), 2);
    setBmi(Math.round(bm));
    switch (true) {
      case bm < 18.5:
        setResult({ Weight: "UnderWeight", color: "#FDE501" });
        break;
      case bm < 25:
        setResult({ Weight: "Normal", color: "#068a36" });
        break;
      case bm < 30:
        setResult({ Weight: "Overweight", color: "#b81004" });
        break;
      case bm >= 30:
        setResult({ Weight: "Obes", color: "#7f04b8" });
        break;
      default:
        setResult("");
    }
  };

  return (
    <>
      <h1 className="text-[1.6rem] font-bold text-[#3F3F3F]">BMI Calculator</h1>
      <div className="flex sm:flex-row flex-col">
        <div className="sm:w-1/2 w-full flex justify-center">
          <img src={require("./images/ImageBMI.png")} alt="" className="" />
        </div>
        <div className="sm:w-1/2 w-full lg:pr-[200px]">
          <h1 className="text-[1.6rem] font-bold">
            Let's Calculate Your <span className="text-[#08A8CC]">BMI</span>
          </h1>
          <p className="text-[#6B7280] text-justify font-bold  my-4">
            Easily determine your body mass index with our accurate calculation
            tool.
          </p>
          <form className="flex flex-col sm:flex-row sm:justify-between gap-2 py-[10px]">
            <input
              onChange={changeWeight}
              type="text"
              placeholder="Weight / kg"
              className="w-full px-2 py-4 border-2 border-[#848487] bg-black bg-transparent placeholder:text-gray-500 placeholder:font-bold"
            />
            <input
              onChange={changeHeight}
              type="text"
              placeholder="Height / cm"
              className="w-full px-2 py-4 border-2 border-[#848487] bg-black bg-transparent placeholder:text-gray-500 placeholder:font-bold"
            />
          </form>

          <div className="flex flex-col sm:flex-row my-4">
            <div className="w-1/2">
              Your BMI is :&nbsp;
              <span className="text-[1.2rem] font-medium ">
                {bmi ? bmi : ""}
              </span>
            </div>
            <div className="w-1/2">
              Your Weight is :&nbsp;
              <span
                className={`font-medium `}
                style={{ color: `${result.color}` }}
              >
                {result.Weight}
              </span>
            </div>
          </div>
          <div>
            <button
              onClick={calculate}
              type="submit"
              className=" py-4 px-16 bg-[#3f3f3f] hover:bg-[#08A8CC] hover:scale-105 duration-300 text-white font-medium mt-10 rounded-md"
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculateBmi;
