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
        <div className="flex justify-center mt-0">
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
        <div className="flex justify-center mt-0">
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
        <div className="flex justify-center mt-0">
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
      <div className="flex justify-center mt-0">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 px-4">
        {["Star Sports Hindi", "Star Sports English", "A Sports HD"].map(
          (label, index) => (
            <button
              key={index}
              className={`py-3 px-6 font-bold rounded-lg text-lg transition-all duration-300 border shadow-md ${
                activeTab === index + 1
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white scale-105 shadow-lg"
                  : "bg-gray-200 text-gray-800 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white"
              }`}
              onClick={() => handleTabClick(index + 1)}
            >
              {label}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default WatchLive;
