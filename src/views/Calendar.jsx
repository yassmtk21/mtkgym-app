import React, { useContext, useState } from "react";
import { ActionContext } from "../components/context/ActionContext";
import Footer from "./Footer";

const weeklySchedule = [
  {
    day: "Monday",
    sessions: [
      { sport: "Fitness", coach: "Coach A", time: "10:00 AM" },
      { sport: "Body Building", coach: "Coach B", time: "3:00 PM" },
      { sport: "Fitness", coach: "Coach A", time: "5:00 AM" },
      { sport: "Body Building", coach: "Coach B", time: "9:00 PM" },
    ],
  },
  {
    day: "Tuesday",
    sessions: [
      { sport: "Running", coach: "Coach C", time: "2:00 PM" },
      { sport: "Body Building", coach: "Coach B", time: "7:00 PM" },
      { sport: "Fitness", coach: "Coach B", time: "7:00 PM" },
    ],
  },
  {
    day: "Wednesday",
    sessions: [
      { sport: "Cycling", coach: "Coach D", time: "4:30 AM" },
      { sport: "Fitness", coach: "Coach F", time: "4:30 PM" },
      { sport: "Running", coach: "Coach D", time: "6:30 PM" },
      { sport: "Body Building", coach: "Coach C", time: "4:30 PM" },
    ],
  },
  {
    day: "Thursday",
    sessions: [
      { sport: "Cycling", coach: "Coach E", time: "10:00 AM" },
      { sport: "Body Building", coach: "Coach F", time: "6:00 PM" },
      { sport: "Cycling", coach: "Coach E", time: "9:00 AM" },
      { sport: "Body Building", coach: "Coach F", time: "11:00 PM" },
    ],
  },
  {
    day: "Friday",
    sessions: [
      { sport: "Body Building", coach: "Coach G", time: "1:00 PM" },
      { sport: "Fitness", coach: "Coach F", time: "4:00 PM" },
      { sport: "Cycling", coach: "Coach D", time: "6:00 PM" },
    ],
  },
  {
    day: "Saturday",
    sessions: [
      { sport: "Fitness", coach: "Coach H", time: "11:00 AM" },
      { sport: "Running", coach: "Coach I", time: "2:30 PM" },
      { sport: "Cycling", coach: "Coach F", time: "5:30 PM" },
      { sport: "Running", coach: "Coach C", time: "9:30 PM" },
    ],
  },
  {
    day: "Sunday",
    sessions: [
      { sport: "Running", coach: "Coach E", time: "9:00 AM" },
      { sport: "Body Building", coach: "Coach J", time: "12:00 PM" },
      { sport: "Cycling", coach: "Coach A", time: "2:00 PM" },
    ],
  },
];

const Calendar = () => {
  const { state } = useContext(ActionContext);
  const dark = state.isDark;
  const style = dark ? "text-dark" : "text-white";
  const [nameDay, setNameDay] = useState("Monday");
  const ChangeValue = (e) => {
    setNameDay(e.target.value);
  };
  const dataList = weeklySchedule.filter((e) => e.day.includes(nameDay));

  return (
    <>
      <h1 className="text-[1.1rem] font-bold">Scheduler</h1>
      <div className="flex flex-col justify-center items-center w-full p-4">
        <div className="w-full flex-wrap flex gap-4 items-center justify-center md:flex-wrap sm:flex-wrap">
          {/* <h1 className="text-white">November 2023</h1> */}
          {weeklySchedule.map((d, index) => (
            <div key={index}>
              <button
                value={d.day}
                onClick={ChangeValue}
                className={`border-solid border border-[#6D6D6D] font-bold rounded-r-full rounded-l-full px-5 py-2 hover:bg-[#08A8CC] hover:text-white duration-300 ${
                  nameDay === d.day ? "bg-[#08A8CC] text-white" : ""
                }`}
              >
                {d.day}
              </button>
            </div>
          ))}
        </div>
        <div className="px-2 w-[90%] mt-20">
          {dataList.map((day, index) => (
            <div className="flex flex-col" key={index}>
              {day.sessions.map(({ sport, coach, time }, index) => (
                <ul
                  key={index}
                  className={`${
                    dark ? "bg-[#f5f5f5]" : "bg-[#1D1D1D]"
                  } flex flex-col items-center md:text-left text-center gap-4 mb-2 md:flex-row md:justify-between md:items-center px-[55px] py-[25px] shadow-[0px_1px_1px_0px] shadow-gray-500 `}
                >
                  <li className="w-1/3">
                    <p className="text-[#A0A0A0] font-bold">Sport</p>
                    <p className={`${style} font-bold text-[1.2rem]`}>
                      {sport}
                    </p>
                  </li>
                  <li className="w-1/3 md:text-center">
                    <p className="text-[#A0A0A0] font-bold">trainer</p>
                    <p className={`${style} font-bold text-[1.2rem]`}>
                      {coach}
                    </p>
                  </li>
                  <li className="w-1/3 md:text-center">
                    <p className="text-[#A0A0A0] font-bold">time</p>
                    <p className={`${style} font-bold text-[1.2rem]`}>{time}</p>
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Calendar;
