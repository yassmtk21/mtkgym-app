import React, { useState } from "react";

const data = [
  {
    background: require("./images/cardBackground.jpg"),
    logo: require("./images/background1.png"),
    title: "PROGRESSION",
    desc: "Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.",
  },
  {
    background: require("./images/cardBackground.jpg"),
    logo: require("./images/background3.png"),
    title: "WORKOUT",
    desc: "With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life",
  },
  {
    background: require("./images/cardBackground.jpg"),
    logo: require("./images/background2.png"),
    title: "NUTRITIONS",
    desc: "Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.",
  },
];

const Card = () => {
  const [isHover, setIsHover] = useState(false);
  const [iskey, setIsKey] = useState("");
  const handleMouseEnter = (index) => {
    setIsHover(true);
    setIsKey(index);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <>
      {data.map(({ background, logo, title, desc }, index) => (
        <div
          value={index}
          key={index}
          className={`bg-cover bg-no-repeat bg-center text-center cursor-pointer w-full h-[300px] py-4 text-black rounded-tl-[40px] rounded-br-[40px] flex flex-col items-center shadow-2xl`}
          style={
            isHover && index === iskey
              ? { backgroundImage: `url(${background})`, color: "white" }
              : { backgroundColor: "white" }
          }
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={logo} alt="" className="w-[75px] mb-4" />
          <h1 className="text-[24px] font-bold mb-7">{title}</h1>
          <p className="text-[15px] font-medium leading-2 w-full">{desc}</p>
        </div>
      ))}
    </>
  );
};

export default Card;
