import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Wallpaper from "../assets/wallpaper-01.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-5xl font-bold text-indigo-300 shadow-lg mt-8">
          Zafar Baig
        </h1>
        <h2 className="mt-2	margin-top: 1.5rem; text-1xl sm:text-2xl font-bold text-teal-200 shadow-lg shadow-[#54749b] p-4">
          Full Stack Developer
        </h2>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-8 flex items-center hover:bg-emerald-600 hover:border-emerald-600">
            Down Please
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
