"use client";

import React, { useState } from "react";

const WatchLive = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="w-full text-black">
      {/* LOVE TO ALL above Player */}
      <div className="flex justify-center mt-4">
        <div className="bg-white text-center capitalize min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]">
          LOVE TO ALL
        </div>
      </div>

      {/* Player Container */}
      {activeTab === 1 && (
        <div className="flex justify-center mt-4">
          <iframe
            src="https://cinebuzz.netfy.live/crichd/play.php?cricid=willowusa"
            width="90%"
            height="540"
            frameBorder="0"
            allowFullScreen={true}
            className="aspect-video object-fill w-[100%] h-[56.25%] min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]"
          ></iframe>
        </div>
      )}
      {activeTab === 2 && (
        <div className="flex justify-center mt-4">
          <iframe
            src="https://cinebuzz.netfy.live/crichd/play.php?cricid=willowusa"
            width="90%"
            height="540"
            frameBorder="0"
            allowFullScreen={true}
            className="aspect-video object-fill w-[100%] h-[56.25%] min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]"
          ></iframe>
        </div>
      )}
      {activeTab === 3 && (
        <div className="flex justify-center mt-4">
          <iframe
            src="https://cinebuzz.netfy.live/crichd/play.php?cricid=willowusa"
            width="90%"
            height="540"
            frameBorder="0"
            allowFullScreen={true}
            className="aspect-video object-fill w-[100%] h-[56.25%] min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]"
          ></iframe>
        </div>
      )}

      {/* Bookmark It and BPL Link below Player */}
      <div className="flex justify-center mt-4">
        <div className="bg-white text-center capitalize min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]">
          Bookmark It👇 to Stay With Us
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-white text-center w-full capitalize min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]">
          <div className="text-xl ">BPL25.NETLIFY.APP</div>
        </div>
      </div>

      {/* Buttons Container */}
      <div className="flex flex-col items-center gap-4 mt-4 sm:mx-[2rem] xl:mx-[8rem]">
        <button
          className={`w-full sm:w-[90%] lg:w-[70%] xl:w-[60%] py-2 text-center border rounded font-bold transition-all duration-300 ${
            activeTab === 1
              ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white"
          }`}
          onClick={() => handleTabClick(1)}
        >
          Star Sports Hindi
        </button>
        <button
          className={`w-full sm:w-[90%] lg:w-[70%] xl:w-[60%] py-2 text-center border rounded font-bold transition-all duration-300 ${
            activeTab === 2
              ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white"
          }`}
          onClick={() => handleTabClick(2)}
        >
          Star Sports English
        </button>
        <button
          className={`w-full sm:w-[90%] lg:w-[70%] xl:w-[60%] py-2 text-center border rounded font-bold transition-all duration-300 ${
            activeTab === 3
              ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white"
          }`}
          onClick={() => handleTabClick(3)}
        >
          A Sports HD
        </button>
      </div>
    </div>
  );
};

export default WatchLive;
