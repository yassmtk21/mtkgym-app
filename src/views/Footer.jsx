import React, { useContext } from "react";
import {
  RiFacebookFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
  RiInstagramFill,
} from "react-icons/ri";
import { ActionContext } from "../components/context/ActionContext";

const Footer = () => {
  const { state } = useContext(ActionContext);
  const SocialMedia = [
    { Icon: RiFacebookFill, label: "facebook" },
    { Icon: RiLinkedinBoxFill, label: "linkedin" },
    { Icon: RiTwitterXFill, label: "twitter" },
    { Icon: RiInstagramFill, label: "instagram" },
  ];
  const Classes = [
    "Fitness Classes",
    "Aerobics Classes",
    "Power Yoga",
    "Learn Machines",
    "Full-body Strength",
  ];
  const WorkHours = [
    {
      days: "Monday-friday",
      Hours: "7:00am- 21:00pm",
    },
    {
      days: "Saturday",
      Hours: "7:00am- 19:00pm",
    },
    {
      days: "Sunday",
      Hours: "7:00am- 17:00pm",
    },
  ];

  return (
    <div className="w-full mt-4 flex flex-col sm:flex-row gap-8 lg:justify-center justify-between sm:items-start items-center text-[#646464]">
      <div className="sm:w-[25%] w-[50%]">
        <h1
          className={`${
            !state.isDark ? "text-white" : "text-black"
          } mb-4 text-[1.1rem] sm:text-[1.3rem] font-bold relative before:content-[""] before:absolute before:w-[10%] before:h-[3px] before:bg-[#3e95ff] before:top-10 before:left-0 before:transition-all before:duration-200 before:ease-in-out hover:before:scale-100 hover:before:w-[40%]`}
        >
          MtkGYM
        </h1>
        <p className="">
          Take your health and body to the next level with our comprehensive
          program designed to help you reach your fitness goals.
        </p>
        <div className="flex gap-2 my-[20px]">
          {SocialMedia.map(({ Icon, label }, i) => (
            <Icon
              key={i}
              title={label}
              className="w-[30px] h-[30px] rounded-full hover:bg-[#FF0366] duration-300 hover:text-white py-1 text-[1.2rem] bg-[#BEBEBE] text-[#555555]"
            />
          ))}
        </div>
        <div>
          <span className="text-[#646464] font-medium block">
            Privacy Policy | © 2023
          </span>
          <span className="text-[#646464]  font-medium block">MTKGym</span>
        </div>
      </div>
      <div className="sm:w-[25%] w-[50%] flex flex-col">
        <h1
          className={`${
            !state.isDark ? "text-white" : "text-black"
          } mb-4 text-[1.1rem] sm:text-[1.3rem] font-bold relative before:content-[""] before:absolute before:w-[10%] before:h-[3px] before:bg-[#3e95ff] before:top-10 before:left-0 before:transition-all before:duration-200 before:ease-in-out hover:before:scale-100 hover:before:w-[40%]`}
        >
          Our Classes
        </h1>
        <div className="flex flex-col gap-3">
          {Classes.map((cls, i) => (
            <span
              key={i}
              className="font-medium hover:text-[#FF0366] cursor-pointer"
            >
              {cls}
            </span>
          ))}
        </div>
      </div>
      <div className="sm:w-[25%] w-[50%] flex flex-col">
        <h1
          className={`${
            !state.isDark ? "text-white" : "text-black"
          } mb-4 text-[1.1rem] sm:text-[1.2rem] md:text-[1.4rem] font-bold relative before:content-[""] before:absolute before:w-[10%] before:h-[3px] before:bg-[#3e95ff] before:top-10 before:left-0 before:transition-all before:duration-200 before:ease-in-out hover:before:scale-100 hover:before:w-[50%]`}
        >
          Working Hours
        </h1>
        {WorkHours.map(({ days, Hours }, i) => (
          <p key={i} className="flex flex-col gap-3">
            <span className="font-bold">{days}: </span>
            <span>{Hours}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Footer;
