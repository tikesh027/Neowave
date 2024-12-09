import React from "react";
import Navigation from "./landingPage/navigation";
import SideBar from "./landingPage/sideBar";
import MiddleSection from "./landingPage/middleSection";
import Player from "./landingPage/player";

const HomePage = () => {
  return (
    <div className="flex flex-col h-[100vh] bg-gradient-to-b from-[#5a5a66] via-[#5a5a66] to-[#2a2b2e] text-white">
      <div className="h-[7.5%]">
        <Navigation />
      </div>
      <div className="flex w-full h-[85%]">
        <div className="w-[20%] bg-slate-500 m-2 rounded-[10px] p-4">
          <SideBar />
        </div>
        <div className="w-[80%] bg-blue-400 mr-2 my-2 rounded-[10px] p-4">
          <MiddleSection />
        </div>
      </div>
      <div className="h-[7.5%]">
        <Player />
      </div>
    </div>
  );
};

export default HomePage;
