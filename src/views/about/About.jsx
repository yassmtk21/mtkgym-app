import React from "react";
import Footer from "../Footer";


const About = () => {
  return (
    <div>
      <h1 className="text-[1.2rem] font-bold">About Us</h1>
      <div className="grid grid-rows-3 place-items-center">
        <div className="grid grid-cols-1 w-[70%] place-items-center">
          <h1 className="text-[1.6rem] font-bold mb-4">WHO WE ARE</h1>
          <div>
            <p className="text-center text-[#646473] font-medium">
              Welcome to <span className="font-bold">MtkGym</span>, where
              fitness meets community! At
              <span className="font-bold"> MtkGym</span>, we are passionate
              about helping individuals of all fitness levels embark on a
              journey toward a healthier, happier lifestyle. Established in
              2010, our gym is more than just a place to work out; it's a
              supportive and motivating environment that fosters personal growth
              and wellness.
            </p>
          </div>
        </div>
        <div className="md:w-[80%] sm:grid sm:grid-cols-2 flex flex-col shadow-2xl">
          <div className="w-full py-3 px-5 flex flex-col items-center justify-center text-center">
            <h1 className="text-[1.6rem] font-bold mb-4">Our Mission</h1>
            <p className="text-center text-[#646473] font-medium">
              Our mission at <span className="font-bold">MtkGym</span> is to
              inspire and empower individuals to reach their full potential
              through fitness
            </p>
          </div>
          <div className="">
            <img
              src={require("./images/image18.jpg")}
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="md:w-[80%] sm:grid sm:grid-cols-2 flex flex-col shadow-2xl">
          <div>
            <img
              src={require("./images/image17.jpg")}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="py-3 px-5 flex flex-col items-center justify-center text-center">
            <h1 className="text-[1.6rem] font-bold mb-4">Expert Trainers</h1>
            <p className="text-center text-[#646473] font-medium">
              At <span className="font-bold">MtkGym</span>, we take pride in our
              team of certified and experienced trainers. They are committed to
              providing personalized guidance and creating customized workout
              plans to suit your individual needs.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default About;
